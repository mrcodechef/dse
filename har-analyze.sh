#!/bin/bash

if [ $# -ne 2 ] && [ $# -ne 1 ]; then
	echo "Usage: $0 <URL> <Proxy Port>"
	exit
fi 

rm -rf $HAR_FILENAME
rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache

node template.js --init-template=init-template.js --output=init-template-final.js

#if [ $# -eq 2  ]; then
#	node har $1 init-template-final.js $2
	node har $1 init-template-final.js $2
#else
#	node har $1 results.har
#fi
