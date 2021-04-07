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


if (typeof origin_number_toString === 'undefined')
   origin_number_toString = Number.prototype.toString;

if (typeof origin_obj_hasOwnProperty === 'undefined')
   origin_obj_hasOwnProperty = Object.prototype.hasOwnProperty;

if (typeof origin_obj_defineProperty === 'undefined')
   origin_obj_defineProperty =  Object.defineProperty;

if (typeof origin_obj_getOwnPropertyDescriptor  === 'undefined')
   origin_obj_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

if (typeof origin_obj_values === 'undefined')
   origin_obj_values = Object.values;

if (typeof origin_obj_toString === 'undefined')
   origin_obj_toString = Object.prototype.toString;

if (typeof origin_obj_keys === 'undefined')
   origin_obj_keys = Object.keys;


if (typeof origin_array_includes === 'undefined')
   origin_array_includes = Array.prototype.includes;

if (typeof origin_array_push === 'undefined')
   origin_array_push = Array.prototype.push;

if (typeof origin_array_pop === 'undefined')
   origin_array_pop = Array.prototype.pop;

if (typeof origin_array_slice === 'undefined')
   origin_array_slice = Array.prototype.slice;

if (typeof origin_array_join === 'undefined')
   origin_array_join = Array.prototype.join;

if (typeof origin_array_forEach === 'undefined')
   origin_array_forEach = Array.prototype.forEach

if (typeof origin_array_map === 'undefined')
   origin_array_map = Array.prototype.map

if (typeof origin_array_concat === 'undefined')
   origin_array_concat = Array.prototype.concat

if (typeof origin_array_shift === 'undefined')
   origin_array_shift = Array.prototype.shift

if (typeof origin_array_unshift === 'undefined')
   origin_array_unshift = Array.prototype.unshift

if (typeof origin_array_isArray === 'undefined')
   origin_array_isArray = Array.isArray

if (typeof origin_array_reverse === 'undefined')
   origin_array_reverse = Array.prototype.reverse

if (typeof origin_array_splice === 'undefined')
   origin_array_splice = Array.prototype.splice

if (typeof origin_array_find === 'undefined')
   origin_array_find = Array.prototype.find

if (typeof origin_fn_apply === 'undefined')
   origin_fn_apply = Function.prototype.apply;

if (typeof origin_fn_toString === 'undefined')
   origin_fn_toString = Function.prototype.toString;

if (typeof origin_symbol_toString === 'undefined')
   origin_symbol_toString = Symbol.prototype.toString;


if (typeof origin_str_search === 'undefined')
   origin_str_search = String.prototype.search;

if (typeof origin_str_includes === 'undefined')
   origin_str_includes = String.prototype.includes;

if (typeof origin_str_indexOf === 'undefined')
   origin_str_indexOf = String.prototype.indexOf;

if (typeof origin_str_split === 'undefined')
   origin_str_split = String.prototype.split

if (typeof origin_str_substring === 'undefined')
   origin_str_substring = String.prototype.substring;

if (typeof origin_str_replace === 'undefined')
   origin_str_replace = String.prototype.replace;

if (typeof origin_json_stringify === 'undefined')
   origin_json_stringify = JSON.stringify;

if (typeof origin_json_parse === 'undefined')
   origin_json_parse = JSON.parse;

if (typeof regexp_exec === 'undefined')
   origin_regexp_exec = RegExp.prototype.exec;

if (typeof origin_regexp_test === 'undefined')
   origin_regexp_test = RegExp.prototype.test;


if (typeof origin_Date === 'undefined')
   origin_Date = Date;

if (typeof origin_Date_now === 'undefined')
   origin_Date_now = Date.now;

if (typeof origin_Date_getTime === 'undefined')
   origin_Date_getTime = Date.prototype.getTime;

if (typeof origin_Date_setTime === 'undefined')
   origin_Date_setTime = Date.prototype.setTime;

if (typeof origin_Date_getUTCFullYear === 'undefined')
   origin_Date_getUTCFullYear = Date.prototype.UTCFullYear;

if (typeof origin_Date_toGMTString === 'undefined')
   origin_Date_toGMTString = Date.prototype.toGMTString;

if (typeof origin_Date_parse === 'undefined')
   origin_Date_parse = Date.parse;

if (typeof origin_Date_UTC === 'undefined')
   origin_Date_UTC = Date.UTC;

if (typeof origin_Math === 'undefined')
   origin_Math = Math;

if (typeof origin_Math_random === 'undefined')
   origin_Math_random = Math.random;

if (typeof crypto !== 'undefined' && typeof origin_crypto === 'undefined')
   origin_crypto = crypto

if (typeof crypto !== 'undefined' && typeof origin_crypto_getRandomValues === 'undefined')
   origin_crypto_getRandomValues = crypto.getRandomValues

if (typeof origin_console_log === 'undefined')
   origin_console_log = console.log;

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

function safe_json_stringify(value) {
	if (!value)
		return value;

safe_print(value);
	var key_array = origin_obj_keys(value);
safe_print(key_array);
safe_print(key_array[key_array.length - 1]);
   const lastKey = origin_array_pop.call(key_array);
   let objString = '';    
	if (typeof value === 'object') {
        // We add the first curly brace
      objString += '{';        
		for (const key in value) {
         objString += `"${key}":${stringify(value[key])}`;
            
         // We add the comma
         if (key !== lastKey) {
               objString += ',';
         }
      }        // We add the last curly brace
        objString += '}';

    } else if (typeof value === 'string') {
        objString += `"${value}"`;
    } else if (typeof value === 'number') {
        objString += `${value}`;
    }    return objString;
}


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

