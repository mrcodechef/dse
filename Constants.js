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

