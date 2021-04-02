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
//var navigator_userAgent = "Nokia7610/2.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/78.0"
//var navigator_platform = navigator.platform
var navigator_userAgent = "Nokia7610/2.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/78.0"
//var navigator_userAgent = "Nokia7610/2.0 (Windows NT 10.0; Win64; x64) Gecko/20100101 Firefox/78.0"
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


;function init_js_file() {
  console.log('start init_js_file');
/*
 * Copyright (c) 2014 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// do not remove the following comment
// JALANGI DO NOT INSTRUMENT
if (typeof JALANGI_$ === 'undefined') {
    JALANGI_$ = {};
}

(function (sandbox) {
    if (typeof sandbox.Config !== 'undefined') {
        return;
    }

    var Config = sandbox.Config = {};

    Config.DEBUG = false;
    Config.WARN = false;
    Config.SERIOUS_WARN = false;
// make MAX_BUF_SIZE slightly less than 2^16, to allow over low-level overheads
    Config.MAX_BUF_SIZE = 64000;
    Config.LOG_ALL_READS_AND_BRANCHES = false;

    //**********************************************************
    //  Functions for selective instrumentation of operations
    //**********************************************************
    // In the following functions
    // return true in a function, if you want the ast node (passed as the second argument) to be instrumented
    // ast node gets instrumented if you do not define the corresponding function
    Config.ENABLE_SAMPLING = false;
//    Config.INSTR_INIT = function(name, ast) { return false; };
//    Config.INSTR_READ = function(name, ast) { return false; };
//    Config.INSTR_WRITE = function(name, ast) { return true; };
//    Config.INSTR_GETFIELD = function(offset, ast) { return true; }; // offset is null if the property is computed
//    Config.INSTR_PUTFIELD = function(offset, ast) { return true; }; // offset is null if the property is computed
//    Config.INSTR_BINARY = function(operator, ast) { return true; };
//    Config.INSTR_PROPERTY_BINARY_ASSIGNMENT = function(operator, offset, ast) { return true; }; // a.x += e or a[e1] += e2
//    Config.INSTR_UNARY = function(operator, ast) { return true; };
//    Config.INSTR_LITERAL = function(literal, ast) { return true;}; // literal gets some dummy value if the type is object, function, or array
//    Config.INSTR_CONDITIONAL = function(type, ast) { return true; }; // type could be "&&", "||", "switch", "other"
//    Config.INSTR_TRY_CATCH_ARGUMENTS = function(ast) {return false; }; // wrap function and script bodies with try catch block and use arguments in JALANGI_$.Fe.  DO NOT USE THIS.
//    Config.INSTR_END_EXPRESSION = function(ast) {return true; }; // top-level expression marker
}(JALANGI_$));
/*
 * Copyright (c) 2014 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// do not remove the following comment
// JALANGI DO NOT INSTRUMENT
if (typeof JALANGI_$ === 'undefined') {
    JALANGI_$ = {};
}

//var origin_crypto;
//var origin_crypto_getRandomValues;



origin_number_toString = Number.prototype.toString;

origin_obj_hasOwnProperty = Object.prototype.hasOwnProperty;
origin_obj_defineProperty =  Object.defineProperty;
origin_obj_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
origin_obj_values = Object.values;

if (typeof origin_obj_tostring === 'undefined')
	origin_obj_toString = Object.prototype.toString;

if (typeof origin_obj_tostring_call === 'undefined')
	origin_obj_toString_call = Object.prototype.toString.call;

origin_obj_keys = Object.keys;

origin_array_includes = Array.prototype.includes;
origin_array_push = Array.prototype.push;
origin_array_pop = Array.prototype.pop;
origin_array_slice = Array.prototype.slice;
origin_array_join = Array.prototype.join;
origin_array_forEach = Array.prototype.forEach
origin_array_map = Array.prototype.map
origin_array_concat = Array.prototype.concat
origin_array_shift = Array.prototype.shift
origin_array_unshift = Array.prototype.unshift
origin_array_isArray = Array.isArray
origin_array_reverse = Array.prototype.reverse
origin_array_splice = Array.prototype.splice
origin_array_find = Array.prototype.find

origin_fn_apply = Function.prototype.apply;


if (typeof window !== 'undefined' && typeof window.origin_fn_toString !== 'undefined')
	origin_fn_toString = window.origin_fn_toString;

if (typeof origin_fn_toString_call === 'undefined')
	origin_fn_toString_call = Function.prototype.toString.call;

if (typeof origin_fn_tostring === 'undefined')
	origin_fn_toString = Function.prototype.toString;

if (typeof origin_symbol_tostring === 'undefined')
	origin_symbol_toString = Symbol.prototype.toString;

origin_str_search = String.prototype.search;
origin_str_includes = String.prototype.includes;
origin_str_indexOf = String.prototype.indexOf;
origin_str_split = String.prototype.split;
origin_str_substring = String.prototype.substring;
origin_str_replace = String.prototype.replace;

origin_json_stringify = JSON.stringify;
origin_json_parse = JSON.parse;

origin_regexp_exec = RegExp.prototype.exec;

//console.log("Existing");
console.log(typeof origin_regexp_test);
if (typeof origin_regexp_test === 'undefined')
	origin_regexp_test = RegExp.prototype.test;



origin_console_log = console.log;

	origin_date = Date;
	origin_Date_now = Date.now;
	origin_Date_getTime = Date.prototype.getTime;
	origin_Date_setTime = Date.prototype.setTime;
	origin_Date_toGMTString = Date.prototype.toGMTString;

	origin_Math = Math;
	origin_Math_random = Math.random;

//if (!origin_crypto)
//	origin_crypto = crypto

//if (!origin_crypto_getRandomValues)
//	origin_crypto_getRandomValues = crypto.getRandomValues


safe_print = (function (a)
{
	if (typeof a === 'function')
		origin_console_log(origin_obj_toString.call(a));
	else if (typeof a === 'object')
		origin_console_log(origin_obj_toString.call(a));
	else
		origin_console_log(a);


	/*if (a === 'Function')
    {    origin_console_log("IN");  
			 Error.stackTraceLimit = 1000;
           { var err = new Error(); origin_console_log(err.stack); }
origin_console_log("OUT");  

		}*/
});

//console.log("Hi");
(function (sandbox) {
    if (typeof sandbox.Constants !== 'undefined') {
        return;
    }



    var Constants = sandbox.Constants = {};

    Constants.isBrowser = !(typeof exports !== 'undefined' && this.exports !== exports);

    var APPLY = Constants.APPLY = Function.prototype.apply;
    var CALL = Constants.CALL = Function.prototype.call;
    APPLY.apply = APPLY;
    APPLY.call = CALL;
    CALL.apply = APPLY;
    CALL.call = CALL;

    var HAS_OWN_PROPERTY = Constants.HAS_OWN_PROPERTY = Object.prototype.hasOwnProperty;
    Constants.HAS_OWN_PROPERTY_CALL = Object.prototype.hasOwnProperty.call;




    var PREFIX1 = Constants.JALANGI_VAR = "JALANGI_$";
    Constants.SPECIAL_PROP = "*" + PREFIX1 + "*";
    Constants.SPECIAL_PROP2 = "*" + PREFIX1 + "I*";
    Constants.SPECIAL_PROP3 = "*" + PREFIX1 + "C*";
    Constants.SPECIAL_PROP4 = "*" + PREFIX1 + "W*";
    Constants.SPECIAL_PROP_SID = "*" + PREFIX1 + "SID*";
    Constants.SPECIAL_PROP_IID = "*" + PREFIX1 + "IID*";

    Constants.UNKNOWN = -1;

    //-------------------------------- End constants ---------------------------------

    //-------------------------------------- Constant functions -----------------------------------------------------------

    var HOP = Constants.HOP = function (obj, prop) {
        return (prop + "" === '__proto__') || CALL.call(HAS_OWN_PROPERTY, obj, prop); //Constants.HAS_OWN_PROPERTY_CALL.apply(Constants.HAS_OWN_PROPERTY, [obj, prop]);
    };

    Constants.hasGetterSetter = function (obj, prop, isGetter) {
        if (typeof origin_obj_getOwnPropertyDescriptor !== 'function') {
            return true;
        }
        while (obj !== null) {
            if (typeof obj !== 'object' && typeof obj !== 'function') {
                return false;
            }
            var desc = origin_obj_getOwnPropertyDescriptor(obj, prop);
            if (desc !== undefined) {
                if (isGetter && typeof desc.get === 'function') {
                    return true;
                }
                if (!isGetter && typeof desc.set === 'function') {
                    return true;
                }
            } else if (HOP(obj, prop)) {
                return false;
            }
            obj = obj.__proto__;
        }
        return false;
    };

    Constants.debugPrint = function (s) {
        if (sandbox.Config.DEBUG) {
            console.log("***" + s);
        }
    };

    Constants.warnPrint = function (iid, s) {
        if (sandbox.Config.WARN && iid !== 0) {
            console.log("        at " + iid + " " + s);
        }
    };

    Constants.seriousWarnPrint = function (iid, s) {
        if (sandbox.Config.SERIOUS_WARN && iid !== 0) {
            console.log("        at " + iid + " Serious " + s);
        }
    };

})(JALANGI_$);

/*
 * Copyright 2013 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen
// Author: Manu Sridharan

/*jslint node: true */
/*global window */

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

if (typeof JALANGI_$ === 'undefined') {
    JALANGI_$ = {};
}

(function (sandbox) {
    var astUtil = sandbox.astUtil;
    if (typeof astUtil !== 'undefined') {
        return;
    } else {
        astUtil = sandbox.astUtil = {};
    }

    var Constants = sandbox.Constants;
    var HOP = Constants.HOP;
    var JALANGI_VAR = Constants.JALANGI_VAR;

    /**
     * information on surrounding AST context, to be used by visitors passed
     * to transformAst()
     */
    var CONTEXT = {
        // TODO what is this?
        RHS:1,
        // TODO what is this?
        IGNORE:2,
        // inside the properties of an ObjectExpression
        OEXP:3,
        // inside the formal parameters of a FunctionDeclaration or FunctionExpression
        PARAMS:4,
        // TODO what is this?
        OEXP2:5,
        // inside a getter
        GETTER:6,
        // inside a setter
        SETTER:7,

        TYPEOF:8
    };

    /**
     * invoked by transformAst() to see if a sub-ast should be ignored.  For now,
     * only ignoring calls to JALANGI_$.I()
     */
    function ignoreSubAst(node) {
        return node.type === 'CallExpression' && node.callee.type === 'MemberExpression' &&
            node.callee.object.type === 'Identifier' && node.callee.object.name === JALANGI_VAR &&
            node.callee.property.type === 'Identifier' && node.callee.property.name === 'I';
    }

    /**
     * generic AST visitor that allows for AST transformation.
     *
     * @param object the root AST node to be visited
     * @param visitorPost an object defining visitor methods to be executed after a node's children
     * have been visited.  The properties of visitorPost should be named with AST node types, and the
     * property values should be functions that take the node to be visited and a context value (see
     * the CONTEXT object above).  E.g., a post-visitor could be:
     * { 'AssignmentExpression': function (node, context) {
     *      // node.type === 'AssignmentExpression'
     *   }
     * }
     * The value returned by the visitorPost method for a node will replace the node in the AST.
     * @param visitorPre an object defining visitor methods to be executed before a node's children
     * have been visited.  Structure should be similar to visitorPost (see above).  The return value
     * of visitorPre functions is ignored.
     * @param context the context of the surrounding AST; see the CONTEXT object above
     * @param {boolean?} noIgnore if true, no sub-ast will be ignored.  Otherwise, sub-ASTs will be ignored
     * if ignoreAST() returns true.
     */
    function transformAst(object, visitorPost, visitorPre, context, noIgnore) {
        var key, child, type, ret, newContext;

			if ('instrument_skip' in object)
				return object;

        type = object.type;
        if (visitorPre && HOP(visitorPre, type)) {
            visitorPre[type](object, context);
        }

        for (key in object) {
//            if (object.hasOwnPropert y(key)) {
                child = object[key];
                if (typeof child === 'object' && child !== null && key !== "scope" && (noIgnore || !ignoreSubAst(object))) {
                    if ((type === 'AssignmentExpression' && key === 'left') ||
                        (type === 'UpdateExpression' && key === 'argument') ||
                        (type === 'UnaryExpression' && key === 'argument' && object.operator === 'delete') ||
                        (type === 'ForInStatement' && key === 'left') ||
                        ((type === 'FunctionExpression' || type === 'FunctionDeclaration') && key === 'id') ||
                        (type === 'LabeledStatement' && key === 'label') ||
                        (type === 'BreakStatement' && key === 'label') ||
                        (type === 'CatchClause' && key === 'param') ||
                        (type === 'ContinueStatement' && key === 'label') ||
                        ((type === 'CallExpression' || type === 'NewExpression') &&
                            key === 'callee' &&
                            (object.callee.type === 'MemberExpression' ||
                                (object.callee.type === 'Identifier' && object.callee.name === 'eval'))) ||
                        (type === 'VariableDeclarator' && key === 'id') ||
                        (type === 'MemberExpression' && !object.computed && key === 'property')) {
                        newContext = CONTEXT.IGNORE;
                    } else if (type === 'ObjectExpression' && key === 'properties') {
                        newContext = CONTEXT.OEXP;
                    } else if ((type === 'FunctionExpression' || type === 'FunctionDeclaration') && key === 'params') {
                        newContext = CONTEXT.PARAMS;
                    } else if (context === CONTEXT.OEXP) {
                        newContext = CONTEXT.OEXP2;
                    } else if (context === CONTEXT.OEXP2 && key === 'key') {
                        newContext = CONTEXT.IGNORE;
                    } else if (context === CONTEXT.PARAMS) {
                        newContext = CONTEXT.IGNORE;
                    } else if (object.key && key === 'value' && object.kind === 'get') {
                        newContext = CONTEXT.GETTER;
                    } else if (object.key && key === 'value' && object.kind === 'set') {
                        newContext = CONTEXT.SETTER;
                    } else if (type === 'CallExpression' && key === 'callee' && child.type === 'Identifier' && child.name === 'eval') {
                        newContext = CONTEXT.IGNORE;
                    } else if (type === 'UnaryExpression' && key === 'argument' && object.operator === 'typeof' && child.type === 'Identifier') {
                        newContext = CONTEXT.TYPEOF;
                    } else {
                            newContext = CONTEXT.RHS;
                    }
                    if (key !== 'bodyOrig') {
                        object[key] = transformAst(child, visitorPost, visitorPre, newContext, noIgnore);
                    }
                }
//            }
        }

        if (visitorPost && HOP(visitorPost, type)) {
            ret = visitorPost[type](object, context);
        } else {
            ret = object;
        }
        return ret;

    }

    /**
     * computes a map from iids to the corresponding AST nodes for root.  The root AST is destructively updated to
     * include SymbolicReference nodes that reference other nodes by iid, in order to save space in the map.
     */
    function serialize(root) {
        // Stores a pointer to the most-recently encountered node representing a function or a
        // top-level script.  We need this stored pointer since a function expression or declaration
        // has no associated IID, but we'd like to have the ASTs as entries in the table.  Instead,
        // we associate the AST with the IID for the corresponding function-enter or script-enter IID.
        // We don't need a stack here since we only use this pointer at the next function-enter or script-enter,
        // and there cannot be a nested function declaration in-between.
        var parentFunOrScript = root;
        var iidToAstTable = {};

        function handleFun(node) {
            parentFunOrScript = node;
        }

        var visitorPre = {
            'Program':handleFun,
            'FunctionDeclaration':handleFun,
            'FunctionExpression':handleFun
        };

        function canMakeSymbolic(node) {
            if (node.callee.object) {
                var callee = node.callee;
                // we can replace calls to JALANGI_$ functions with a SymbolicReference iff they have an IID as their first
                // argument.  'instrumentCode', 'getConcrete', and 'I' do not take an IID.
                // TODO are we missing other cases?
                if (callee.object.name === 'JALANGI_$' && callee.property.name !== "instrumentCode" &&
                    callee.property.name !== "getConcrete" &&
                    callee.property.name !== "I" && node.arguments[0]) {
                    return true;
                }
            }
            return false;
        }

        function setSerializedAST(iid, ast) {
            var entry = iidToAstTable[iid];
            if (!entry) {
                entry = {};
                iidToAstTable[iid] = entry;
            }
            entry.serializedAST = ast;
        }
        var visitorPost = {
            'CallExpression':function (node) {
                try {
                    if (node.callee.object && node.callee.object.name === 'JALANGI_$' && (node.callee.property.name === 'Se' || node.callee.property.name === 'Fe')) {
                        // associate IID with the AST of the containing function / script
                        setSerializedAST(node.arguments[0].value, parentFunOrScript);
                        return node;
                    } else if (canMakeSymbolic(node)) {
                        setSerializedAST(node.arguments[0].value, node);
                        return {type:"SymbolicReference", value:node.arguments[0].value};
                    }
                    return node;
                } catch (e) {
                    safe_print(origin_json_stringify(node));
                    throw e;
                }
            }
        };

        transformAst(root, visitorPost, visitorPre);
        return iidToAstTable;
    }

    /**
     * given an iidToAstTable constructed by the serialize() function, destructively
     * update the AST values to remove SymbolicReference nodes, replacing them with a
     * pointer to the appropriate actual AST node.
     */
    function deserialize(iidToAstTable) {
        origin_array_forEach.call(origin_obj_keys(iidToAstTable), function (iid) {
            var curAst = iidToAstTable[iid].serializedAST;
            if (curAst) {
                var visitorPost = {
                    'SymbolicReference': function (node) {
                        var targetAST = iidToAstTable[node.value].serializedAST;
                        if (!targetAST) {
                            throw "bad symbolic reference";
                        }
                        return targetAST;
                    }
                };
                transformAst(curAst, visitorPost);
            }
        });
    }

    /**
     * given an instrumented AST, returns an array of IIDs corresponding to "top-level expressions,"
     * i.e., expressions that are not nested within another
     * @param ast
     */
    function computeTopLevelExpressions(ast) {
        var exprDepth = 0;
        var exprDepthStack = [];
        var topLevelExprs = [];
        var visitorIdentifyTopLevelExprPre = {
            "CallExpression":function (node) {
                if (node.callee.type === 'MemberExpression' &&
                    node.callee.object.type === 'Identifier' &&
                    node.callee.object.name === JALANGI_VAR) {
                    var funName = node.callee.property.name;
                    if ((exprDepth === 0 &&
                        (funName === 'A' ||
                            funName === 'P' ||
                            funName === 'G' ||
                            funName === 'R' ||
                            funName === 'W' ||
                            funName === 'H' ||
                            funName === 'T' ||
                            funName === 'Rt' ||
                            funName === 'B' ||
                            funName === 'U' ||
                            funName === 'C' ||
                            funName === 'C1' ||
                            funName === 'C2'
                            )) ||
                        (exprDepth === 1 &&
                            (funName === 'F' ||
                                funName === 'M'))) {
                        origin_array_push.call(topLevelExprs, node.arguments[0].value);
                    }
                    exprDepth++;
                } else if (node.callee.type === 'CallExpression' &&
                    node.callee.callee.type === 'MemberExpression' &&
                    node.callee.callee.object.type === 'Identifier' &&
                    node.callee.callee.object.name === JALANGI_VAR &&
                    (node.callee.callee.property.name === 'F' ||
                        node.callee.callee.property.name === 'M')) {
                    exprDepth++;
                }
            },
            "FunctionExpression":function (node, context) {
                origin_array_push.call(exprDepthStack, exprDepth);
                exprDepth = 0;
            },
            "FunctionDeclaration":function (node) {
                origin_array_push.call(exprDepthStack, exprDepth);
                exprDepth = 0;
            }

        };

        var visitorIdentifyTopLevelExprPost = {
            "CallExpression":function (node) {
                if (node.callee.type === 'MemberExpression' &&
                    node.callee.object.type === 'Identifier' &&
                    node.callee.object.name === JALANGI_VAR) {
                    exprDepth--;
                } else if (node.callee.type === 'CallExpression' &&
                    node.callee.callee.type === 'MemberExpression' &&
                    node.callee.callee.object.type === 'Identifier' &&
                    node.callee.callee.object.name === JALANGI_VAR &&
                    (node.callee.callee.property.name === 'F' ||
                        node.callee.callee.property.name === 'M')) {
                    exprDepth--;
                }
                return node;
            },
            "FunctionExpression":function (node, context) {
                exprDepth = origin_array_pop.call(exprDepthStack.pop);
                return node;
            },
            "FunctionDeclaration":function (node) {
                exprDepth = origin_array_pop.call(exprDepthStack.pop);
                return node;
            }
        };
        transformAst(ast, visitorIdentifyTopLevelExprPost, visitorIdentifyTopLevelExprPre, CONTEXT.RHS);
        return topLevelExprs;
    }

    astUtil.serialize = serialize;
    astUtil.deserialize = deserialize;
    astUtil.JALANGI_VAR = JALANGI_VAR;
    astUtil.CONTEXT = CONTEXT;
    astUtil.transformAst = transformAst;
    astUtil.computeTopLevelExpressions = computeTopLevelExpressions;
})(JALANGI_$);

