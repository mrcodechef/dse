
var init_js_file_contents = `

var screen_width = 800
var screen_height = 600
var screen_availWidth = 800
var screen_availHeight = 600
var screen_colorDepth = 24
var screen_pixelDepth = 24
var navigator_userAgent = "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36"
var navigator_platform = "Linux armv7l"
var document_cookie = "";
var document_referrer = document.referrer
var document_lastModified = document.lastModified
var Math_random = 0.1;        
var crypto_getRandomValues = 1;  
var Date_now = 30000000;
var document_documentElement_offsetWidth = document.documentElement.offsetWidth
var document_documentElement_scrollWidth = document.documentElement.scrollWidth
var document_documentElement_clientWidth = document.documentElement.clientWidth
var document_documentElement_offsetHeight = document.documentElement.offsetHeight
var document_documentElement_scrollHeight = document.documentElement.scrollHeight
var document_documentElement_clientHeight = document.documentElement.clientHeight
var document_documentElement_offsetLeft = document.documentElement.offsetLeft
var document_documentElement_scrollLeft = document.documentElement.scrollLeft
var document_documentElement_clientLeft = document.documentElement.clientLeft
var document_documentElement_offsetTop = document.documentElement.offsetTop
var document_documentElement_scrollTop = document.documentElement.scrollTop
var document_documentElement_clientTop = document.documentElement.clientTop

if (!window.is_head_init)
{
	window.is_head_init = 1;
	Object.defineProperty(window.screen, 'width', {
		value: screen_width, /*VALUE*/
		writable: false,
		configurable: true
	});

	Object.defineProperty(window.screen, 'height', {
		value: screen_height, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(window.screen, 'availWidth', {
		value: screen_availWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(window.screen, 'availHeight', {
		value: screen_availHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(window.screen, 'colorDepth', {
		value: screen_colorDepth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(window.screen, 'pixelDepth', {
		value: screen_pixelDepth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(navigator, 'userAgent', {
		value: navigator_userAgent, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(navigator, 'platform', {
		value: navigator_platform, /*VALUE*/
		writable: false,
		configurable: true
	});

	/*Object.defineProperty(location, 'origin', {
	//   value: 'some_origin', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});*/
	//Object.defineProperty(location, 'host', {
	//   value: 'some_host', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});
	//Object.defineProperty(location, 'href', {
	//   value: 'some_href', /*VALUE*/
	//   writable: false,
	//   configurable: true
	//});

	function createCookie(name,value,days) {
		 if (days) {
			  var date = new Date();
			  date.setTime(date.getTime()+(days*24*60*60*1000));
			  var expires = "; expires="+date.toGMTString();
		 }
		 else var expires = "";
		if (value)
			document.cookie = name + "=" + value+expires + "; path=/";
		else
		 document.cookie = name + "; path=/";
	}

	function eraseCookie(name) {
		createCookie(name,"",-1);
	}

	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++)
		if (cookies[i] != '')
		eraseCookie(cookies[i].split("=")[0]);

	cookies = document_cookie.split(";");
	for (var i = 0; i < cookies.length; i++)
	{	if (cookies[i] != '') 
			createCookie(cookies[i].split("=")[0], cookies[i].split("=")[1]);
	}
	Object.defineProperty(document, 'referrer', {
		value: document_referrer, /*VALUE*/
		writable: false,
		configurable: true
	});

	Object.defineProperty(document, 'lastModified', {
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
	Object.defineProperty(Math, "random", {
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
					if (arguments.length == 0)
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

	Object.defineProperty(document.documentElement, 'offsetWidth', {
		value: document_documentElement_offsetWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'offsetHeight', {
		value: document_documentElement_offsetHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'offsetLeft', {
		value: document_documentElement_offsetLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'offsetTop', {
		value: document_documentElement_offsetTop, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'scrollWidth', {
		value: document_documentElement_scrollWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'scrollHeight', {
		value: document_documentElement_scrollHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'scrollLeft', {
		value: document_documentElement_scrollLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'scrollTop', {
		value: document_documentElement_scrollTop, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'clientWidth', {
		value: document_documentElement_clientWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'clientHeight', {
		value: document_documentElement_clientHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'clientLeft', {
		value: document_documentElement_clientLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.documentElement, 'clientTop', {
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
	Object.defineProperty(document.body, 'offsetWidth', {
		value: document_body_offsetWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'offsetHeight', {
		value: document_body_offsetHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'offsetLeft', {
		value: document_body_offsetLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'offsetTop', {
		value: document_body_offsetTop, /*VALUE*/
		writable: false,
		configurable: true
	});

	Object.defineProperty(document.body, 'scrollWidth', {
		value: document_body_scrollWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'scrollHeight', {
		value: document_body_scrollHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'scrollLeft', {
		value: document_body_scrollLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'scrollTop', {
		value: document_body_scrollTop, /*VALUE*/
		writable: false,
		configurable: true
	});

	Object.defineProperty(document.body, 'clientWidth', {
		value: document_body_clientWidth, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'clientHeight', {
		value: document_body_clientHeight, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'clientLeft', {
		value: document_body_clientLeft, /*VALUE*/
		writable: false,
		configurable: true
	});
	Object.defineProperty(document.body, 'clientTop', {
		value: document_body_clientTop, /*VALUE*/
		writable: false,
		configurable: true
	});

}


`

