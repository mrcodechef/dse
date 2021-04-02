#!/bin/bash
  
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

cd $ORIGIN_DIR

node jalangi.js --inlineIID --inlineSource --analysis UniqueLines2.js --outfile $2 $1 

if [[ $# -ge 3  ]]; then
   rm -rf final_jalangi_.js
   touch final_jalangi_.js
   cat Constants.js >> final_jalangi_.js
   cat esnstrument.js >> final_jalangi_.js
   cat iidToLocation.js >> final_jalangi_.js
   cat analysis.js >> final_jalangi_.js
   cat UniqueLines2.js >> final_jalangi_.js
	cat $2 >> final_jalangi_.js
   mv final_jalangi_.js $2
fi

