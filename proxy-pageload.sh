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

cache_folder=$4
outfile=$3

mkdir $cache_folder 2> /dev/null

touch $cache_folder/lock-pageload

PROXY_CACHE_FOLDER_NAME=$cache_folder mitmdump --set block_global=false --ssl-insecure -p $5 -s proxy.py &> out-mitmdump-$outfile & #/dev/null &

mitmdump_pid=$!

sleep 3


proto="$(echo $1 | grep :// | sed -e's,^\(.*://\).*,\1,g')"


node template.js --init-template=init-template.js --output=$2

echo "console.log('JALANGI_FINAL_COOKIE: ' + document.cookie);" > end-inject.js

#if [ $# -eq 2  ]; then
#  node har $1 init-template-final.js $2

echo "$(date +%s.%N)" > $cache_folder/begin

if [ "$proto" != "" ]; then 
   node har --headless --url $1 --start-inject-js $2 --end-inject-js end-inject.js --proxy-address $5 > $outfile
	#./har-analyze.sh $1 8182 >  $3
	#node har $1 $2 8182 > out #| tee -a out
else
   node har --headless --url https://$1 --start-inject-js $2 --end-inject-js end-inject.js --proxy-address $5 > $outfile
	#./har-analyze.sh https://$1 8182 > $3
	#node har https://$1 $2 8182 > out # | tee -a out
#./har.sh $1 8181
fi

echo "$(date +%s.%N)" > $cache_folder/end

kill -9 $mitmdump_pid

rm $cache_folder/lock-pageload

#killall mitmdump 2> /dev/null


