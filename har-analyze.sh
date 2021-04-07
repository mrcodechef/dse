#!/bin/bash

if [ $# -ne 2 ] && [ $# -ne 1 ]; then
	echo "Usage: $0 <URL> (Proxy Port)"
	exit
fi 

rm -rf $HAR_FILENAME
rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache

node template.js --init-template=init-template.js --output=init-template-final.js

echo "console.log('JALANGI_FINAL_COOKIE: ' + document.cookie);" > end-inject.js

if [ "$HEADLESS" == "1"  ]; then
	headless="--headless"
fi

if [ $# -eq 2  ]; then
	proxy="--proxy-address $2"
fi

node har $headless $proxy --url $1 --start-inject-js init-template-final.js --end-inject-js end-inject.js

#if [ $# -eq 2  ]; then
#	node har $1 init-template-final.js $2
#	node har $1 init-template-final.js $2

	
#else
#	node har $1 results.har
#fi