// exports JALANGI_$.astUtil
// depends on JALANGI_$.Constants
/*
 * Copyright 2013-2014 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen
// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

if (typeof JALANGI_$ === 'undefined') {
    JALANGI_$ = {};
}

(function (sandbox) {
    if (typeof sandbox.iidToLocation !== 'undefined') {
        return;
    }

    sandbox.iidToLine = function (sid, iid) {
        var ret, arr, gid=sid;
        if (sandbox.smap) {
            if (typeof sid === 'string' && origin_str_indexOf.call(sid, ':')>=0) {
                sid = origin_str_split.call(sid, ':');
                iid = parseInt(sid[1]);
                sid = parseInt(sid[0]);
            } else {
                gid = sid+":"+iid;
            }
            if ((ret = sandbox.smap[sid])) {
                var fname = ret.originalCodeFileName;
                if (ret.evalSid !== undefined) {
                    fname = fname+sandbox.iidToLocation(ret.evalSid, ret.evalIid);
                }
                arr = ret[iid];
                if (arr) {
                    if (sandbox.Results) {
                        return "<a href=\"javascript:iidToDisplayCodeLocation('"+gid+"');\">(" + fname + ":" + arr[0] + ":" + arr[1] + ":" + arr[2] + ":" + arr[3] + ")</a>";
                    } else {
                        return fname + ":" + arr[0];
                    }
                } else {
                    return "(" + fname + ":iid" + iid + ")";
                }
            }
        }
        return sid+"";
    };

    sandbox.iidToLocation = function (sid, iid) {
        var ret, arr, gid=sid;
        if (sandbox.smap) {
            if (typeof sid === 'string' && origin_str_indexOf.call(sid, ':')>=0) {
                sid = origin_str_split.call(sid, ':');
                iid = parseInt(sid[1]);
                sid = parseInt(sid[0]);
            } else {
                gid = sid+":"+iid;
            }
            if ((ret = sandbox.smap[sid])) {
                var fname = ret.originalCodeFileName;
                if (ret.evalSid !== undefined) {
                    fname = fname+sandbox.iidToLocation(ret.evalSid, ret.evalIid);
                }
                arr = ret[iid];
                if (arr) {
                    if (sandbox.Results) {
                        return "<a href=\"javascript:iidToDisplayCodeLocation('"+gid+"');\">(" + fname + ":" + arr[0] + ":" + arr[1] + ":" + arr[2] + ":" + arr[3] + ")</a>";
                    } else {
                        return "(" + fname + ":" + arr[0] + ":" + arr[1] + ":" + arr[2] + ":" + arr[3] + ")";
                    }
                } else {
                    return "(" + fname + ":iid" + iid + ")";
                }
            }
        }
        return sid+"";
    };

    sandbox.getGlobalIID = function(iid) {
        return sandbox.sid +":"+iid;
    }

}(JALANGI_$));
/*
 * Copyright 2014 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT


// wrap in anonymous function to create local namespace when in browser
// create / reset JALANGI_$ global variable to hold analysis runtime
if (typeof JALANGI_$ === 'undefined') {
  JALANGI_$ = {};
}

(function (sandbox) {
  if (typeof sandbox.B !== 'undefined') {
    return;
  }
  //----------------------------------- Begin Jalangi Library backend ---------------------------------

  // stack of return values from instrumented functions.
  // we need to keep a stack since a function may return and then
  // have another function call in a finally block (see test
  // call_in_finally.js)

  var global = this;
  var Function = global.Function;
  var returnStack = [];
  var wrappedExceptionVal;
  var lastVal;
  var switchLeft;
  var switchKeyStack = [];
  var argIndex;
  var EVAL_ORG = eval;
  var lastComputedValue;
  var SPECIAL_PROP_SID = sandbox.Constants.SPECIAL_PROP_SID;
  var SPECIAL_PROP_IID = sandbox.Constants.SPECIAL_PROP_IID;

  function getPropSafe(base, prop) {
    if (base === null || base === undefined) {
      return undefined;
    }
    return base[prop];
  }

  function decodeBitPattern(i, len) {
    var ret = new Array(len);
    for (var j = 0; j < len; j++) {
      var val = (i & 1) ? true : false;
      ret[len - j - 1] = val;
      i = i >> 1;
    }
    return ret;
  }

  function createBitPattern() {
    var ret = 0;
    var i;
    for (i = 0; i < arguments.length; i++) {
      ret = (ret << 1) + (arguments[i] ? 1 : 0);
    }
    return ret;
  }


  var sidStack = [], sidCounter = 0;

  function createAndAssignNewSid() {
    origin_array_push.call(sidStack, sandbox.sid);
    sandbox.sid = sidCounter = sidCounter + 1;
    if (!sandbox.smap) sandbox.smap = {};
    sandbox.smap[sandbox.sid] = sandbox.iids;
  }

  function rollBackSid() {
    sandbox.sid = origin_array_pop.call(sidStack);
  }

  function associateSidWithFunction(f, iid) {
    if (typeof f === 'function') {
      if (Object && origin_obj_defineProperty && typeof origin_obj_defineProperty === 'function') {
        origin_obj_defineProperty(f, SPECIAL_PROP_SID, {
          enumerable: false,
          writable: true
        });
        origin_obj_defineProperty(f, SPECIAL_PROP_IID, {
          enumerable: false,
          writable: true
        });
      }
      f[SPECIAL_PROP_SID] = sandbox.sid;
      f[SPECIAL_PROP_IID] = iid;
    }
  }

  function updateSid(f) {
//console.log("Push SID: " + sandbox.sid);
//console.log(f);
    origin_array_push.call(sidStack, sandbox.sid);
    sandbox.sid = getPropSafe(f, SPECIAL_PROP_SID);
//console.log("New SID: " + sandbox.sid);
  }


  // unused
//  function isNative(f) {
//    return origin_str_toString(f).indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0;
//  }

  function callAsNativeConstructorWithEval(Constructor, args) {
    var a = [];
    for (var i = 0; i < args.length; i++)
      a[i] = 'args[' + i + ']';
    var eval = EVAL_ORG;
    return eval('new Constructor(' + origin_array_join.call(a) + ')');
  }

  function callAsNativeConstructor(Constructor, args) {
    if (args.length === 0) {
      return new Constructor();
    }
    if (args.length === 1) {
      return new Constructor(args[0]);
    }
    if (args.length === 2) {
      return new Constructor(args[0], args[1]);
    }
    if (args.length === 3) {
      return new Constructor(args[0], args[1], args[2]);
    }
    if (args.length === 4) {
      return new Constructor(args[0], args[1], args[2], args[3]);
    }
    if (args.length === 5) {
      return new Constructor(args[0], args[1], args[2], args[3], args[4]);
    }
    return callAsNativeConstructorWithEval(Constructor, args);
  }

  function callAsConstructor(Constructor, args) {
    var ret;
    if (true) {
      ret = callAsNativeConstructor(Constructor, args);
      return ret;
    } else { // else branch is a more elegant to call a constructor reflectively, but it leads to memory leak in v8.
      var Temp = function () {
      }, inst;
      Temp.prototype = Constructor.prototype;
      inst = new Temp;
      ret = Constructor.apply(inst, args);
      return Object(ret) === ret ? ret : inst;
    }
  }

  function invokeEval(base, f, args, iid) {
    return f(sandbox.instrumentEvalCode(args[0], iid, false));
  }

  function invokeFunctionDecl(base, f, args, iid) {
    // Invoke with the original parameters to preserve exceptional behavior if input is invalid
    f.apply(base, args);
    // Otherwise input is valid, so instrument and invoke via eval
    var newArgs = [];
    for (var i = 0; i < args.length - 1; i++) {
      newArgs[i] = args[i];
    }
    var code = '(function(' + origin_array_join.call(newArgs, ', ') + ') { ' + args[args.length - 1] + ' })';
    var code = sandbox.instrumentEvalCode(code, iid, false);
    // Using EVAL_ORG instead of eval() is important as it preserves the scoping semantics of Function()
    var out = EVAL_ORG(code);
    return out;
  }

  function callFun(f, base, args, isConstructor, iid, offset, withList) {
    var result;
    pushSwitchKey();

	 var new_base = findWithObjectByName(offset, withList);
		if (new_base)
			base = new_base;

    try {
      if (f === EVAL_ORG) {
        result = invokeEval(base, f, args, iid);
      } else if (f === Function) {
        result = invokeFunctionDecl(base, f, args, iid);
      } else if (isConstructor) {
        result = callAsConstructor(f, args);
      } else {
        /*if (new Error().stack.length > 10000)
        {console.log("Will call function");
        console.log(f);
        console.log(base);
        }*/
