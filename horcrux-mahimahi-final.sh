#!/bin/bash

#set -x

################# CONFIGURATION PARAMETERS ##################

SITES_SH=sites-horcrux-mahimahi.sh 
WEBPAGE_TEST_COUNT=2
NGHTTP2_DIR=/root/nghttp2-master
NGHTTP2_PORT=8181
MITMPROXY_PORT=8182
TIME_LIMIT=400   # minutes
#${symbol_list[$1]}

CPU_COUNT=$(grep -c ^processor /proc/cpuinfo)
#CPU_COUNT=$(($(grep -c ^processor /proc/cpuinfo) / 2))
#CPU_COUNT=2
#CPU_COUNT=1



#"crypto_getRandomValues"

symbol_list=(
"Math_random"
"navigator_userAgent"
"navigator_platform"
"document_cookie"
"screen_width"
"screen_height"
"screen_availWidth"
"screen_availHeight"
"screen_colorDepth"
"screen_pixelDepth"
"document_referrer"
"document_lastModified"
"Date_now"
"document_documentElement_offsetWidth"
"document_documentElement_offsetHeight"
"document_documentElement_offsetLeft"
"document_documentElement_offsetTop"
"document_documentElement_scrollWidth"
"document_documentElement_scrollHeight"
"document_documentElement_scrollLeft"
"document_documentElement_scrollTop"
"document_documentElement_clientWidth"
"document_documentElement_clientHeight"
"document_documentElement_clientLeft"
"document_documentElement_clientTop"
"document_body_offsetWidth"
"document_body_offsetHeight"
"document_body_offsetLeft"
"document_body_offsetTop"
"document_body_scrollWidth"
"document_body_scrollHeight"
"document_body_scrollLeft"
"document_body_scrollTop"
"document_body_clientWidth"
"document_body_clientHeight"
"document_body_clientLeft"
"document_body_clientTop"

)


screen_width=(
1920
1366
1440
1536
2560
1680
1280
360
0
)

screen_height=(
1080
7900
864
1440
1050
720
800
640
900
68
0
)


screen_availWidth=(
0
10
100
500
1000
1500
1920
)

screen_availHeight=(
0
10
100
500
1000
1080
)


screen_colorDepth=(
32
24
16
15
8
4
1
0
)

screen_pixelDepth=(
48
32
24
16
15
8
4
1
)

document_cookie=(
"MY_NULL"
"a"
)


user_agent1=(
"Mozilla/5.0"
"Opera/9.80"
"Nokia7610/2.0"
"Inception 1.4"
)

user_agent2=(
"(X11; Ubuntu; Linux x86_64; rv:78.0)" 
"(iPhone; CPU iPhone OS 12_2 like Mac OS X)"
"(Windows NT 10.0; Win64; x64)"
"(Linux; U; Android 4.1.2; de-de; SAMSUNG GT-I8190N/I8190NXXANR6 Build/JZO54K)"
"(X11; Linux i686; rv:45.9)"
"(compatible; Konqueror/4.4; Linux)"
"(X11; GNU/Linux)"
"(SMART-TV; Linux; Tizen 2.4.0)"
"(Linux; Android 9; SM-A102U Build/PPR1.180610.011; wv)"
"(Windows NT 6.1; WOW64; Trident/7.0; rv:11.0)"
"(Windows NT 10.0; WOW64)"
"(Linux; U; Android 6.0.1; zh-CN; F5121 Build/34.0.A.1.247)"
"(X11; Linux x86_64)"
"(Macintosh; Intel Mac OS X 10_11_6)"
"(Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.146.3-Gen4_12000410)"
"(5.0509.0)"
"(X11; CrOS x86_64 13310.93.0)"
"(compatible; ms-office; MSOffice 16)"
"(Linux armv7l)"
"(Linux; Android 5.1.1; KFSUWI)"
"(SMART-TV; Linux; Tizen 2.4.0)"
"(compatible; Konqueror/4.4; Linux)"
"(PLAYSTATION 3 4.81)"
"(Windows; Windows i686)"
"(X11; Linux i686; rv:45.9)"
"(iPhone; CPU iPhone OS 12_2 like Mac OS X)"
"(compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
"(iPod touch; CPU iPhone OS 9_3_5 like Mac OS X)"
"(iPod touch; iPhone OS 4.3.3; en_US)"
"(compatible; Yahoo Link Preview; https://help.yahoo.com/kb/mail/yahoo-link-preview-SLN23615.html)"
"(compatible; spbot/5.0.3; +http://OpenLinkProfiler.org/bot)"
"(compatible; Googlebot/2.1; +http://www.google.com/bot.html)"

)


