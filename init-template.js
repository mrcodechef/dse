var init_js_file_contents = `




if (!window.is_head_init)
{
	window.is_head_init = 1;

var screen_width = screen.width
var screen_height = screen.height
var screen_availWidth = screen.availWidth
var screen_availHeight = screen.availHeight
var screen_colorDepth = screen.colorDepth
var screen_pixelDepth = screen.pixelDepth
//var navigator_userAgent = navigator.userAgent
//var navigator_platform = navigator.platform
var navigator_userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36"
//var navigator_userAgent = "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36"
var navigator_platform = "Linux armv7l"
var document_cookie = ""
var document_referrer = document.referrer
var document_lastModified = document.lastModified
var Math_random = Math.random;				//Math.random
var crypto_getRandomValues = 1;	//crypto.getRandomValues
var Date_now = 30000000;			//Date.now

var document_documentElement_offsetWidth = document.documentElement.offsetWidth
var document_documentElement_offsetHeight = document.documentElement.offsetHeight
var document_documentElement_offsetLeft = document.documentElement.offsetLeft
var document_documentElement_offsetTop = document.documentElement.offsetTop
var document_documentElement_scrollWidth = document.documentElement.scrollWidth
var document_documentElement_scrollHeight = document.documentElement.scrollHeight
var document_documentElement_scrollLeft = document.documentElement.scrollLeft
var document_documentElement_scrollTop = document.documentElement.scrollTop
var document_documentElement_clientWidth = document.documentElement.clientWidth
var document_documentElement_clientHeight = document.documentElement.clientHeight
var document_documentElement_clientLeft = document.documentElement.clientLeft
var document_documentElement_clientTop = document.documentElement.clientTop



if (!window.origin_obj_hasOwnProperty)
window.origin_obj_hasOwnProperty = Object.prototype.hasOwnProperty;

if (!window.origin_obj_defineProperty)
window.origin_obj_defineProperty =  Object.defineProperty;

if (!window.origin_obj_getOwnPropertyDescriptor)
window.origin_obj_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

if (!window.origin_obj_toString)
window.origin_obj_toString = Object.prototype.toString;

if (!window.origin_obj_keys)
window.origin_obj_keys = Object.keys;


if (!window.origin_array_includes)
window.origin_array_includes = Array.prototype.includes;

if (!window.origin_array_push)
window.origin_array_push = Array.prototype.push;

if (!window.origin_array_pop)
window.origin_array_pop = Array.prototype.pop;

if (!window.origin_array_slice)
window.origin_array_slice = Array.prototype.slice;

if (!window.origin_array_join)
window.origin_array_join = Array.prototype.join;

if (!window.origin_array_forEach)
window.origin_array_forEach = Array.prototype.forEach

if (!window.origin_array_map)
window.origin_array_map = Array.prototype.map

if (!window.origin_array_concat)
window.origin_array_concat = Array.prototype.concat

if (!window.origin_array_shift)
window.origin_array_shift = Array.prototype.shift

if (!window.origin_array_unshift)
window.origin_array_unshift = Array.prototype.unshift

if (!window.origin_array_isArray)
window.origin_array_isArray = Array.isArray

if (!window.origin_array_reverse)
window.origin_array_reverse = Array.prototype.reverse

if (!window.origin_array_splice)
window.origin_array_splice = Array.prototype.splice

if (!window.origin_array_find)
window.origin_array_find = Array.prototype.find

if (!window.origin_str_split)
window.origin_str_split = String.prototype.split

if (!window.origin_fn_toString)
window.origin_fn_toString = Function.prototype.toString;

if (!window.origin_fn_toString)
window.origin_symbol_toString = Symbol.prototype.toString;


if (!window.origin_str_search)
window.origin_str_search = String.prototype.search;

if (!window.origin_str_includes)
window.origin_str_includes = String.prototype.includes;

if (!window.origin_str_indexOf)
window.origin_str_indexOf = String.prototype.indexOf;


if (!window.origin_str_substring)
window.origin_str_substring = String.prototype.substring;

if (!window.origin_str_replace)
window.origin_str_replace = String.prototype.replace;




if (!window.origin_Date)
   window.origin_Date = Date;

if (!window.origin_Date_now)
   window.origin_Date_now = Date.now;

if (!window.origin_Date_getTime)
   window.origin_Date_getTime = Date.prototype.getTime;

if (!window.origin_Date_setTime)
   window.origin_Date_setTime = Date.prototype.setTime;

if (!window.origin_Date_toGMTString)
   window.origin_Date_toGMTString = Date.prototype.toGMTString;

if (!window.origin_Math)
   window.origin_Math = Math;

if (!window.origin_Math_random)
   window.origin_Math_random = Math.random;

if (!window.origin_crypto)
   window.origin_crypto = crypto

if (!window.origin_crypto_getRandomValues)
   window.origin_crypto_getRandomValues = crypto.getRandomValues

	window.origin_obj_defineProperty(window.screen, 'width', {
		value: screen_width, /*VALUE*/
		writable: false,
		configurable: true
	});

	window.origin_obj_defineProperty(window.screen, 'height', {
		value: screen_height, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(window.screen, 'availWidth', {
		value: screen_availWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(window.screen, 'availHeight', {
		value: screen_availHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(window.screen, 'colorDepth', {
		value: screen_colorDepth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(window.screen, 'pixelDepth', {
		value: screen_pixelDepth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(navigator, 'userAgent', {
		value: navigator_userAgent, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(navigator, 'platform', {
		value: navigator_platform, /*VALUE*/
		writable: false,
		configurable: true
	});

	/*origin_obj_defineProperty(location, 'origin', {
	//   value: 'some_origin', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});*/
	//origin_obj_defineProperty(location, 'host', {
	//   value: 'some_host', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});
	//origin_obj_defineProperty(location, 'href', {
	//   value: 'some_href', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});

	function createCookie(name,value,days) {
		var date = (new window.origin_Date);
		 //if (days && date && window.origin_Date_getTime && window.origin_Date_setTime && window.origin_Date_toGMTString) {
		 if (days) {
			  window.origin_Date_setTime.call(date, window.origin_Date_getTime.call(date)+(days*24*60*60*1000));
			  var expires = "; expires=" + window.origin_Date_toGMTString.call(date);
		 }
		 else var expires = "";
		if (value)
			document.cookie = name + "=" + value + expires + "; path=/";
		else
		 document.cookie = name + "; path=/";
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	var cookies = window.origin_str_split.call(document.cookie, ";");
	for (var i = 0; i < cookies.length; i++)
		if (cookies[i] != '')
		eraseCookie(window.origin_str_split.call(cookies[i], "=")[0]);

	cookies = window.origin_str_split.call(document_cookie, ";");
	for (var i = 0; i < cookies.length; i++)
	{	if (cookies[i] != '')
			createCookie(window.origin_str_split.call(cookies[i], "=")[0], window.origin_str_split.call(cookies[i], "=")[1]);
	}
	window.origin_obj_defineProperty(document, 'referrer', {
		value: document_referrer, /*VALUE*/
		writable: false,
		configurable: true
	});

	window.origin_obj_defineProperty(document, 'lastModified', {
		value: document_lastModified, /*VALUE*/
		writable: false,
		configurable: true
	});

	function GetRandomValue(val)
	{	if (Math_random == Math.random_backup)
			return Math_random(val); /*VALUE*/
		else
			return Math_random;
	}

	function GetRandomArray(arr)
	{
		if (crypto_getRandomValues == crypto.getRandomValues_backup)
		{	return crypto.getRandomValues_backup(arr);
		}
		else
		{	for (var i = 0; i < arr.length; i++)
					arr[i] = 100; /*VALUE*/
			return arr;
		}
	}

	/* Math.random() */
	Math.random_backup = Math.random;
	window.origin_obj_defineProperty(Math, "random", {
		value: GetRandomValue,
		writable: false,
		configurable: false
	});

	/* crypto.getRandomValues() */
	if (window.crypto)
	{  window.crypto.getRandomValues_backup = window.crypto.getRandomValues;
		window.crypto.getRandomValues = GetRandomArray;
	}
	/* msCrypto.getRandomValues() */
	if (window.msCrypto)
	{  window.myCrypto.getRandomValues_backup = window.myCrypto.getRandomValues
		window.msCrypto.getRandomValues = GetRandomArray;
	}

	/* Date */
	var timezone_offset = 300;
	Date2 = class extends Date{};
	//Date2.prototype.getTime_backup = Date2.prototype.getTime;
	Date2.now_backup = Date2.now;
	//Date2.prototype.valueOf_backup = Date2.prototype.valueOf;
	//Date2.prototype.getTimezoneOffset_backup = Date2.prototype.getTimezoneOffset;
	//Date2.prototype.getTime = function () { return Date_now; }
	//Date2.prototype.valueOf = function () { return Date_now; }
	//Date2.prototype.getTimezoneOffset = function () { return timezone_offset; }
	Date2.now = function () {	if (Date_now == Date2.now_backup)
											return Date_now();
										else
											return Date_now;
									}
	Date = function () {
               if (arguments.length == 0 || arguments.length == 1 && (arguments[0] == null || arguments[1] == null))
					{	if (Date_now == Date2.now_backup) // Date_now is not fixed
						{	//console.log("Date Called!!!!!");
							//Error.stackTraceLimit = 1000;
							//console.log(new Error().stack);
							return new Date2();
						}
						else  // Date_now is fixed
							return new Date2(Date_now);
					}
					else if (arguments.length == 1)
						return new Date2(arguments[0], arguments[1]);
					else if (arguments.length == 2)
						return new Date2(arguments[0], arguments[1]);
					else if (arguments.length == 3)
						return new Date2(arguments[0], arguments[1], arguments[2]);
					else if (arguments.length == 4)
						return new Date2(arguments[0], arguments[1], arguments[2], arguments[3]);
					else if (arguments.length == 5)
						return new Date2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
					else if (arguments.length == 6)
						return new Date2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[5]);
					else if (arguments.length == 7)
						return new Date2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[6]);
					else
						return new Date2(Date_now);
				}
	Date.now = function () { return Date2.now.apply(Date2, arguments);}
	Date.parse = function () { return Date2.parse.apply(Date2, arguments);}
	Date.UTC = function () { return Date2.UTC.apply(Date2, arguments);}

	window.origin_obj_defineProperty(document.documentElement, 'offsetWidth', {
		value: document_documentElement_offsetWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'offsetHeight', {
		value: document_documentElement_offsetHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'offsetLeft', {
		value: document_documentElement_offsetLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'offsetTop', {
		value: document_documentElement_offsetTop, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'scrollWidth', {
		value: document_documentElement_scrollWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'scrollHeight', {
		value: document_documentElement_scrollHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'scrollLeft', {
		value: document_documentElement_scrollLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'scrollTop', {
		value: document_documentElement_scrollTop, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'clientWidth', {
		value: document_documentElement_clientWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'clientHeight', {
		value: document_documentElement_clientHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'clientLeft', {
		value: document_documentElement_clientLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.documentElement, 'clientTop', {
		value: document_documentElement_clientTop, /*VALUE*/
		writable: false,
		configurable: true
	});
}

if (document.body && !window.is_body_init)
{

	var document_body_offsetWidth = document.body.offsetWidth
	var document_body_offsetHeight = document.body.offsetHeight
	var document_body_offsetLeft = document.body.offsetLeft
	var document_body_offsetTop = document.body.offsetTop
	var document_body_scrollWidth = document.body.scrollWidth
	var document_body_scrollHeight = document.body.scrollHeight
	var document_body_scrollLeft = document.body.scrollLeft
	var document_body_scrollTop = document.body.scrollTop
	var document_body_clientWidth = document.body.clientWidth
	var document_body_clientHeight = document.body.clientHeight
	var document_body_clientLeft = document.body.clientLeft
	var document_body_clientTop = document.body.clientTop

	window.is_body_init = 1;
	window.origin_obj_defineProperty(document.body, 'offsetWidth', {
		value: document_body_offsetWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'offsetHeight', {
		value: document_body_offsetHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'offsetLeft', {
		value: document_body_offsetLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'offsetTop', {
		value: document_body_offsetTop, /*VALUE*/
		writable: false,
		configurable: true
	});

	window.origin_obj_defineProperty(document.body, 'scrollWidth', {
		value: document_body_scrollWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'scrollHeight', {
		value: document_body_scrollHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'scrollLeft', {
		value: document_body_scrollLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'scrollTop', {
		value: document_body_scrollTop, /*VALUE*/
		writable: false,
		configurable: true
	});

	window.origin_obj_defineProperty(document.body, 'clientWidth', {
		value: document_body_clientWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'clientHeight', {
		value: document_body_clientHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'clientLeft', {
		value: document_body_clientLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	window.origin_obj_defineProperty(document.body, 'clientTop', {
		value: document_body_clientTop, /*VALUE*/
		writable: false,
		configurable: true
	});
console.log("Done");

}

function PrintAll()
{
   if (document && document.body)
   {
      console.log('window.screen.width:', window.screen.width);
      console.log('window.screen.height:', window.screen.height);
      console.log('window.screen.availWidth:', window.screen.availWidth);
      console.log('window.screen.availHeight:', window.screen.availHeight);
      console.log('window.screen.colorDepth:', window.screen.colorDepth);
      console.log('window.screen.pixelDepth:', window.screen.pixelDepth);
      console.log('document.body.offsetWidth:', document.body.offsetWidth);
      console.log('document.body.scrollWidth:', document.body.scrollWidth);
      console.log('document.body.clientWidth:', document.body.clientWidth);
      console.log('document.body.offsetHeight:', document.body.offsetHeight);
      console.log('document.body.scrollHeight:', document.body.scrollHeight);
      console.log('document.body.clientHeight:', document.body.clientHeight);
      console.log('document.body.offsetLeft:', document.body.offsetLeft);
      console.log('document.body.scrollLeft:', document.body.scrollLeft);
      console.log('document.body.clientLeft:', document.body.clientLeft);
      console.log('document.body.offsetTop:', document.body.offsetTop);
      console.log('document.body.scrollTop:', document.body.scrollTop);
      console.log('document.body.clientTop:', document.body.clientTop);
      console.log('document.body.lastModified:', document.lastModified);

      console.log('document.documentElement.offsetWidth:', document.documentElement.offsetWidth);
      console.log('document.documentElement.scrollWidth:', document.documentElement.scrollWidth);
      console.log('document.documentElement.clientWidth:', document.documentElement.clientWidth);
      console.log('document.documentElement.offsetHeight:', document.documentElement.offsetHeight);
      console.log('document.documentElement.scrollHeight:', document.documentElement.scrollHeight);
      console.log('document.documentElement.clientHeight:', document.documentElement.clientHeight);
      console.log('document.documentElement.offsetLeft:', document.documentElement.offsetLeft);
      console.log('document.documentElement.scrollLeft:', document.documentElement.scrollLeft);
      console.log('document.documentElement.clientLeft:', document.documentElement.clientLeft);
      console.log('document.documentElement.offsetTop:', document.documentElement.offsetTop);
      console.log('document.documentElement.scrollTop:', document.documentElement.scrollTop);
      console.log('document.documentElement.clientTop:', document.documentElement.clientTop);

      //console.log('window.performance.timing.navigationStart:', window.performance.timing.navigationStart);
      //console.log('window.performance.timing.fetchStart:', window.performance.timing.fetchStart);
      //console.log('window.performance.timing.connectStart:', window.performance.timing.connectStart);
      //console.log('window.performance.timing.requestStart:', window.performance.timing.requestStart);
      //console.log('window.performance.timing.responseStart:', window.performance.timing.responseStart);
      //console.log('window.performance.timing.domLoading:', window.performance.timing.domLoading);
      //console.log('window.performance.timing.domContentLoadedEventStart:', window.performance.timing.domContentLoadedEventStart);
      //console.log('window.performance.timing.loadEventStart:', window.performance.timing.loadEventStart);
      //console.log('window.performance.timing.loadEventEnd:', window.performance.timing.loadEventEnd);
   }
////   console.log('Date.getTime():', (new Date).getTime());
////   console.log('Date.now():', Date.now());
////   console.log('Date.valueOf():', (new Date).valueOf());
////   console.log('Date.getTimezoneOffset():', (new Date).getTimezoneOffset());
////   console.log('');
   //console.log('window.performance.now():', window.performance.now());
   //console.log('');
   var random_list = new Int8Array(3);
   var random_array = [];
   console.log('Math.random():', Math.random());
   console.log('Math.random(""):', Math.random(""));
   console.log('Math.random("a"):', Math.random("a"));
   console.log('Math.random(10):', Math.random(10));
   console.log('Math.random(10.1):', Math.random(10.1));
   console.log('Math.random(random_list):', Math.random(random_list));
   console.log('Math.random(random_array):', Math.random(random_array));
   if (window.crypto)
   {
      window.crypto.getRandomValues(random_list);
      console.log('window.crypto.getRandomValues(TypedArray):');
      ////console.log(random_list);
   }
   if (window.msCrypto)
   {
      window.msCrypto.getRandomValues(random_list);
      console.log('window.msCrypto.getRandomValues(TypedArray):');
      ////console.log(random_list);
   }
   console.log('');
}
window.PrintAll = PrintAll;
//PrintAll();

`


