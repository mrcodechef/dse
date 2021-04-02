#!/bin/bash

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR

if [[ $# -lt 1 ]] || [[ $# -gt 2 ]] ; then
   echo "Usage: $0 <port> (reuse-cache)"
   exit
fi

clear

if [[ "$2" == "" ]]; then
	rm -rf cache/*
	echo "Removing cache/*..."
else
	echo "Reusing cache..."
fi

echo "Removing cache/localhost/*..."
rm cache/localhost -rf

#fuser -k $1/tcp
sleep 0.5

# rm -f esnstrument-browser.js
# ls -1f | grep -Z '^esnstrument-browser.js.tmp*' | xargs rm

# <COMMENT OUT FOR DEBUGGING>
#if [ ! -f esnstrument-browser.js ] || [ esnstrument-browser.js -ot esnstrument.js  ]; then
	echo "Creating esnstrument-browser.js..."
#	rm -f esnstrument-browser*
#cp esnstrument.js esnstrument-browser.js
	node node_modules/browserify/bin/cmd.js esnstrument.js -o esnstrument-browser.js && echo "browserify: 'esnstrument-browser.js' created"
#	node node_modules/browserify/bin/cmd.js esnstrument.js -o esnstrument-browser.js -t [ babelify --presets [ @babel/preset-env ]  && echo "browserify: 'esnstrument-browser.js' created"
#fi

mitmdump --ssl-insecure -p $1 -s proxy2.py --set block_global=false # args="--inlineIID --inlineSource --analysis UniqueLines.js" --ignore-hosts ^localhost