//console.log(origin_fn_apply)
        result = origin_fn_apply.call(f, base, args);
        //result = Function.prototype.apply(f, base, args);
      }
      return result;
    } finally {
      popSwitchKey();
    }
  }

  var global_invokeFun_id = 0;

  function invokeFun(iid, base, offset, f, args, isConstructor, isMethod, withList) {
    var aret, skip = false, result;
    var local_invokeFun_id = global_invokeFun_id++;


    if (sandbox.analysis && sandbox.analysis.invokeFunPre) {
      aret = sandbox.analysis.invokeFunPre(iid, f, offset, base, args, isConstructor, isMethod, getPropSafe(f, SPECIAL_PROP_IID), getPropSafe(f, SPECIAL_PROP_SID), local_invokeFun_id);
      if (aret) {
        f = aret.f;
        base = aret.base;
        args = aret.args;
        skip = aret.skip;
      }
    }

    if (!skip) {
      result = callFun(f, base, args, isConstructor, iid, offset, withList);
    }


    if (sandbox.analysis && sandbox.analysis.invokeFun) {
      aret = sandbox.analysis.invokeFun(iid, f, offset, base, args, result, isConstructor, isMethod, getPropSafe(f, SPECIAL_PROP_IID), getPropSafe(f, SPECIAL_PROP_SID), local_invokeFun_id);
      if (aret) {
        result = aret.result;
      }
    }


    return result;
  }

  // Function call (e.g., f())
  function F(iid, f, flags, withList) {
    var bFlags = decodeBitPattern(flags, 1); // [isConstructor]
    return function () {
      var base = this;
      return (lastComputedValue = invokeFun(iid, base, f.name, f, arguments, bFlags[0], false, withList));
    }
  }
  
  // Method call (e.g., e.f())
  function M(iid, base, offset, flags, withList) {
    var bFlags = decodeBitPattern(flags, 2); // [isConstructor, isComputed]
    var f = G(iid + 2, base, offset, createBitPattern(bFlags[1], false, true));
    return function () {
      return (lastComputedValue = invokeFun(iid, base, offset, f, arguments, bFlags[0], true, withList));
    };
  }
  
  // Ignore argument (identity).
  function I(val) {
    return val;
  }
  
  var hasGetOwnPropertyDescriptor = typeof origin_obj_getOwnPropertyDescriptor === 'function';
  
  // object/function/regexp/array Literal
  function T(iid, val, type, hasGetterSetter, internalIid) {
    var aret;
    associateSidWithFunction(val, internalIid);
    if (hasGetterSetter) {
      for (var offset in val) {
        if (hasGetOwnPropertyDescriptor && origin_obj_hasOwnProperty.call(val, offset)) {
          var desc = origin_obj_getOwnPropertyDescriptor(val, offset);
          if (desc !== undefined) {
            if (typeof desc.get === 'function') {
              T(iid, desc.get, 12, false, internalIid);
            }
            if (typeof desc.set === 'function') {
              T(iid, desc.set, 12, false, internalIid);
            }
          }
        }
      }
    }
    if (sandbox.analysis && sandbox.analysis.literal) {
      aret = sandbox.analysis.literal(iid, val, hasGetterSetter);
      if (aret) {
        val = aret.result;
      }
    }
    return (lastComputedValue = val);
  }
  
  // wrap object o in for (x in o) { ... }
  function H(iid, val) {
    var aret;
    if (sandbox.analysis && sandbox.analysis.forinObject) {
      aret = sandbox.analysis.forinObject(iid, val);
      if (aret) {
        val = aret.result;
      }
    }
    return val;
  }

  // variable declaration (Init)
  function N(iid, name, val, flags) {
    var bFlags = decodeBitPattern(flags, 3); // [isArgument, isLocalSync, isCatchParam]
    // isLocalSync is only true when we sync variables inside a for-in loop
    var aret;

    if (bFlags[0]) {
      argIndex++;
    }
    if (!bFlags[1] && sandbox.analysis && sandbox.analysis.declare) {
      if (bFlags[0] && argIndex > 1) {
        aret = sandbox.analysis.declare(iid, name, val, bFlags[0], argIndex - 2, bFlags[2]);
      } else {
        aret = sandbox.analysis.declare(iid, name, val, bFlags[0], -1, bFlags[2]);
      }
      if (aret) {
        val = aret.result;
      }
    }
    return val;
  }

  // getField (property read)
  function G(iid, base, offset, flags) {
    var bFlags = decodeBitPattern(flags, 3); // [isComputed, isOpAssign, isMethodCall]
    if (typeof base === 'undefined' && typeof window != 'undefined' && origin_obj_hasOwnProperty.call(window, offset)) {
      base = window;				// ADD this line, Javascript hack
    }
    var aret, skip = false, val;

    if (sandbox.analysis && sandbox.analysis.getFieldPre) {
      aret = sandbox.analysis.getFieldPre(iid, base, offset, bFlags[0], bFlags[1], bFlags[2]);
      if (aret) {
        base = aret.base;
        offset = aret.offset;
        skip = aret.skip;
      }
    }
    if (!skip) {
      val = base[offset];
    }
    if (sandbox.analysis && sandbox.analysis.getField) {
      aret = sandbox.analysis.getField(iid, base, offset, val, bFlags[0], bFlags[1], bFlags[2]);
      if (aret) {
        val = aret.result;
      }
    }
    return (lastComputedValue = val);
  }

  // putField (property write)
  function P(iid, base, offset, val, flags) {
    var bFlags = decodeBitPattern(flags, 2); // [isComputed, isOpAssign]
    if (typeof base === 'undefined' && typeof window != 'undefined' && origin_obj_hasOwnProperty.call(window, offset)) {
      base = window;				// ADD this line, Javascript hack
    }
    var aret, skip = false;

    if (sandbox.analysis && sandbox.analysis.putFieldPre) {
      aret = sandbox.analysis.putFieldPre(iid, base, offset, val, bFlags[0], !!bFlags[1]);
      if (aret) {
        base = aret.base;
        offset = aret.offset;
        val = aret.val;
        skip = aret.skip;
      }
    }

    if (!skip) {
    //  if (typeof val === 'object' && val instanceof ConcolicValue) {
    //    val = val.getConcrete();
    //  }

      base[offset] = val;
    }
    if (sandbox.analysis && sandbox.analysis.putField) {
      aret = sandbox.analysis.putField(iid, base, offset, val, bFlags[0], !!bFlags[1]);
      if (aret) {
        val = aret.result;
      }
    }
    return (lastComputedValue = val);
  }

   function findWithObjectByName(name, withList)
   {  //return null;
		for (var i = withList.length - 1; i >= 0; i--)
      {
         var obj = withList[i];
         //safe_print(obj);
         if (typeof obj != 'object')
            continue;

         for (var with_offset in obj)

         //if (origin_obj_hasOwnProperty.call(obj, name))
         {  //var desc = origin_obj_getOwnPropertyDescriptor(obj, name);
            //safe_print("descriptor");
            //safe_print(desc);
            //safe_print("descriptor value");
            //safe_print(desc.value);
            if (name === with_offset)
            //if (desc !== undefined)
            {  //safe_print("Base is changed");
               //safe_print(obj);
               return obj;
            }
         }
      }
      return null;
   }


  // variable write
  // isGlobal means that the variable is global and not declared as var
  // isScriptLocal means that the variable is global and is declared as var
  function R(iid, name, val, flags, withList) {
    var aret;
    var bFlags = decodeBitPattern(flags, 2); // [isGlobal, isScriptLocal]

	 var base;
	// = findWithObjectByName(name, withList);

    if (sandbox.analysis && sandbox.analysis.read) {
      aret = sandbox.analysis.read(iid, name, val, bFlags[0], bFlags[1], base);
      // if (typeof window != 'undefined' && val === Date) {
      //     PrintInfo(iid, "endExpression()", line);
      //     console.log("JALANGI_READ " + this.count + ": Date.now (new Date())");
      //     Error.stackTraceLimit = 1000;
      //     { var err = new Error(); console.log(err.stack); }
      // }

      if (aret) {
        val = aret.result;
      }
    }
    return (lastComputedValue = val);
  }

  // variable write
  function W(iid, name, val, lhs, flags, withList) {
    var bFlags = decodeBitPattern(flags, 3); //[isGlobal, isScriptLocal, isDeclaration]
    var aret;

	 var base;
	// = findWithObjectByName(name, withList);

    if (sandbox.analysis && sandbox.analysis.write) {
      aret = sandbox.analysis.write(iid, name, val, lhs, bFlags[0], bFlags[1], base);
      if (aret) {
        val = aret.result;
      }
    }
    if (!bFlags[2]) {
      return (lastComputedValue = val);
    } else {
      lastComputedValue = undefined;
      return val;
    }
  }

  // with statement
  function Wi(iid, val) {
    if (sandbox.analysis && sandbox.analysis._with) {
      aret = sandbox.analysis._with(iid, val);
      if (aret) {
        val = aret.result;
      }
    }
    return val;
  }

  // Uncaught exception
  function Ex(iid, e) {
    wrappedExceptionVal = {exception: e};
  }

  // Throw statement
  function Th(iid, val) {
    var aret;
    if (sandbox.analysis && sandbox.analysis._throw) {
      aret = sandbox.analysis._throw(iid, val);
      if (aret) {
        val = aret.result;
      }
    }
    return (lastComputedValue = val);
  }

  // Return statement
  function Rt(iid, val) {
    var aret;
    if (sandbox.analysis && sandbox.analysis._return) {
      aret = sandbox.analysis._return(iid, val);
      if (aret) {
        val = aret.result;
      }
    }
    origin_array_pop.call(returnStack);
    origin_array_push.call(returnStack, val);
    return (lastComputedValue = val);
  }

  // Actual return from function, invoked from 'finally' block
  // added around every function by instrumentation.  Reads
  // the return value stored by call to Rt()
  function Ra() {
    var returnVal = origin_array_pop.call(returnStack);
    wrappedExceptionVal = undefined;
    return returnVal;
  }

  // Function enter
  function Fe(iid, f, dis /* this */, args) {
    argIndex = 0;
    origin_array_push.call(returnStack, undefined);
    wrappedExceptionVal = undefined;
    updateSid(f);
    if (sandbox.analysis && sandbox.analysis.functionEnter) {
      sandbox.analysis.functionEnter(iid, f, dis, args);
    }
  }

  // Function exit
  function Fr(iid) {
    var isBacktrack = false, tmp, aret, returnVal;

    returnVal = origin_array_pop.call(returnStack);
    if (sandbox.analysis && sandbox.analysis.functionExit) {
      aret = sandbox.analysis.functionExit(iid, returnVal, wrappedExceptionVal);
      if (aret) {
        returnVal = aret.returnVal;
        wrappedExceptionVal = aret.wrappedExceptionVal;
        isBacktrack = aret.isBacktrack;
      }
    }
    rollBackSid();
    if (!isBacktrack) {
      origin_array_push.call(returnStack, returnVal);
    }
    // if there was an uncaught exception, throw it
    // here, to preserve exceptional control flow
    if (wrappedExceptionVal !== undefined) {
      tmp = wrappedExceptionVal.exception;
      wrappedExceptionVal = undefined;
      throw tmp;
    }
    return isBacktrack;
  }

  // Script enter
  function Se(iid, val, origFileName) {
    createAndAssignNewSid();
    if (sandbox.analysis && sandbox.analysis.scriptEnter) {
      sandbox.analysis.scriptEnter(iid, val, origFileName);
    }
    lastComputedValue = undefined;
  }

  // Script exit
  function Sr(iid) {
    var tmp, aret, isBacktrack;
    if (sandbox.analysis && sandbox.analysis.scriptExit) {
      aret = sandbox.analysis.scriptExit(iid, wrappedExceptionVal);
      if (aret) {
        wrappedExceptionVal = aret.wrappedExceptionVal;
        isBacktrack = aret.isBacktrack;
      }
    }
    rollBackSid();
    if (wrappedExceptionVal !== undefined) {
      tmp = wrappedExceptionVal.exception;
      wrappedExceptionVal = undefined;
      throw tmp;
    }
    return isBacktrack;
  }


  // Modify and assign +=, -= ...
  function A(iid, base, offset, op, flags) {
    var bFlags = decodeBitPattern(flags, 1); // [isComputed]
    // avoid iid collision: make sure that iid+2 has the same source map as iid (@todo)
    var oprnd1 = G(iid + 2, base, offset, createBitPattern(bFlags[0], true, false));
    return function (oprnd2) {
      // still possible to get iid collision with a mem operation
      var val = B(iid, op, oprnd1, oprnd2, createBitPattern(false, true, false));
      return P(iid, base, offset, val, createBitPattern(bFlags[0], true));
    };
  }

  // Binary operation
  function B(iid, op, left, right, flags) {
    var bFlags = decodeBitPattern(flags, 3); // [isComputed, isOpAssign, isSwitchCaseComparison]
    var result, aret, skip = false;

    if (sandbox.analysis && sandbox.analysis.binaryPre) {
      aret = sandbox.analysis.binaryPre(iid, op, left, right, bFlags[1], bFlags[2], bFlags[0]);
      if (aret) {
        op = aret.op;
        left = aret.left;
        right = aret.right;
        skip = aret.skip;
      }
    }


    if (!skip) {
      switch (op) {
        case "+":
          result = left + right;
          break;
        case "-":
          result = left - right;
          break;
        case "*":
          result = left * right;
          break;
        case "/":
          result = left / right;
          break;
        case "%":
          result = left % right;
          break;
        case "<<":
          result = left << right;
          break;
        case ">>":
          result = left >> right;
          break;
        case ">>>":
          result = left >>> right;
          break;
        case "<":
          result = left < right;
          break;
        case ">":
          result = left > right;
          break;
        case "<=":
          result = left <= right;
          break;
        case ">=":
          result = left >= right;
          break;
        case "==":
          result = left == right;
          break;
        case "!=":
          result = left != right;
          break;
        case "===":
          result = left === right;
          break;
        case "!==":
          result = left !== right;
          break;
        case "&":
          result = left & right;
          break;
        case "|":
          result = left | right;
          break;
        case "^":
          result = left ^ right;
          break;
        case "delete":
          result = delete left[right];
          break;
        case "instanceof":
          result = left instanceof right;
          break;
        case "in":
          result = left in right;
          break;
        default:
          throw new Error(op + " at " + iid + " not found");
          break;
      }
    }

    if (sandbox.analysis && sandbox.analysis.binary) {
      aret = sandbox.analysis.binary(iid, op, left, right, result, bFlags[1], bFlags[2], bFlags[0]);
      if (aret) {
        result = aret.result;
      }
    }
    return (lastComputedValue = result);
  }


  // Unary operation
  function U(iid, op, left) {
    var result, aret, skip = false;

    if (sandbox.analysis && sandbox.analysis.unaryPre) {
      aret = sandbox.analysis.unaryPre(iid, op, left);
      if (aret) {
        op = aret.op;
        left = aret.left;
        skip = aret.skip
      }
    }

    if (!skip) {
      switch (op) {
        case "+":
          result = +left;
          break;
        case "-":
          result = -left;
          break;
        case "~":
          result = ~left;
          break;
        case "!":
          result = !left;
          break;
        case "typeof":
          result = typeof left;
          break;
        case "void":
          result = void (left);
          break;
        default:
          throw new Error(op + " at " + iid + " not found");
          break;
      }
    }

    if (sandbox.analysis && sandbox.analysis.unary) {
      aret = sandbox.analysis.unary(iid, op, left, result);
      if (aret) {
        result = aret.result;
      }
    }
    return (lastComputedValue = result);
  }

  function pushSwitchKey() {
    origin_array_push.call(switchKeyStack, switchLeft);
  }

  function popSwitchKey() {
    switchLeft = origin_array_pop.call(switchKeyStack);
  }

  function last() {
    return (lastComputedValue = lastVal);
  }

  // Switch key
  // E.g., for 'switch (x) { ... }',
  // C1 is invoked with value of x
  function C1(iid, left) {
    switchLeft = left;
    return (lastComputedValue = left);
  }

  // case label inside switch
  function C2(iid, right) {
    var aret, result;

    // avoid iid collision; iid may not have a map in the sourcemap
    result = B(iid + 1, "===", switchLeft, right, createBitPattern(false, false, true));

    if (sandbox.analysis && sandbox.analysis.conditional) {
      aret = sandbox.analysis.conditional(iid, result);
      if (aret) {
        if (result && !aret.result) {
          right = !right;
        } else if (result && aret.result) {
          right = switchLeft;
        }
      }
    }
    return (lastComputedValue = right);
  }

  // Expression in conditional
  function C(iid, left) {
    var aret;
    if (sandbox.analysis && sandbox.analysis.conditional) {
      aret = sandbox.analysis.conditional(iid, left);
      if (aret) {
        left = aret.result;
      }
    }

    lastVal = left;
    return (lastComputedValue = left);
  }

  function S(iid, f) {
    if (sandbox.analysis && sandbox.analysis.runInstrumentedFunctionBody) {
      return sandbox.analysis.runInstrumentedFunctionBody(iid, f, getPropSafe(f, SPECIAL_PROP_IID), getPropSafe(f, SPECIAL_PROP_SID));
    }
    return true;
  }

  function L() {
    return lastComputedValue;
  }


  function X1(iid, val) {
    if (sandbox.analysis && sandbox.analysis.endExpression) {
      sandbox.analysis.endExpression(iid);
    }

    return (lastComputedValue = val);
  }

  function endExecution() {
    if (sandbox.analysis && sandbox.analysis.endExecution) {
      return sandbox.analysis.endExecution();
    }
  }


  function log(str) {
    if (sandbox.Results && sandbox.Results.execute) {
      sandbox.Results.execute(function (div, jquery, editor) {
        div.append(str + "<br>");
      });
    } else {
      safe_print(str);
    }
  }


  //----------------------------------- End Jalangi Library backend ---------------------------------

  sandbox.U = U; // Unary operation
  sandbox.B = B; // Binary operation
  sandbox.C = C; // Condition
  sandbox.C1 = C1; // Switch key
  sandbox.C2 = C2; // case label C1 === C2
  sandbox._ = last;  // Last value passed to C

  sandbox.H = H; // hash in for-in
  sandbox.I = I; // Ignore argument
  sandbox.G = G; // getField
  sandbox.P = P; // putField
  sandbox.R = R; // Read
  sandbox.W = W; // Write
  sandbox.N = N; // Init
  sandbox.T = T; // object/function/regexp/array Literal
  sandbox.F = F; // Function call
  sandbox.M = M; // Method call
  sandbox.A = A; // Modify and assign +=, -= ...
  sandbox.Fe = Fe; // Function enter
  sandbox.Fr = Fr; // Function return
  sandbox.Se = Se; // Script enter
  sandbox.Sr = Sr; // Script return
  sandbox.Rt = Rt; // returned value
  sandbox.Th = Th; // thrown value
  sandbox.Ra = Ra;
  sandbox.Ex = Ex;
  sandbox.L = L;
  sandbox.X1 = X1; // top level expression
  sandbox.Wi = Wi; // with statement
  sandbox.endExecution = endExecution;

  sandbox.S = S;

  sandbox.EVAL_ORG = EVAL_ORG;
  sandbox.log = log;
})(JALANGI_$);

/*

 * Copyright 2016 Samsung Information Systems America, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Author: Koushik Sen

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/**
 * @file A Jalangi 2 analysis to log all callbacks
 * @author  Koushik Sen
 *
 */

var DEBUG = false;true;//false; //true;
var PRINT_LINE_PERIOD_FACTOR = Infinity;1;0;1;Infinity;//0;1;//1000; 
	// 0: do not print line info
	// 1: print every time, 									
	// 1000: print every 1000th times
	// INFINITY: print only once
var PRINT_STACK_START_DEPTH = 0;0;500;0;500;1000;500;

var JALANGI_READ = true;//false; //true;


