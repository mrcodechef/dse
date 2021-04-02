#!/bin/bash

RESULT_FOLDER="path-results/mahimahi"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR


find "$RESULT_FOLDER" -name "*assignment*" -exec rm {} \;

echo "Empty: $(echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -empty)" | wc -l)"
echo "Non-Empty: $(echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -not -empty)" | wc -l)"

echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -empty)"

echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -not -empty -exec sh -c "ls {} | grep LOG | wc -l" \;)" > out-stat

max=$(cat out-stat | sort -n | tail -1)

echo

for (( i = 0; i <= $max; i++ )); do
	count=$(cat out-stat | grep -E "^$i$" | wc -l)
	
	if [ $count -ne 0 ]; then
		echo "$i Path(s): $count"
	fi
done

echo

sites="$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -not -empty)"

while read folder; do
	#if [ $(ls "$line" | grep LOG | wc -l) -eq 0 ]; then	
	#	echo "$line"
	#	continue
	#fi

	symbols="$(cat $folder/final_symbols.txt)"
	echo "$folder"
	i=0
	while read symbol_value; do
		symbol="$(echo "$symbol_value" | awk -F'=' '{print $1}')"
		replaced_symbol="$(echo "$symbol" | sed 's/\./_/g' | sed 's/ //g')"
		replaced_symbol_value="$(echo "$symbol_value" | sed "s/$symbol/$replaced_symbol/g" | sed 's/\//\\\//g' )"
	
		#sed "s/var ${replaced_symbol} =.*/var ${replaced_symbol_value}/g" init-template.js > "$folder/symbol_assignment_$replaced_symbol-$i.js"
		sed "s/var ${replaced_symbol} =.*/var ${replaced_symbol_value}/g" symbols_default.js > "$folder/symbol_assignment-$i.js"
		i=$((i + 1))
	done <<< "$symbols"
	log_count=$(ls $folder | grep LOG | wc -l)
	if [ $log_count -ne $i  ]; then
	:
#		echo "Doesn't match for $folder: $log_count vs $i"
		#exit
	fi
done <<< "$sites"

echo
echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -not -empty -exec sh -c "ls {} | grep 'symbol_assignment' | wc -l" \;)" > out-stat2
for (( i = 0; i <= $max; i++ )); do
	count=$(cat out-stat2 | grep -E "^$i$" | wc -l)
	if [ $count -ne 0 ]; then
		echo "$i Path(s): $count"
	fi
done

echo
