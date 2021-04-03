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

echo
echo "$(find "$RESULT_FOLDER" -maxdepth 2 -mindepth 2 -not -empty -exec sh -c "ls {} | grep 'symbol_assignment' | wc -l" \;)" > out-stat2
for (( i = 0; i <= 100 ; i++ )); do
	count=$(cat out-stat2 | grep -E "^$i$" | wc -l)
	if [ $count -ne 0 ]; then
		echo "$i Path(s): $count"
	fi
done

echo