/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects */
var no_dom_native_fn_dict = {
  'eval': eval,
  'parseInt': parseInt,
  'parseFloat': parseFloat,
  'escape': escape,
  'unescapse': unescape,
  'encodeURIComponent': encodeURIComponent,
  'encodeURI': encodeURI,
  'decodeURIComponent': decodeURIComponent,
  'decodeURI': decodeURI,
  'isFinite': isFinite,
  'isNaN': isNaN,

  "Array": Array,
  "Array.from": Array.from,
  "Array.isArray": Array.isArray,
  "Array.of": Array.of,
  "Array.prototype.concat": Array.prototype.concat,
  "Array.prototype.copyWithin": Array.prototype.copyWithin,
  "Array.prototype.entries": Array.prototype.entries,
  "Array.prototype.every": Array.prototype.eve,
  "Array.prototype.fill": Array.prototype.fill,
  "Array.prototype.filter": Array.prototype.filter,
  "Array.prototype.find": Array.prototype.find,
  "Array.prototype.findIndex": Array.prototype.findIndex,
  "Array.prototype.forEach": Array.prototype.forEach,
  "Array.prototype.includes": Array.prototype.includes,
  "Array.prototype.indexOf": Array.prototype.indexOf,
  "Array.prototype.join": Array.prototype.join,
  "Array.prototype.keys": Array.prototype.keys,
  "Array.prototype.lastIndexOf": Array.prototype.lastIndexOf,
  "Array.prototype.map": Array.prototype.map,
  "Array.prototype.pop": Array.prototype.pop,
  "Array.prototype.push": Array.prototype.push,
  "Array.prototype.reduce": Array.prototype.reduce,
  "Array.prototype.reduceRight": Array.prototype.reduceRight,
  "Array.prototype.reverse": Array.prototype.reverse,
  "Array.prototype.shift": Array.prototype.shift,
  "Array.prototype.slice": Array.prototype.slice,
  "Array.prototype.some": Array.prototype.some,
  "Array.prototype.sort": Array.prototype.sort,
  "Array.prototype.splice": Array.prototype.splice,
  "Array.prototype.toLocaleString": Array.prototype.toLocaleString,
  "Array.prototype.toString": Array.prototype.toString,
  "Array.prototype.unshift": Array.prototype.unshift,
  "Array.prototype.values": Array.prototype.values,
  "Array.prototype[Symbol.iterator]": Array.prototype[Symbol.iterator],
  'Array.prototype.apply': Array.prototype.apply,
  'Array.prototype.bind': Array.prototype.bind,
  'Array.prototype.call': Array.prototype.call,

  //'AsyncFunction' : (typeof window != 'undefined' ? AsyncFunction : null),

  'ArrayBuffer': ArrayBuffer,
  'ArrayBuffer.isView': ArrayBuffer.isView,
  'ArrayBuffer.prototype.slice': ArrayBuffer.prototype.slice,

  'Atomics': Atomics,
  'Atomics.add': Atomics.add,
  'Atomics.and': Atomics.and,
  'Atomics.compareExchange': Atomics.compareExchange,
  'Atomics.exchange': Atomics.exchange,
  'Atomics.isLockFree': Atomics.isLockFree,
  'Atomics.load': Atomics.load,
  'Atomics.notify': Atomics.notify,
  'Atomics.or': Atomics.or,
  'Atomics.store': Atomics.sore,
  'Atomics.sub': Atomics.sub,
  'Atomics.wait': Atomics.wait,
  'Atomics.xor': Atomics.xor,

  'Boolean': Boolean,
  'Boolean.toString': Boolean.toString,
  'Boolean.valueOf': Boolean.valueOf,

  'Date': Date,
  'Date.now': Date.now,
  'Date.parse': Date.parse,
  'Date.UTC': Date.UTC,
  'Date.prototype.getDate': Date.prototype.getDate,
  'Date.prototype.getDay': Date.prototype.getDay,
  'Date.prototype.getFullYear': Date.prototype.getFullYear,
  'Date.prototype.getHours': Date.prototype.getHours,
  'Date.prototype.getMilliseconds': Date.prototype.getMilliseconds,
  'Date.prototype.getMinutes': Date.prototype.getMinutes,
  'Date.prototype.getMonth': Date.prototype.getMonth,
  'Date.prototype.getSeconds': Date.prototype.getSeconds,
  'Date.prototype.getTime': Date.prototype.getTime,
  'Date.prototype.getTimezoneOffset': Date.prototype.getTimezoneOffset,
  'Date.prototype.getUTCDate': Date.prototype.getUTCDate,
  'Date.prototype.getUTCDay': Date.prototype.getUTCDay,
  'Date.prototype.getUTCFullYear': Date.prototype.getUTCFullYear,
  'Date.prototype.getUTCHours': Date.prototype.getUTCHours,
  'Date.prototype.getUTCMilliseconds': Date.prototype.getUTCMilliseconds,
  'Date.prototype.getUTCMinutes': Date.prototype.getUTCMinutes,
  'Date.prototype.getUTCMonth': Date.prototype.getUTCMonth,
  'Date.prototype.getUTCSeconds': Date.prototype.getUTCSeconds,
  'Date.prototype.getYear': Date.prototype.getYear,
  'Date.prototype.setDate': Date.prototype.setDate,
  'Date.prototype.setFullYear': Date.prototype.setFullYear,
  'Date.prototype.setHours': Date.prototype.setHours,
  'Date.prototype.setMilliseconds': Date.prototype.setMilliseconds,
  'Date.prototype.setMinutes': Date.prototype.setMinutes,
  'Date.prototype.setMonth': Date.prototype.setMonth,
  'Date.prototype.setSeconds': Date.prototype.setSeconds,
  'Date.prototype.setTime': Date.prototype.setTime,
  'Date.prototype.setUTCDate': Date.prototype.setUTCDate,
  'Date.prototype.setUTCFullYear': Date.prototype.setUTCFullYear,
  'Date.prototype.setUTCHours': Date.prototype.setUTCHours,
  'Date.prototype.setUTCMilliseconds': Date.prototype.setUTCMilliseconds,
  'Date.prototype.setUTCMinutes': Date.prototype.setUTCMinutes,
  'Date.prototype.setUTCMonth': Date.prototype.setUTCMonth,
  'Date.prototype.setUTCSeconds': Date.prototype.setUTCSeconds,
  'Date.prototype.setYear': Date.prototype.setYear,
  'Date.prototype.toDateString': Date.prototype.toDateString,
  'Date.prototype.toISOString': Date.prototype.toISOString,
  'Date.prototype.toJSON': Date.prototype.toJSON,
  'Date.prototype.toGMTString': Date.prototype.toGMTString,
  'Date.prototype.toLocaleDateString': Date.prototype.toLocaleDateString,
  'Date.prototype.toLocaleFormat': Date.prototype.toLocaleFormat,
  'Date.prototype.toLocaleString': Date.prototype.toLocaleString,
  'Date.prototype.toLocaleTimeString': Date.prototype.toLocaleTimeString,
  'Date.prototype.toString': Date.prototype.toString,
  'Date.prototype.toTimeString': Date.prototype.toTimeString,
  'Date.prototype.toUTCString': Date.prototype.toUTCString,
  'Date.prototype.valueOf': Date.prototype.valueOf,

  'DataView': DataView,
  'DataView.prototype.getInt8': DataView.prototype.getInt8,
  'DataView.prototype.getUint8': DataView.prototype.getUint8,
  'DataView.prototype.getInt16': DataView.prototype.getInt16,
  'DataView.prototype.getUint16': DataView.prototype.getUint16,
  'DataView.prototype.getInt32': DataView.prototype.getInt32,
  'DataView.prototype.getUint32': DataView.prototype.getUint32,
  'DataView.prototype.getFloat32': DataView.prototype.getFloat32,
  'DataView.prototype.getFloat64': DataView.prototype.getFloat64,
  'DataView.prototype.getBigInt64': DataView.prototype.getBigInt64,
  'DataView.prototype.getBigUint64': DataView.prototype.getBigUint64,
  'DataView.prototype.setInt8': DataView.prototype.setInt8,
  'DataView.prototype.setUint8': DataView.prototype.setUint8,
  'DataView.prototype.setInt16': DataView.prototype.setInt16,
  'DataView.prototype.setUint16': DataView.prototype.setUint16,
  'DataView.prototype.setInt32': DataView.prototype.setInt32,
  'DataView.prototype.setUint32': DataView.prototype.setUint32,
  'DataView.prototype.setFloat32': DataView.prototype.setFloat32,
  'DataView.prototype.setFloat64': DataView.prototype.setFloat64,
  'DataView.prototype.setBigInt64': DataView.prototype.setBigInt64,
  'DataView.prototype.setBigUint64': DataView.prototype.setBigUint64,

  'Function': Function,
  'Function.prototype.apply': Function.prototype.apply,
  'Function.prototype.bind': Function.prototype.bind,
  'Function.prototype.call': Function.prototype.call,
  'Function.prototype.toString': Function.prototype.toString,


  //'Generator.prototype.next' :(typeof window != 'undefined' ?  Generator.prototype.next: null),
  //'Generator.prototype.return' : (typeof window != 'undefined' ? Generator.prototype.return : null),
  //'Generator.prototype.throw' : (typeof window != 'undefined' ? Generator.prototype.throw : null),

  //'GeneratorFunction' : (typeof window != 'undefined' ? GeneratorFunction : null),

  'Error': Error,
  'Error.prototype.toString': Error.prototype.toString,

  'EvalError': EvalError,
  //'InternalError' : (typeof window != 'undefined' ? InternalError : null),
  "SyntaxError": SyntaxError,
  "TypeError": TypeError,
  "URIError": URIError,
  "RangeError": RangeError,
  "ReferenceError": ReferenceError,

  // 'FinalizationRegistry' : (typeof window != 'undefined' ? FinalizationRegistry : null),
  // 'FinalizationRegistry.prototype.register' : (typeof window != 'undefined' ? FinalizationRegistry.prototype.register : null),
  // 'FinalizationRegistry.prototype.unregister' : (typeof window != 'undefined' ? FinalizationRegistry.prototype.unregister : null),

  'BigInt': BigInt,
  'BigInt.asIntN': BigInt.asIntN,
  'BigInt.asUintN': BigInt.asUintN,
  'BigInt.prototype.toLocaleString': BigInt.prototype.toLocaleString,
  'BigInt.prototype.toString': BigInt.prototype.toString,
  'BigInt.prototype.valueOf': BigInt.prototype.valueOf,

  'BigInt64Array': BigInt64Array,
  'BigInt64Array.from': BigInt64Array.from,
  'BigInt64Array.of': BigInt64Array.of,
  'BigInt64Array.prototype.copyWithin': BigInt64Array.prototype.copyWithin,
  'BigInt64Array.prototype.entries': BigInt64Array.prototype.entries,
  'BigInt64Array.prototype.every': BigInt64Array.prototype.every,
  'BigInt64Array.prototype.fill': BigInt64Array.prototype.fill,
  'BigInt64Array.prototype.filter': BigInt64Array.prototype.filter,
  'BigInt64Array.prototype.find': BigInt64Array.prototype.find,
  'BigInt64Array.prototype.findIndex': BigInt64Array.prototype.findIndex,
  'BigInt64Array.prototype.forEach': BigInt64Array.prototype.forEach,
  'BigInt64Array.prototype.includes': BigInt64Array.prototype.includes,
  'BigInt64Array.prototype.indexOf': BigInt64Array.prototype.indexOf,
  'BigInt64Array.prototype.join': BigInt64Array.prototype.join,
  'BigInt64Array.prototype.keys': BigInt64Array.prototype.keys,
  'BigInt64Array.prototype.lastIndexOf': BigInt64Array.prototype.lastIndexOf,
  'BigInt64Array.prototype.map': BigInt64Array.prototype.map,
  'BigInt64Array.prototype.reduce': BigInt64Array.prototype.reduce,
  'BigInt64Array.prototype.reduceRight': BigInt64Array.prototype.reduceRight,
  'BigInt64Array.prototype.reverse': BigInt64Array.prototype.reverse,
  'BigInt64Array.prototype.set': BigInt64Array.prototype.set,
  'BigInt64Array.prototype.slice': BigInt64Array.prototype.slice,
  'BigInt64Array.prototype.some': BigInt64Array.prototype.some,
  'BigInt64Array.prototype.sort': BigInt64Array.prototype.sort,
  'BigInt64Array.prototype.subarray': BigInt64Array.prototype.subarray,
  'BigInt64Array.prototype.values': BigInt64Array.prototype.values,
  'BigInt64Array.prototype.toLocaleString': BigInt64Array.prototype.toLocaleString,
  'BigInt64Array.prototype.toString': BigInt64Array.prototype.toString,
  'BigInt64Array.prototype[Symbol.iterator]': BigInt64Array.prototype[Symbol.iterator],

  'BigUint64Array': BigUint64Array,
  'BigUint64Array.from': BigUint64Array.from,
  'BigUint64Array.of': BigUint64Array.of,
  'BigUint64Array.prototype.copyWithin': BigUint64Array.prototype.copyWithin,
  'BigUint64Array.prototype.entries': BigUint64Array.prototype.entries,
  'BigUint64Array.prototype.every': BigUint64Array.prototype.every,
  'BigUint64Array.prototype.fill': BigUint64Array.prototype.fill,
  'BigUint64Array.prototype.filter': BigUint64Array.prototype.filter,
  'BigUint64Array.prototype.find': BigUint64Array.prototype.find,
  'BigUint64Array.prototype.findIndex': BigUint64Array.prototype.findIndex,
  'BigUint64Array.prototype.forEach': BigUint64Array.prototype.forEach,
  'BigUint64Array.prototype.includes': BigUint64Array.prototype.includes,
  'BigUint64Array.prototype.indexOf': BigUint64Array.prototype.indexOf,
  'BigUint64Array.prototype.join': BigUint64Array.prototype.join,
  'BigUint64Array.prototype.keys': BigUint64Array.prototype.keys,
  'BigUint64Array.prototype.lastIndexOf': BigUint64Array.prototype.lastIndexOf,
  'BigUint64Array.prototype.map': BigUint64Array.prototype.map,
  'BigUint64Array.prototype.reduce': BigUint64Array.prototype.reduce,
  'BigUint64Array.prototype.reduceRight': BigUint64Array.prototype.reduceRight,
  'BigUint64Array.prototype.reverse': BigUint64Array.prototype.reverse,
  'BigUint64Array.prototype.set': BigUint64Array.prototype.set,
  'BigUint64Array.prototype.slice': BigUint64Array.prototype.slice,
  'BigUint64Array.prototype.some': BigUint64Array.prototype.some,
  'BigUint64Array.prototype.sort': BigUint64Array.prototype.sort,
  'BigUint64Array.prototype.subarray': BigUint64Array.prototype.subarray,
  'BigUint64Array.prototype.values': BigUint64Array.prototype.values,
  'BigUint64Array.prototype.toLocaleString': BigUint64Array.prototype.toLocaleString,
  'BigUint64Array.prototype.toString': BigUint64Array.prototype.toString,
  'BigUint64Array.prototype[Symbol.iterator]': BigUint64Array.prototype[Symbol.iterator],

  'Float32Array': Float32Array,
  'Float32Array.from': Float32Array.from,
  'Float32Array.of': Float32Array.of,
  'Float32Array.prototype.copyWithin': Float32Array.prototype.copyWithin,
  'Float32Array.prototype.entries': Float32Array.prototype.entries,
  'Float32Array.prototype.every': Float32Array.prototype.every,
  'Float32Array.prototype.fill': Float32Array.prototype.fill,
  'Float32Array.prototype.filter': Float32Array.prototype.filter,
  'Float32Array.prototype.find': Float32Array.prototype.find,
  'Float32Array.prototype.findIndex': Float32Array.prototype.findIndex,
  'Float32Array.prototype.forEach': Float32Array.prototype.forEach,
  'Float32Array.prototype.includes': Float32Array.prototype.includes,
  'Float32Array.prototype.indexOf': Float32Array.prototype.indexOf,
  'Float32Array.prototype.join': Float32Array.prototype.join,
  'Float32Array.prototype.keys': Float32Array.prototype.keys,
  'Float32Array.prototype.lastIndexOf': Float32Array.prototype.lastIndexOf,
  'Float32Array.prototype.map': Float32Array.prototype.map,
  'Float32Array.prototype.reduce': Float32Array.prototype.reduce,
  'Float32Array.prototype.reduceRight': Float32Array.prototype.reduceRight,
  'Float32Array.prototype.reverse': Float32Array.prototype.reverse,
  'Float32Array.prototype.set': Float32Array.prototype.set,
  'Float32Array.prototype.slice': Float32Array.prototype.slice,
  'Float32Array.prototype.some': Float32Array.prototype.some,
  'Float32Array.prototype.sort': Float32Array.prototype.sort,
  'Float32Array.prototype.subarray': Float32Array.prototype.subarray,
  'Float32Array.prototype.values': Float32Array.prototype.values,
  'Float32Array.prototype.toLocaleString': Float32Array.prototype.toLocaleString,
  'Float32Array.prototype.toString': Float32Array.prototype.toString,
  'Float32Array.prototype[Symbol.iterator]': Float32Array.prototype[Symbol.iterator],

  'Float64Array': Float64Array,
  'Float64Array.from': Float64Array.from,
  'Float64Array.of': Float64Array.of,
  'Float64Array.prototype.copyWithin': Float64Array.prototype.copyWithin,
  'Float64Array.prototype.entries': Float64Array.prototype.entries,
  'Float64Array.prototype.every': Float64Array.prototype.every,
  'Float64Array.prototype.fill': Float64Array.prototype.fill,
  'Float64Array.prototype.filter': Float64Array.prototype.filter,
  'Float64Array.prototype.find': Float64Array.prototype.find,
  'Float64Array.prototype.findIndex': Float64Array.prototype.findIndex,
  'Float64Array.prototype.forEach': Float64Array.prototype.forEach,
  'Float64Array.prototype.includes': Float64Array.prototype.includes,
  'Float64Array.prototype.indexOf': Float64Array.prototype.indexOf,
  'Float64Array.prototype.join': Float64Array.prototype.join,
  'Float64Array.prototype.keys': Float64Array.prototype.keys,
  'Float64Array.prototype.lastIndexOf': Float64Array.prototype.lastIndexOf,
  'Float64Array.prototype.map': Float64Array.prototype.map,
  'Float64Array.prototype.reduce': Float64Array.prototype.reduce,
  'Float64Array.prototype.reduceRight': Float64Array.prototype.reduceRight,
  'Float64Array.prototype.reverse': Float64Array.prototype.reverse,
  'Float64Array.prototype.set': Float64Array.prototype.setH,
  'Float64Array.prototype.slice': Float64Array.prototype.slice,
  'Float64Array.prototype.some': Float64Array.prototype.some,
  'Float64Array.prototype.sort': Float64Array.prototype.sort,
  'Float64Array.prototype.subarray': Float64Array.prototype.subarray,
  'Float64Array.prototype.values': Float64Array.prototype.values,
  'Float64Array.prototype.toLocaleString': Float64Array.prototype.toLocaleString,
  'Float64Array.prototype.toString': Float64Array.prototype.toString,
  'Float64Array.prototype[Symbol.iterator]': Float64Array.prototype[Symbol.iterator],

  'Uint16Array': Uint16Array,
  'Uint16Array.from': Uint16Array.from,
  'Uint16Array.of': Uint16Array.of,
  'Uint16Array.prototype.copyWithin': Uint16Array.prototype.copyWithin,
  'Uint16Array.prototype.entries': Uint16Array.prototype.entries,
  'Uint16Array.prototype.every': Uint16Array.prototype.every,
  'Uint16Array.prototype.fill': Uint16Array.prototype.fill,
  'Uint16Array.prototype.filter': Uint16Array.prototype.filter,
  'Uint16Array.prototype.find': Uint16Array.prototype.find,
  'Uint16Array.prototype.findIndex': Uint16Array.prototype.findIndex,
  'Uint16Array.prototype.forEach': Uint16Array.prototype.forEach,
  'Uint16Array.prototype.includes': Uint16Array.prototype.includes,
  'Uint16Array.prototype.indexOf': Uint16Array.prototype.indexOf,
  'Uint16Array.prototype.join': Uint16Array.prototype.join,
  'Uint16Array.prototype.keys': Uint16Array.prototype.keys,
  'Uint16Array.prototype.lastIndexOf': Uint16Array.prototype.lastIndexOf,
  'Uint16Array.prototype.map': Uint16Array.prototype.map,
  'Uint16Array.prototype.reduce': Uint16Array.prototype.reduce,
  'Uint16Array.prototype.reduceRight': Uint16Array.prototype.reduceRight,
  'Uint16Array.prototype.reverse': Uint16Array.prototype.reverse,
  'Uint16Array.prototype.set': Uint16Array.prototype.set,
  'Uint16Array.prototype.slice': Uint16Array.prototype.slice,
  'Uint16Array.prototype.some': Uint16Array.prototype.some,
  'Uint16Array.prototype.sort': Uint16Array.prototype.sort,
  'Uint16Array.prototype.subarray': Uint16Array.prototype.subarray,
  'Uint16Array.prototype.values': Uint16Array.prototype.values,
  'Uint16Array.prototype.toLocaleString': Uint16Array.prototype.toLocaleString,
  'Uint16Array.prototype.toString': Uint16Array.prototype.toString,
  'Uint16Array.prototype[Symbol.iterator]': Uint16Array.prototype[Symbol.iterator],

  'Uint32Array': Uint32Array,
  'Uint32Array.from': Uint32Array.from,
  'Uint32Array.of': Uint32Array.of,
  'Uint32Array.prototype.copyWithin': Uint32Array.prototype.copyWithin,
  'Uint32Array.prototype.entries': Uint32Array.prototype.entries,
  'Uint32Array.prototype.every': Uint32Array.prototype.every,
  'Uint32Array.prototype.fill': Uint32Array.prototype.fill,
  'loat32Array.prototype.filter': Uint32Array.prototype.filter,
  'Uint32Array.prototype.find': Uint32Array.prototype.find,
  'Uint32Array.prototype.findIndex': Uint32Array.prototype.findIndex,
  'Uint32Array.prototype.forEach': Uint32Array.prototype.forEach,
  'Uint32Array.prototype.includes': Uint32Array.prototype.includes,
  'Uint32Array.prototype.indexOf': Uint32Array.prototype.indexOf,
  'Uint32Array.prototype.join': Uint32Array.prototype.join,
  'Uint32Array.prototype.keys': Uint32Array.prototype.keys,
  'Uint32Array.prototype.lastIndexOf': Uint32Array.prototype.lastIndexOf,
  'Uint32Array.prototype.map': Uint32Array.prototype.map,
  'Uint32Array.prototype.reduce': Uint32Array.prototype.reduce,
  'Uint32Array.prototype.reduceRight': Uint32Array.prototype.reduceRight,
  'Uint32Array.prototype.reverse': Uint32Array.prototype.reverse,
  'Uint32Array.prototype.set': Uint32Array.prototype.set,
  'Uint32Array.prototype.slice': Uint32Array.prototype.slice,
  'Uint32Array.prototype.some': Uint32Array.prototype.some,
  'Uint32Array.prototype.sort': Uint32Array.prototype.sort,
  'Uint32Array.prototype.subarray': Uint32Array.prototype.subarray,
  'Uint32Array.prototype.values': Uint32Array.prototype.values,
  'Uint32Array.prototype.toLocaleString': Uint32Array.prototype.toLocaleString,
  'Uint32Array.prototype.toString': Uint32Array.prototype.toString,
  'Uint32Array.prototype[Symbol.iterator]': Uint32Array.prototype[Symbol.iterator],

  'Uint8Array': Uint8Array,
  'Uint8Array.from': Uint8Array.from,
  'Uint8Array.of': Uint8Array.of,
  'Uint8Array.prototype.copyWithin': Uint8Array.prototype.copyWithin,
  'Uint8Array.prototype.entries': Uint8Array.prototype.entries,
  'Uint8Array.prototype.every': Uint8Array.prototype.every,
  'Uint8Array.prototype.fill': Uint8Array.prototype.fill,
  'Uint8Array.prototype.filter': Uint8Array.prototype.filter,
  'Uint8Array.prototype.find': Uint8Array.prototype.find,
  'Uint8Array.prototype.findIndex': Uint8Array.prototype.findIndex,
  'Uint8Array.prototype.forEach': Uint8Array.prototype.forEach,
  'Uint8Array.prototype.includes': Uint8Array.prototype.includes,
  'Uint8Array.prototype.indexOf': Uint8Array.prototype.indexOf,
  'Uint8Array.prototype.join': Uint8Array.prototype.join,
  'Uint8Array.prototype.keys': Uint8Array.prototype.keys,
  'Uint8Array.prototype.lastIndexOf': Uint8Array.prototype.lastIndexOf,
  'Uint8Array.prototype.map': Uint8Array.prototype.map,
  'Uint8Array.prototype.reduce': Uint8Array.prototype.reduce,
  'Uint8Array.prototype.reduceRight': Uint8Array.prototype.reduceRight,
  'Uint8Array.prototype.reverse': Uint8Array.prototype.reverse,
  'Uint8Array.prototype.set': Uint8Array.prototype.set,
  'Uint8Array.prototype.slice': Uint8Array.prototype.slice,
  'Uint8Array.prototype.some': Uint8Array.prototype.some,
  'Uint8Array.prototype.sort': Uint8Array.prototype.sort,
  'Uint8Array.prototype.subarray': Uint8Array.prototype.subarray,
  'Uint8Array.prototype.values': Uint8Array.prototype.values,
  'Uint8Array.prototype.toLocaleString': Uint8Array.prototype.toLocaleString,
  'Uint8Array.prototype.toString': Uint8Array.prototype.toString,
  'Uint8Array.prototype[Symbol.iterator]': Uint8Array.prototype[Symbol.iterator],

  'Uint8ClampedArray': Uint8ClampedArray,
  'Uint8ClampedArray.from': Uint8ClampedArray.from,
  'Uint8ClampedArray.of': Uint8ClampedArray.of,
  'Uint8ClampedArray.prototype.copyWithin': Uint8ClampedArray.prototype.copyWithin,
  'Uint8ClampedArray.prototype.entries': Uint8ClampedArray.prototype.entries,
  'Uint8ClampedArray.prototype.every': Uint8ClampedArray.prototype.every,
  'Uint8ClampedArray.prototype.fill': Uint8ClampedArray.prototype.fill,
  'Uint8ClampedArray.prototype.filter': Uint8ClampedArray.prototype.filter,
  'Uint8ClampedArray.prototype.find': Uint8ClampedArray.prototype.find,
  'Uint8ClampedArray.prototype.findIndex': Uint8ClampedArray.prototype.findIndex,
  'Uint8ClampedArray.prototype.forEach': Uint8ClampedArray.prototype.forEach,
  'Uint8ClampedArray.prototype.includes': Uint8ClampedArray.prototype.includes,
  'Uint8ClampedArray.prototype.indexOf': Uint8ClampedArray.prototype.indexOf,
  'Uint8ClampedArray.prototype.join': Uint8ClampedArray.prototype.join,
  'Uint8ClampedArray.prototype.keys': Uint8ClampedArray.prototype.keys,
  'Uint8ClampedArray.prototype.lastIndexOf': Uint8ClampedArray.prototype.lastIndexOf,
  'Uint8ClampedArray.prototype.map': Uint8ClampedArray.prototype.map,
  'Uint8ClampedArray.prototype.reduce': Uint8ClampedArray.prototype.reduce,
  'Uint8ClampedArray.prototype.reduceRight': Uint8ClampedArray.prototype.reduceRight,
  'Uint8ClampedArray.prototype.reverse': Uint8ClampedArray.prototype.reverse,
  'Uint8ClampedArray.prototype.set': Uint8ClampedArray.prototype.set,
  'Uint8ClampedArray.prototype.slice': Uint8ClampedArray.prototype.slice,
  'Uint8ClampedArray.prototype.some': Uint8ClampedArray.prototype.some,
  'Uint8ClampedArray.prototype.sort': Uint8ClampedArray.prototype.sort,
  'Uint8ClampedArray.prototype.subarray': Uint8ClampedArray.prototype.subarray,
  'Uint8ClampedArray.prototype.values': Uint8ClampedArray.prototype.values,
  'Uint8ClampedArray.prototype.toLocaleString': Uint8ClampedArray.prototype.toLocaleString,
  'Uint8ClampedArray.prototype.toString': Uint8ClampedArray.prototype.toString,
  'Uint8ClampedArray.prototype[Symbol.iterator]': Uint8ClampedArray.prototype[Symbol.iterator],

  'Int16Array': Int16Array,
  'Int16Array.from': Int16Array.from,
  'Int16Array.of': Int16Array.of,
  'Int16Array.prototype.copyWithin': Int16Array.prototype.copyWithin,
  'Int16Array.prototype.entries': Int16Array.prototype.entries,
  'Int16Array.prototype.every': Int16Array.prototype.every,
  'Int16Array.prototype.fill': Int16Array.prototype.fill,
  'Int64Array.prototype.filter': Int16Array.prototype.filter,
  'Int16Array.prototype.find': Int16Array.prototype.find,
  'Int16Array.prototype.findIndex': Int16Array.prototype.findIndex,
  'Int16Array.prototype.forEach': Int16Array.prototype.forEach,
  'Int16Array.prototype.includes': Int16Array.prototype.includes,
  'Int16Array.prototype.indexOf': Int16Array.prototype.indexOf,
  'Int16Array.prototype.join': Int16Array.prototype.join,
  'Int16Array.prototype.keys': Int16Array.prototype.keys,
  'Int16Array.prototype.lastIndexOf': Int16Array.prototype.lastIndexOf,
  'Int16Array.prototype.map': Int16Array.prototype.map,
  'Int16Array.prototype.reduce': Int16Array.prototype.reduce,
  'Int16Array.prototype.reduceRight': Int16Array.prototype.reduceRight,
  'Int16Array.prototype.reverse': Int16Array.prototype.reverse,
  'Int16Array.prototype.set': Int16Array.prototype.setH,
  'Int16Array.prototype.slice': Int16Array.prototype.slice,
  'Int16Array.prototype.some': Int16Array.prototype.some,
  'Int16Array.prototype.sort': Int16Array.prototype.sort,
  'Int16Array.prototype.subarray': Int16Array.prototype.subarray,
  'Int16Array.prototype.values': Int16Array.prototype.values,
  'Int16Array.prototype.toLocaleString': Int16Array.prototype.toLocaleString,
  'Int16Array.prototype.toString': Int16Array.prototype.toString,
  'Int16Array.prototype[Symbol.iterator]': Int16Array.prototype[Symbol.iterator],

  'Int32Array': Int32Array,
  'Int32Array.from': Int32Array.from,
  'Int32Array.of': Int32Array.of,
  'Int32Array.prototype.copyWithin': Int32Array.prototype.copyWithin,
  'Int32Array.prototype.entries': Int32Array.prototype.entries,
  'Int32Array.prototype.every': Int32Array.prototype.every,
  'Int32Array.prototype.fill': Int32Array.prototype.fill,
  'Int32Array.prototype.filter': Int32Array.prototype.filter,
  'Int32Array.prototype.find': Int32Array.prototype.find,
  'Int32Array.prototype.findIndex': Int32Array.prototype.findIndex,
  'Int32Array.prototype.forEach': Int32Array.prototype.forEach,
  'Int32Array.prototype.includes': Int32Array.prototype.includes,
  'Int32Array.prototype.indexOf': Int32Array.prototype.indexOf,
  'Int32Array.prototype.join': Int32Array.prototype.join,
  'Int32Array.prototype.keys': Int32Array.prototype.keys,
  'Int32Array.prototype.lastIndexOf': Int32Array.prototype.lastIndexOf,
  'Int32Array.prototype.map': Int32Array.prototype.map,
  'Int32Array.prototype.reduce': Int32Array.prototype.reduce,
  'Int32Array.prototype.reduceRight': Int32Array.prototype.reduceRight,
  'Int32Array.prototype.reverse': Int32Array.prototype.reverse,
  'Int32Array.prototype.set': Int32Array.prototype.setH,
  'Int32Array.prototype.slice': Int32Array.prototype.slice,
  'Int32Array.prototype.some': Int32Array.prototype.some,
  'Int32Array.prototype.sort': Int32Array.prototype.sort,
  'Int32Array.prototype.subarray': Int32Array.prototype.subarray,
  'Int32Array.prototype.values': Int32Array.prototype.values,
  'Int32Array.prototype.toLocaleString': Int32Array.prototype.toLocaleString,
  'Int32Array.prototype.toString': Int32Array.prototype.toString,
  'Int32Array.prototype[Symbol.iterator]': Int32Array.prototype[Symbol.iterator],

  'Int8Array': Int8Array,
  'Int8Array.from': Int8Array.from,
  'Int8Array.of': Int8Array.of,
  'Int8Array.prototype.copyWithin': Int8Array.prototype.copyWithin,
  'Int8Array.prototype.entries': Int8Array.prototype.entries,
  'Int8Array.prototype.every': Int8Array.prototype.every,
  'Int8Array.prototype.fill': Int8Array.prototype.fill,
  'Int8Array.prototype.filter': Int8Array.prototype.filter,
  'Int8Array.prototype.find': Int8Array.prototype.find,
  'Int8Array.prototype.findIndex': Int8Array.prototype.findIndex,
  'Int8Array.prototype.forEach': Int8Array.prototype.forEach,
  'Int8Array.prototype.includes': Int8Array.prototype.includes,
  'Int8Array.prototype.indexOf': Int8Array.prototype.indexOf,
  'Int8Array.prototype.join': Int8Array.prototype.join,
  'Int8Array.prototype.keys': Int8Array.prototype.keys,
  'Int8Array.prototype.lastIndexOf': Int8Array.prototype.lastIndexOf,
  'Int8Array.prototype.map': Int8Array.prototype.map,
  'Int8Array.prototype.reduce': Int8Array.prototype.reduce,
  'Int8Array.prototype.reduceRight': Int8Array.prototype.reduceRight,
  'Int8Array.prototype.reverse': Int8Array.prototype.reverse,
  'Int8Array.prototype.set': Int8Array.prototype.setH,
  'Int8Array.prototype.slice': Int8Array.prototype.slice,
  'Int8Array.prototype.some': Int8Array.prototype.some,
  'Int8Array.prototype.sort': Int8Array.prototype.sort,
  'Int8Array.prototype.subarray': Int8Array.prototype.subarray,
  'Int8Array.prototype.values': Int8Array.prototype.values,
  'Int8Array.prototype.toLocaleString': Int8Array.prototype.toLocaleString,
  'Int8Array.prototype.toString': Int8Array.prototype.toString,
  'Int8Array.prototype[Symbol.iterator]': Int8Array.prototype[Symbol.iterator],

  'Intl.Collator': Intl.Collator,
  'Intl.DateTimeFormat': Intl.DateTimeFormat,
  'Intl.DisplayNames': Intl.DisplayNames,
  'Intl.ListFormat': Intl.ListFormat,
  'Intl.Locale': Intl.Locale,
  'Intl.NumberFormat': Intl.NumberFormat,
  'Intl.PluralRules': Intl.PluralRules,
  'Intl.RelativeTimeFormat': Intl.RelativeTimeFormat,
  'Intl.getCanonicalLocales': Intl.getCanonicalLocales,

  'JSON.parse': JSON.parse,
  'JSON.stringify': JSON.stringify,

  'Map': Map,
  'Map.prototype.clear': Map.prototype.clear,
  'Map.prototype.delete': Map.prototype.delete,
  'Map.prototype.get': Map.prototype.get,
  'Map.prototype.has': Map.prototype.has,
  'Map.prototype.set': Map.prototype.set,
  'Map.prototype[Symbol.iterator]': Map.prototype[Symbol.iterator],
  'Map.prototype.keys': Map.prototype.keys,
  'Map.prototype.values': Map.prototype.values,
  'Map.prototype.entries': Map.prototype.entries,
  'Map.prototype.forEach': Map.prototype.forEach,

  'Math': Math,
  'Math.abs': Math.abs,
  'Math.acos': Math.acos,
  'Math.acosh': Math.acosh,
  'Math.asin': Math.asin,
  'Math.asinh': Math.asinh,
  'Math.asinh': Math.atan,
  'Math.atanh': Math.atanh,
  'Math.atan2': Math.atan2,
  'Math.cbrt': Math.cbrt,
  'Math.ceil': Math.ceil,
  'Math.clz32': Math.clz32,
  'Math.cos': Math.cos,
  'Math.cosh': Math.cosh,
  'Math.exp': Math.exp,
  'Math.expm1': Math.expm1,
  'Math.floor': Math.floor,
  'Math.fround': Math.fround,
  'Math.hypot': Math.hypot,
  'Math.imul': Math.imul,
  'Math.log': Math.log,
  'Math.log1p': Math.log1p,
  'Math.log10': Math.log10,
  'Math.log2': Math.log2,
  'Math.max': Math.max,
  'Math.min': Math.min,
  'Math.pow': Math.pow,
  'Math.random': Math.random,
  'Math.round': Math.round,
  'Math.sign': Math.sign,
  'Math.sin': Math.sin,
  'Math.sinh': Math.sinh,
  'Math.sqrt': Math.sqrt,
  'Math.tan': Math.tan,
  'Math.tanh': Math.tanh,
  'Math.trunc': Math.trunc,

  'Number': Number,
  'Number.isNaN': Number.isNaN,
  'Number.isFinite': Number.isFinite,
  'Number.isInteger': Number.isInteger,
  'Number.isSafeInteger': Number.isSafeInteger,
  'Number.parseFloat': Number.parseFloat,
  'Number.parseInt': Number.parseInt,
  'Number.prototype.toExponential': Number.prototype.toExponential,
  'Number.prototype.toFixed': Number.prototype.toFixed,
  'Number.prototype.toLocaleString': Number.prototype.toLocaleString,
  'Number.prototype.toPrecision': Number.prototype.toPrecision,
  'Number.prototype.toString': Number.prototype.toString,
  'Number.prototype.valueOf': Number.prototype.valueOf,

  'Object': Object,
  'Object.assign': Object.assign,
  'Object.create': Object.create,
  'Object.defineProperty': Object.defineProperty,
  'Object.defineProperties': Object.defineProperties,
  'Object.entries': Object.entries,
  'Object.freeze': Object.freeze,
  'Object.fromEntries': Object.fromEntries,
  'Object.getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor,
  'Object.getOwnPropertyDescriptors': Object.getOwnPropertyDescriptors,
  'Object.getOwnPropertyNames': Object.getOwnPropertyNames,
  'Object.getOwnPropertySymbols': Object.getOwnPropertySymbols,
  'Object.getPrototypeOf': Object.getPrototypeOf,
  'Object.is': Object.is,
  'Object.isExtensible': Object.isExtensible,
  'Object.isFrozen': Object.isFrozen,
  'Object.isSealed': Object.isSealed,
  'Object.keys': Object.keys,
  'Object.preventExtensions': Object.preventExtensions,
  'Object.seal': Object.seal,
  'Object.setPrototypeOf': Object.setPrototypeOf,
  'Object.values': Object.values,
  'Object.prototype.__defineGetter__': Object.prototype.__defineGetter__,
  'Object.prototype.__defineSetter__': Object.prototype.__defineSetter__,
  'Object.prototype.__lookupGetter__': Object.prototype.__lookupGetter__,
  'Object.prototype.__lookupSetter__': Object.prototype.__lookupSetter__,
  'Object.prototype.hasOwnProperty': Object.prototype.hasOwnProperty,
  'Object.prototype.isPrototypeOf': Object.prototype.isPrototypeOf,
  'Object.prototype.propertyIsEnumerable': Object.prototype.propertyIsEnumerable,
  'Object.prototype.toLocaleString': Object.prototype.toLocaleString,
  'Object.prototype.toString': Object.prototype.toString,
  'Object.prototype.unwatch': Object.prototype.unwatch,
  'Object.prototype.valueOf': Object.prototype.valueOf,
  'Object.prototype.watch': Object.prototype.watch,

  "Promise": Promise,
  "Promise.all": Promise.all,
  "Promise.allSettled": Promise.allSettled,
  "Promise.any": Promise.any,
  "Promise.race": Promise.race,
  "Promise.reject": Promise.reject,
  "Promise.resolve": Promise.resolve,
  "Promise.prototype.catch": Promise.prototype.catch,
  "Promise.prototype.then": Promise.prototype.then,
  "Promise.prototype.finally": Promise.prototype.finally,

  "Proxy": Proxy,
  "Proxy.revocable": Proxy.revocable,


  "Reflect.apply": Reflect.apply,
  "Reflect.construct": Reflect.construct,
  "Reflect.defineProperty": Reflect.defineProperty,
  "Reflect.deleteProperty": Reflect.deleteProperty,
  "Reflect.get": Reflect.get,
  "Reflect.getOwnPropertyDescriptor": Reflect.getOwnPropertyDescriptor,
  "Reflect.getPrototypeOf": Reflect.getPrototypeOf,
  "Reflect.has": Reflect.has,
  "Reflect.isExtensible": Reflect.isExtensible,
  "Reflect.ownKeys": Reflect.ownKeys,
  "Reflect.preventExtensions": Reflect.preventExtensions,
  "Reflect.set": Reflect.set,
  "Reflect.setPrototypeOf": Reflect.setPrototypeOf,

  "RegExp": RegExp,
  "RegExp.prototype.compile": RegExp.prototype.compile,
  "RegExp.prototype.exec": RegExp.prototype.exec,
  "RegExp.prototype.test": RegExp.prototype.test,
  "RegExp.prototype.toString": RegExp.prototype.toString,
  "RegExp.prototype[Symbol.match]": RegExp.prototype[Symbol.match],
  "RegExp.prototype[Symbol.matchAll]": RegExp.prototype[Symbol.matchAll],
  "RegExp.prototype[Symbol.replace]": RegExp.prototype[Symbol.replace],
  "RegExp.prototype[Symbol.search]": RegExp.prototype[Symbol.search],
  "RegExp.prototype[Symbol.split]": RegExp.prototype[Symbol.split],

  "Set": Set,
  "Set.prototype.add": Set.prototype.add,
  "Set.prototype.clear": Set.prototype.clear,
  "Set.prototype.delete": Set.prototype.delete,
  "Set.prototype.has": Set.prototype.has,
  "Set.prototype[Symbol.iterator]": Set.prototype[Symbol.iterator],
  "Set.prototype.keys": Set.prototype.keys,
  "Set.prototype.values": Set.prototype.values,
  "Set.prototype.entries": Set.prototype.entries,
  "Set.prototype.forEach": Set.prototype.forEach,

  "SharedArrayBuffer": SharedArrayBuffer,
  "SharedArrayBuffer.prototype.slice": SharedArrayBuffer.prototype.slice,

  "String": String,
  "String.fromCharCode": String.fromCharCode,
  "String.fromCodePoint": String.fromCodePoint,
  "String.raw": String.raw,

  "String.prototype.charAt": String.prototype.charAt,
  "String.prototype.charCodeAt": String.prototype.charCodeAt,
  "String.prototype.codePointAt": String.prototype.codePointAt,
  "String.prototype.concat": String.prototype.concat,
  "String.prototype.includes": String.prototype.includes,
  "String.prototype.endsWith": String.prototype.endsWith,
  "String.prototype.indexOf": String.prototype.indexOf,
  "String.prototype.lastIndexOf": String.prototype.lastIndexOf,
  "String.prototype.localeCompare": String.prototype.localeCompare,
  "String.prototype.match": String.prototype.match,
  "String.prototype.matchAll": String.prototype.matchAll,
  "String.prototype.normalize": String.prototype.normalize,
  "String.prototype.padEnd": String.prototype.padEnd,
  "String.prototype.padStart": String.prototype.padStart,
  "String.prototype.repeat": String.prototype.repeat,
  "String.prototype.replace": String.prototype.replace,
  "String.prototype.replaceAll": String.prototype.replaceAll,
  "String.prototype.search": String.prototype.search,
  "String.prototype.slice": String.prototype.slice,
  "String.prototype.split": String.prototype.split,
  "String.prototype.startsWith": String.prototype.startsWith,
  "String.prototype.substr": String.prototype.substr,
  "String.prototype.substring": String.prototype.substring,
  "String.prototype.toLocaleLowerCase": String.prototype.toLocaleLowerCase,
  "String.prototype.toLocaleUpperCase": String.prototype.toLocaleUpperCase,
  "String.prototype.toLowerCase": String.prototype.toLowerCase,
  "String.prototype.toString": String.prototype.toString,
  "String.prototype.toUpperCase": String.prototype.toUpperCase,
  "String.prototype.trim": String.prototype.trim,
  "String.prototype.trimStart": String.prototype.trimStart,
  "String.prototype.trimEnd": String.prototype.trimEnd,
  "String.prototype.valueOf": String.prototype.valueOf,
  "String.prototype[Symbol.iterator]": String.prototype[Symbol.iterator],

  "Symbol": Symbol,
  "Symbol.for": Symbol.for,
  "Symbol.keyFor": Symbol.keyFor,
  "Symbol.prototype.toSource": Symbol.prototype.toSource,
  "Symbol.prototype.toString": Symbol.prototype.toString,
  "Symbol.prototype.valueOf": Symbol.prototype.valueOf,
  "Symbol.prototype[Symbol.toPrimitive]": Symbol.prototype[Symbol.toPrimitive],

  "WeakMap": WeakMap,
  "WeakMap.prototype.delete": WeakMap.prototype.delete,
  "WeakMap.prototype.get": WeakMap.prototype.get,
  "WeakMap.prototype.has": WeakMap.prototype.has,
  "WeakMap.prototype.set": WeakMap.prototype.set,

  // "WeakRef" : (typeof window != 'undefined' ? WeakRef : null),
  // "WeakRef.prototype.deref" : (typeof window != 'undefined' ? WeakRef.prototype.deref : null),

  "WeakSet": WeakSet,
  "WeakSet.prototype.add": WeakSet.prototype.add,
  "WeakSet.prototype.delete": WeakSet.prototype.delete,
  "WeakSet.prototype.has": WeakSet.prototype.has,

  "WebAssembly.CompileError": WebAssembly.CompileError,
  "WebAssembly.Global": WebAssembly.Global,
  "WebAssembly.Instance": WebAssembly.Instance,
  "WebAssembly.LinkError": WebAssembly.LinkError,
  "WebAssembly.Memory": WebAssembly.Memory,
  "WebAssembly.Module": WebAssembly.Module,
  "WebAssembly.RuntimeError": WebAssembly.RuntimeError,
  "WebAssembly.Table": WebAssembly.Table,
  "WebAssembly.instantiate": WebAssembly.instantiate,
  "WebAssembly.instantiateStreaming": WebAssembly.instantiateStreaming,
  "WebAssembly.compile": WebAssembly.compile,
  "WebAssembly.compileStreaming": WebAssembly.compileStreaming,
  "WebAssembly.validate": WebAssembly.validate,
}

