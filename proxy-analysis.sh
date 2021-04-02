#!/bin/bash

#set -x

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR


if [ $# -ne 5 ] && [ $# -ne 6 ]; then
	echo "Usage: $0 <website> <har inject .js> <browser output file> <proxy cache folder name> <proxy port> (reuse MITM & browser cache)"
	exit
fi

if [ $# -eq 5 ]; then
	echo "Removing the '$4' folder and browser caches..."
	rm -rf $4
	rm -rf $HAR_FILENAME
	rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
	rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache
fi

#rm -f $3

#killall mitmdump 2> /dev/null

#sleep 0.5
#rm -rf cache

mkdir $4 2> /dev/null
touch $4/lock

PROXY_CACHE_FOLDER_NAME=$4 mitmdump --set block_global=false --ssl-insecure -p $5 -s proxy2.py &> out-mitmdump-$3 & #/dev/null &

mitmdump_pid=$!

sleep 3


proto="$(echo $1 | grep :// | sed -e's,^\(.*://\).*,\1,g')"


node template.js --init-template=init-template.js --output=init-template-final.js

#if [ $# -eq 2  ]; then
#  node har $1 init-template-final.js $2


if [ "$proto" != "" ]; then 
   node har $1 $2 $5 > $3
	#./har-analyze.sh $1 8182 >  $3
	#node har $1 $2 8182 > out #| tee -a out
else
   node har https://$1 $2 $5 > $3
	#./har-analyze.sh https://$1 8182 > $3
	#node har https://$1 $2 8182 > out # | tee -a out
#./har.sh $1 8181
fi

kill -9 $mitmdump_pid

rm $4/lock

#killall mitmdump 2> /dev/null