user_agent3=(
"Gecko/20100101 Firefox/78.0"
"AppleWebKit/605.1.15 (KHTML, like Gecko)"
#"AppleWebkit/538.1"
"Presto/2.12.407 (KHTML, like Gecko)"
"Gecko/20100101 Thunderbird/45.8.0"
"Mobile/15E148 [FBAN/FBIOS;FBDV/iPhone11,8;FBMD/iPhone;FBSN/iOS;FBSV/13.3.1;FBSS/2;FBID/phone;FBLC/en_US;FBOP/5;FBCR/] (KHTML, like Gecko)"
"Version/4.0 Mobile Safari/534.30"
"Konqueror/4.10 (KHTML, like Gecko)"
"Kubuntu"
"PaleMoon/27.1.2 (KHTML, like Gecko)"
"Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134 (KHTML, like Gecko)"
"Mobile/15E148"
"Chromium/73.0.3683.101 Chrome/73.0.3683.101 Safari/537.36 Tesla QtCarBrowser (KHTML, like Gecko)"
"SymbianOS/7.0s Series60/2.1 Profile/MIDP-2.0 Configuration/CLDC-1.0"
"Silk/80.5.3 like Chrome/80.0.3987.162 Safari/537.36 (KHTML, like Gecko)"
"Firefox/11.0 (via ggpht.com GoogleImageProxy)"
"SamsungBrowser/1.1 TV Safari/538.1 (KHTML, like Gecko)"
"Tesla QtCarBrowser Safari/601.1"
"PaleMoon/27.1.2 (KHTML, like Gecko)"
"Tesla QtCarBrowser Safari/601.1"
"Version/12.51 , D50u-D1-UHD/V1.5.16-UHD (Vizio, D50u-D1, Wireless)"
"Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)"
)

user_agent=(
"WeatherReport/1.0.2 CFNetwork/485.13.9 Darwin/11.0.0 (KHTML, like Gecko)"
"Outlook-iOS/709.2226530.prod.iphone (3.24.1) (KHTML, like Gecko)"
"RestSharp/106.5.4.0 (KHTML, like Gecko)"
"Java/1.8.0_121"
"Lavf/57.83.100"
"Roku/DVP-9.10 (519.10E04111A)"
"check_http/v2.2.1 (nagios-plugins 2.2.1)"
)


navigator_userAgent=(
)