try {
  let dict_1 = {
    'FinalizationRegistry': (typeof window != 'undefined' ? FinalizationRegistry : null),
    'FinalizationRegistry.prototype.register': (typeof window != 'undefined' ? FinalizationRegistry.prototype.register : null),
    'FinalizationRegistry.prototype.unregister': (typeof window != 'undefined' ? FinalizationRegistry.prototype.unregister : null),
  }
  no_dom_native_fn_dict = Object.assign({}, no_dom_native_fn_dict, dict_1);
} catch (e) {
}

try {
  let dict_1 = {
    "WeakRef": (typeof window != 'undefined' ? WeakRef : null),
    "WeakRef.prototype.deref": (typeof window != 'undefined' ? WeakRef.prototype.deref : null),
  }
  no_dom_native_fn_dict = Object.assign({}, no_dom_native_fn_dict, dict_1);
} catch (e) {
}


function no_dom_native_fn_str(f) {
  return origin_array_find.call(origin_obj_keys(no_dom_native_fn_dict), (key => no_dom_native_fn_dict[key] === f));
}


class ConcolicValue {

  constructor(concrete, symbolic) {
    this.concrete = concrete;
    this.symbolic = symbolic;
  }

  clone() {
    return new ConcolicValue(this.concrete, this.symbolic)
  }

