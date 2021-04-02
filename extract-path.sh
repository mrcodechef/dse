#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"


if [[ $# -ne 1 ]] ; then
   echo "Usage: $0 <console_output1.txt>"
   exit
fi

origin_slash="$(echo "$ORIGIN_DIR" | sed 's/\//\\\//g')"

cat $1 | grep " at " | grep "CONSOLE" > result-console
cat result-console | awk '{print $6}' | sort -u | sed -e "s/$origin_slash//g" | sed 's/\/cache\///g' | grep -v "\/node_modules\/" | grep -v -e "^undefined$" | grep -v -e "www.googletagmanager.com" | grep -v -e "www.google-analytics.com" | grep -v "\/jquery.js:" | sed -e 's/-DUPLICATE.*:/:/g'  > result-console-unique

#cat $2 | grep " at " | grep "CONSOLE" > out22
#cat out22 | awk '{print $6}' | sort -u | sed -e "s/$origin_slash//g" | sed 's/\/cache\///g'  > out222

cat result-console-unique | cut -d'/' -f1 | grep -v -e '^$' |  sort -u > result-domains
#cat out222 | cut -d'/' -f1 |grep -v -e '^$' | sort -u > out2222

cat result-console-unique

#diff out111 out222 > diff12

#awk -F'/' 'FNR==NR 
#{a[$1]; print $1; printf("First"); next} 
#BEGIN {} {	print $1; printf("Second");
#} END {}' out1111 out222

##diff out111 out222 > diff12
#echo $origin_slash
#cat diff12 |  > diff3



