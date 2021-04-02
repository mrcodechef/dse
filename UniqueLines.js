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
				console.log("(sid,iid,lines,unique)=(" + J$.sid + "," + iid + "," + total_lines +"," + Object.keys(dict).length + "), " + type + " at " + line);
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
				{	//PrintInfo(iid, "endExpression()", line);
					if (!this.isDate)
						console.log("JALANGI_READ: Date.now (new Date())");
					this.isDate = true;
//Error.stackTraceLimit = 20;
// { var err = new Error(); console.log(err.stack); }
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
        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
            if (DEBUG)
            {  console.log("<write>")
               console.log("name: " + name)
               console.log("val:")
               console.log(val)
               console.log("(typeof: " + (!val ? 'NONE' :  (typeof val == 'object' ?  'object - ' + val.constructor.name : typeof val)) + ")")
               console.log("lhs:")
               console.log(lhs)
               console.log("isGlobal: " + isGlobal)
               console.log("isScriptLocal: " + isScriptLocal)
            }
            return {result: val};
           };

    sandbox.analysis = new MyAnalysis();
})(J$);


// node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/tutorial/LogAll.js tests/octane/deltablue.js