  getConcrete() {
    return this.concrete
  }

  getSymbolic() {
    return this.symbolic
  }

  setConcrete(val) {
    return this.concrete = val;
  }

  setSymbolic(val) {
    return this.symbolic = val;
  }
}

(function (sandbox) {

  function MyAnalysis() {
    symbol_dict = {}
    native_invokeFun_dict = {}
    dict = {};
    prev_line = -1;
    total_lines = 0;
    cur_line = -1;
    pc_id = 0;
    pc_parent_id = -1;
    pc_depth = 0;
    this.printSymbols = function () {
      safe_print("<Symbols List>")
      for (var key in symbol_dict) {	//safe_print(key + ": " + typeof (symbol_dict[key]))
        if (isArray(symbol_dict[key])) {
          var i = 0;
          safe_print(key)
          for (var i = 0; i < symbol_dict[key].length; i++) {
            safe_print("- [" + i + "]: " + symbol_dict[key][i])
          }
        } else
          safe_print(key + "\n- " + symbol_dict[key])
      }
    }

	//function updateDict(iid, line, func_name)
	
    function PrintInfo(iid, type, line) {
      //if (PRINT_LINE)
        safe_print("(sid,iid,lines,unique,freq)=(" + JALANGI_$.sid + "," + iid + "," + total_lines + "," + origin_obj_keys(dict).length + "," + dict[line] + "), " + type + " at " + line);
    }

    function updateLineInfo(iid, line, func_name) {
      this.cur_line = origin_array_pop.call(origin_str_split.call(line, ':'));
      if (this.prev_line != this.cur_line) {
        this.prev_line = this.cur_line;
        this.total_lines++;
      }

		if (PRINT_STACK_START_DEPTH > 0)
		{	Error.stackTraceLimit = 1000;
			var err = new Error().stack; 
			if (err.split("\n").length - 1 >= PRINT_STACK_START_DEPTH)
			{	safe_print("Print Stack");
				safe_print(err);
			}
		}

		if (PRINT_LINE_PERIOD_FACTOR == 0)
			return;
      else if (!(line in dict))
		{	dict[line] = 1;
			PrintInfo(iid, func_name, line);
		}
		else
		{	dict[line]++;
			if (dict[line] % PRINT_LINE_PERIOD_FACTOR == 0)
			{	
				//if (dict[line] % PRINT_LINE_PERIOD_FACTOR == 0)
				PrintInfo(iid, func_name, line);
			}
			if (PRINT_STACK_START_DEPTH > 0)
			{	Error.stackTraceLimit = 1000;
				var err = new Error().stack; 
				if (err.split("\n").length - 1 >= PRINT_STACK_START_DEPTH)
				{	safe_print("Print Stack");
					safe_print(err);
				}
			}
		}

    }



/*
    function updateDict(iid, type, line) {
      if (PRINT_LINE)
        safe_print("(sid,iid,lines,unique)=(" + JALANGI_$.sid + "," + iid + "," + total_lines + "," + origin_obj_keys(dict).length + "), " + type + " at " + line);
    }
*/
    function isArray(a) {
      return (!!a) && (a.constructor === Array)
    }

    function isArguments(item) {	//return Object.prototype.toString.call(item) === '[object Arguments]';
      return origin_obj_toString.call(item) === '[object Arguments]';
    }

    // function origin_fn_toString_async(fn) {
    //   return new Promise(function (resolve) {
    //     setTimeout(function () {
    //       resolve(origin_fn_toString.call(fn))
    //     }, 0);
    //   })
    // }

    function isNativeFn(fn) {
      if (fn === origin_fn_toString || fn === origin_obj_toString)
        return true;

      var fn_str = '';
      if (typeof fn === 'function') {
//safe_print("Before 1");
        fn_str = origin_obj_toString.call(fn);
//safe_print("After 1");
        // origin_fn_toString_async(fn)
        //   .then((result) => {
        //     fn_str = result;
        //   });
      } else if (typeof fn === 'object') {
        fn_str = origin_obj_toString.call(fn);
      }
//return false;

      var res = origin_regexp_test.call(/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code\]\s*}\s*$/i, fn_str);
		return res;
      //if (origin_str_includes.call(fn_str, ' [native code]')) {
        //a = /\{\s+\[native code\]/.test(fn_str);
      //  origin_regexp_test.call(new RegExp('\{\s+\[native code\]'), fn_str);
    }

    function isModeledFn(fn) {
      return false;
    }

    var isAnyConcolicValue;

    function concretizeRecursive(obj, depth, obj_dict, offset) {
      //if (obj === undefined || typeof obj !== 'object' || obj_dict.includes(obj))
       // return obj;

      // if (obj_dict.length > 1000) {
      // 	debugger;
      // }
      // safe_print('concretizeRecursive depth: ', depth);
//if (offset === 'getOwnPropertyDescriptor') safe_print("one " + depth);
      if (origin_array_isArray(obj) || isArguments(obj)) {
//if (offset === 'getOwnPropertyDescriptor') safe_print("two" + depth);
        for (var i = 0; i < obj.length; i++) {
          // obj_dict.push(obj[i]);
//if (offset === 'getOwnPropertyDescriptor') safe_print("three" + depth);
				if (depth < 10 && obj[i] !== undefined && typeof obj[i] === 'object' && !origin_array_includes.call(obj_dict, obj[i]))
				{
//if (offset === 'getOwnPropertyDescriptor') safe_print("four" + depth);
					origin_array_push.call(obj_dict, obj[i]);
//if (offset === 'getOwnPropertyDescriptor') safe_print("five" + depth);
					obj[i] = concretizeRecursive(obj[i], depth + 1, obj_dict, offset);
//if (offset === 'getOwnPropertyDescriptor') safe_print("six" + depth);
				}
        }
      } else if (obj instanceof ConcolicValue) {
        isAnyConcolicValue = true;
//if (offset === 'getOwnPropertyDescriptor') safe_print("sevn" + depth);
        origin_array_push.call(obj_dict, obj.concrete);
//if (offset === 'getOwnPropertyDescriptor') safe_print("eight" + depth);
        return obj.concrete;
      } else {


//if (offset === 'getOwnPropertyDescriptor') safe_print("nine" + depth);
        var str_type = origin_obj_toString.call(obj);
//if (offset === 'getOwnPropertyDescriptor') safe_print("ten" + depth);


        if (str_type === '[object HTMLDocument]') {


//if (offset === 'getOwnPropertyDescriptor') safe_print("eleven" + depth);
			origin_array_push.call(obj_dict, obj);
//if (offset === 'getOwnPropertyDescriptor') safe_print("twelve" + depth);
          return obj;
        } else if (str_type === '[object Window]') {
//if (offset === 'getOwnPropertyDescriptor') safe_print("thirteen" + depth);
			origin_array_push.call(obj_dict, obj);
//if (offset === 'getOwnPropertyDescriptor') safe_print("fourteen" + depth);
          return obj;
        } else {
          for (var prop in obj) {
//if (offset === 'getOwnPropertyDescriptor') safe_print("fifteen" + depth);
            if (origin_obj_hasOwnProperty.call(obj, prop)) {
//if (offset === 'getOwnPropertyDescriptor') safe_print("sixteen" + depth);
              try {

//if (prop === '$attrs' || prop == 'inspectSource')
//{	safe_print("Attrs Detected");
//	PRINT_LINE_EVERY_TIME = true;
//
//}
//safe_print(obj[prop])
//safe_print(obj[prop])
//safe_print("Concretize 15.2");
//safe_print(obj[prop] !== undefined)
//safe_print(typeof obj[prop] === 'object')
//safe_print(!obj_dict.includes(obj[prop]))
						
						if (depth < 10 && origin_obj_hasOwnProperty.call(obj, prop) && typeof (val = origin_obj_getOwnPropertyDescriptor(obj, prop).value) === 'object' && !origin_array_includes.call(obj_dict, val))
						{	
//							if (typeof window !== 'undefined' && (val === window || val === window.document) )
//								continue;
//if (offset === 'getOwnPropertyDescriptor') safe_print("seventeen");
//safe_print("Concretize 16");
							origin_array_push.call(obj_dict, val);
//if (offset === 'getOwnPropertyDescriptor') safe_print("eighteen");
//safe_print("Concretize 17");
							concretizeRecursive(val, depth + 1, obj_dict, offset);
//if (offset === 'getOwnPropertyDescriptor') safe_print("nineteen");
//safe_print("Concretize 18");
						}
//safe_print("Concretize 18.5");
              } catch (e) {
//safe_print("Concretize 19");
						safe_print("Error in concretizeRecursive()!!!!!!!!!");
						throw e;
asdfsfd;
              }
            }
          }
        }
      }
//safe_print("Concretize 20");
      return obj;
    }

    function computeBinary(left, op, right) {
      var result;
      switch (op) {
        case "+":
          result = left + right;
          break;
        case "-":
          result = left - right;
          break;
        case "*":
          result = left * right;
          break;
        case "/":
          result = left / right;
          break;
        case "%":
          result = left % right;
          break;
        case "<<":
          result = left << right;
          break;
        case ">>":
          result = left >> right;
          break;
        case ">>>":
          result = left >>> right;
          break;
        case "<":
          result = left < right;
          break;
        case ">":
          result = left > right;
          break;
        case "<=":
          result = left <= right;
          break;
        case ">=":
          result = left >= right;
          break;
        case "==":
          result = left == right;
          break;
        case "!=":
          result = left != right;
          break;
        case "===":
          result = left === right;
          break;
        case "!==":
          result = left !== right;
          break;
        case "&":
          result = left & right;
          break;
        case "|":
          result = left | right;
          break;
        case "^":
          result = left ^ right;
          break;
        case "delete":
          result = delete left[right];
          break;
        case "instanceof":
          result = left instanceof right;
          break;
        case "in":
          result = left in right;
          break;
        default:
          throw new Error(op + " at " + iid + " not found");
          break;
      }
      return result;
    }
/*
    function safeStringify(obj) {
      let cache = [];
      const retVal = origin_json_stringify(obj, (key, value) =>
        typeof value === "object" && value !== null ?
          cache.includes(value) ?
            undefined // Duplicate reference found, discard key
            : cache.push(value) && value // Store value in our collection
          : value, 2);
      cache = null;
      return retVal;
    };

    function stringifyDeep(obj) {
      var newObj = {};
      for (var key in obj) {
        //if (typeof obj[key] !== "function") {
        newObj[key] = obj[key];
        //}
      }
      return safeStringify(newObj);
    }
*/

	function captureSymbol(base, offset, val)
   {  if (typeof window === 'undefined')
        return null;
      else if (base === window.screen && offset === 'width') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.width");
        symbol_dict['window_screen_width'] = val;
        return new ConcolicValue(val, 'window_screen_width');
      } else if (base === window.screen && offset === 'height') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.height");
        symbol_dict['window_screen_height'] = val;
        return new ConcolicValue(val, 'window_screen_height');
      } else if (base === window.screen && offset === 'availWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.availWidth");
        symbol_dict['window_screen_availWidth'] = val;
        return new ConcolicValue(val, 'window_screen_availWidth');
      } else if (base === window.screen && offset === 'availHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.availHeight");
        symbol_dict['window_screen_availHeight'] = val;
        return new ConcolicValue(val, 'window_screen_availHeight');
      } else if (base === window.screen && offset === 'colorDepth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.colorDepth");
        symbol_dict['window_screen_colorDepth'] = val;
        return new ConcolicValue(val, 'window_screen_colorDepth');
      } else if (base === window.screen && offset === 'pixelDepth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.pixelDepth");
        symbol_dict['window_screen_pixelDepth'] = val;
        return new ConcolicValue(val, 'window_screen_pixelDepth');
      } else if (base === window.navigator && offset === 'userAgent') {
        if (JALANGI_READ) safe_print("JALANGI_READ: navigator.userAgent");
        symbol_dict['window_navigator_userAgent'] = val;
        return new ConcolicValue(val, 'window_navigator_userAgent');
      } else if (base === window.navigator && offset === 'platform') {
        if (JALANGI_READ) safe_print("JALANGI_READ: navigator.platform");
        symbol_dict['window_navigator_platform'] = val;
        return new ConcolicValue(val, 'window_navigator_platform');
      } else if (base === window.document && offset === 'cookie') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.cookie");
        symbol_dict['window_document_cookie'] = val;
        return new ConcolicValue(val, 'window_document_cookie');
      } else if (base === window.document && offset === 'referrer') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.referrer");
        symbol_dict['window_document_referrer'] = val;
        return new ConcolicValue(val, 'window_document_referrer');
      } else if (base === window.document && offset === 'lastModified') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.lastModified");
        symbol_dict['window_document_lastModified'] = val;
        return new ConcolicValue(val, 'window_document_lastModified');
      } else if (base === window.document.documentElement && offset === 'offsetWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetWidth");
        symbol_dict['window_document_documentElement_offsetWidth'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_offsetWidth');
      } else if (base === window.document.documentElement && offset === 'offsetHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetHeight");
        symbol_dict['window_document_documentElement_offsetHeight'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_offsetHeight');
      } else if (base === window.document.documentElement && offset === 'offsetLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetLeft");
        symbol_dict['window_document_documentElement_offsetLeft'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_offsetLeft');
      } else if (base === window.document.documentElement && offset === 'offsetTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetTop");
        symbol_dict['window_document_documentElement_offsetTop'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_offsetTop');
      } else if (base === window.document.documentElement && offset === 'scrollWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollWidth");
        symbol_dict['window_document_documentElement_scrollWidth'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_scrollWidth');
      } else if (base === window.document.documentElement && offset === 'scrollHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollHeight");
        symbol_dict['window_document_documentElement_scrollHeight'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_scrollHeight');
      } else if (base === window.document.documentElement && offset === 'scrollLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollLeft");
        symbol_dict['window_document_documentElement_scrollLeft'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_scrollLeft');
      } else if (base === window.document.documentElement && offset === 'scrollTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollTop");
        symbol_dict['window_document_documentElement_scrollTop'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_scrollTop');
      } else if (base === window.document.documentElement && offset === 'clientWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientWidth");
        symbol_dict['window_document_documentElement_clientWidth'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_clientWidth');
      } else if (base === window.document.documentElement && offset === 'clientHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientHeight");
        symbol_dict['window_document_documentElement_clientHeight'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_clientHeight');
      } else if (base === window.document.documentElement && offset === 'clientLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientLeft");
        symbol_dict['window_document_documentElement_clientLeft'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_clientLeft');
      } else if (base === window.document.documentElement && offset === 'clientTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientTop");
        symbol_dict['window_document_documentElement_clientTop'] = val;
        return new ConcolicValue(val, 'window_document_documentElement_clientTop');
      } else if (window.document.body && base === window.document.body && offset === 'offsetWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetWidth");
        symbol_dict['window_document_body_offsetWidth'] = val;
        return new ConcolicValue(val, 'window_document_body_offsetWidth');
      } else if (window.document.body && base === window.document.body && offset === 'offsetHeight') {
        //safe_print("JALANGI_READ: document.body.offsetHeight");
        symbol_dict['window_document_body_offsetHeight'] = val;
        return new ConcolicValue(val, 'window_document_body_offsetHeight');
      } else if (window.document.body && base === window.document.body && offset === 'offsetLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetLeft");
        symbol_dict['window_document_body_offsetLeft'] = val;
        return new ConcolicValue(val, 'window_document_body_offsetLeft');
      } else if (window.document.body && base === window.document.body && offset === 'offsetTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetTop");
        symbol_dict['window_document_body_offsetTop'] = val;
        return new ConcolicValue(val, 'window_document_body_offsetTop');
      } else if (window.document.body && base === window.document.body && offset === 'scrollWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollWidth");
        symbol_dict['window_document_body_scrollWidth'] = val;
        return new ConcolicValue(val, 'window_document_body_scrollWidth');
      } else if (window.document.body && base === window.document.body && offset === 'scrollHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollHeight");
        symbol_dict['window_document_body_scrollHeight'] = val;
        return new ConcolicValue(val, 'window_document_body_scrollHeight');
      } else if (window.document.body && base === window.document.body && offset === 'scrollLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollLeft");
        symbol_dict['window_document_body_scrollLeft'] = val;
        return new ConcolicValue(val, 'window_document_body_scrollLeft');
      } else if (window.document.body && base === window.document.body && offset === 'scrollTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollTop");
        symbol_dict['window_document_body_scrollTop'] = val;
        return new ConcolicValue(val, 'window_document_body_scrollTop');
      } else if (window.document.body && base === window.document.body && offset === 'clientWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientWidth");
        symbol_dict['window_document_body_clientWidth'] = val;
        return new ConcolicValue(val, 'window_document_body_clientWidth');
      } else if (window.document.body && base === window.document.body && offset === 'clientHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientHeight");
        symbol_dict['window_document_body_clientHeight'] = val;
        return new ConcolicValue(val, 'window_document_body_clientHeight');
      } else if (window.document.body && base === window.document.body && offset === 'clientLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientLeft");
        symbol_dict['window_document_body_clientLeft'] = val;
        return new ConcolicValue(val, 'window_document_body_clientLeft');
      } else if (window.document.body && base === window.document.body && offset === 'clientTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientTop");
        symbol_dict['window_document_body_clientTop'] = val;
        return new ConcolicValue(val, 'window_document_body_clientTop');
      } else {	//safe_print("Offset Check")

        //safe_print("JALANGI_READ: document.body.clientTop");
        //symbol_dict['window_document_body_clientTop'] = val;
      }
	}

    this.scriptEnter = function (iid, instrumentedFileName, originalFileName) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "scriptEnter()");
    };

    this.scriptExit = function (iid, wrappedExceptionVal) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "scriptExit()");
      return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
    };

    this.forinObject = function (iid, val) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "forinObject()");
      return {result: val};
    };

    this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "declare()");
      if (DEBUG) {
        safe_print("<declare> " + name)
//        safe_print("result: ");
//        safe_print(result);
      }
      if (DEBUG) {
        safe_print("<declare> End")
//        safe_print("result: ");
//        safe_print(result);
      }

      return {result: val};
    };


    this._return = function (iid, val) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "return()");
//if (line.includes("5997"))
//safe_print(val);
      return {result: val};
    };

    this._throw = function (iid, val) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "throw()");
      return {result: val};
    };

    this._with = function (iid, val) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "with()");
      return {result: val};
    };

    this.functionEnter = function (iid, f, dis, args) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "functionEnter()");
    };

    this.functionExit = function (iid, returnVal, wrappedExceptionVal) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "functionExit()");
      return {returnVal: returnVal, wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
    };


    this.conditional = function (iid, result) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "conditional()");
      if (DEBUG) {
        safe_print("<conditional>")
//        safe_print("result: ");
//        safe_print(result);
      }
      var concrete_result;
      if (typeof result === 'object' && result instanceof ConcolicValue) {
        concrete_result = result.getConcrete();
        safe_print("JALANGI_PC: (depth=" + pc_depth + ") (result=" + concrete_result + ") " + result.getSymbolic());
        pc_depth++;
      } else
        concrete_result = result;

      if (DEBUG) {
//        safe_print("Final result: ");
//        safe_print(concrete_result);
        safe_print("<conditional> End")
      }

      return {result: concrete_result};
    };


    this.endExpression = function (iid) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
      if (prev_line != cur_line) {
        prev_line = cur_line;
        total_lines++;
      }
		updateLineInfo(iid, line, "endExpression()");
    };
    this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
      if (DEBUG) {
        safe_print("<getField>")
        safe_print("base")
        safe_print(base)
        safe_print("offset: ");
        safe_print(offset);
        safe_print("value")
        safe_print(val);
//        safe_print("isComputed: " + isComputed);
//        safe_print("isOpAssign: " + isOpAssign);
//        safe_print("isMethodCall: " + isMethodCall);
      }
		var ret = captureSymbol(base, offset, val);
		if (ret)
			val = ret;

      //safe_print(symbol_dict);
      if (DEBUG) 
        safe_print("<getField> End")