init_js_file_contents += `

if (typeof J$ === 'undefined') {
    J$ = {};
	window.J$ = J$;
}

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


    var PREFIX1 = Constants.JALANGI_VAR = "J$";
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
        if (typeof Object.getOwnPropertyDescriptor !== 'function') {
            return true;
        }
        while (obj !== null) {
            if (typeof obj !== 'object' && typeof obj !== 'function') {
                return false;
            }
            var desc = Object.getOwnPropertyDescriptor(obj, prop);
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

})(J$);


// exports J$.instrumentCode
// exports J$.instrumentEvalCode
// depends on babel
// depends on acorn
// depends on esotope
// depends on J$.Constants
// depends on J$.Config
// depends on J$.astUtil
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

if (typeof J$ === 'undefined') {
    J$ = {};
}

(function (sandbox) {
    if (typeof sandbox.iidToLocation !== 'undefined') {
        return;
    }

    sandbox.iidToLine = function (sid, iid) {
        var ret, arr, gid=sid;
        if (sandbox.smap) {
            if (typeof sid === 'string' && sid.indexOf(':')>=0) {
                sid = sid.split(':');
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
                        return "<a href=\\"javascript:iidToDisplayCodeLocation('"+gid+"');\\">(" + fname + ":" + arr[0] + ":" + arr[1] + ":" + arr[2] + ":" + arr[3] + ")</a>";
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
            if (typeof sid === 'string' && sid.indexOf(':')>=0) {
                sid = sid.split(':');
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
                        return "<a href=\\"javascript:iidToDisplayCodeLocation('"+gid+"');\\">(" + fname + ":" + arr[0] + ":" + arr[1] + ":" + arr[2] + ":" + arr[3] + ")</a>";
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

}(J$));
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
// create / reset J$ global variable to hold analysis runtime
if (typeof J$ === 'undefined') {
    J$ = {};
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

    function getPropSafe(base, prop){
      if(base === null || base === undefined){
        return undefined;
      }
      return base[prop];
    }

    function decodeBitPattern(i, len) {
        var ret = new Array(len);
        for (var j=0; j<len; j++) {
            var val = (i & 1)?true:false;
            ret[len - j -1] = val;
            i = i >> 1;
        }
        return ret;
    }

    function createBitPattern() {
        var ret = 0;
        var i;
        for (i =0; i< arguments.length; i++) {
            ret = (ret << 1)+(arguments[i]?1:0);
        }
        return ret;
    }


    var sidStack = [], sidCounter = 0;

    function createAndAssignNewSid() {
        sidStack.push(sandbox.sid);
        sandbox.sid = sidCounter = sidCounter + 1;
        if (!sandbox.smap) sandbox.smap = {};
        sandbox.smap[sandbox.sid] = sandbox.iids;
    }

    function rollBackSid() {
        sandbox.sid = sidStack.pop();
    }

    function associateSidWithFunction(f, iid) {
        if (typeof f === 'function') {
            if (Object && Object.defineProperty && typeof Object.defineProperty === 'function') {
                Object.defineProperty(f, SPECIAL_PROP_SID, {
                    enumerable:false,
                    writable:true
                });
                Object.defineProperty(f, SPECIAL_PROP_IID, {
                    enumerable:false,
                    writable:true
                });
            }
            f[SPECIAL_PROP_SID] = sandbox.sid;
            f[SPECIAL_PROP_IID] = iid;
        }
    }

    function updateSid(f) {
        sidStack.push(sandbox.sid);
        sandbox.sid = getPropSafe(f, SPECIAL_PROP_SID);
    }


    // unused
    function isNative(f) {
        return f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0;
    }

    function callAsNativeConstructorWithEval(Constructor, args) {
        var a = [];
        for (var i = 0; i < args.length; i++)
            a[i] = 'args[' + i + ']';
        var eval = EVAL_ORG;
        return eval('new Constructor(' + a.join() + ')');
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
        for (var i = 0; i < args.length-1; i++) {
            newArgs[i] = args[i];
        }
        var code = '(function(' + newArgs.join(', ') + ') { ' + args[args.length-1] + ' })';
        var code = sandbox.instrumentEvalCode(code, iid, false);
        // Using EVAL_ORG instead of eval() is important as it preserves the scoping semantics of Function()
        var out = EVAL_ORG(code);
        return out;
    }

    function callFun(f, base, args, isConstructor, iid) {
        var result;
        pushSwitchKey();
        try {
            if (f === EVAL_ORG) {
                result = invokeEval(base, f, args, iid);
            } else if (f === Function) {
                result = invokeFunctionDecl(base, f, args, iid);
            } else if (isConstructor) {
                result = callAsConstructor(f, args);
            } else {
                result = Function.prototype.apply.call(f, base, args);
            }
            return result;
        } finally {
            popSwitchKey();
        }
    }

    function invokeFun(iid, base, f, args, isConstructor, isMethod) {
        var aret, skip = false, result;

        if (sandbox.analysis && sandbox.analysis.invokeFunPre) {
            aret = sandbox.analysis.invokeFunPre(iid, f, base, args, isConstructor, isMethod, getPropSafe(f, SPECIAL_PROP_IID), getPropSafe(f, SPECIAL_PROP_SID));
            if (aret) {
                f = aret.f;
                base = aret.base;
                args = aret.args;
                skip = aret.skip;
            }
        }
        if (!skip) {
            result = callFun(f, base, args, isConstructor, iid);
        }
        if (sandbox.analysis && sandbox.analysis.invokeFun) {
            aret = sandbox.analysis.invokeFun(iid, f, base, args, result, isConstructor, isMethod, getPropSafe(f, SPECIAL_PROP_IID), getPropSafe(f, SPECIAL_PROP_SID));
            if (aret) {
                result = aret.result;
            }
        }
        return result;
    }

    // Function call (e.g., f())
    function F(iid, f, flags) {
        var bFlags = decodeBitPattern(flags, 1); // [isConstructor]
        return function () {
            var base = this;
            return (lastComputedValue = invokeFun(iid, base, f, arguments, bFlags[0], false));
        }
    }

    // Method call (e.g., e.f())
    function M(iid, base, offset, flags) {
        var bFlags = decodeBitPattern(flags, 2); // [isConstructor, isComputed]
        var f = G(iid + 2, base, offset, createBitPattern(bFlags[1], false, true));
        return function () {
            return (lastComputedValue = invokeFun(iid, base, f, arguments, bFlags[0], true));
        };
    }

    // Ignore argument (identity).
    function I(val) {
        return val;
    }

    var hasGetOwnPropertyDescriptor = typeof Object.getOwnPropertyDescriptor === 'function';
    // object/function/regexp/array Literal
    function T(iid, val, type, hasGetterSetter, internalIid) {
        var aret;
        associateSidWithFunction(val, internalIid);
        if (hasGetterSetter) {
            for (var offset in val) {
                if (hasGetOwnPropertyDescriptor && val.hasOwnProperty(offset)) {
                    var desc = Object.getOwnPropertyDescriptor(val, offset);
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
		if (typeof base == 'undefined' && typeof window != 'undefined') base = window;
        var bFlags = decodeBitPattern(flags, 3); // [isComputed, isOpAssign, isMethodCall]

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
	if (typeof base == 'undefined' && typeof window != 'undefined') base = window;       
 
	var bFlags = decodeBitPattern(flags, 2); // [isComputed, isOpAssign]

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

    // variable write
    // isGlobal means that the variable is global and not declared as var
    // isScriptLocal means that the variable is global and is declared as var
    function R(iid, name, val, flags) {
        var aret;
        var bFlags = decodeBitPattern(flags, 2); // [isGlobal, isScriptLocal]

        if (sandbox.analysis && sandbox.analysis.read) {
            aret = sandbox.analysis.read(iid, name, val, bFlags[0], bFlags[1]);
            if (aret) {
                val = aret.result;
            }
        }
        return (lastComputedValue = val);
    }

    // variable write
    function W(iid, name, val, lhs, flags) {
        var bFlags = decodeBitPattern(flags, 3); //[isGlobal, isScriptLocal, isDeclaration]
        var aret;
        if (sandbox.analysis && sandbox.analysis.write) {
            aret = sandbox.analysis.write(iid, name, val, lhs, bFlags[0], bFlags[1]);
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
        wrappedExceptionVal = {exception:e};
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
        returnStack.pop();
        returnStack.push(val);
        return (lastComputedValue = val);
    }

    // Actual return from function, invoked from 'finally' block
    // added around every function by instrumentation.  Reads
    // the return value stored by call to Rt()
    function Ra() {
        var returnVal = returnStack.pop();
        wrappedExceptionVal = undefined;
        return returnVal;
    }

    // Function enter
    function Fe(iid, f, dis /* this */, args) {
        argIndex = 0;
        returnStack.push(undefined);
        wrappedExceptionVal = undefined;
        updateSid(f);
        if (sandbox.analysis && sandbox.analysis.functionEnter) {
            sandbox.analysis.functionEnter(iid, f, dis, args);
        }
    }

    // Function exit
    function Fr(iid) {
        var isBacktrack = false, tmp, aret, returnVal;

        returnVal = returnStack.pop();
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
            returnStack.push(returnVal);
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
        var oprnd1 = G(iid+2, base, offset, createBitPattern(bFlags[0], true, false));
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
                    result = void(left);
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
        switchKeyStack.push(switchLeft);
    }

    function popSwitchKey() {
        switchLeft = switchKeyStack.pop();
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
        result = B(iid+1, "===", switchLeft, right, createBitPattern(false, false, true));

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
            sandbox.Results.execute(function(div, jquery, editor){
                div.append(str+"<br>");
            });
        } else {
            console.log(str);
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
})(J$);

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

(function (sandbox) {
    function MyAnalysis() {
			dict = {};
			prev_line = -1;
			total_lines = 0;
			cur_line = -1;
			function updateLineInfo (line)
			{
				this.cur_line = line.split(':').pop();
				if (this.prev_line != this.cur_line)
				{	this.prev_line = this.cur_line;
					this.total_lines++;
				}
			}
			function PrintInfo(iid, type, line)
			{
				console.log("(sid,iid,lines,unique)=(" + J$.sid + "." + iid + "," + total_lines +"," + Object.keys(dict).length + "), " + type + " at " + line);
			}
        this.scriptEnter = function (iid, instrumentedFileName, originalFileName) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "scriptEnter()", line);
				}
        };

        this.scriptExit = function (iid, wrappedExceptionVal) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "scriptExit()", line);
				}
            return {wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };



        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "invokeFun()", line);
				}
            return {result: result};
        };


        this.forinObject = function (iid, val) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "forinObject()", line);
				}
            return {result: val};
        };

        this.declare = function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "declare()", line);
				}
            return {result: val};
        };


        this._return = function (iid, val) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "return()", line);
				}
            return {result: val};
        };

        this._throw = function (iid, val) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "throw()", line);
				}
            return {result: val};
        };

        this._with = function (iid, val) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "with()", line);
				}
            return {result: val};
        };

        this.functionEnter = function (iid, f, dis, args) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "functionEnter()", line);
				}
        };

        this.functionExit = function (iid, returnVal, wrappedExceptionVal) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "functionExit()", line);
				}
            return {returnVal: returnVal, wrappedExceptionVal: wrappedExceptionVal, isBacktrack: false};
        };


        this.conditional = function (iid, result) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				updateLineInfo(line);
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "conditional()", line);
				}
            return {result: result};
        };


        this.endExpression = function (iid) {
				line = J$.iidToLine(J$.sid, iid);
				loc = J$.iidToLocation(J$.sid, iid);
				if (prev_line != cur_line)
				{	prev_line = cur_line;
					total_lines++;
				}
				if (!(line in dict))
				{	dict[line] = true;
					PrintInfo(iid, "endExpression()", line);
				}
			};
        this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
				loc = J$.iidToLocation(J$.sid, iid);
            //console.log("getField() at " + J$.iidToLocation(J$.sid, iid));
				//PrintInfo(iid, "getField()", line);
			
				if (typeof window == 'undefined')
					;
				else if (base == window.screen && offset == 'width')
					console.log("JALANGI_READ: screen.width");
				else if (base == window.screen && offset == 'height')
					console.log("JALANGI_READ: screen.height");
				else if (base == window.screen && offset == 'availWidth')
					console.log("JALANGI_READ: screen.availWidth");
				else if (base == window.screen && offset == 'availHeight')
					console.log("JALANGI_READ: screen.availHeight");
				else if (base == window.screen && offset == 'colorDepth')
					console.log("JALANGI_READ: screen.colorDepth");
				else if (base == window.screen && offset == 'pixelDepth')
					console.log("JALANGI_READ: screen.pixelDepth");
				else if (base == window.navigator && offset == 'userAgent')
					console.log("JALANGI_READ: navigator.userAgent");
				else if (base == window.navigator && offset == 'platform')
					console.log("JALANGI_READ: navigator.platform");
				else if (base == window.document && offset == 'cookie')
					console.log("JALANGI_READ: document.cookie");
				else if (base == window.document && offset == 'referrer')
					console.log("JALANGI_READ: document.referrer");
				else if (base == window.document && offset == 'lastModified')
					console.log("JALANGI_READ: document.lastModified");
				else if (base == window.document.documentElement && offset == 'offsetWidth')
					console.log("JALANGI_READ: document.documentElement.offsetWidth");
				else if (base == window.document.documentElement && offset == 'offsetHeight')
					console.log("JALANGI_READ: document.documentElement.offsetHeight");
				else if (base == window.document.documentElement && offset == 'offsetLeft')
					console.log("JALANGI_READ: document.documentElement.offsetLeft");
				else if (base == window.document.documentElement && offset == 'offsetTop')
					console.log("JALANGI_READ: document.documentElement.offsetTop");
				else if (base == window.document.documentElement && offset == 'scrollWidth')
					console.log("JALANGI_READ: document.documentElement.scrollWidth");
				else if (base == window.document.documentElement && offset == 'scrollHeight')
					console.log("JALANGI_READ: document.documentElement.scrollHeight");
				else if (base == window.document.documentElement && offset == 'scrollLeft')
					console.log("JALANGI_READ: document.documentElement.scrollLeft");
				else if (base == window.document.documentElement && offset == 'scrollTop')
					console.log("JALANGI_READ: document.documentElement.scrollTop");
				else if (base == window.document.documentElement && offset == 'clientWidth')
					console.log("JALANGI_READ: document.documentElement.clientWidth");
				else if (base == window.document.documentElement && offset == 'clientHeight')
					console.log("JALANGI_READ: document.documentElement.clientHeight");
				else if (base == window.document.documentElement && offset == 'clientLeft')
					console.log("JALANGI_READ: document.documentElement.clientLeft");
				else if (base == window.document.documentElement && offset == 'clientTop')
					console.log("JALANGI_READ: document.documentElement.clientTop");
				else if (window.document.body && base == window.document.body && offset == 'offsetWidth')
					console.log("JALANGI_READ: document.body.offsetWidth");
				else if (window.document.body && base == window.document.body && offset == 'offsetHeight')
					console.log("JALANGI_READ: document.body.offsetHeight");
				else if (window.document.body && base == window.document.body && offset == 'offsetLeft')
					console.log("JALANGI_READ: document.body.offsetLeft");
				else if (window.document.body && base == window.document.body && offset == 'offsetTop')
					console.log("JALANGI_READ: document.body.offsetTop");
				else if (window.document.body && base == window.document.body && offset == 'scrollWidth')
					console.log("JALANGI_READ: document.body.scrollWidth");
				else if (window.document.body && base == window.document.body && offset == 'scrollHeight')
					console.log("JALANGI_READ: document.body.scrollHeight");
				else if (window.document.body && base == window.document.body && offset == 'scrollLeft')
					console.log("JALANGI_READ: document.body.scrollLeft");
				else if (window.document.body && base == window.document.body && offset == 'scrollTop')
					console.log("JALANGI_READ: document.body.scrollTop");
				else if (window.document.body && base == window.document.body && offset == 'clientWidth')
					console.log("JALANGI_READ: document.body.clientWidth");
				else if (window.document.body && base == window.document.body && offset == 'clientHeight')
					console.log("JALANGI_READ: document.body.clientHeight");
				else if (window.document.body && base == window.document.body && offset == 'clientLeft')
					console.log("JALANGI_READ: document.body.clientLeft");
				else if (window.document.body && base == window.document.body && offset == 'clientTop')
					console.log("JALANGI_READ: document.body.clientTop");

				else if (val == Math.random)
					console.log("JALANGI_READ: Math.random (function)")
				else if (val == Date.now)
					console.log("JALANGI_READ: Date.now (function)");
				else if (val == window.crypto.getRandomValues)
					console.log("JALANGI_READ: crypto.getRandomValues (function)");
				 
           return {result: val};
        };
         this.isDate = false;
        this.read = function (iid, name, val, isGlobal, isScriptLocal) {
            if (typeof window != 'undefined' && val == Date)
            {  
               if (!this.isDate)
                  console.log("JALANGI_READ: Date.now (new Date())");
               this.isDate = true
            }
            return {result: val};
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
            cb();
        };
    }

    sandbox.analysis = new MyAnalysis();
})(J$);


`

