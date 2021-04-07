#!/bin/bash
#set -x

if [ $# != 1 ] && [ $# != 2 ] &&  [ $# != 3 ] && [ $# != 7 ] && [ $# != 8 ]; then
	echo "Usage 1: $0 <webpage address> (proxy port)"
	echo "Usage 2: $0 <webpage address> (injecting .js file)"
	echo "Usage 3: $0 <webpage address> (injecting .js file) (proxy port)"
	echo "Usage 4: $0 <login page address> <ID> <password> <login textbox tag ID> <password textbox tag ID> <login button ID> <webpage address> (proxy port)"
	echo "Usage 5: $0 <past session cookie json file> <webpage address> (proxy port)"
	exit
fi

HAR_FILENAME="results.har"
#LOADTIME_FILENAME="results.har.loadtime"

rm -rf $HAR_FILENAME
rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache



if [ $# == 1 ]; then
	node har.js --url $1 > /dev/null #2> /dev/null
elif [ $# == 2 ] && [ "${2##*.}" == "js" ]; then	# inject .js file
	node har.js --url $1 --start-inject-js "$2" > /dev/null #2> /dev/null
elif [ $# == 2 ]; then	# inject .js file
	node har.js --url $1 --proxy-address "$2" > /dev/null #2> /dev/null
elif [ $# == 3 ] && [ "${2##*.}" == "js" ]; then   # inject .js file & port
	node har.js --url "$1" --start-inject-js "$2" --proxy-address $3  > /dev/null #2> /dev/null
fi
#	node har.js $1 $HAR_FILENAME $2 > /dev/null
#fi

if [ ! -f $HAR_FILENAME ]; then
	exit 10
fi

python3 -m json.tool $HAR_FILENAME > temp
mv temp $HAR_FILENAME
echo '[{"browserScripts":[{ "timings":{"rumSpeedIndex":0}}]}]' > temp.json

python3 har3.py $HAR_FILENAME temp.json


if [ "$?" == 10 ]; then
	exit 10
fi