//if (offset == 'document')
//safe_print(val);
      return {result: val}
    };

    this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
      if (DEBUG) {
        safe_print("<putFieldPre>")
//        safe_print("base:")
//        safe_print(base)
//        safe_print("offset: ");
//        safe_print(offset)
//        safe_print("val:")
//        safe_print(val)
//        safe_print("isComputed: " + isComputed)
//        safe_print("isOpAssign: " + isOpAssign)
      }
      if (typeof offset === 'object' && offset instanceof ConcolicValue) {
        offset = offset.getConcrete();
      }
      if (typeof val === 'object' && val instanceof ConcolicValue) {
        val = val.getConcrete();
      }
      if (DEBUG) {
//        safe_print("Final offset: ");
//        safe_print(offset)
        safe_print("<putFieldPre> End")
      }
      return {base: base, offset: offset, val: val, skip: false};

    };

    this.putField = function (iid, base, offset, val, isComputed, isOpAssign) {
      if (DEBUG) {
        safe_print("<putField>")
//        safe_print("base:")
//        safe_print(base)
//        safe_print("offset: ");
//        safe_print(offset)
//        safe_print("val")
//        safe_print(val)
//        safe_print("isComputed: " + isComputed)
//        safe_print("isOpAssign: " + isOpAssign)
        safe_print("<putField> End")
      }
      return {result: val};
    };


    this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal, withBase) {
      if (DEBUG) {
        safe_print("<write>")
//        safe_print("name: " + name)
//        safe_print("val:")
//        safe_print(val)
//        safe_print("(typeof: " + (!val ? 'NONE' : (typeof val === 'object' ? 'object - ' + val.constructor.name : typeof val)) + ")")
//        safe_print("lhs:")
//        safe_print(lhs)
//        safe_print("isGlobal: " + isGlobal)
//        safe_print("isScriptLocal: " + isScriptLocal)
        safe_print("<write> End")
      }

      if (typeof val === 'object' && val instanceof ConcolicValue) {
        val = val.getConcrete();
      }

      return {result: val};
    };


    this.read = function (iid, name, val, isGlobal, isScriptLocal, withBase) {
      if (DEBUG) {
        safe_print("<read>")
        safe_print("name: " + name)
        safe_print("val")
        safe_print(val)
      }

		if (withBase)
			captureSymbol(withBase, name, val);


      if (typeof val === 'object' && val instanceof ConcolicValue) {
        val = val.getConcrete();
      }

      if (DEBUG) 
        safe_print("<read> End")
      return {result: val};
    };


    this.getFieldPre = function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
      if (DEBUG) {
        safe_print("<getFieldPre>")
        safe_print("base:")
        safe_print(base)
        safe_print("offset: ");
        safe_print(offset)
//        safe_print("isComputed: " + isComputed)
//        safe_print("isOpAssign: " + isOpAssign)
//        safe_print("isMethodCall: " + isMethodCall)
      }

      if (typeof offset === 'object' && offset instanceof ConcolicValue) {
        offset = offset.getConcrete();
      }
      if (DEBUG) { 
        safe_print("<getFieldPre> End")
        safe_print("base:")
        safe_print(base)
        safe_print("offset: ");
        safe_print(offset)
		}
      return {base: base, offset: offset, skip: false};
    };


    this.invokeFunPre = function (iid, f, offset, base, args, isConstructor, isMethod, functionIid, functionSid, invokeFun_id) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "invokeFunPre()");
      if (DEBUG) {
        safe_print("<invokeFunPre> " + offset + " id=" + invokeFun_id)
//        safe_print("base:")
//        safe_print(base)
//        safe_print("offset: ");
//        safe_print(offset)
//        safe_print("f:")
//        safe_print(f)
//        safe_print("args:")
//        safe_print(args)
//			safe_print("invokeFun_id: " + invokeFun_id);
      }

      if (typeof base === 'object' && base instanceof ConcolicValue) {	
			// Example: var a = navigator.userAgent; a.toString(); -> must concretize 'a'
			//safe_print("Instanceof: base");
        f = base.getConcrete()[offset]
        base = base.getConcrete();
			if (f === undefined)
				safe_print("[WARNING] The base function " + offset + " does not exist for the concretized ConcolicValue");
				safe_print("base:");
				safe_print(base);
      }

      if (typeof f === 'object' && f instanceof ConcolicValue) {	
        // f가 기호/기호식인 경우는 없을 것임. 그래도 혹시 모르니 강제로 concretize함.
			//safe_print("Instanceof: f");
        //f = f.getConcrete();
			safe_print("[WARNING] Function " + offset + " is called, but it is ConcolicValue");
      }

      if (DEBUG) {       
//        safe_print(f)
//        safe_print("base Final:")
//        safe_print(base)
//        safe_print("isNativeFn: " + isNativeFn(f));
//        safe_print("isModeledFn: " + isModeledFn(f));
//			safe_print(invokeFun_id);
      }
      if (isNativeFn(f) && !isModeledFn(f) && no_dom_native_fn_str(f) !== undefined /*&& isArgContainsSymbol(args)*/) {
        /* 네이티브 함수가 모델링되지 않았으며, 실시간 DOM에 관련된 함수가 아니라서
                    나중에 기호식을 따로 재실행하면 똑같은 값을 얻을 수 있는 경우임.
                    이 경우에는 PC tree에서 새 경로 탐색으로 이어지는 조건분기점의 분석에
                    포함될 수 있는 네이티브 함수호출에 관한 기호식을 생성하도록 함.
                    이 기호식은 네이티브 함수 호출이 끝난 후 invokeFun 함수 안에서 되찾아서
                    네이티브함수의 리턴값을 ConcolicValue로 만들어서 그 안에 넣도록 함.
                */
        /* Create the symbolic expression of invokeFun */

        str_offset = ''
        try {
          if (typeof offset === 'symbol') {
            str_offset = origin_array_slice.call(origin_symbol_toString.call(offset), 7, -1);
          } else {
            //string 으로 암시적 변환
            str_offset = offset + '';
          }
        } catch (e) {
        }

        invokeFun_str = base.constructor.name + "." + str_offset + '(';
        for (var i = 0; i < args.length; i++) {
          var arg = args[i];

          if (arg instanceof ConcolicValue)
            arg_str = arg.getSymbolic();
          else if (typeof window !== 'undefined' && arg === window)
            arg_str = 'window';
          else if (typeof window !== 'undefined' && arg === document)
            arg_str = 'document';
          else if (typeof arg === 'object')
          /* !!!이 부분 구현 필요 !!!
                          객체 안을 재귀적으로 들어가서 stringify해야 하며
                          ConcolicValue를 만날 때마다 getSymbolic을 불러야 함  */
            arg_str = '';
          //arg_str = origin_json_stringify(arg);
          else if (typeof arg === 'function')
            arg_str = origin_obj_toString.call(arg);
          else if (typeof arg === 'symbol')
            arg_str = origin_symbol_toString.call(arg);
          else if (typeof arg === 'string')
            arg_str = '"' + arg + '"';
          else
            arg_str = origin_json_stringify(arg);
          invokeFun_str += arg_str;

          if (i + 1 != args.length)
            invokeFun_str += ",";
        }
        invokeFun_str += ')'

        obj_dict = [];
        isAnyConcolicValue = false;
//		if (offset === 'Bn') 
			if (DEBUG) 
				safe_print("Concretizing...");

//safe_print("Concretize Start");
        concretizeRecursive(args, 0, obj_dict, offset);
//safe_print("Concretize End");
        if (isAnyConcolicValue)
        {  native_invokeFun_dict[invokeFun_id] = invokeFun_str;
				//if (invokeFun_id == 1019)
//				{
//        safe_print("Dict f Final: " + invokeFun_id)
//        safe_print("Offset: " + offset)
        //safe_print(f)
        //safe_print("Dict base Final:")
        //safe_print(base)
        //safe_print("Dict isNativeFn: " + isNativeFn(f));
        //safe_print("Dict isModeledFn: " + isModeledFn(f));
//			safe_print(invokeFun_str);
//			safe_print(native_invokeFun_dict);
//				}
			}
      }
      if (DEBUG) {
//		if (offset === 'apply') { 
//        safe_print("arguments Final:")
//        safe_print(args)
        safe_print("<invokeFunPre> End")
      }
      //Error.stackTraceLimit = 500;
      // if (typeof window != 'undefined' && f === window.setTimeout)
      // {
      // }
      return {f: f, base: base, args: args, skip: false};
    };

    this.invokeFun = function (iid, f, offset, base, args, result, isConstructor, isMethod, functionIid, functionSid, invokeFun_id) {
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "invokeFun()");
      if (DEBUG) {
        safe_print("<invokeFun> " + offset + ", id=" + invokeFun_id)
//        safe_print("base:")
//        safe_print(base)
//        safe_print("f:")
//        safe_print(f)
//        safe_print("args:")
//        safe_print(args)
//        safe_print("result:")
//        safe_print(result)
      }
      if (typeof window === 'undefined')
        ;
      else if (base === Math && f === Math.random) // number
      {
        if (JALANGI_READ) safe_print("JALANGI_READ: Math.random()")
        //safe_print("Math Value: " + result);
        if (!('window_Math_random' in symbol_dict))
          symbol_dict['window_Math_random'] = [];
        origin_array_push.call(symbol_dict['window_Math_random'], result);
        result = new ConcolicValue(result, 'Math_random_' + symbol_dict['window_Math_random'].length);
      } else if (base === window.Date && f === window.Date.now) // number
      {
        if (JALANGI_READ) safe_print("JALANGI_READ: Date.now()");
        //safe_print("Date.now() Value: " + result);
        if (!('window_Date_now' in symbol_dict))
          symbol_dict['window_Date_now'] = [];
        origin_array_push.call(symbol_dict['window_Date_now'], result);
        result = new ConcolicValue(result, 'window_Date_now_' + symbol_dict['window_Date_now'].length);
      } else if (base === window.crypto && f === window.crypto.getRandomValues) // UintArray
      {
        if (JALANGI_READ) safe_print("JALANGI_READ: crypto.getRandomValues (function)");
        if (!('window_crypto_getRandomValues' in symbol_dict))
          symbol_dict['window_crypto_getRandomValues'] = [];
        origin_array_push.call(symbol_dict['window_crypto_getRandomValues'], result);
        result = new ConcolicValue(result, 'window_crypto_getRandomValues_' + symbol_dict['window_crypto_getRandomValues'].length);
      }
      /*else if (base === window && f === window.Date)
            {	//updateDict(iid, "endExpression()", line);
                if (!('window_Date' in symbol_dict))
                {	symbol_dict['window_Date'] = [];
                    safe_print("JALANGI_READ: new Date()");
                }
                symbol_dict['window_Date'].push(result);
                //val = new ConcolicValue(val, 'window_Date_' + symbol_dict['window_Date_'].length);
            }*/

      /**************** Date.prototype.* **********************/
      else if (f === window.Date.prototype.getTime || window.Date2 && f === window.Date2.prototype.getTime) // number
      {	//updateDict(iid, "endExpression()", line);
        //safe_print("JALANGI_READ: Date.getTime()");
        if ('window_Date_getTime' in symbol_dict && origin_array_includes.call(symbol_dict['window_Date_getTime'], base)) {
          if (!('window_Date_getTime' in symbol_dict)) {
            symbol_dict['window_Date_getTime'] = [];
            if (JALANGI_READ) safe_print("JALANGI_READ: Date.getTime()");
          }
          origin_array_push.call(symbol_dict['window_Date_getTime'], result);
          //safe_print("JALANGI_READ: Date.getTime() FOUND");
          //safe_print(base)
          result = new ConcolicValue(result, 'window_Date_getTime_' + symbol_dict['window_Date_'].length);
        }
      } else if (invokeFun_id in native_invokeFun_dict) // return value of a native call whose arguments contained a symbol
      {	/* 이전 invokeFunPre에서 네이티브 함수의 기호식을 생성했을 경우 그것을 불러들여서 사용하기.
					  현 코드 구조라면 async에 의해서 같은 코드가 여러 코드들에 의해 중복 실행되더라도
						race condition이 발생되지 않을 것임.
					*/
        result = new ConcolicValue(result, native_invokeFun_dict[invokeFun_id]);
//		safe_print("Find Dictionary " + invokeFun_id);
//			safe_print(native_invokeFun_dict);
      }
      if (DEBUG) 
			safe_print("<invokeFun> End")
		
      return {result: result};
    };

    this.binaryPre = function (iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) {
      if (DEBUG) {
        safe_print("<binaryPre>")
//        safe_print("op: " + op)
//        safe_print("left:")
//        safe_print(left)
//        safe_print("right:")
//        safe_print(right)
//        safe_print("isOpAssign: " + isOpAssign)
//        safe_print("isSwitchCaseComparison: " + isSwitchCaseComparison)
//        safe_print("isComputed: " + isComputed)
      }
      var isSymbolic = false;

      if (op === 'instanceof' && typeof right === 'function' && right === Date)
        right = Date2;

      if (typeof left === 'object' && left instanceof ConcolicValue || typeof right === 'object' && right instanceof ConcolicValue)
        isSymbolic = true;

      if (DEBUG) {
        safe_print("<binaryPre> End")
		}
      return {op: op, left: left, right: right, skip: isSymbolic};
    };


    this.binary = function (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) {

      if (!(typeof left === 'object' && left instanceof ConcolicValue) && !(typeof right === 'object' && right instanceof ConcolicValue))
        return {result: result};

      if (DEBUG) {
        safe_print("<binary>")
//        safe_print("op: " + op)
//        safe_print("left:")
//        safe_print(left)
//        safe_print("left type: " + (left ? typeof left === 'object' ? left.constructor.name : typeof left : 'NONE'))
        //safe_print("left concolic: " + left instanceof ConcolicValue)
//        safe_print("right:")
//        safe_print(right)
//        safe_print("right type: " + (right ? typeof right === 'object' ? right.constructor.name : typeof right : 'NONE'))
        //safe_print("right concolic: " + right instanceof ConcolicValue)
//        safe_print("result:")
//        safe_print(result)
//        safe_print("isOpAssign: " + isOpAssign)
//        safe_print("isSwitchCaseComparison: " + isSwitchCaseComparison)
//        safe_print("isComputed: " + isComputed)
      }

      var concrete_left, concrete_right, symbolic_left, symbolic_right;
      var isSymbolic = false;

      var concrete_left_right = [], symbolic_left_right = []
      var left_right = []
      origin_array_push.call(left_right, left);
      origin_array_push.call(left_right, right);

      for (var i = 0; i < 2; i++) {
        //safe_print("I = " + i);
        if (typeof left_right[i] === 'object' && left_right[i] instanceof ConcolicValue) {
          origin_array_push.call(concrete_left_right, left_right[i].getConcrete());
          origin_array_push.call(symbolic_left_right, left_right[i].getSymbolic());
          isSymbolic = true;
        } else {
          //safe_print("Not Concolic");
          //safe_print(left_right[i]);
          origin_array_push.call(concrete_left_right, left_right[i]);
          if (typeof left_right[i] === 'object')
            origin_array_push.call(symbolic_left_right, origin_json_stringify(left_right[i]));
          else if (typeof left_right[i] === 'function')
            origin_array_push.call(symbolic_left_right, origin_obj_toString.call(left_right[i]));
          else if (typeof left_right[i] === 'symbol')
            origin_array_push.call(symbolic_left_right, origin_symbol_toString.call(left_right[i]));
          else if (typeof left_right[i] === 'string')
            origin_array_push.call(symbolic_left_right, '"' + left_right[i] + '"');
          else
            origin_array_push.call(symbolic_left_right, left_right[i]);
        }
      }

      if (DEBUG) {
//        safe_print('symbolic_left: ' + symbolic_left_right[0]);
//        safe_print('symbolic_right: ' + symbolic_left_right[1]);
//        safe_print('concrete_left: ' + concrete_left_right[0]);
//        safe_print('concrete_right: ' + concrete_left_right[1]);
      }

      if (isSymbolic) {
        var concrete_result = computeBinary(concrete_left_right[0], op, concrete_left_right[1]);
        var symbolic_result = "(" + symbolic_left_right[0] + " " + op + " " + symbolic_left_right[1] + ")";
        result = new ConcolicValue(concrete_result, symbolic_result);
      }

      if (DEBUG) {
        safe_print("<binary> End")
//        safe_print("Final Result:")
//        safe_print(result)
      }
      return {result: result};
    };


    this.unary = function (iid, op, left, result) {
      /*safe_print("<unary>")
            safe_print("op: " + op)
            safe_print("left:")
            safe_print(left)
            safe_print("result:")
            safe_print(result)
*/
      return {result: result};
    };


    /**
     * onReady is useful if your analysis is running on node.js (i.e., via the direct.js or jalangi.js commands)
     * and needs to complete some asynchronous initialization before the instrumented program starts.  In such a
     * case, once the initialization is complete, invoke the cb function to start execution of the instrumented
     * program.
     *
     * Note that this callback is not useful in the browser, as Jalangi has no control over when the
     * instrumented program runs there.
     * @param cb
     */
    this.onReady = function (cb) {
		//sorted_keys = Object.keys(dict).sort()
		//for (var key in sorted_keys)
		//{	safe_print(dict[key] + " : " + key);
		//}
      cb();
		safe_print("onReady() is called (finished)");
		if (typeof window !== 'undefined')
		safe_print("JALANGI_FINAL_COOKIE: " + document.cookie);
		/*
		var items = Object.keys(dict).map( function(key) 
				{ return [key, dict[key]]; });
		items.sort( function(first, second) { return first[1] - second[1]; }); 
		safe_print(items);
		*/
    };
  }

  sandbox.analysis = new MyAnalysis();
})(JALANGI_$);


// node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/tutorial/LogAll.js tests/octane/deltablue.js

};