#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR

if [ $# -ne 3 ]; then
	echo "Usage: $0 <test.js> <CPU lock name> <output file>"
	exit
fi

testfile=$1
lock="$2"
outfile=$3

touch $lock

expoSE $testfile > $outfile


rm $lock


