#!/bin/bash
#set -x

WEBPAGE_TEST_COUNT=2
RESULT_FOLDER="path-results"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR

echo "$(find "$RESULT_FOLDER" -maxdepth 3 -mindepth 3 -not -empty -exec sh -c "ls {} | grep 'symbol_assignment' | wc -l" \;)" > out-stat2


sites="$(find "$RESULT_FOLDER" -maxdepth 3 -mindepth 3 -not -empty | cut -d'/' -f2- | sort)"


j=0
while read folder; do
	website="$(basename "$folder")"
	echo "$j : $website"
	j=$((j + 1))
done <<< "$sites"

echo

j=0
while read folder; do
	if [ $# -ne 2 ]; then
		echo
	elif [ $j -ge $1 ] && [ $j -lt $2 ]; then
		echo
	else
		j=$((j + 1))
		continue
	fi
	j=$((j + 1))
   #if [ $(ls "$line" | grep LOG | wc -l) -eq 0 ]; then  
   #  echo "$line"
   #  continue
   #fi
	rm -f out* TEST* cumulated.txt
	rm -f $RESULT_FOLDER/$folder/TEST*
	website="$(basename "$folder")"
	assignment_file_list="$(ls $RESULT_FOLDER/$folder | grep 'symbol_assignment')"
   symbols="$(cat $RESULT_FOLDER/$folder/final_symbols.txt)"

	if [ $(echo "$assignment_file_list" | wc -l) -le 1 ]; then
		echo "[SKIP ONE-PATH WEBSITE]: $website"
		continue
	fi

   echo "[VERIFY WEBSITE]: $website"
	echo "$assignment_file_list"	
	echo
   i=0
   while read assignment_file; do
		echo "Assignment: $assignment_file"

		for (( i = 0; i < $WEBPAGE_TEST_COUNT; i++ )); do
         START=$(date +%s.%N)
			USER_AGENT="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36" mm-webreplay $folder ./startExperiment.sh "$website" "$RESULT_FOLDER/$folder/$assignment_file"
         END=$(date +%s.%N)
         DIFF=$(echo "scale=1; ($END - $START)/1.0" | bc)
         echo "Delay: ${DIFF} s"
         ./extract-path.sh out > out$i
		done
		if [ -f out0 ]; then
			cp "out0" cumulated.txt
		fi	
		for (( i = 1 ; i < $WEBPAGE_TEST_COUNT; i++ )); do
			if [ -f out$i ]; then
				if [ ! -f cumulated.txt ]; then
					cp "out$i" > cumulated.txt
				else
					awk 'NR == FNR { arr[$0]; next } $0 in arr' cumulated.txt "out$i" > temp
					cat temp > cumulated.txt
				fi
			fi
		done
		if [ -f cumulated.txt ]; then
			mv cumulated.txt "TEST-$assignment_file.txt"
		fi
   done <<< "$assignment_file_list"

	ls TEST-* | sort > out-TEST
	ls TEST-* | sort > out-TEST2
	rm out-compared -f
	touch out-compared			

	while read first_file; do
		echo "$first_file" >> out-compared
		while read second_file; do
			if [ "$(cat out-compared | grep "$second_file" | wc -l)" -eq 1 ]; then
				continue
			fi
			result="$(diff "$first_file" "$second_file")"
			if [ "$result" != "" ]; then
				echo "Files Differ: $first_file vs $second_file"
				echo "$result"
				echo
			fi
		done <<< "$(cat out-TEST2)"
	done <<< "$(cat out-TEST)"
	mv TEST-* $RESULT_FOLDER/$folder 
	mkdir $RESULT_FOLDER/$folder/unique 2> /dev/null
	rm -rf $RESULT_FOLDER/$folder/unique/*
	cp $RESULT_FOLDER/$folder/TEST-* $RESULT_FOLDER/$folder/unique
	md5sum $RESULT_FOLDER/$folder/unique/TEST-*.txt | sort | awk 'BEGIN{lasthash = ""} $1 == lasthash {print $2} {lasthash = $1}' | xargs rm -f
	echo "[WEBSITE UNIQUE PATH] $website : $(ls $RESULT_FOLDER/$folder/unique/TEST-*.txt | wc -l)"
done <<< "$sites"