ua1_length=$(echo ${#user_agent1[@]})
ua2_length=$(echo ${#user_agent2[@]})
ua3_length=$(echo ${#user_agent3[@]})


index=0
for u in "${user_agent2[@]}"; do
	ua1_index=$(echo "scale=0; $index % $ua1_length" | bc)
	ua2_index=$(echo "scale=0; $index % $ua2_length" | bc)
	temp=$(echo "${user_agent1[${ua1_index}]} $u ${user_agent3[${ua3_index}]}" | sed "s/~/MY_TILDE/g" | sed "s/ /~/g")
	navigator_userAgent+=("$temp")
	index=$((index + 1))
#echo "$temp"
done

for u in "${user_agent[@]}"; do
	ua1_index=$(echo "scale=0; $index % $ua1_length" | bc)
	ua2_index=$(echo "scale=0; $index % $ua2_length" | bc)
	temp=$(echo "$u" | sed "s/~/MY_TILDE/g" | sed "s/ /~/g")
	navigator_userAgent+=("$temp")
#echo "$temp"
done


#temp="$(echo "${user_agent1[0]} ${user_agent2[0]} ${user_agent3[0]}" | sed "s/ /~/g")"
#navigator_userAgent+=("$temp")
#is_first=1
#for u in "${user_agent1[@]}"; do
#	if [[ $is_first -eq 1  ]]; then
#		is_first=0
#		continue
#	fi
#	temp="$(echo "$u ${user_agent2[0]} ${user_agent3[0]}" | sed "s/ /~/g")"
#	navigator_userAgent+=("$temp")
#done
#
#is_first=1
#for u in "${user_agent2[@]}"; do
#	if [[ $is_first -eq 1  ]]; then
#		is_first=0
#		continue
#	fi
#	temp=$(echo "${user_agent2[0]} $u ${user_agent3[0]}" | sed "s/ /~/g")
#	navigator_userAgent+=("$temp")
#done
#
#is_first=1
#for u in "${user_agent3[@]}"; do
#	if [[ $is_first -eq 1  ]]; then
#		is_first=0
#		continue
#	fi
#	temp=$(echo "${user_agent2[0]} ${user_agent3[0]} $u" | sed "s/ /~/g")
#	navigator_userAgent+=("$temp")
#done


navigator_platform=(
"HP-UX"
"Linux i686"
"Linux armv7l"
"Mac68K"
"MacPPC"
"MacIntel"
"SunOS"
"Win16"
"Win32"
"WinCE"
"iPhone"
"iPod"
"iPad"
"Android"
"BlackBerry"
"Opera"
"Answer"
)

document_referrer=(
"MY_NULL"
"none"
)

document_lastModified=(
"11/22/1970 09:26:43"
)

Math_random=(
0
0.001
0.3
0.5
0.8
0.999
)

crypto_getRandomValues=(
)

Date_now=(
0
1605912832950
)

#Date_valueOf=(
#)

#Date_getTime=(
#)

#Date_UTC=(
#)

document_documentElement_offsetWidth=("${screen_availWidth[@]}")

document_documentElement_offsetHeight=("${screen_availHeight[@]}")

document_documentElement_offsetLeft=("${screen_availWidth[@]}")

document_documentElement_offsetTop=("${screen_availHeight[@]}")

document_documentElement_scrollWidth=("${screen_availWidth[@]}")

document_documentElement_scrollHeight=("${screen_availHeight[@]}")

document_documentElement_scrollLeft=("${screen_availWidth[@]}")

document_documentElement_scrollTop=("${screen_availHeight[@]}")

document_documentElement_clientWidth=("${screen_availWidth[@]}")

document_documentElement_clientHeight=("${screen_availHeight[@]}")

document_documentElement_clientLeft=("${screen_availWidth[@]}")

document_documentElement_clientTop=("${screen_availHeight[@]}")

document_body_offsetWidth=("${screen_availWidth[@]}")

document_body_offsetHeight=("${screen_availHeight[@]}")

document_body_offsetLeft=("${screen_availWidth[@]}")

document_body_offsetTop=("${screen_availHeight[@]}")

document_body_scrollWidth=("${screen_availWidth[@]}")

document_body_scrollHeight=("${screen_availHeight[@]}")

document_body_scrollLeft=("${screen_availWidth[@]}")

document_body_scrollTop=("${screen_availHeight[@]}")

document_body_clientWidth=("${screen_availWidth[@]}")

document_body_clientHeight=("${screen_availHeight[@]}")

document_body_clientLeft=("${screen_availWidth[@]}")

document_body_clientTop=("${screen_availHeight[@]}")


# Update an index by position
function arr_set() {
    [[ ! "$1" =~ ^[a-zA-Z_]+[a-zA-Z0-9_]*$ ]] && { echo "Invalid bash variable" 1>&2 ; return 1 ; }
    declare -p "$1" > /dev/null 2>&1
    [[ $? -eq 1 ]] && { echo "Bash variable [${1}] doesn't exist" 1>&2 ; return 1 ; }
    eval ${1}[${2}]=\${3}
}

# Get the array content ${array[@]}
function arr_get() {
    [[ ! "$1" =~ ^[a-zA-Z_]+[a-zA-Z0-9_]*$ ]] && { echo "Invalid bash variable" 1>&2 ; return 1 ; }
    declare -p "$1" > /dev/null 2>&1
    [[ $? -eq 1 ]] && { echo "Bash variable [${1}] doesn't exist" 1>&2 ; return 1 ; }
    eval echo \${${1}[@]}
}

# Get the value stored at a specific index eg. ${array[0]}  
function arr_at() {
    [[ ! "$1" =~ ^[a-zA-Z_]+[a-zA-Z0-9_]*$ ]] && { echo "Invalid bash variable" 1>&2 ; return 1 ; }
    declare -p "$1" > /dev/null 2>&1
    [[ $? -eq 1 ]] && { echo "Bash variable [${1}] doesn't exist" 1>&2 ; return 1 ; }
    [[ ! "$2" =~ ^(0|[-]?[1-9]+[0-9]*)$ ]] && { echo "Array index must be a number" 1>&2 ; return 1 ; }
    local v=$1
    local i=$2
    local max=$(eval echo \${\#${1}[@]})
    # Array has items and index is in range
    if [[ $max -gt 0 && $i -ge 0 && $i -lt $max ]]
    then 
        eval echo \${$v[$i]}
    fi
}

# Get the value stored at a specific index eg. ${array[0]}  
function arr_count() {
    [[ ! "$1" =~ ^[a-zA-Z_]+[a-zA-Z0-9_]*$ ]] && { echo "Invalid bash variable " 1>&2 ; return 1 ; }
    declare -p "$1" > /dev/null 2>&1
    [[ $? -eq 1 ]] && { echo "Bash variable [${1}] doesn't exist" 1>&2 ; return 1 ; }
    local v=${1}
    eval echo \${\#${1}[@]}
}


############################################################

source ${SITES_SH}

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do 
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE"
done
ORIGIN_DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

CHROME_RESULT_DIR=$ORIGIN_DIR



function RecordWebpage() {

	cd $NGHTTP2_DIR
	killall nghttpx 2> /dev/null
	#fuser -k $NGHTTP2_PORT/tcp
	sleep 1
	./run-save.sh &
	cd $CHROME_RESULT_DIR
	rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
	rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache
	rm results.har
	sleep 1
	node har "$finalURL" init-template.js $NGHTTP2_PORT > out	
	killall nghttpx

	mkdir $CHROME_RESULT_DIR/resources 2> /dev/null
	mkdir $CHROME_RESULT_DIR/resources/failed 2> /dev/null
	mkdir $CHROME_RESULT_DIR/resources/$temp 2> /dev/null
	mkdir $CHROME_RESULT_DIR/resources/$temp 2> /dev/null
	
	if test -f "results.har"; then
		mv $NGHTTP2_DIR/src/resources/* $CHROME_RESULT_DIR/resources/$temp 
	else
		mv $NGHTTP2_DIR/src/resources/* $CHROME_RESULT_DIR/resources/failed/$temp 
	fi
	#fuser -k $NGHTTP2_PORT/tcp

}

function ExecutePageload() {

	local website=$1
	local mahimahi_path=$2
	local k=$3
	touch cache$k/lock-pageload
	USER_AGENT="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36" mm-webreplay $mahimahi_path ./proxy-pageload.sh symbol_assign-expose-$input_started_count.js out$k cache$k $MITMPROXY_PORT "reuseCache" &
	input_started_count=$((input_started_count + 1))

}

function ExecuteExpoSE() {
	local k=$1	
	result="$(head -1 pc-list-queue | awk '{print $1}')"
	one_pc="$(head -1 pc-list-queue | awk '{print $2}')"
	if [ "$one_pc" != '' ]; then
		sed -i '1d' pc-list-queue
		#pc_started_count=$((pc_started_count + 1))
		cp expose-init-template.js expose-test-$k.js
		if [ "$result" == "1" ] || [ "$result" == "true" ]; then
			echo ";\nif (!(" >> expose-test-$k.js
		else
			echo ";\nif ((" >> expose-test-$k.js
		fi
		"$one_pc" >> expose-test-$k.js
		echo "))\n S$.assert(0);\n"
		touch cache$k/lock-expose
		./expose-wrap expose-test-$k.js cache$k/lock-expose out-expose-$k &
	fi	
}

function PostExpoSE() {
	local k=$1
	mv out-expose-$k EXPOSE-$pc_finished_count
	mv expose-test-$k.js EXPOSTEST-$pc_finished_count.js
	pc_finished_count=$((pc_finished_count + 1))
	input_json="$(cat out-expose-$k | grep " expose replay " | awk '{print $4}' | cut -c2- \
		| sed 's/.$//' | cut -c2- | sed 's/.$//')"
	if [ "$input_json" != "" ]; then
		cp init-template-final.js symbol_assign-expose-$input_ready_count.js
		for symbol in "${symbol_list[@]}"; do
			temp="$(echo "$input_json" | sed "s/,\"$symbol\":/\nvar $symbol = /g")"
			input_json="$temp"	
		done	
		symbol_declarations="var $input_json"
		
		while read line; do
			symbol="$(echo "$line" | awk '{print $2}')"
			sed -i "s/var $symbol = */$line/g" symbol_assign-expose-$input_ready_count.js
		done <<< "$symbol_declarations"
		input_ready_count=$((input_ready_count + 1))
	fi
}

function PostPageload() {
	local i=$1
	local k=$2
	local j=$(cat cache$k/j)

	local START=$(cat cache$k/begin)
	local END=$(cat cache$k/end)
	local DIFF=$(echo "scale=1; ($END - $START)/1.0" | bc)

	if [ -f cache$k/symbol ]; then
		local finish_symbol="$(cat cache$k/symbol)"
		local finish_value="$(cat cache$k/value)"
		if [[ "$finish_value" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then				
			./extract-path.sh out$k  | sed -E "s|^\/cache[0-9]+\/|$(pwd)|g" > "LOG-$finish_symbol-$finish_value-$i".txt
			if [ $i -eq 0 ]; then
				touch all_symbols.txt
				echo "$finish_symbol = $finish_value" >> all_symbols.txt
			fi
		else
			./extract-path.sh out$k  | sed -E "s|^\/cache[0-9]+\/|$(pwd)|g" > "LOG-$finish_symbol-$j-$i".txt
			if [ $i -eq 0 ]; then
				touch all_symbols.txt
				echo "$finish_symbol = $j = $finish_value" >> all_symbols.txt
			fi
		fi
	else
		./extract-path.sh out$k > "Log-expose-$input_finished_count".txt
		input_finished_count=$((input_finished_count + 1))
	fi

	# Store PC
	outfile=$1
	cat out$k | grep "JALANGI-PC" | awk '{print $3, $6, $9, $11}' > out-new-pc-list # parent_loc, results, loc, pc
	while read line; do
		if [ $(cat pc-list | grep -E "^$line$" | wc -l) -eq 0 ]; then
			echo "$line" >> pc-list
		fi
		results="$(echo "$line" | awk '{print $2}')"
		pc="$(echo "$line" | awk '{print $4}')"
		redundant=$(cat pc-list | awk '{print $4}' | grep -E "^$pc$" | wc -l)
		if [ $redundant -gt 0 ]; then # do not solve redundant PCs
			queue_result="$(cat pc-list-queue | grep "$pc" | awk '{print $1}')"
			if [ "$results" != "$queue_result"  ]; then # both paths are explored, so remove from the solver's queue
				sed -i "~$pc~d" pc-list-queue
			fi
		else
			echo "$line" | awk '{print $2, $4}' >> pc-list-queue
		fi
	done <<< "$(cat out-new-pc-list)"

	rm cache$k/begin cache$k/symbol cache$k/value cache$k/j out$k
}

if [ $# -gt 2 ]; then
	echo "Usage 1: $0"
	echo "Usage 2: $0 <website URL>"
	echo "Usage 3: $0 <Start Common Index> <End Common Index>"
exit
fi

original_website=$1

query_url=$(echo $1 | cut -d'/' -f3 | cut -d':' -f1)


if [ $# -ne 1 ]; then
	query_url=
fi

cd $CHROME_RESULT_DIR



collected=()

mkdir $CHROME_RESULT_DIR/resources 2> /dev/null
mkdir $CHROME_RESULT_DIR/path-results 2> /dev/null

cd $CHROME_RESULT_DIR


count=0

if [ "$(sysctl net.ipv4.ip_forward | awk '{print $3}')" != "1" ]; then
	echo "Running 'sudo sysctl -w net.ipv4.ip_forward=1' for Mahimahi..."
	sudo sysctl -w net.ipv4.ip_forward=1
fi

if [ ! -f esnstrument-browser.js ] || [ esnstrument-browser.js -ot esnstrument.js  ]; then
   echo "Creating esnstrument-browser.js..."
   rm -f esnstrument-browser*
   node node_modules/browserify/bin/cmd.js esnstrument.js -o esnstrument-browser.js && echo "browserify: 'esnstrument-browser.js' created"
   #browserify esnstrument.js -o esnstrument-browser.js -t [ babelify --presets [ @babel/preset-env ]  && echo "browserify: 'esnstrument-browser.js' created"
fi


node template.js --init-template=init-template.js --output=init-template-final.js


rm -rf cache*

for mahimahi_path in ${mahimahi_paths[@]}; do
	website="$(basename ${mahimahi_path})"
	if [ "$mahimahi_path" == "" ]; then
		#echo "No .db file (0), continue..."
		continue
	elif [ $# -eq 2 ] && [ $count -lt $1  ]; then
		count=$((count + 1))
		continue
	elif [ $# -eq 2 ] && [ $count -ge $2 ]; then
		break
	fi
	count=$((count + 1))
	# Get the website URL to visit 

	
	if [ $# -eq 1 ]; then
		 finalURL="$original_website"
	else
		 finalURL="https://$website"
	fi

#echo $website
#echo $mahimahi_path
	echo
	echo "[WEBSITE]: $finalURL"

	
	cd $CHROME_RESULT_DIR
	rm -f $CHROME_RESULT_DIR/LOG-*.txt $CHROME_RESULT_DIR/all_symbols.txt $CHROME_RESULT_DIR/final_symbols.txt out*
	#mkdir $temp 2> /dev/null
	fuser -k $NGHTTP2_PORT/tcp
	killall mitmdump 2> /dev/null
	killall node 2> /dev/null
	killall nghttpx 2> /dev/null

	rm -rf $CHROME_RESULT_DIR/cache*
#	RecordWebpage
#	continue	
	sleep 0.5
   #rm -f $NGHTTP2_DIR/src/resources/*
	if [ ! -d $mahimahi_path ]; then
		echo "Directory $mahimahi_path is missing, skipping..."
#RecordWebpage
		continue
	fi

	delay_avg=0
	cookie_value=

   rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache
   rm -rf $HOME/.cache/chromium/* $HOME/.cache/mesa_shader_cache

	echo "Warming the proxy's cache with instrumented Javascript resources..."
	#for (( i = 0 ; i < $CPU_COUNT; i++ )); do
#		rm -f results.har
	#	echo "CPU[$i]: warmining proxy[$i]'s cache with instrumented Javascript resources..."

	START=$(date +%s.%N)
	USER_AGENT="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36" mm-webreplay $mahimahi_path ./proxy-pageload.sh $website init-template-final.js out0 cache0 $MITMPROXY_PORT "reuseCache"		 #&
		
		#./proxy-pageload.sh $website init-template-final.js out$i cache$i $((MITMPROXY_PORT + 0)) "reuseCache" &
		#node har "$finalURL" init-template-final.js out$i cache$i $MITMPROXY_PORT "reuseCache" > out
		#sleep 1
	#done
	echo "Cache warming complete"
	for (( i = 1 ; i < $CPU_COUNT; i++ )); do
		cp -r cache0 cache$i
	done

	#sleep 1
	#START=$(date +%s.%N)
	#prev_instances=$((CPU_COUNT + 1))
	#while true; do
	#	instances=$(ps -aux | grep mitmdump | grep -v grep | wc -l)
	#	if [ $instances -eq 0 ]; then
	#		echo "Proxy $((CPU_COUNT - instances)) / $CPU_COUNT warming completed"
	#		break 
	#	fi
	#	if [ $prev_instances -ne $instances ]; then
	#		prev_instances=$instances
	#		echo "Proxy $((CPU_COUNT - instances)) / $CPU_COUNT warming completed"
	#	fi
	#	sleep 0.5
	#done	
	#echo "All proxies are warmed"


	END=$(date +%s.%N)
	DIFF=$(echo "scale=1; ($END - $START)/1.0" | bc)
	echo "Delay: ${DIFF} s"

	#isFail=0
	#for (( i = 0 ; i < $CPU_COUNT; i++ )); do
	isLoad=$(cat out0 | grep "Load Time:" | wc -l)
	if [ $isLoad -ne 1 ]; then
		echo "[SKIP] $finalURL : Javascript instrumentation, skipping..."
		continue
	fi
		#isFail=1
#		break
	cat out0 | grep "JALANGI_READ" > outA
	cat outA | awk '{print $4}' | sort -u > outB
	#if [[ $i -ne 0 ]]; then
	#	awk 'NR == FNR { arr[$0]; next } $0 in arr' outB outD > outC
	#	mv outC outD
	#else
	cat outB | sort -u > outD
	#fi
	#done

#	if [ $isFail -eq 1 ]; then
#		echo "[SKIP] $finalURL : Javascript instrumentation, skipping..."
#		continue
#	fi

	#delay_avg="$(echo "scale=1; $DIFF" | bc)"
	cookie_value="$(cat out0 | grep "JALANGI_FINAL_COOKIE" | awk '{$1 = ""; $2=""; $3=""; print $0}' | sed -e 's/^ *//g')"
	

	document_cookie=()
	document_cookie+=("MY_NULL")
	document_cookie+=("a")

#echo "Cookie Value: $cookie_value"
	if [ "$cookie_value" != ""  ]; then
		echo "$cookie_value" > temp2
		processed="$(cat temp2 | sed 's/~/MY_TILDE/g' | sed 's/ /~/g' | tr '\n' ';' | sed "s/\"/'/g" )"

		processed_empty=''
		IFS=';' read -ra ADDR <<< "$processed"
		for i in "${ADDR[@]}"; do
			left_part="$(echo "$i" | cut -d'=' -f1)"
			processed_empty="$processed_empty$left_part=;"
		done

#echo "$processed" | od -t x1
#echo "$processed_empty" | od -t x1
		document_cookie+=("$processed")
		document_cookie+=("$processed_empty")
#echo "Added Cookie: $processed"
#echo "Added Cookie Empty: $processed_empty"
	fi
#exit
#	python3 -m json.tool results.har > temp
#	mv temp results.har
#	echo '[{"browserScripts":[{ "timings":{"rumSpeedIndex":0}}]}]' > temp.json
#	url_count=$(python3 har3.py results.har temp.json | grep Downloaded | awk '{print $3}')


	#delay_avg=$(echo "scale=1; $delay_avg / $WEBPAGE_TEST_COUNT" | bc)
	symbol_instance_count=0
	#for (( i = 0 ; i < $WEBPAGE_TEST_COUNT; i++ )); do
	for symbol in "${symbol_list[@]}"; do
		symbol_original="$(echo "$symbol" | sed 's/_/./g' )"
		if grep -q "$symbol_original" outD; then 
			#if [ $i -eq 0 ]; then
			echo "- Symbol Found: $symbol_original"
			#fi
			ARR="$(eval echo \${${symbol}[@]})"
			arr=($ARR)
			arr_length=$(echo ${#arr[@]})
			symbol_instance_count=$((symbol_instance_count + arr_length))
		#else
		#	echo "[$((i+1))] Symbol Not Found: $symbol_original"
		fi
	done
	#done

	one_pass=$symbol_instance_count
	symbol_instance_count=$((symbol_instance_count * WEBPAGE_TEST_COUNT))
	

	if [ $symbol_instance_count -eq 0 ]; then
		mkdir -p $CHROME_RESULT_DIR/path-results/$mahimahi_path 2> /dev/null
		echo "[NO SYMBOL]: $finalURL"
		continue
	fi 
	echo

	for (( i = 0 ; i < $CPU_COUNT; i++ )); do
#		rm -f results.har
		echo "CPU[$i]: Measuring proxy[$i]'s pageload time..."
		USER_AGENT="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36" mm-webreplay $mahimahi_path ./proxy-pageload.sh $website init-template-final.js out$i cache$i $MITMPROXY_PORT "reuseCache" &
		
		#./proxy-pageload.sh $website init-template-final.js out$i cache$i $((MITMPROXY_PORT + 0)) "reuseCache" &
		#node har "$finalURL" init-template-final.js out$i cache$i $MITMPROXY_PORT "reuseCache" > out
		#sleep 1
	done
	sleep 1
	START=$(date +%s.%N)
	prev_instances=$((CPU_COUNT + 1))
	while true; do
		instances=$(ps -aux | grep mitmdump | grep -v grep | wc -l)
		if [ $instances -eq 0 ]; then
			echo "Proxy $((CPU_COUNT - instances)) / $CPU_COUNT pageload completed"
			break 
		fi
		if [ $prev_instances -ne $instances ]; then
			prev_instances=$instances
			echo "Proxy $((CPU_COUNT - instances)) / $CPU_COUNT pageload completed"
		fi
		sleep 0.5
	done	
	echo "All proxies finished pageload"

	total_loadtime=0
	isFail=0
	for (( i = 0 ; i < $CPU_COUNT; i++ )); do
		loadtime="$(cat out$i | grep "\- Load Time:" | awk '{print $4}')" 
		if [ "$loadtime" == ""  ]; then
			isFail=1
			break
		fi
		echo "CPU[$i] Loadtime: $loadtime seconds"
		total="$(echo "$loadtime + $total_loadtime" | bc)"
		total_loadtime="$total"
      rm cache$i/begin cache$i/end
	done
	if [ $isFail -eq 1 ]; then
		echo "[SKIP] $finalURL: Pageload failed, skipping..."
		continue
	fi
	avg_loadtime="$(echo "scale=1; $total_loadtime / $CPU_COUNT;" | bc)"
	total_test_time=$(echo "scale=0; $avg_loadtime * $symbol_instance_count / $CPU_COUNT / 60" | bc)
	#echo "Expected Test Time: $total_test_time minutes"
	#echo "[WEBSITE EXPECTED MAXIMUM ANALYSIS TIME]: $finalURL --> $(echo "scale = 0; $total_test_time" | bc) minutes (URLs: $url_count)"
	if [[ $(echo "$total_test_time > $TIME_LIMIT" | bc -l) -eq 1 ]]; then
		echo "[SKIP] $finalURL..." # : $total_test_time minutes is too long, skipping..."
		continue
	fi	

	
	echo "[WEBSITE ANALYSIS START]: $finalURL"

	rm -f lock-expose pc-list pc-list-queue input-list input-list-queue
	touch lock-expose pc-list pc-list-queue input-list input-list-queue

	input_ready_count=0
	input_started_count=0
	input_finished_count=0  

	#pc_started_count=0
	pc_finished_count=0

	mkdir -p $CHROME_RESULT_DIR/path-results/$mahimahi_path 2> /dev/null
	total_looked=0
	for (( i = 0 ; i < $WEBPAGE_TEST_COUNT; i++ )); do

		n=0
		m=0
		s=0
		
		for symbol in "${symbol_list[@]}"; do
			symbol_original="$(echo "$symbol" | sed 's/_/./g' )"
			if grep -q "$symbol_original" outD; then 
				:
			else
				continue
			fi
			ARR="$(eval echo \${${symbol}[@]})"
			arr=($ARR)
			j=0
			for v in "${arr[@]}"; do
				total_looked=$((total_looked + 1))
				value=$(echo "$v" | sed 's/~/ /g' | sed 's/MY_TILDE/~/g' | sed 's/MY_NULL//g'  )
				if [[ "$value" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then
					if [ $i -ne 0  ] && [ $(ls LOG-$symbol-$value-*.txt 2> /dev/null | wc -l) -eq 0 ]; then
						j=$((j + 1)) 
						continue
					fi
					sed "s/var ${symbol} =.*/var ${symbol} = $value/g" init-template-final.js > init-template-ready.js 
				else
					if [ $i -ne 0  ] && [ $(ls LOG-$symbol-$j-*.txt 2> /dev/null | wc -l) -eq 0 ]; then
						j=$((j + 1)) 
						continue
					fi
					temp=$(echo "$value" | sed 's/"/\\"/g')
					value="$temp"
					sed "s~var ${symbol} =.*~var ${symbol} = \"$value\"~g" init-template-final.js > init-template-ready.js 
				fi
					#rm -rf ~/.config/chromium/Default ~/.config/chromium/ShaderCache

				k=0
				while true; do
					if [ ! -f cache$k/lock-pageload ]; then
						if [ -f cache$k/begin  ]; then
							PostPageload $i $k
							m=$((m + 1))
						fi
						echo "$symbol" > cache$k/symbol
						echo "$value" > cache$k/value
						echo "$j" > cache$k/j
						n=$((n + 1))
                  echo "Path investigation by CPU[$k]... $((total_looked * 100 / symbol_instance_count)) %"
						#node har "$finalURL" init-template-ready.js $MITMPROXY_PORT > out
						touch cache$k/lock-pageload
						USER_AGENT="Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36" mm-webreplay $mahimahi_path ./proxy-pageload.sh $website init-template-ready.js out$k cache$k 8182 "reuseCache" &
						#sleep 2
						break
					fi
					k=$((k + 1))
					if [ $k == $CPU_COUNT ]; then
						k=0
					fi
					sleep 0.5
					continue	
				done
				j=$((j + 1)) 
			done	
			s=$((s + 1)) 
		done
		k=0
		while true; do
			if [ ! -f cache$k/begin  ] && [ ! -f cache$k/lock-pageload  ]; then
				k=$((k + 1))
				if [ $k -eq $CPU_COUNT ]; then
					break
				fi
				continue
			fi
			if [ -f cache$k/begin  ] && [ ! -f cache$k/lock-pageload  ]; then
				PostPageload $i $k
				m=$((m + 1))
				k=$((k + 1))
			fi			
			if [ $k -eq $CPU_COUNT ]; then
				break
			fi
			sleep 0.5
		done
		md5sum LOG-*.txt | sort | awk 'BEGIN{lasthash = ""} $1 == lasthash {print $2} {lasthash = $1}' | xargs rm -f
	done

	for symbol in "${symbol_list[@]}"; do
		symbol_original="$(echo "$symbol" | sed 's/_/./g' )"
		if grep -q "$symbol_original" outD; then
			: 
		else
			continue
		fi

		ARR="$(eval echo \${${symbol}[@]})"
		arr=($ARR)
		j=0
		for v in "${arr[@]}"; do
			if [[ "$v" =~ ^[0-9]+(\.[0-9]+)?$ ]]; then				
				value=$v
			else
				value=$j
			fi

			rm -f cumulated.txt
			if [ -f LOG-$symbol-$value-0.txt ]; then 
				cp "LOG-$symbol-$value-0.txt" cumulated.txt
				for (( i = 1 ; i < $WEBPAGE_TEST_COUNT; i++ )); do
					if [ -f LOG-$symbol-$value-$i.txt ]; then 
						if [ ! -f cumulated.txt ]; then
							cp "LOG-$symbol-$value-$i.txt" > cumulated.txt
						else
							awk 'NR == FNR { arr[$0]; next } $0 in arr' cumulated.txt "LOG-$symbol-$value-$i.txt" > temp
							cat temp > cumulated.txt
						fi
					fi
				done
				if [ -f cumulated.txt ]; then
					mv cumulated.txt "LOG-$symbol-$value.txt"
				fi
			fi
			rm -f LOG-$symbol-$value-*.txt
			j=$((j + 1))
		done
	done
	md5sum LOG-*.txt | sort | awk 'BEGIN{lasthash = ""} $1 == lasthash {print $2} {lasthash = $1}' | xargs rm -f
	touch final_symbols.txt
	sleep 0.1
	for filename in LOG-*.txt; do
		extract=$(echo "$filename" | sed "s/LOG-//g" | sed "s/.txt//g" | sed "s/-/ = /g"  )
		if [ "$(cat all_symbols.txt | grep "$extract ")" != "" ]; then
			cat all_symbols.txt | grep "$extract " | sed -e "s/= .* = /= \"/g" | sed 's/_/./g' | sed -e "s/$/\"/g" >> final_symbols.txt
		else
			cat all_symbols.txt | grep -E "$extract$" | sed 's/_/./g' >> final_symbols.txt
		fi
	done

	path_count=$(ls LOG-*.txt | wc -l)


   symbols="$(cat final_symbols.txt)"
   i=0
   while read symbol_value; do
      symbol="$(echo "$symbol_value" | awk -F'=' '{print $1}')"
      replaced_symbol="$(echo "$symbol" | sed 's/\./_/g' | sed 's/ //g')"
      replaced_symbol_value="$(echo "$symbol_value" | sed "s/$symbol/$replaced_symbol/g" | sed 's/\//\\\//g' )"

      #sed "s/var ${replaced_symbol} =.*/var ${replaced_symbol_value}/g" init-template.js > "$folder/symbol_assignment_$replaced_symbol-$i.js"
      sed "s/var ${replaced_symbol} =.*/var ${replaced_symbol_value}/g" init-template.js > "symbol_assignment-$i.js"
      i=$((i + 1))
   done <<< "$symbols"

	k=0
	while true; do
		if [ ! -f cache$k/lock-pageload  ] && [ ! -f cache$k/lock-expose ]; then # CPU is running pageload
			if [ -f out$k ]; then	# finished pageload, enqueue to pc-list-queue
				PostPageload "unused", $k 
			elif [ -f out-expose-$k ]; then	# finished ExpoSE, create symbol_assign-expose-*.js increase & input_ready_count
				PostExpoSE $k	
			fi
			if [ $input_ready_count -ne $input_started_count ]; then
				ExecutePageload $website, $mahimahi_path, $k # increase input_started_count 
			elif [ $(cat pc-list-queue | wc -l) -ne 0 ]; then
				ExecuteExpoSE $k # dequeue pc-list-queue, increase pc_started_count
			fi
			# all CPUs idle, pc-list-queue is empty, input_ready_count -eq input_started_count
			if [ $(ls cache*/lock-expose 2> /dev/null | wc -l) -eq 0 ] && [ $(ls cache*/lock-pageload 2> /dev/null | wc -l) -eq 0 ] && [ $(cat pc-list-queue | wc -l) -eq 0 ]  && [ $input_ready_count -eq $input_started_count ]; then
				break	
			fi
		fi
		k=$((k + 1))
		if [ $k -eq $CPU_COUNT ]; then
			k=0
		fi
		sleep 0.5
	done

	echo
   echo "- Found Paths: $path_count"
   echo
   rm -rf $CHROME_RESULT_DIR/path-results/$mahimahi_path/*
   mv LOG-*.txt all_symbols.txt final_symbols.txt symbol_assignment-*.js pc-list $CHROME_RESULT_DIR/path-results/$mahimahi_path/

	if [ "$isForced" == "yes" ] && [ $# -ne 0 ] ; then
		break
	fi
done 

