#!/bin/bash

#set -x
symbol_list=(
"screen_width"
"screen_height"
"screen_availWidth"
"screen_availHeight"
"screen_colorDepth"
"screen_pixelDepth"
"navigator_platform"
"document_referrer"
"document_lastModified"
"navigator_userAgent"
"Math_random"
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
1280
360
1600
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
068
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
	temp=$(echo "${user_agent1[${ua1_index}]} $u ${user_agent3[${ua3_index}]}" | sed "s/ /~/g")
	navigator_userAgent+=("$temp")
	index=$((index + 1))
#echo "$temp"
done

for u in "${user_agent[@]}"; do
	ua1_index=$(echo "scale=0; $index % $ua1_length" | bc)
	ua2_index=$(echo "scale=0; $index % $ua2_length" | bc)
	temp=$(echo "$u" | sed "s/ /~/g")
	navigator_userAgent+=("$temp")
echo "$temp"
done


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
""
"none"
)

document_lastModified=(
0
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
)


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


