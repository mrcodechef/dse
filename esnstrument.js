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

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/*jslint node: true browser: true */
/*global babel astUtil acorn esotope JALANGI_$ */



if (typeof window !== 'undefined')
{  var acorn_browser = require('acorn');
}
if (typeof window !== 'undefined')
{  var esotope_browser = require('esotope');
}
if (typeof window !== 'undefined')
{  var babel_browser = require('@babel/core');
}

//if (typeof window !== 'undefined')
//{ 
	 var lodash_esnstrument = require('lodash');
//}



var log_filename;// = (new origin_Date()).getTime();

function log (arg) {
  //safe_print('esnstrument.js log: '+ arg);
  if (typeof window === 'undefined') {
//    fs_esnstrument.appendFileSync('logs/server/' + log_filename + '.txt', origin_obj_toString(arg));
  }
}

var acorn_final = (typeof acorn !== 'undefined' ? acorn : acorn_browser);
var esotope_final = (typeof esotope !== 'undefined' ? esotope : esotope_browser);
var babel_final = (typeof babel !== 'undefined' ? babel : babel_browser);




if (typeof window === 'undefined') {
  //var browserify_string = require('browserify-string');
//  var browserify = require('browserify');
  var fs_esnstrument = require('fs');
}

//var StatCollector = require('../utils/StatCollector');
if (typeof JALANGI_$ === 'undefined') {
  JALANGI_$ = {};
}

(function (sandbox) {
  
  if (typeof sandbox.instrumentCode !== 'undefined') {
    return;
  }
  
  function es6Transform(code) {
    //  safe_print('Transforming');
    //  safe_print('Transforming');
const jsesc = require('jsesc');

    if (typeof (babel_final) !== 'undefined' && !process.env['NO_ES7']) {
      var options = {
        retainLines: true,
        compact: false,
        sourceType: 'unambiguous',
        sourceMaps: true,
        presets: [ ['@babel/preset-env', 
							{ "exclude": [	"@babel/plugin-transform-function-name", 
												//'@babel/plugin-transform-unicode-escapes', 
												//'@babel/plugin-transform-unicode-regex',
												'@babel/plugin-transform-literals',
											] }
						] ],
        plugins: [
          //"@babel/plugin-transform-runtime",
          // ["@babel/plugin-transform-modules-commonjs",
          //     { 'strictMode': false },
          // ],
          ["transform-es2015-modules-commonjs-simple",
            {
              'noMangle': true,
              'allowTopLevelThis': true,
              'strictMode': false
            },
          ]
        ]
      }
      
      try {
        safe_print("babel.transform()...");
        
        if (typeof window === 'undefined') {
          var res = babel_final.transform(code, options).code;

//safe_print("OUTPUT");
//safe_print(output);

          /* remove require() included in the transformed code */
          //var s = new require('stream').Readable();
          //s.push (res);
          //browserify(s)
          //.transform("babelify", options)
          //.bundle(function (err, src) {
          //		if (err)
          //			return safe_print(err);
          //		res = src.toString ();
          //	});
        }
        else {
          /* TO DO : 'browserify = require("browserify")' raises an error in browser */
          //var browserify = require('browserify');
          //var s = new require('stream').Readable();
          //s.push (res);
          //browserify(s)//.
          //.bundle(function (err, src) {
          //		if (err)
          //			return safe_print(err);
          //		res = src.toString ();
          //	});
          res = code;
        }
        /*					if (typeof window === 'undefined')
                            {
        safe_print(res);
        safe_print("CHECK!!!!");
                                browserify_string(res).bundle(
                                function (err, src) {
        safe_print("IN");
                                    if (err) return done(err);
        safe_print("IN");
        if (src.include('require('))
        safe_print("WRONG!!!!");
        res = src;
                                    done();}
                                );
        
        if (res.include('require('))
        safe_print("WRONG!!!!");
                            }
        if (res.include('require('))
        safe_print("WRONG 2!!!!");
        */                safe_print("babel.transform() Finished");
      } catch (ex) {
        log(ex && ex.stack);
        isRetry = true;
        safe_print(ex);
        safe_print(">>>>>>>>> Transformation failed, skipping...")
      }
      if (res && origin_str_indexOf.call(res, 'use strict') != -1) {
        res = origin_str_replace.call(res, /.use strict.;\n?/, '');
      }
safe_print(res);
      return res;
    } else {
      safe_print('There is no babel loaded');
      return code;
    }
  }
  
  var global = this;
  var JSON = { parse: global.JSON.parse, stringify: global.JSON.stringify };
  
  var astUtil = sandbox.astUtil;
  
  var Config = sandbox.Config;
  var Constants = sandbox.Constants;
  
  var JALANGI_VAR = Constants.JALANGI_VAR;
  var RP = JALANGI_VAR + "_";
  
  //    var N_LOG_LOAD = 0,
  //    var N_LOG_FUN_CALL = 1,
  //        N_LOG_METHOD_CALL = 2,
  var N_LOG_FUNCTION_ENTER = 4,
    //        N_LOG_FUNCTION_RETURN = 5,
    N_LOG_SCRIPT_ENTER = 6,
    //        N_LOG_SCRIPT_EXIT = 7,
    N_LOG_GETFIELD = 8,
    //        N_LOG_GLOBAL = 9,
    N_LOG_ARRAY_LIT = 10,
    N_LOG_OBJECT_LIT = 11,
    N_LOG_FUNCTION_LIT = 12,
    N_LOG_RETURN = 13,
    N_LOG_REGEXP_LIT = 14,
    //        N_LOG_LOCAL = 15,
    //        N_LOG_OBJECT_NEW = 16,
    N_LOG_READ = 17,
    //        N_LOG_FUNCTION_ENTER_NORMAL = 18,
    N_LOG_HASH = 19,
    N_LOG_SPECIAL = 20,
    N_LOG_STRING_LIT = 21,
    N_LOG_NUMBER_LIT = 22,
    N_LOG_BOOLEAN_LIT = 23,
    N_LOG_UNDEFINED_LIT = 24,
    N_LOG_NULL_LIT = 25;
  
  var logFunctionEnterFunName = JALANGI_VAR + ".Fe";
  var logFunctionReturnFunName = JALANGI_VAR + ".Fr";
  var logFunCallFunName = JALANGI_VAR + ".F";
  var logMethodCallFunName = JALANGI_VAR + ".M";
  var logAssignFunName = JALANGI_VAR + ".A";
  var logPutFieldFunName = JALANGI_VAR + ".P";
  var logGetFieldFunName = JALANGI_VAR + ".G";
  var logScriptEntryFunName = JALANGI_VAR + ".Se";
  var logScriptExitFunName = JALANGI_VAR + ".Sr";
  var logReadFunName = JALANGI_VAR + ".R";
  var logWriteFunName = JALANGI_VAR + ".W";
  var logIFunName = JALANGI_VAR + ".I";
  var logHashFunName = JALANGI_VAR + ".H";
  var logLitFunName = JALANGI_VAR + ".T";
  var logInitFunName = JALANGI_VAR + ".N";
  var logReturnFunName = JALANGI_VAR + ".Rt";
  var logThrowFunName = JALANGI_VAR + ".Th";
  var logReturnAggrFunName = JALANGI_VAR + ".Ra";
  var logUncaughtExceptionFunName = JALANGI_VAR + ".Ex";
  var logLastComputedFunName = JALANGI_VAR + ".L";
  var logTmpVarName = JALANGI_VAR + "._tm_p";
  var logSampleFunName = JALANGI_VAR + ".S";
  
  var logWithFunName = JALANGI_VAR + ".Wi";
  var logBinaryOpFunName = JALANGI_VAR + ".B";
  var logUnaryOpFunName = JALANGI_VAR + ".U";
  var logConditionalFunName = JALANGI_VAR + ".C";
  var logSwitchLeftFunName = JALANGI_VAR + ".C1";
  var logSwitchRightFunName = JALANGI_VAR + ".C2";
  var logLastFunName = JALANGI_VAR + "._";
  var logX1FunName = JALANGI_VAR + ".X1";
  
  var instrumentCodeFunName = JALANGI_VAR + ".instrumentEvalCode";
  
  
  var Syntax = {
    AssignmentExpression: 'AssignmentExpression',
    ArrayExpression: 'ArrayExpression',
    BlockStatement: 'BlockStatement',
    BinaryExpression: 'BinaryExpression',
    BreakStatement: 'BreakStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ConditionalExpression: 'ConditionalExpression',
    ContinueStatement: 'ContinueStatement',
    DoWhileStatement: 'DoWhileStatement',
    DebuggerStatement: 'DebuggerStatement',
    EmptyStatement: 'EmptyStatement',
    ExpressionStatement: 'ExpressionStatement',
    ForStatement: 'ForStatement',
    ForInStatement: 'ForInStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    Literal: 'Literal',
    LabeledStatement: 'LabeledStatement',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    NewExpression: 'NewExpression',
    ObjectExpression: 'ObjectExpression',
    Program: 'Program',
    Property: 'Property',
    ReturnStatement: 'ReturnStatement',
    SequenceExpression: 'SequenceExpression',
    SwitchStatement: 'SwitchStatement',
    SwitchCase: 'SwitchCase',
    ThisExpression: 'ThisExpression',
    ThrowStatement: 'ThrowStatement',
    TryStatement: 'TryStatement',
    UnaryExpression: 'UnaryExpression',
    UpdateExpression: 'UpdateExpression',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    WhileStatement: 'WhileStatement',
    WithStatement: 'WithStatement'
  };
  
  
  function createBitPattern() {
    var ret = 0;
    var i;
    for (i = 0; i < arguments.length; i++) {
      ret = (ret << 1) + (arguments[i] ? 1 : 0);
    }
    return ret;
  }
  
  function HOP(obj, prop) {
    return origin_obj_hasOwnProperty.call(obj, prop);
  }
  
  
  function isArr(val) {
    return origin_obj_toString.call(val) === '[object Array]';
  }
  
  function MAP(arr, fun) {
    var len = arr.length;
    if (!isArr(arr)) {
      throw new TypeError();
    }
    if (typeof fun !== "function") {
      throw new TypeError();
    }
    
    var res = new Array(len);
    for (var i = 0; i < len; i++) {
      if (i in arr) {
        res[i] = fun(arr[i]);
      }
    }
    return res;
  }
  
  function regex_escape(text) {
    return origin_str_replace.call(text, /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  
  
  // name of the file containing the instrumented code
  
  var IID_INC_STEP = 8;
  // current static identifier for each conditional expression
  var condIid;
  var memIid;
  var opIid;
  var hasInitializedIIDs = false;
  var origCodeFileName;
  var instCodeFileName;
  var iidSourceInfo;
  
  
  function getIid() {
    var tmpIid = memIid;
    memIid = memIid + IID_INC_STEP;
    return createLiteralAst(tmpIid);
  }
  
  function getPrevIidNoInc() {
    return createLiteralAst(memIid - IID_INC_STEP);
  }
  
  function getCondIid() {
    var tmpIid = condIid;
    condIid = condIid + IID_INC_STEP;
    return createLiteralAst(tmpIid);
  }
  
  function getOpIid() {
    var tmpIid = opIid;
    opIid = opIid + IID_INC_STEP;
    return createLiteralAst(tmpIid);
  }
  
  
  function printLineInfoAux(i, ast) {
    if (ast && ast.loc) {
      iidSourceInfo[i] = [ast.loc.start.line, ast.loc.start.column + 1, ast.loc.end.line, ast.loc.end.column + 1];
    }
  }
  
  // iid+2 is usually unallocated
  // we are using iid+2 for the sub-getField operation of a method call
  // see analysis.M
  function printSpecialIidToLoc(ast0) {
    printLineInfoAux(memIid + 2, ast0);
  }
  
  function printIidToLoc(ast0) {
    printLineInfoAux(memIid, ast0);
  }
  
  function printModIidToLoc(ast0) {
    printLineInfoAux(memIid, ast0);
    printLineInfoAux(memIid + 2, ast0);
  }
  
  function printOpIidToLoc(ast0) {
    printLineInfoAux(opIid, ast0);
  }
  
  function printCondIidToLoc(ast0) {
    printLineInfoAux(condIid, ast0);
  }
  
  // JALANGI_$_i in expression context will replace it by an AST
  // {JALANGI_$_i} will replace the body of the block statement with an array of statements passed as argument
  
  function replaceInStatement(code) {
    var asts = arguments;
    var visitorReplaceInExpr = {
      'Identifier': function (node) {
        if (origin_str_indexOf.call(node.name, RP) === 0) {
          var i = parseInt(origin_str_substring.call(node.name, RP.length));
          return asts[i];
        } else {
          return node;
        }
      },
      'BlockStatement': function (node) {
        if (node.body[0].type === 'ExpressionStatement' && isArr(node.body[0].expression)) {
          node.body = node.body[0].expression;
        }
        return node;
      }
    };
    //        StatCollector.resumeTimer("internalParse");
    var ast = acorn_final.parse(code);
    //        StatCollector.suspendTimer("internalParse");
    //        StatCollector.resumeTimer("replace");
    var newAst = astUtil.transformAst(ast, visitorReplaceInExpr, undefined, undefined, true);
    //safe_print(newAst);
    //        StatCollector.suspendTimer("replace");
    return newAst.body;
  }
  
  function replaceInExpr(code) {
    var ret = replaceInStatement.apply(this, arguments);
    return ret[0].expression;
  }
  
  function createLiteralAst(name) {
    return { type: Syntax.Literal, value: name };
  }
  
  function createIdentifierAst(name) {
    return { type: Syntax.Identifier, name: name };
  }
  
  function transferLoc(toNode, fromNode) {
    if (fromNode.loc)
      toNode.loc = fromNode.loc;
    if (fromNode.raw)
      toNode.raw = fromNode.loc;
  }
  
  function idsOfGetterSetter(node) {
    var ret = {}, isEmpty = true;
    if (node.type === "ObjectExpression") {
      var kind, len = node.properties.length;
      for (var i = 0; i < len; i++) {
        if ((kind = node.properties[i].kind) === 'get' || kind === 'set') {
          ret[kind + node.properties[i].key.name] = node.properties[i].value.funId;
          isEmpty = false;
        }
      }
    }
    return isEmpty ? undefined : ret;
  }
  
  function checkAndGetIid(funId, sid, funName) {
    var id = getIid();
    if (!Config.requiresInstrumentation || Config.requiresInstrumentation(id, funId, sid, funName)) {
      return id;
    } else {
      return undefined;
    }
  }
  
  function modifyAst(ast, modifier, term) {
    var ret;
    var i = 3; // no. of formal parameters
    while (origin_str_indexOf.call(term, '$$') >= 0) {
      term = term.replace(/\$\$/, arguments[i]);
      i++;
    }
    var args = [];
    origin_array_push.call(args, term);
    for (; i < arguments.length; i++) {
      origin_array_push.call(args, arguments[i]);
    }
    printIidToLoc(ast);
    ret = origin_fn_apply(modifier, this, args);
    transferLoc(ret, ast);
    return ret;
  }
  
  function wrapPutField(node, base, offset, rvalue, isComputed) {
    if (!Config.INSTR_PUTFIELD || Config.INSTR_PUTFIELD(isComputed ? null : offset.value, node)) {
      printIidToLoc(node);
      var ret = replaceInExpr(
        logPutFieldFunName +
        "(" + RP + "1, " + RP + "2, " + RP + "3, " + RP + "4," + (createBitPattern(isComputed, false)) + ")",
        getIid(),
        base,
        offset,
        rvalue
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapModAssign(node, base, offset, op, rvalue, isComputed) {
    if (!Config.INSTR_PROPERTY_BINARY_ASSIGNMENT || Config.INSTR_PROPERTY_BINARY_ASSIGNMENT(op, node.computed ? null : offset.value, node)) {
      printModIidToLoc(node);
      var ret = replaceInExpr(
        logAssignFunName + "(" + RP + "1," + RP + "2," + RP + "3," + RP + "4," + (createBitPattern(isComputed)) + ")(" + RP + "5)",
        getIid(),
        base,
        offset,
        createLiteralAst(op),
        rvalue
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapMethodCall(node, base, offset, isCtor, isComputed) {
    printIidToLoc(node);
    printSpecialIidToLoc(node.callee);
    var ret = replaceInExpr(
      logMethodCallFunName + "(" + RP + "1, " + RP + "2, " + RP + "3, " + (createBitPattern(isCtor, isComputed)) + ", " + WITH_ARRAY_NAME + ")",
      getIid(),
      base,
      offset
    );
    transferLoc(ret, node.callee);
    return ret;
  }
  
	const WITH_ARRAY_NAME = '_JALANGI_WITH_ARR_'; 
	const WITH_ARRAY_LENGTH_NAME = '_JALANGI_WITH_ARR_LEN_';
  function wrapFunCall(node, ast, isCtor) {
    printIidToLoc(node);

	

    var ret = replaceInExpr(
      logFunCallFunName + "(" + RP + "1, " + RP + "2, " + (createBitPattern(isCtor)) + ", " + WITH_ARRAY_NAME + ")",
      getIid(),
      ast
    );
    transferLoc(ret, node.callee);
    return ret;
  }
  
  function wrapGetField(node, base, offset, isComputed) {
    if (!Config.INSTR_GETFIELD || Config.INSTR_GETFIELD(node.computed ? null : offset.value, node)) {
      printIidToLoc(node);
      var ret = replaceInExpr(
        logGetFieldFunName + "(" + RP + "1, " + RP + "2, " + RP + "3," + (createBitPattern(isComputed, false, false)) + ")",
        getIid(),
        base,
        offset
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapRead(node, name, val, isReUseIid, isGlobal, isScriptLocal) {
    if (!Config.INSTR_READ || Config.INSTR_READ(name, node)) {
      printIidToLoc(node);
      var ret = replaceInExpr(
        logReadFunName + "(" + RP + "1, " + RP + "2, " + RP + "3," + (createBitPattern(isGlobal, isScriptLocal)) + ", " + WITH_ARRAY_NAME + ")",
        isReUseIid ? getPrevIidNoInc() : getIid(),
        name,
        val
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return val;
    }
  }
  
  //    function wrapReadWithUndefinedCheck(node, name) {
  //        var ret = replaceInExpr(
  //            "("+logIFunName+"(typeof ("+name+") === 'undefined'? "+RP+"2 : "+RP+"3))",
  //            createIdentifierAst(name),
  //            wrapRead(node, createLiteralAst(name),createIdentifierAst("undefined")),
  //            wrapRead(node, createLiteralAst(name),createIdentifierAst(name), true)
  //        );
  //        transferLoc(ret, node);
  //        return ret;
  //    }
  
  function wrapReadWithUndefinedCheck(node, name) {
    var ret;
    
    //if (name !== 'location') {
    //    ret = replaceInExpr(
    //        "(" + logIFunName + "(typeof (" + name + ") === 'undefined'? (" + name + "=" + RP + "2) : (" + name + "=" + RP + "3)))",
    //        createIdentifierAst(name),
    //        wrapRead(node, createLiteralAst(name), createIdentifierAst("undefined"), false, true, true),
    //        wrapRead(node, createLiteralAst(name), createIdentifierAst(name), true, true, true)
    //    );
    //} else {
    ret = replaceInExpr(
      "(" + logIFunName + "(typeof (" + name + ") === 'undefined'? (" + RP + "2) : (" + RP + "3)))",
      createIdentifierAst(name),
      wrapRead(node, createLiteralAst(name), createIdentifierAst("undefined"), false, true, false),
      wrapRead(node, createLiteralAst(name), createIdentifierAst(name), true, true, false)
    );
    //        }
    transferLoc(ret, node);
    return ret;
  }
  
  function wrapWrite(node, name, val, lhs, isGlobal, isScriptLocal, isDeclaration) {
    if (!Config.INSTR_WRITE || Config.INSTR_WRITE(name, node)) {
      printIidToLoc(node);
      var ret = replaceInExpr(
        logWriteFunName + "(" + RP + "1, " + RP + "2, " + RP + "3, " + RP + "4," + (createBitPattern(isGlobal, isScriptLocal, isDeclaration)) + ", " + WITH_ARRAY_NAME + ")",
        getIid(),
        name,
        val,
        lhs
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return val;
    }
  }
  
  function wrapWriteWithUndefinedCheck(node, name, val, lhs) {
    if (!Config.INSTR_WRITE || Config.INSTR_WRITE(name, node)) {
      printIidToLoc(node);
      //        var ret2 = replaceInExpr(
      //            "("+logIFunName+"(typeof ("+name+") === 'undefined'? "+RP+"2 : "+RP+"3))",
      //            createIdentifierAst(name),
      //            wrapRead(node, createLiteralAst(name),createIdentifierAst("undefined")),
      //            wrapRead(node, createLiteralAst(name),createIdentifierAst(name), true)
      //        );
      var ret = replaceInExpr(
        logWriteFunName + "(" + RP + "1, " + RP + "2, " + RP + "3, " + logIFunName + "(typeof(" + lhs.name + ")==='undefined'?undefined:" + lhs.name + ")," + createBitPattern(true, false, false) + ", " + WITH_ARRAY_NAME + ")",
        getIid(),
        name,
        val
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return val;
    }
  }
  
  function wrapRHSOfModStore(node, left, right, op) {
    var ret = replaceInExpr(RP + "1 " + op + " " + RP + "2",
      left, right);
    transferLoc(ret, node);
    return ret;
  }
  
  function makeNumber(node, left) {
    var ret = replaceInExpr(" + " + RP + "1 ", left);
    transferLoc(ret, node);
    return ret;
  }
  
  function wrapLHSOfModStore(node, left, right) {
    var ret = replaceInExpr(RP + "1 = " + RP + "2",
      left, right);
    transferLoc(ret, node);
    return ret;
  }
  
  function ifObjectExpressionHasGetterSetter(node) {
    if (node.type === "ObjectExpression") {
      var kind, len = node.properties.length;
      for (var i = 0; i < len; i++) {
        if ((kind = node.properties[i].kind) === 'get' || kind === 'set') {
          return true;
        }
      }
    }
    return false;
  }
  
  var dummyFun = function () {
  };
  var dummyObject = {};
  var dummyArray = [];
  
  function getLiteralValue(funId, node) {
    if (node.name === "undefined") {
      return undefined;
    } else if (node.name === "NaN") {
      return NaN;
    } else if (node.name === "Infinity") {
      return Infinity;
    }
    switch (funId) {
      case N_LOG_NUMBER_LIT:
      case N_LOG_STRING_LIT:
      case N_LOG_NULL_LIT:
      case N_LOG_REGEXP_LIT:
      case N_LOG_BOOLEAN_LIT:
        return node.value;
      case N_LOG_ARRAY_LIT:
        return dummyArray;
      case N_LOG_FUNCTION_LIT:
        return dummyFun;
      case N_LOG_OBJECT_LIT:
        return dummyObject;
    }
    throw new Error(funId + " not known");
  }
  
  function getFnIdFromAst(ast) {
    var entryExpr = ast.body.body[0];
    if (entryExpr.type != 'ExpressionStatement') {
      //safe_print(origin_json_stringify(entryExpr));
      throw new Error("IllegalStateException");
    }
    entryExpr = entryExpr.expression;
    if (entryExpr.type != 'CallExpression') {
      throw new Error("IllegalStateException");
    }
    if (entryExpr.callee.type != 'MemberExpression') {
      throw new Error("IllegalStateException");
    }
    if (entryExpr.callee.object.name != JALANGI_VAR) {
      throw new Error("IllegalStateException");
    }
    if (entryExpr.callee.property.name != 'Fe') {
      throw new Error("IllegalStateException");
    }
    return entryExpr['arguments'][0].value;
  }
  
  function wrapLiteral(node, ast, funId) {
    if (!Config.INSTR_LITERAL || Config.INSTR_LITERAL(getLiteralValue(funId, node), node)) {
      printIidToLoc(node);
      var hasGetterSetter = ifObjectExpressionHasGetterSetter(node);
      
      var ret;
      if (funId == N_LOG_FUNCTION_LIT) {
        var internalFunId = null;
        if (node.type == 'FunctionExpression') {
          internalFunId = getFnIdFromAst(node);
        } else {
          if (node.type != 'Identifier') {
            throw new Error("IllegalStateException");
          }
          internalFunId = getFnIdFromAst(scope.funNodes[node.name]);
        }
//safe_print(ast);
        ret = replaceInExpr(
          logLitFunName + "(" + RP + "1, " + RP + "2, " + RP + "3," + hasGetterSetter + ", " + internalFunId + ")",
          getIid(),
          ast,
          createLiteralAst(funId),
          internalFunId
        );
      } else {
        ret = replaceInExpr(
          logLitFunName + "(" + RP + "1, " + RP + "2, " + RP + "3," + hasGetterSetter + ")",
          getIid(),
          ast,
          createLiteralAst(funId)
        );
      }
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapReturn(node, expr) {
    var lid = (expr === null) ? node : expr;
    printIidToLoc(lid);
    if (expr === null) {
      expr = createIdentifierAst("undefined");
    }
    var ret = replaceInExpr(
      logReturnFunName + "(" + RP + "1, " + RP + "2)",
      getIid(),
      expr
    );
    transferLoc(ret, lid);
    return ret;
  }
  
  function wrapThrow(node, expr) {
    printIidToLoc(expr);
    var ret = replaceInExpr(
      logThrowFunName + "(" + RP + "1, " + RP + "2)",
      getIid(),
      expr
    );
    transferLoc(ret, expr);
    return ret;
  }
  
  function wrapWithX1(node, ast) {
    if (!Config.INSTR_END_EXPRESSION || Config.INSTR_END_EXPRESSION(node)) {
      
      if (!ast || origin_str_indexOf.call(ast.type, "Expression") <= 0) return ast;
      printIidToLoc(node);
      var ret = replaceInExpr(
        logX1FunName + "(" + RP + "1," + RP + "2)", getIid(), ast);
      transferLoc(ret, node);
      return ret;
    } else {
      return ast;
    }
  }
  
  function wrapHash(node, ast) {
    printIidToLoc(node);
    var ret = replaceInExpr(
      logHashFunName + "(" + RP + "1, " + RP + "2)",
      getIid(),
      ast
    );
    transferLoc(ret, node);
    return ret;
  }
  
  function wrapEvalArg(ast) {
    printIidToLoc(ast);
    var ret = replaceInExpr(
      instrumentCodeFunName + "(" + RP + "1, " + RP + "2, true)",
      ast,
      getIid()
    );
    transferLoc(ret, ast);
    return ret;
  }
  
  function wrapUnaryOp(node, argument, operator) {
    if (!Config.INSTR_UNARY || Config.INSTR_UNARY(operator, node)) {
      printOpIidToLoc(node);
      var ret = replaceInExpr(
        logUnaryOpFunName + "(" + RP + "1," + RP + "2," + RP + "3)",
        getOpIid(),
        createLiteralAst(operator),
        argument
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapBinaryOp(node, left, right, operator, isComputed) {
    if (!Config.INSTR_BINARY || Config.INSTR_BINARY(operator, operator)) {
      printOpIidToLoc(node);
      var ret = replaceInExpr(
        logBinaryOpFunName + "(" + RP + "1, " + RP + "2, " + RP + "3, " + RP + "4," + (createBitPattern(isComputed, false, false)) + ")",
        getOpIid(),
        createLiteralAst(operator),
        left,
        right
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapLogicalAnd(node, left, right) {
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("&&", node)) {
      printCondIidToLoc(node);
      var ret = replaceInExpr(
        logConditionalFunName + "(" + RP + "1, " + RP + "2)?" + RP + "3:" + logLastFunName + "()",
        getCondIid(),
        left,
        right
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapLogicalOr(node, left, right) {
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("||", node)) {
      printCondIidToLoc(node);
      var ret = replaceInExpr(
        logConditionalFunName + "(" + RP + "1, " + RP + "2)?" + logLastFunName + "():" + RP + "3",
        getCondIid(),
        left,
        right
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapSwitchDiscriminant(node, discriminant) {
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("switch", node)) {
      printCondIidToLoc(node);
      var ret = replaceInExpr(
        logSwitchLeftFunName + "(" + RP + "1, " + RP + "2)",
        getCondIid(),
        discriminant
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapSwitchTest(node, test) {
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("switch", node)) {
      printCondIidToLoc(node);
      var ret = replaceInExpr(
        logSwitchRightFunName + "(" + RP + "1, " + RP + "2)",
        getCondIid(),
        test
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapWith(node) {
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("with", node)) {
      printIidToLoc(node);
      var ret = replaceInExpr(
        logWithFunName + "(" + RP + "1, " + RP + "2)",
        getIid(),
        node
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
  }
  
  function wrapConditional(node, test) {
    if (node === null) {
      return node;
    } // to handle for(;;) ;
    
    if (!Config.INSTR_CONDITIONAL || Config.INSTR_CONDITIONAL("other", node)) {
      printCondIidToLoc(node);
      var ret = replaceInExpr(
        logConditionalFunName + "(" + RP + "1, " + RP + "2)",
        getCondIid(),
        test
      );
      transferLoc(ret, node);
      return ret;
    } else {
      return node;
    }
    
  }
  
  //    function createCallWriteAsStatement(node, name, val) {
  //        printIidToLoc(node);
  //        var ret = replaceInStatement(
  //            logWriteFunName + "(" + RP + "1, " + RP + "2, " + RP + "3)",
  //            getIid(),
  //            name,
  //            val
  //        );
  //        transferLoc(ret[0].expression, node);
  //        return ret;
  //    }
  
  function createExpressionStatement(lhs, node) {
    var ret;
    ret = replaceInStatement(
      RP + "1 = " + RP + "2", lhs, node
    );
    transferLoc(ret[0].expression, node);
    return ret;
  }
  
  function createCallInitAsStatement(node, name, val, isArgumentSync, lhs, isCatchParam, isAssign) {
    printIidToLoc(node);
    var ret;
    
    if (isAssign)
      ret = replaceInStatement(
        RP + "1 = " + logInitFunName + "(" + RP + "2, " + RP + "3, " + RP + "4, " + createBitPattern(isArgumentSync, false, isCatchParam) + ")",
        lhs,
        getIid(),
        name,
        val
      );
    else
      ret = replaceInStatement(
        logInitFunName + "(" + RP + "1, " + RP + "2, " + RP + "3, " + createBitPattern(isArgumentSync, false, isCatchParam) + ")",
        getIid(),
        name,
        val
      );
    
    transferLoc(ret[0].expression, node);
    return ret;
  }
  
  function createCallAsFunEnterStatement(node) {
    printIidToLoc(node);
    var ret = replaceInStatement(
      logFunctionEnterFunName + "(" + RP + "1,arguments.callee, this, arguments)",
      getIid()
    );
    transferLoc(ret[0].expression, node);
    return ret;
  }
  


  function createCallAsScriptEnterStatement(node) {
    printIidToLoc(node);
    var ret = replaceInStatement(logScriptEntryFunName + "(" + RP + "1," + RP + "2, " + RP + "3)",
      getIid(),
      createLiteralAst(instCodeFileName), createLiteralAst(origCodeFileName));
    transferLoc(ret[0].expression, node);
    return ret;
  }
  
  var labelCounter = 0;
  
  function wrapForIn(node, left, right, body) {
    printIidToLoc(node);
    var tmp, extra, isDeclaration = (left.type === 'VariableDeclaration');
    if (isDeclaration) {
      var name = node.left.declarations[0].id.name;
      tmp = replaceInExpr(name + " = " + logTmpVarName);
    } else {
      tmp = replaceInExpr(RP + "1 = " + logTmpVarName, left);
    }
    transferLoc(tmp, node);
    extra = instrumentStore(tmp, isDeclaration);
    
    var ret;
    
    if (body.type === 'BlockExpression') {
      body = body.body;
    } else {
      body = [body];
    }
    if (isDeclaration) {
      ret = replaceInStatement(
        "function n() {  for(" + logTmpVarName + " in " + RP + "1) {var " + name + " = " + RP + "2;\n {" + RP + "3}}}", right, wrapWithX1(node, extra.right), body);
    } else {
      ret = replaceInStatement(
        "function n() {  for(" + logTmpVarName + " in " + RP + "1) {" + RP + "2;\n {" + RP + "3}}}", right, wrapWithX1(node, extra), body);
    }
    ret = ret[0].body.body[0];
    transferLoc(ret, node);
    return ret;
  }
  
  
  function wrapForInBody(node, body, name) {
    printIidToLoc(node);
    var ret = replaceInStatement(
      "function n() { " + logInitFunName + "(" + RP + "1, '" + name + "'," + name + "," + createBitPattern(false, true, false) + ");\n {" + RP + "2}}", getIid(), [body]);
    
    ret = ret[0].body;
    transferLoc(ret, node);
    return ret;
  }
  
  function wrapCatchClause(node, body, name) {
    var ret;
    if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
      origin_array_unshift.call(body, createCallInitAsStatement(node,
        createLiteralAst(name),
        createIdentifierAst(name),
        false, createIdentifierAst(name), true, true)[0]);
    }
  }
  
  function modifyIdentifierRecursive(node, parent, name) {
    if (node == undefined || typeof (node) !== 'object') {
      return;
    }
    if (origin_array_isArray(node)) {
      origin_array_forEach.call(origin_obj_keys(node), i => {
        modifyIdentifierRecursive(node[i], node, name);
      });
    }
    else if (origin_str_indexOf.call(origin_obj_toString.call(node.constructor), 'function Node') == 0) {
      if (node.type === 'Identifier') {
        if (node.name === name && parent.type !== 'FunctionExpression') {
          node.name = 'this.' + name;
        }
        return;
      }
      else if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
        //nothing to do
      }
      else {
        origin_array_forEach.call(origin_obj_keys(node), i => {
          modifyIdentifierRecursive(node[i], node, name);
        });
      }
    }
  }

	function CreateAssignmentNode(var_name_left, var_name_right)
	{
		var new_node = {
		start: -1,
		end: -1,
		type: 'ExpressionStatement',
		expression: {
		  start: -1,
		  end: -1,
		  type: 'AssignmentExpression',
		  operator: '=',
		  loc: {
			 start: -1,
			 end: -1
		  },
		  left: {
			 start: -1,
			 end: -1,
			 type: 'Identifier',
			 name: var_name_left,
			 loc: {
				start: -1,
				end: -1
			 }
		  },
		  right: {
			 start: -1,
			 end: -1,
			 type: 'Identifier',
			 name: var_name_right,
			 loc: {
				start: -1,
				end: -1
			 }
		  },
		}
	 };
	return new_node;
	}
  function removeDuplicateDeclarations(node, nodes_idx, nodes, pnode_idx, pnode, isSplit) {

    if (node == undefined || typeof (node) !== 'object') {
      return;
    }
    
    if (origin_array_isArray(node)) {
      origin_array_forEach.call(origin_array_reverse.call(origin_obj_keys(node)), i => {
        modifyVariableDeclarationRecursive(node[i], i, node, pnode_idx, pnode, isSplit);
      });
    }
    else if (origin_str_indexOf.call(origin_str_toString.call(node.constructor), 'function Node') == 0) {
      //safe_print(node.type)

      if (node.type === 'VariableDeclaration') {
        if (node.kind === 'const') {
          node.kind = 'var';
        }
        
        if (isSplit === true) {
          let remove_list = [];
          for (let child_key in node.declarations) {
            let child = node.declarations[child_key];
//safe_print("Child");
//safe_print(child);
            if (child.type === 'VariableDeclarator') {
              if (child.id.type === 'Identifier') {

					/*
                if (child.init != null) {
                  //modifyIdentifierRecursive(child.init, child, child.id.name);
                  var right_node = child.init;
                }
                else {
                  var right_node = {
                    start: -1,
                    end: -1,
                    type: 'Identifier',
                    name: 'undefined',
                    loc: {
                      start: -1,
                      end: -1
                    }
                  }
                }
                
                var new_node = {
                  start: -1,
                  end: -1,
                  type: 'ExpressionStatement',
                  expression: {
                    start: -1,
                    end: -1,
                    type: 'AssignmentExpression',
                    operator: '=',
                    loc: {
                      start: -1,
                      end: -1
                    },
                    left: {
                      start: -1,
                      end: -1,
                      type: 'Identifier',
                      name: child.id.name,
                      loc: {
                        start: -1,
                        end: -1
                      }
                    },
                    right: right_node
                  }
                };
                
                if (new_node.expression.left.name.indexOf ('this.') !== 0) {
                  new_node.expression.left.name = 'this.' + new_node.expression.left.name;
                }
                nodes.splice (nodes_idx, 0, new_node);
                nodes_idx = String(Number(nodes_idx) + 1);
					*/

					if (child.init)
               {	var new_node = CreateAssignmentNode('this.' + child.id.name, child.id.name);
						origin_array_splice.call(nodes, ++nodes_idx, 0, new_node);						
					}
               //safe_print(node.declarations[child_key]);
               //safe_print(node.declarations[child_key].init.callee);
               //safe_print(node.declarations[child_key].init.arguments);
					//node.declarations[child_key].init = null;

					//safe_print("Remove " + child_key);        
                //remove_list.push (child_key);
              }
            }
          }
          
          origin_array_forEach.call(origin_array_reverse.call(origin_obj_keys(remove_list).reverse), i => {
            origin_array_splice.call(node.declarations, i, 1);
          });
          
          if (node.declarations.length === 0) {
            try {
              if (nodes[nodes_idx] === node) {
                origin_array_splice.call(nodes, nodes_idx, 1);
              }
              else {
                if (pnode_idx === 'init') {
                  pnode[pnode_idx] = undefined;
                }
                else {
                  var new_node = {
                    start: -1,
                    end: -1,
                    type: 'EmptyStatement',
                    loc: {
                      start: -1,
                      end: -1
                    }
                  };
                  
                  pnode[pnode_idx] = new_node;
                }
              }
            } catch (e) {
              log(e && e.stack)
            }
          }
        }
      }
      else if (node.type === 'FunctionDeclaration') {
        if (isSplit === true) {
			/*
          var new_node = {
            start: -1,
            end: -1,
            type: 'ExpressionStatement',
            expression: {
              start: -1,
              end: -1,
              type: 'AssignmentExpression',
              operator: '=',
              loc: {
                start: -1,
                end: -1
              },
              left: {
                start: -1,
                end: -1,
                type: 'Identifier',
                name: node.id.name,
                loc: {
                  start: -1,
                  end: -1
                }
              },
              right: {
                start: -1,
                end: -1,
                type: 'Identifier',
                name: node.id.name,
                loc: {
                  start: -1,
                  end: -1
                }
              }
            }
          };
          if (new_node.expression.left.name.indexOf ('this.') !== 0) {
            new_node.expression.left.name = 'this.' + new_node.expression.left.name;
          }
          
          nodes.splice (nodes_idx, 0, new_node);
          nodes_idx = String(Number(nodes_idx) + 1);
			*/
         var new_node = CreateAssignmentNode('this.' + node.id.name, node.id.name);
			origin_array_splice.call(nodes, ++nodes_idx, 0, new_node);
        }
      }
      else if (node.type === 'FunctionExpression') {
        //nothing to do
			//safe_print("Function Expression called");
			//safe_print(node);
			//safe_print(node.loc);
			//safe_print(node.id.name);
			//safe_print(node.boy.loc);
asdf;
      }
      else {
        origin_array_forEach.call(origin_array_reverse.call(origin_obj_keys(node)), i => {
          modifyVariableDeclarationRecursive(node[i], nodes_idx, nodes, i, node, isSplit);
        });
      }
    }
	}


  function modifyVariableDeclarationRecursive(node, nodes_idx, nodes, pnode_idx, pnode, isSplit, depth) {
    if (node == undefined || typeof (node) !== 'object') {
      return;
    }
   //safe_print("Recursive : " + depth + ", " + node.type);
//safe_print(node);
	if (node.expression)
	;//safe_print(node.expression.loc); 
	else if (node.loc)
	;//safe_print(node.loc);
if (node.type === 'ExpressionStatement')
{
	//safe_print(node.expression.left); 
	//safe_print(node.expression.right); 
	//safe_print(node.expression.loc); 
}
    if (origin_array_isArray(node)) {
      origin_obj_forEach.call(origin_obj_reverse.call(origin_obj_keys(node)), i => {
        modifyVariableDeclarationRecursive(node[i], i, node, pnode_idx, pnode, isSplit, depth + 1);
      });
    }
    else if (origin_str_indexOf.call(origin_str_toString.call(node.constructor), 'function Node') == 0) {
      //safe_print(node.type)

      if (node.type === 'VariableDeclaration') {
        if (node.kind === 'const') {
          node.kind = 'var';
        }
        
        if (isSplit === true) {
          let remove_list = [];
          for (let child_key in node.declarations) {
            let child = node.declarations[child_key];
//safe_print("Child");
//safe_print(child);
            if (child.type === 'VariableDeclarator') {
              if (child.id.type === 'Identifier') {

					/*
                if (child.init != null) {
                  //modifyIdentifierRecursive(child.init, child, child.id.name);
                  var right_node = child.init;
                }
                else {
                  var right_node = {
                    start: -1,
                    end: -1,
                    type: 'Identifier',
                    name: 'undefined',
                    loc: {
                      start: -1,
                      end: -1
                    }
                  }
                }
                
                var new_node = {
                  start: -1,
                  end: -1,
                  type: 'ExpressionStatement',
                  expression: {
                    start: -1,
                    end: -1,
                    type: 'AssignmentExpression',
                    operator: '=',
                    loc: {
                      start: -1,
                      end: -1
                    },
                    left: {
                      start: -1,
                      end: -1,
                      type: 'Identifier',
                      name: child.id.name,
                      loc: {
                        start: -1,
                        end: -1
                      }
                    },
                    right: right_node
                  }
                };
                
                if (new_node.expression.left.name.indexOf ('this.') !== 0) {
                  new_node.expression.left.name = 'this.' + new_node.expression.left.name;
                }
                nodes.splice (nodes_idx, 0, new_node);
                nodes_idx = String(Number(nodes_idx) + 1);
					*/

					if (child.init)
               {	var new_node = CreateAssignmentNode('this.' + child.id.name, child.id.name);
						origin_array_splice.call(nodes, ++nodes_idx, 0, new_node);						
					}
               //safe_print(node.declarations[child_key]);
               //safe_print(node.declarations[child_key].init.callee);
               //safe_print(node.declarations[child_key].init.arguments);
					//node.declarations[child_key].init = null;

					//safe_print("Remove " + child_key);        
                //remove_list.push (child_key);
              }
            }
          }
          
          origin_array_forEach.call(origin_array_reverse.call(origin_obj_keys(remove_list)), i => {
            origin_array_splice.call(node.declarations, i, 1);
          });
          
          if (node.declarations.length === 0) {
            try {
              if (nodes[nodes_idx] === node) {
                origin_array_splice.call(nodes, nodes_idx, 1);
              }
              else {
                if (pnode_idx === 'init') {
                  pnode[pnode_idx] = undefined;
                }
                else {
                  var new_node = {
                    start: -1,
                    end: -1,
                    type: 'EmptyStatement',
                    loc: {
                      start: -1,
                      end: -1
                    }
                  };
                  
                  pnode[pnode_idx] = new_node;
                }
              }
            } catch (e) {
              log(e && e.stack)
            }
          }
        }
      }
      else if (node.type === 'FunctionDeclaration') {
        if (isSplit === true) {
//safe_print("Function Declaration");
//safe_print(node);
			/*
          var new_node = {
            start: -1,
            end: -1,
            type: 'ExpressionStatement',
            expression: {
              start: -1,
              end: -1,
              type: 'AssignmentExpression',
              operator: '=',
              loc: {
                start: -1,
                end: -1
              },
              left: {
                start: -1,
                end: -1,
                type: 'Identifier',
                name: node.id.name,
                loc: {
                  start: -1,
                  end: -1
                }
              },
              right: {
                start: -1,
                end: -1,
                type: 'Identifier',
                name: node.id.name,
                loc: {
                  start: -1,
                  end: -1
                }
              }
            }
          };
          if (new_node.expression.left.name.indexOf ('this.') !== 0) {
            new_node.expression.left.name = 'this.' + new_node.expression.left.name;
          }
          
          nodes.splice (nodes_idx, 0, new_node);
          nodes_idx = String(Number(nodes_idx) + 1);
			*/
         var new_node = CreateAssignmentNode('this.' + node.id.name, node.id.name);
			origin_array_splice.call(nodes, ++nodes_idx, 0, new_node);
        }
      }
      else if (node.type === 'FunctionExpression') {
        //nothing to do
			//safe_print("Function Expression called");
			//safe_print(node);
			//safe_print(node.loc);
			//safe_print(node.id.name);
			//safe_print(node.boy.loc);
asdf;
      }
      else {
        origin_array_forEach.call(origin_array_reverse.call(origin_array_keys(node)), i => {
          modifyVariableDeclarationRecursive(node[i], nodes_idx, nodes, i, node, isSplit, depth + 1);
        });
      }
    }
  }

  
  function isInitNode(node) {
    if (origin_str_indexOf.call(origin_str_toString.call(node.constructor), 'function Node') == 0) {
      if (node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression') {
        let memberNode = node.callee;
        if (memberNode.object.type === 'Identifier' && memberNode.property.type === 'Identifier' &&
          memberNode.object.name === JALANGI_VAR && memberNode.property.name === 'N') {
          return true;
        }
      }
    }
    
    return false;
  }
  
  //function findIdentifierName(node) {
  function prependIdentifierNameWithThisDot(node) {
//return;
    if (origin_str_indexOf.call(origin_str_toString.call(node.constructor), 'function Node') == 0) {
      if (node.type === 'ExpressionStatement') {
        node = node.expression;
        if (node.type === 'AssignmentExpression') {
          if (isInitNode(node.right)) {
            if (origin_str_indexOf.call(node.left.name, 'this.') !== 0) {
              //node.left.name = 'this.' + node.left.name;
            }
          }
        }
        else if (isInitNode(node)) {
          if (origin_str_indexOf.call(node.arguments['2'].name, 'this.') !== 0) {
            //node.arguments['2'].name = 'this.' + node.arguments['2'].name;
          }
        }
      }
    }
  }

	function addWithArrayDeclaration(cur_node)
	{
		var array_decl_node = new Node();
		array_decl_node.type = 'VariableDeclaration';
		array_decl_node.loc =  cur_node.loc;
		array_decl_node.start =  cur_node.start;
		array_decl_node.end =  cur_node.end;
		array_decl_node.kind =  'var';
		array_decl_node.declarations = [];
		var declaration_node = new Node();
		declaration_node.type = 'VariableDeclarator';
		declaration_node.start = array_decl_node.start;
		declaration_node.end = array_decl_node.end;
		declaration_node.loc = array_decl_node.loc;

		var id_node = new Node();
		id_node.type = 'Identifier';
		id_node.start = array_decl_node.start;
		id_node.end = array_decl_node.end;
		id_node.loc = array_decl_node.loc;
		id_node.name = WITH_ARRAY_NAME;

		var init_node = new Node();
		init_node.type = 'LogicalExpression';
		init_node.start = array_decl_node.start;
		init_node.end = array_decl_node.end;
		init_node.loc = array_decl_node.loc;

		init_node.operator = '||';

		var left_node = new Node();
		left_node.type = 'Identifier';
		left_node.start = array_decl_node.start;
		left_node.end = array_decl_node.end;
		left_node.loc = array_decl_node.loc;
		left_node.name = WITH_ARRAY_NAME;

		var right_node = new Node();
		right_node.type = 'ArrayExpression';
		right_node.start = array_decl_node.start;
		right_node.end = array_decl_node.end;
		right_node.loc = array_decl_node.loc;
		right_node.elements = [];

		init_node.left = left_node;
		init_node.right = right_node;

		declaration_node.id = id_node;
		declaration_node.init = init_node;

			origin_array_push.call(array_decl_node.declarations, declaration_node);

			array_decl_node.instrument_skip = true;

			origin_array_splice.call(cur_node.body, 0, 0, array_decl_node);

	}
   function wrapScriptBodyWithTryCatch(node, body) {
        if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
            printIidToLoc(node);
            var iid1 = getIid();
            printIidToLoc(node);
            var l = labelCounter++;
            var ret = replaceInStatement(
                "function n() { jalangiLabel" + l + ": while(true) { try {" + RP + "1} catch(" + JALANGI_VAR +
                "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
                JALANGI_VAR + "e.stack);\n  " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
                "e); } finally { if (" + logScriptExitFunName + "(" +
                RP + "3)) { " + logLastComputedFunName + "(); continue jalangiLabel" + l + ";\n } else {\n  " + logLastComputedFunName + "(); break jalangiLabel" + l + ";\n }}\n }}", body,
                iid1,
                getIid()
            );
/*safe_print("wrapScriptBodyWithTryCatch Start");
            safe_print(ret);  // array
            safe_print(ret[0]);  // function declaration : n
            safe_print(ret[0].body.body); // function n's internal statements array 
            safe_print(ret[0].body.body[0]); // label statement 
            safe_print(ret[0].body.body[0].body.body.body); // statement arrays in the label
            safe_print(ret[0].body.body[0].body.body.body[0]); // try-catch statement
            safe_print(ret[0].body.body[0].body.body.body[0].block);  // try block
            safe_print(ret[0].body.body[0].body.body.body[0].handler);  // catch block
            safe_print(ret[0].body.body[0].body.body.body[0].finalizer);  // final block
            safe_print(ret[0].body.body[0].body.body.body[0].block.body); // statements arry in the try block 
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[0]); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[0].expression); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[1]); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[1].expression); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[2]); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[2].expression); // Jalangi's injected calls (?)
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[3]); // variable declaration
            safe_print(ret[0].body.body[0].body.body.body[0].block.body[3].expression); // Jalangi's injected calls (?)
            //safe_print(ret[0].body.body[0].body.body.body[0].block.body[3].declarations[0].id);
            //safe_print(ret[0].body.body[0].body.body.body[0].block.body[4].declarations);
            //safe_print(ret[0].body.body[0].body.body.body[0].block.body[3].declarations[0].id);
*/
				// Hoist function/variable declarations to the outer try block -> while block -> Jalangi label block's beginning
				var declarations = [];

				//safe_print("Hoist Start for " + node.type);
//safe_print(node);
//safe_print(node.scope.parent);
//safe_print(node.body);
//safe_print(node.body.body);
//safe_print(node.scope);
//safe_print(node.scope.parent);
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[0].body.body.body[0].block);
//safe_print(ret[0].body.body[0].body.body.body[0].block.body);
				hoistFn_and_ExtractDeclarations(ret[0].body.body[0].body.body.body[0].block, declarations);
//safe_print(ret[0].body.body[0].body.body.body);
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[0].body);
//safe_print(ret[0].body.body[0].label);
//safe_print(ret[0].body.body[0].label.body);
//				declarations.push (ret[0].body.body[0].body);
//safe_print("Declaration");
//safe_print(declarations);
//ret[0].body.body[0].body = declarations;
//safe_print("Hoist Count: " + declarations.length);
//safe_print(declarations);
				for (let i = 0; i < declarations.length; i++)
					origin_array_splice.call(ret[0].body.body, i, 0, declarations[i]);

				addWithArrayDeclaration(ret[0].body);
//safe_print("Hoist End");
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[0].body.body.body);
//safe_print("FINAL");
//safe_print(ret[0]);
//safe_print(ret[0].body);
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[0].body);

            ret = ret[0].body.body;
            transferLoc(ret[0], node);
            return ret;
        } else {
            return body;
        }
    }

    function wrapFunBodyWithTryCatch(node, body) {
        if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
            printIidToLoc(node);
            var iid1 = getIid();
            printIidToLoc(node);
            var l = labelCounter++;
            var ret = replaceInStatement(
                "function n() { jalangiLabel" + l + ": while(true) { try {" + RP + "1} catch(" + JALANGI_VAR +
                "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
                JALANGI_VAR + "e.stack);\n " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
                "e); } finally { if (" + logFunctionReturnFunName + "(" +
                RP + "3)) continue jalangiLabel" + l + ";\n else \n  return " + logReturnAggrFunName + "();\n }\n }}", body,
                iid1,
                getIid()
            );
            //safe_print(JSON.stringify (ret));
				//let body_node = ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.body.body;
				//let body_node = ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.body.body;
				//	Object.keys (body_node).reverse ().forEach (i => {
				//	modifyVariableDeclarationRecursive(body_node[i], i, body_node, undefined, undefined, true, 0);
				//	//findIdentifierName(body_node[i]);
				//});

				// Hoist function/variable declarations to the outer try block -> while block -> Jalangi label block's beginning


//safe_print("wrapFunctionBodyWithTryCatch Start");
				var declarations = [];
//safe_print("Extract for Function");
				//safe_print("Hoist Start for function body...");
//safe_print(node);
//				if (node.type === 'FunctionDeclaration') 
//					safe_print("Hoist Start for " + node.type + " : " + node.id.name);
//				else
//					safe_print("Hoist Start for " + node.type + " : " + node.id);
//safe_print(node);
//safe_print(node.scope);
//safe_print(node.scope.parent);
//safe_print(node.body.body);
//safe_print(node.scope);
//safe_print(node.scope.parent);
//safe_print(ret[0].body.body[0].body.body.body[0].block);

//				safe_print("(New Function Name: " + ret[0].id.name + ")");
//safe_print("Before Hoist");
//safe_print(ret);
//safe_print(ret[0]);
//safe_print(ret[0].body);
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[1]);
				hoistFn_and_ExtractDeclarations(ret[0].body.body[0].body.body.body[0].block, declarations);
//safe_print("Extract for Function End");
//safe_print("Hoist Count 2: " + declarations.length);
//safe_print(declarations);
//safe_print(declarations[0].expression);
				for (let i = 0; i < declarations.length; i++)
					origin_array_splice.call(ret[0].body.body, i, 0, declarations[i]);

				addWithArrayDeclaration(ret[0].body);
//safe_print("After Hoist");
//safe_print(ret);
//safe_print(ret[0]);
//safe_print(ret[0].body);
//safe_print(ret[0].body.body);
//safe_print(ret[0].body.body[1]);
            ret = ret[0].body.body;
            transferLoc(ret[0], node);
            return ret;
        } else {
            return body;
        }
    }


  /*
  function wrapScriptBodyWithTryCatch(node, body) {
    if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
      printIidToLoc(node);
      var iid1 = getIid();
      printIidToLoc(node);
      var l = labelCounter++;
safe_print("Wrap Script Body");
      if (node.scope.parent == null) {
        var ret = replaceInStatement(
          //"function n() { jalangiLabel" + l + ": while(true) { if (!this.true_callee_stack) this.true_callee_stack = [ (typeof arguments !== 'undefined' ? arguments.callee : null) ]; else this.true_callee_stack.push ((typeof arguments !== 'undefined' ? arguments.callee : null)); try {(function () {" + RP + "1}).bind(globalThis).apply (null, null); this.true_callee_stack.pop ();} catch(" + JALANGI_VAR +
          "function n() { jalangiLabel" + l + ": while(true) { if (!this.true_callee_stack) this.true_callee_stack = [ (typeof arguments !== 'undefined' ? arguments.callee : null) ]; else this.true_callee_stack.push ((typeof arguments !== 'undefined' ? arguments.callee : null)); try {(function () {" + RP + "1}).bind(globalThis).apply (null, null); this.true_callee_stack.pop ();} catch(" + JALANGI_VAR +
          "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
          JALANGI_VAR + "e.stack);\n  " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
          "e); } finally { if (" + logScriptExitFunName + "(" +
          RP + "3)) { " + logLastComputedFunName + "(); continue jalangiLabel" + l + ";\n } else {\n  " + logLastComputedFunName + "(); break jalangiLabel" + l + ";\n }}\n }}", body,
          iid1,
          getIid()
        );
        
        //let body_node = ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.body.body;
        let body_node = ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.body.body;
        Object.keys (body_node).reverse ().forEach (i => {
          modifyVariableDeclarationRecursive(body_node[i], i, body_node, undefined, undefined, true, 0);
          //findIdentifierName(body_node[i]);
        });
      }
      else {
        var ret = replaceInStatement(
          "function n() { jalangiLabel" + l + ": while(true) { if (!this.true_callee_stack) this.true_callee_stack = [ (typeof arguments !== 'undefined' ? arguments.callee : null) ]; else this.true_callee_stack.push ((typeof arguments !== 'undefined' ? arguments.callee : null));   try {(function () {" + RP + "1}).bind(this).apply (null, arguments);this.true_callee_stack.pop (); } catch(" + JALANGI_VAR +
          "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
          JALANGI_VAR + "e.stack);\n  " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
          "e); } finally { if (" + logScriptExitFunName + "(" +
          RP + "3)) { " + logLastComputedFunName + "(); continue jalangiLabel" + l + ";\n } else {\n  " + logLastComputedFunName + "(); break jalangiLabel" + l + ";\n }}\n }}", body,
          iid1,
          getIid()
        );
        
        //ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.params = node.params;
        
        //let body_node = ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.body.body;
        ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.params = node.params;
        
        let body_node = ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.body.body;
        Object.keys (body_node).revers e( ).forEach (i => {
          modifyVariableDeclarationRecursive(body_node[i], i, body_node, undefined, undefined, false, 0);
        });
      }
      
      //safe_print(JSON.stringify (ret));
      
      ret = ret[0].body.body;
      transferLoc(ret[0], node);
      return ret;
    } else {
      return body;
    }
  }
  */
	/*
  function wrapFunBodyWithTryCatch(node, body) {
    if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
      printIidToLoc(node);
      var iid1 = getIid();
      printIidToLoc(node);
      var l = labelCounter++;
      if (node.scope.parent == null) {
        var ret = replaceInStatement(
          "function n() { jalangiLabel" + l + ": while(true) { if (!this.true_callee_stack) this.true_callee_stack = [ (typeof arguments !== 'undefined' ? arguments.callee : null) ]; else this.true_callee_stack.push ((typeof arguments !== 'undefined' ? arguments.callee : null));   try {(function () {" + RP + "1}).bind(globalThis).apply (null, null); this.true_callee_stack.pop (); } catch(" + JALANGI_VAR +
          "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
          JALANGI_VAR + "e.stack);\n " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
          "e); } finally { if (" + logFunctionReturnFunName + "(" +
          RP + "3)) continue jalangiLabel" + l + ";\n else \n  return " + logReturnAggrFunName + "();\n }\n }}", body,
          iid1,
          getIid()
        );
        
        //let body_node = ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.body.body;
			// This is the Try-Catch block 
        let body_node = ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.body.body;
        Object.keys (body_node).reverse ().forEach (i => {
          modifyVariableDeclarationRecursive(body_node[i], i, body_node, undefined, undefined, true, 0);
          //findIdentifierName(body_node[i]);
        });
      }
      else {
        var ret = replaceInStatement(
          "function n() { jalangiLabel" + l + ": while(true) { if (!this.true_callee_stack) this.true_callee_stack = [ (typeof arguments !== 'undefined' ? arguments.callee : null) ]; else this.true_callee_stack.push ((typeof arguments !== 'undefined' ? arguments.callee : null));   try {(function () {" + RP + "1}).bind(this).apply:w
 (null, arguments);this.true_callee_stack.pop ();} catch(" + JALANGI_VAR +
          "e) { //safe_print(" + JALANGI_VAR + "e); safe_print(" +
          JALANGI_VAR + "e.stack);\n " + logUncaughtExceptionFunName + "(" + RP + "2," + JALANGI_VAR +
          "e); } finally { if (" + logFunctionReturnFunName + "(" +
          RP + "3)) continue jalangiLabel" + l + ";\n else \n  return " + logReturnAggrFunName + "();\n }\n }}", body,
          iid1,
          getIid()
        );
        
        //ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.params = node.params;
        
        //let body_node = ret[0].body.body[0].body.body.body[0].block.body[0].expression.callee.object.callee.object.body.body;
        ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.params = node.params;
        
        let body_node = ret[0].body.body[0].body.body.body[1].block.body[0].expression.callee.object.callee.object.body.body;
        Object.keys (body_node).reverse ().forEach (i => {
          modifyVariableDeclarationRecursive(body_node[i], i, body_node, undefined, undefined, false, 0);
        });
      }
      
      //safe_print(JSON.stringify (ret));
      
      ret = ret[0].body.body;
      transferLoc(ret[0], node);
      return ret;
    } else {
      return body;
    }
  }
*/  
  function syncDefuns(node, scope, isScript) {
    var ret = [], ident;
    if (!isScript) {
    /*  if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
        if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
          ident = createIdentifierAst("arguments");
          ret = origin_array_concat.call(ret, createCallInitAsStatement(node,
            createLiteralAst("arguments"),
            ident,
            true,
            ident, false, true));
        }
      }*/
    }
    if (scope) {
      for (var name in scope.vars) {
        if (HOP(scope.vars, name)) {
          if (scope.vars[name] === "defun") {
            if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
              ident = createIdentifierAst(name);
              ident.loc = scope.funLocs[name];
              ret = origin_array_concat.call(ret, createCallInitAsStatement(node,
                createLiteralAst(name),
                wrapLiteral(ident, ident, N_LOG_FUNCTION_LIT),
                false,
                ident, false, true));
            } else {
              ident = createIdentifierAst(name);
              ident.loc = scope.funLocs[name];
              ret = origin_array_concat.call(ret,
                createExpressionStatement(ident,
                  wrapLiteral(ident, ident, N_LOG_FUNCTION_LIT)));
            }
          }
          if (scope.vars[name] === "lambda") {
            if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
              ident = createIdentifierAst(name);
              ident.loc = scope.funLocs[name];
              ret = origin_array_concat.call(ret, createCallInitAsStatement(node,
                createLiteralAst(name), ident,
                false,
                ident, false, true));
            }
          }
          if (scope.vars[name] === "arg") {
            if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
              ident = createIdentifierAst(name);
              ret = origin_array_concat.call(ret, createCallInitAsStatement(node,
                createLiteralAst(name),
                ident,
                true,
                ident, false, true));
            }
          }
          if (scope.vars[name] === "var") {
            if (!Config.INSTR_INIT || Config.INSTR_INIT(node)) {
              ret = origin_array_concat.call(ret, createCallInitAsStatement(node,
                createLiteralAst(name),
                createIdentifierAst(name),
                false, undefined, false, false));
            }
          }
        }
      }
    }
    return ret;
  }
  
  
  var scope;
  
  
  function instrumentFunctionEntryExit(node, ast) {
    var body;
    if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
      body = createCallAsFunEnterStatement(node);
    } else {
      body = [];
    }
    body = origin_array_concat.call(origin_array_concat.call(body, syncDefuns(node, scope, false)), ast);
    return body;
  }
  
  //    function instrumentFunctionEntryExit(node, ast) {
  //        return wrapFunBodyWithTryCatch(node, ast);
  //    }
  
  /**
   * instruments entry of a script.  Adds the script entry (JALANGI_$.Se) callback,
   * and the JALANGI_$.N init callbacks for locals.
   *
   */
  function instrumentScriptEntryExit(node, body0) {
    var body;
    if (!Config.INSTR_TRY_CATCH_ARGUMENTS || Config.INSTR_TRY_CATCH_ARGUMENTS(node)) {
      body = createCallAsScriptEnterStatement(node)
    } else {
      body = [];
    }
    body = origin_array_concat.call(origin_array_concat.call(body, syncDefuns(node, scope, true)), body0);
    return body;
  }
  
  
  function getPropertyAsAst(ast) {
    return ast.computed ? ast.property : createLiteralAst(ast.property.name);
  }
  
  function instrumentCall(callAst, isCtor) {
    var ast = callAst.callee;
    var ret;
    if (ast.type === 'MemberExpression') {
      ret = wrapMethodCall(callAst, ast.object,
        getPropertyAsAst(ast),
        isCtor, ast.computed);
      return ret;
    } else if (ast.type === 'Identifier' && ast.name === "eval") {
      return ast;
    } else {
      ret = wrapFunCall(callAst, ast, isCtor);
      return ret;
    }
  }
  
  function instrumentStore(node, isDeclaration) {
    var ret;
    if (node.left.type === 'Identifier') {
      if (scope.hasVar(node.left.name)) {
        ret = wrapWrite(node.right, createLiteralAst(node.left.name), node.right, node.left, false, scope.isGlobal(node.left.name), isDeclaration);
      } else {
        ret = wrapWriteWithUndefinedCheck(node.right, createLiteralAst(node.left.name), node.right, node.left);
        
      }
      node.right = ret;
      return node;
    } else {
      ret = wrapPutField(node, node.left.object, getPropertyAsAst(node.left), node.right, node.left.computed);
      return ret;
    }
  }
  
  function instrumentLoad(ast, isTypeof) {
    var ret;
    if (ast.type === 'Identifier') {
      if (ast.name === "undefined") {
        ret = wrapLiteral(ast, ast, N_LOG_UNDEFINED_LIT);
        return ret;
      } else if (ast.name === "NaN" || ast.name === "Infinity") {
        ret = wrapLiteral(ast, ast, N_LOG_NUMBER_LIT);
        return ret;
      }
      if (ast.name === JALANGI_VAR) {
        return ast;
      } else if (scope.hasVar(ast.name)) {
        ret = wrapRead(ast, createLiteralAst(ast.name), ast, false, false, scope.isGlobal(ast.name));
        return ret;
      } else if (isTypeof) {
        ret = wrapReadWithUndefinedCheck(ast, ast.name);
        return ret;
      } else {
        ret = wrapRead(ast, createLiteralAst(ast.name), ast, false, true, false)
        return ret;
      }
      
    } else if (ast.type === 'MemberExpression') {
      return wrapGetField(ast, ast.object, getPropertyAsAst(ast), ast.computed);
    } else {
      return ast;
    }
  }
  
  function instrumentLoadModStore(node, isNumber) {
    if (node.left.type === 'Identifier') {
      var tmp0 = instrumentLoad(node.left, false);
      if (isNumber) {
        tmp0 = makeNumber(node, instrumentLoad(tmp0, false));
      }
      var tmp1 = wrapRHSOfModStore(node.right, tmp0, node.right, origin_str_substring.call(node.operator, 0, node.operator.length - 1));
      
      var tmp2;
      if (scope.hasVar(node.left.name)) {
        tmp2 = wrapWrite(node, createLiteralAst(node.left.name), tmp1, node.left, false, scope.isGlobal(node.left.name), false);
      } else {
        tmp2 = wrapWriteWithUndefinedCheck(node, createLiteralAst(node.left.name), tmp1, node.left);
        
      }
      tmp2 = wrapLHSOfModStore(node, node.left, tmp2);
      return tmp2;
    } else {
      var ret = wrapModAssign(node, node.left.object,
        getPropertyAsAst(node.left),
        origin_str_substring.call(node.operator, 0, node.operator.length - 1),
        node.right, node.left.computed);
      return ret;
    }
  }
  
  function instrumentPreIncDec(node) {
    var right = createLiteralAst(1);
    right = wrapLiteral(right, right, N_LOG_NUMBER_LIT);
    var ret = wrapRHSOfModStore(node, node.argument, right, origin_str_substring.call(node.operator, 0, 1) + "=");
    return instrumentLoadModStore(ret, true);
  }
  
  function adjustIncDec(op, ast) {
    if (op === '++') {
      op = '-';
    } else {
      op = '+';
    }
    var right = createLiteralAst(1);
    right = wrapLiteral(right, right, N_LOG_NUMBER_LIT);
    var ret = wrapRHSOfModStore(ast, ast, right, op);
    return ret;
  }
  
  // Should 'Program' nodes in the AST be wrapped with prefix code to load libraries,
  // code to indicate script entry and exit, etc.?
  // we need this flag since when we're instrumenting eval'd code, the code is parsed
  // as a top-level 'Program', but the wrapping code may not be syntactically valid in
  // the surrounding context, e.g.:
  //    var y = eval("x + 1");
  
  function setScope(node) {
    scope = node.scope;
  }
  
  function funCond0(node) {
    node.test = wrapWithX1(node, node.test);
    node.init = wrapWithX1(node, node.init);
    node.update = wrapWithX1(node, node.update);
    return node;
  }
  
  function mergeBodies(node) {
    printIidToLoc(node);
    var ret = replaceInStatement(
      "function n() { if (!" + logSampleFunName + "(" + RP + "1, arguments.callee)){" + RP + "2} else {" + RP + "3}}",
      getIid(),
      node.bodyOrig.body,
      node.body.body
    );
    
    node.body.body = ret[0].body.body;
    delete node.bodyOrig;
    return node;
  }
  
  function regExpToJSON() {
    var str = this.source;
    var glb = this.global;
    var ignoreCase = this.ignoreCase;
    var multiline = this.multiline;
    var obj = {
      type: 'JALANGI_$.AST.REGEXP',
      value: str,
      glb: glb,
      ignoreCase: ignoreCase,
      multiline: multiline
    }
    return obj;
  }
  
  function JSONStringifyHandler(key, value) {
    if (key === 'scope') {
      return undefined;
    } if (value instanceof RegExp) {
      return regExpToJSON.call(value);
    } else {
      return value;
    }
  }
  
  function JSONParseHandler(key, value) {
    var ret = value, flags = '';
    if (typeof value === 'object' && value && value.type === 'JALANGI_$.AST.REGEXP') {
      if (value.glb)
        flags += 'g';
      if (value.ignoreCase)
        flags += 'i';
      if (value.multiline)
        flags += 'm';
      ret = RegExp(value.value, flags);
    }
    return ret;
  }
  
  function clone(src) {
    var ret = origin_json_parse(origin_json_stringify(src, JSONStringifyHandler), JSONParseHandler);
    return ret;
  }
  
  /*
   function constructEmptyObject(o) {
   function F() {}
   F.prototype = o;
   return new F();
   }
  
   function clone(src) { // from http://davidwalsh.name/javascript-clone
   function mixin(dest, source, copyFunc) {
   var name, s, i, empty = {};
   for(name in source){
   // the (!(name in empty) || empty[name] !== s) condition avoids copying properties in "source"
   // inherited from Object.prototype.	 For example, if dest has a custom toString () method,
   // don't overwrite it with the toString () method that source inherited from Object.prototype
   s = source[name];
   if(!(name in dest) || (dest[name] !== s && (!(name in empty) || empty[name] !== s))){
   dest[name] = copyFunc ? copyFunc(s) : s;
   }
   }
   return dest;
   }
  
   if(!src || typeof src != "object" || Object.prototype.toString.call(src) === "[object Function]"){
   // null, undefined, any non-object, or function
   return src;	// anything
   }
   if(src.nodeType && "cloneNode" in src){
   // DOM Node
   return src.cloneNode(true); // Node
   }
   if(src instanceof Date){
   // Date
   return new Date(src.getTime());	// Date
   }
   if(src instanceof RegExp){
   // RegExp
   return new RegExp(src);   // RegExp
   }
   var r, i, l;
   if(src instanceof Array){
   // array
   r = [];
   for(i = 0, l = src.length; i < l; ++i){
   if(i in src){
   r.push (clone(src[i]));
   }
   }
   // we don't clone functions for performance reasons
   //		}else if(d.isFunction(src)){
   //			// function
   //			r = function(){ return src.apply (this, arguments); };
   }else{
   // generic objects
   try {
   r = constructEmptyObject(src);
   //                r = src.constructor ? new src.constructor() : {};
   } catch (e) {
   safe_print(src);
   throw e;
   }
   }
   return mixin(r, src, clone);
  
   }
   */
  var visitorCloneBodyPre = {
    "FunctionExpression": function (node) {
      node.bodyOrig = clone(node.body);
      return node;
    },
    "FunctionDeclaration": function (node) {
      node.bodyOrig = clone(node.body);
      return node;
    }
  };
  
  var visitorMergeBodyPre = {
    "FunctionExpression": mergeBodies,
    "FunctionDeclaration": mergeBodies
  };
  
  var visitorRRPre = {
    'Program': setScope,
    'FunctionDeclaration': setScope,
    'FunctionExpression': setScope,
    'CatchClause': setScope
  };
  
  var visitorRRPost = {
    'Literal': function (node, context) {
      if (context === astUtil.CONTEXT.RHS) {
        
        var litType;
        switch (typeof node.value) {
          case 'number':
            litType = N_LOG_NUMBER_LIT;
            break;
          case 'string':
            litType = N_LOG_STRING_LIT;
            break;
          case 'object': // for null
            if (node.value === null)
              litType = N_LOG_NULL_LIT;
            else
              litType = N_LOG_REGEXP_LIT;
            break;
          case 'boolean':
            litType = N_LOG_BOOLEAN_LIT;
            break;
        }
        var ret1 = wrapLiteral(node, node, litType);
        return ret1;
      } else {
        return node;
      }
    },
    "Program": function (node) {
      var ret = instrumentScriptEntryExit(node, node.body);
      node.body = ret;
      
      scope = scope.parent;
      return node;
    },
    "VariableDeclaration": function (node) {
      var declarations = MAP(node.declarations, function (def) {
        if (def.init !== null) {
          var init = wrapWrite(def.init, createLiteralAst(def.id.name), def.init, def.id, false, scope.isGlobal(def.id.name), true);
          init = wrapWithX1(def.init, init);
          def.init = init;
        }
        return def;
      });
      node.declarations = declarations;
      return node;
    },
    "NewExpression": function (node) {
      var ret = {
        type: 'CallExpression',
        callee: instrumentCall(node, true),
        'arguments': node.arguments
      };
      transferLoc(ret, node);
      return ret;
      //            var ret1 = wrapLiteral(node, ret, N_LOG_OBJECT_LIT);
      //            return ret1;
    },
    "CallExpression": function (node) {
      var isEval = node.callee.type === 'Identifier' && node.callee.name === "eval";
      var callee = instrumentCall(node, false);
      node.callee = callee;
      if (isEval) {
        node.arguments = MAP(node.arguments, wrapEvalArg);
      }
      return node;
    },
    "AssignmentExpression": function (node) {
      var ret1;
      if (node.operator === "=") {
        ret1 = instrumentStore(node, false);
      } else {
        ret1 = instrumentLoadModStore(node);
      }
      return ret1;
    },
    "UpdateExpression": function (node) {
      var ret1;
      ret1 = instrumentPreIncDec(node);
      if (!node.prefix) {
        ret1 = adjustIncDec(node.operator, ret1);
      }
      return ret1;
    },
    "FunctionExpression": function (node, context) {
      node.body.body = instrumentFunctionEntryExit(node, node.body.body);
      var ret1;
      if (context === astUtil.CONTEXT.GETTER || context === astUtil.CONTEXT.SETTER) {
        ret1 = node;
      } else {
        ret1 = wrapLiteral(node, node, N_LOG_FUNCTION_LIT);
      }
      scope = scope.parent;
      return ret1;
    },
    "FunctionDeclaration": function (node) {
      //safe_print(node.body.body);
      node.body.body = instrumentFunctionEntryExit(node, node.body.body);
      scope = scope.parent;
      return node;
    },
    "ObjectExpression": function (node) {
      var ret1 = wrapLiteral(node, node, N_LOG_OBJECT_LIT);
      return ret1;
    },
    "ArrayExpression": function (node) {
      var ret1 = wrapLiteral(node, node, N_LOG_ARRAY_LIT);
      return ret1;
    },
    'ThisExpression': function (node) {
      var ret = wrapRead(node, createLiteralAst('this'), node, false, false, false);
      return ret;
    },
    'Identifier': function (node, context) {
      if (context === astUtil.CONTEXT.RHS) {
        var ret = instrumentLoad(node, false);
        return ret;
      } else if (context === astUtil.CONTEXT.TYPEOF) {
        ret = instrumentLoad(node, true);
        return ret;
      } else {
        return node;
      }
    },
    'MemberExpression': function (node, context) {
      if (context === astUtil.CONTEXT.RHS) {
        var ret = instrumentLoad(node, false);
        return ret;
      } else {
        return node;
      }
    },
    "SequenceExpression": function (node) {
      var i = 0, len = node.expressions.length;
      for (i = 0; i < len - 1 /* the last expression is the result, do not wrap that */; i++) {
        node.expressions[i] = wrapWithX1(node.expressions[i], node.expressions[i]);
      }
      return node;
    },
    "ForInStatement": function (node) {
      var ret = wrapHash(node.right, node.right);
      node.right = ret;
      
      node = wrapForIn(node, node.left, node.right, node.body);
      //var name;
      //if (node.left.type === 'VariableDeclaration') {
      //    name = node.left.declarations[0].id.name;
      //} else {
      //    name = node.left.name;
      //}
      //node.body = wrapForInBody(node, node.body, name);
      return node;
    },
    "CatchClause": function (node) {
      var name;
      name = node.param.name;
      wrapCatchClause(node, node.body.body, name);
      scope = scope.parent;
      return node;
    },
    "ReturnStatement": function (node) {
      var ret = wrapReturn(node, node.argument);
      node.argument = wrapWithX1(node, ret);
      return node;
    },
    "ThrowStatement": function (node) {
      var ret = wrapThrow(node, node.argument);
      node.argument = wrapWithX1(node, ret);
      return node;
    },
    
    "ExpressionStatement": function (node) {
      node.expression = wrapWithX1(node, node.expression);
      return node;
    }
  };
  
  function funCond(node) {
    var ret = wrapConditional(node.test, node.test);
    node.test = ret;
    node.test = wrapWithX1(node, node.test);
    node.init = wrapWithX1(node, node.init);
    node.update = wrapWithX1(node, node.update);
    return node;
  }
  
  
  var visitorOps = {
    "Program": function (node) {
      var body = wrapScriptBodyWithTryCatch(node, node.body);
      //                var ret = prependScriptBody(node, body);
      node.body = body;
      
      return node;
    },
    'BinaryExpression': function (node) {
      var ret = wrapBinaryOp(node, node.left, node.right, node.operator);
      return ret;
    },
    'LogicalExpression': function (node) {
      var ret;
      if (node.operator === "&&") {
        ret = wrapLogicalAnd(node, node.left, node.right);
      } else if (node.operator === "||") {
        ret = wrapLogicalOr(node, node.left, node.right);
      }
      return ret;
    },
    'UnaryExpression': function (node) {
      var ret;
      if (node.operator === "void") {
        return node;
      } else if (node.operator === "delete") {
        if (node.argument.object) {
          ret = wrapBinaryOp(node, node.argument.object, getPropertyAsAst(node.argument), node.operator, node.argument.computed);
        } else {
          return node;
        }
      } else {
        ret = wrapUnaryOp(node, node.argument, node.operator);
      }
      return ret;
    },
    "SwitchStatement": function (node) {
      var dis = wrapSwitchDiscriminant(node.discriminant, node.discriminant);
      dis = wrapWithX1(node.discriminant, dis);
      var cases = MAP(node.cases, function (acase) {
        var test;
        if (acase.test) {
          test = wrapSwitchTest(acase.test, acase.test);
          acase.test = wrapWithX1(acase.test, test);
        }
        return acase;
      });
      node.discriminant = dis;
      node.cases = cases;
      return node;
    },
    "FunctionExpression": function (node) {
      node.body.body = wrapFunBodyWithTryCatch(node, node.body.body);
      return node;
    },
    "FunctionDeclaration": function (node) {
      node.body.body = wrapFunBodyWithTryCatch(node, node.body.body);
      return node;
    },
    "WithStatement": function (node) {
      node.object = wrapWith(node.object);
      return node;
    },
    "ConditionalExpression": funCond,
    "IfStatement": funCond,
    "WhileStatement": funCond,
    "DoWhileStatement": funCond,
    "ForStatement": funCond
  };
  
  function addScopes(ast) {
    
    function Scope(parent, isCatch) {
      this.vars = {};
      this.funLocs = {};
      this.funNodes = {};
      this.hasEval = false;
      this.hasArguments = false;
      this.parent = parent;
      this.isCatch = isCatch;
    }
    
    Scope.prototype.addVar = function (name, type, loc, node) {
      var tmpScope = this;
      if (this.isCatch && type !== 'catch') {
        tmpScope = this.parent;
      }
      
      if (tmpScope.vars[name] !== 'arg') {
        tmpScope.vars[name] = type;
      }
      if (type === 'defun') {
        tmpScope.funLocs[name] = loc;
        tmpScope.funNodes[name] = node;
      }
    };
    
    Scope.prototype.hasOwnVar = function (name) {
      var s = this;
      if (s && HOP(s.vars, name))
        return s.vars[name];
      return null;
    };
    
    Scope.prototype.hasVar = function (name) {
      var s = this;
      while (s !== null) {
        if (HOP(s.vars, name))
          return s.vars[name];
        s = s.parent;
      }
      return null;
    };
    
    Scope.prototype.isGlobal = function (name) {
      var s = this;
      while (s !== null) {
        if (HOP(s.vars, name) && s.parent !== null) {
          return false;
        }
        s = s.parent;
      }
      return true;
    };
    
    Scope.prototype.addEval = function () {
      var s = this;
      while (s !== null) {
        s.hasEval = true;
        s = s.parent;
      }
    };
    
    Scope.prototype.addArguments = function () {
      var s = this;
      while (s !== null) {
        s.hasArguments = true;
        s = s.parent;
      }
    };
    
    Scope.prototype.usesEval = function () {
      return this.hasEval;
    };
    
    Scope.prototype.usesArguments = function () {
      return this.hasArguments;
    };
    
    
    var currentScope = null;
    
    // rename arguments to JALANGI_$_arguments
    var fromName = 'arguments';
    var toName = JALANGI_VAR + "_arguments";
    
    function handleFun(node) {
      var oldScope = currentScope;
      currentScope = new Scope(currentScope);
      node.scope = currentScope;
      if (node.type === 'FunctionDeclaration') {
        oldScope.addVar(node.id.name, "defun", node.loc, node);
        MAP(node.params, function (param) {
          if (param.name === fromName) {         // rename arguments to JALANGI_$_arguments
            param.name = toName;
          }
          currentScope.addVar(param.name, "arg");
        });
      } else if (node.type === 'FunctionExpression') {
        if (node.id !== null) {
          currentScope.addVar(node.id.name, "lambda");
        }
        MAP(node.params, function (param) {
          if (param.name === fromName) {         // rename arguments to JALANGI_$_arguments
            param.name = toName;
          }
          currentScope.addVar(param.name, "arg");
        });
      }
    }
    
    function handleVar(node) {
      currentScope.addVar(node.id.name, "var");
    }
    
    function handleCatch(node) {
      var oldScope = currentScope;
      currentScope = new Scope(currentScope, true);
      node.scope = currentScope;
      currentScope.addVar(node.param.name, "catch");
    }
    
    function popScope(node) {
      currentScope = currentScope.parent;
      return node;
    }
    
    var visitorPre = {
      'Program': handleFun,
      'FunctionDeclaration': handleFun,
      'FunctionExpression': handleFun,
      'VariableDeclarator': handleVar,
      'CatchClause': handleCatch
    };
    
    var visitorPost = {
      'Program': popScope,
      'FunctionDeclaration': popScope,
      'FunctionExpression': popScope,
      'CatchClause': popScope,
      'Identifier': function (node, context) {         // rename arguments to JALANGI_$_arguments
        if (context === astUtil.CONTEXT.RHS && node.name === fromName && currentScope.hasOwnVar(toName)) {
          node.name = toName;
        }
        return node;
      },
      "UpdateExpression": function (node) {         // rename arguments to JALANGI_$_arguments
        if (node.argument.type === 'Identifier' && node.argument.name === fromName && currentScope.hasOwnVar(toName)) {
          node.argument.name = toName;
        }
        return node;
      },
      "AssignmentExpression": function (node) {         // rename arguments to JALANGI_$_arguments
        if (node.left.type === 'Identifier' && node.left.name === fromName && currentScope.hasOwnVar(toName)) {
          node.left.name = toName;
        }
        return node;
      }
      
    };
    astUtil.transformAst(ast, visitorPost, visitorPre);
  }

  function hoistFn_and_ExtractDeclarations(ast, declarations) {
    var key, child, startIndex = 0;


    if (ast.body) {
      var newBody = [];
//safe_print(ast);
/*
      if (ast.body.length > 0) { // do not hoister function declaration before JALANGI_$.Fe or JALANGI_$.Se
        if (ast.body[0].type === 'ExpressionStatement') {
          if (ast.body[0].expression.type === 'CallExpression') {
            if (ast.body[0].expression.callee.object &&
              ast.body[0].expression.callee.object.name === 'JALANGI_$'
              && ast.body[0].expression.callee.property
              &&
              (ast.body[0].expression.callee.property.name === 'Se' || ast.body[0].
                expression.callee.property.name === 'Fe')) {
              
					declarations.push (ast.body[0]);
              //newBody.push (ast.body[0]);
              startIndex = 1;
            }
          }
        }
      }
*/
//		var varInit = [];
//safe_print("Hoist Start New");
//safe_print(ast.body);
//safe_print("Hoist Loop Start " + ast.type + " (" + ast.body.length + ")");
      for (var i = startIndex; i < ast.body.length; i++) {
//       safe_print("Type: " + ast.body[i].type); 
        if (ast.body[i].type === 'FunctionDeclaration') {
///safe_print("Function Decl Hoisted");
//			safe_print("Hoist Function: " + ast.body[i].id.name);
          origin_array_push.call(declarations, ast.body[i]);
          if (newBody.length !== i + 1) {
            //hoisteredFunctions.push (ast.body[i].id.name);
          }
        }
			/* We need to hoist variable declarations in case
				it is referred (as undefined) in another script tag before it is initialized */
        else if (ast.body[i].type === 'VariableDeclaration') {
//safe_print("Hoist 2 : " + ast.body[i].declarations);
//safe_print(ast.body[i].declarations);
				var isVarDeclaration = false;
				var cloned = lodash_esnstrument.cloneDeep(ast.body[i]);
				 for (let child_key in cloned.declarations) {
					let child = cloned.declarations[child_key];
//	safe_print(child);
					if (child.type === 'VariableDeclarator') {
					  if (child.id.type === 'Identifier') {
						isVarDeclaration = true;
//	safe_print("Copied");
//	safe_print(child);
						if (child.init)
							child.init = null;

//						if (child.id)
//							safe_print("Hoist Variable: " + child.id.name);
//						else
//						{	safe_print("Hoist Variable Null");
//							safe_print(child);
//						}
					  }
					}
				 }
				if (isVarDeclaration)
				{	
					origin_array_push.call(declarations, cloned);
				/*
				 for (let child_key in cloned.declarations) {
						let child = cloned.declarations[child_key];
						var new_node = CreateAssignmentNode(child.id.name, 'this.' + child.id.name);
						varInit.push (new_node); 
						new_node = CreateAssignmentNode('this.' + child.id.name, child.id.name);
						varInit.push (new_node); 
					}
					*/
				}
			}
		}
//safe_print("Hoist Loop End " + ast.type + " (" + ast.body.length + ")");
		//var var_init_length = varInit.length;
      //for (var i = 0; i < var_init_length; i++) {
      //    newBody.push (varInit.pop ());
		//}
		
      for (var i = startIndex; i < ast.body.length; i++) {
        if (ast.body[i].type !== 'FunctionDeclaration') {
          origin_array_push.call(newBody, ast.body[i]);
        }
      }
      while (ast.body.length > 0) {
        origin_array_pop.call(ast.body);
      }
      for (var i = 0; i < newBody.length; i++) {
        origin_array_push.call(ast.body, newBody[i]);
      }
    } else {
      //safe_print(typeof ast.body);
    }
    for (key in ast) {
      if (origin_obj_hasOwnProperty.call(ast, key)) {
        child = ast[key];
//safe_print("Child: " + child);
//safe_print("Is Scope: " + key);
        if (typeof child === 'object' && child !== null && key !==
          "scope" && !('type' in child && (child.type === 'FunctionDeclaration' || child.type === 'FunctionExpression') ) ) {
//safe_print("Enter Inside : " + key);
          hoistFn_and_ExtractDeclarations(child/*, hoisteredFunctions*/, declarations);
        }
        
      }
    }
    
    //return newBody;
  }
 
  
  // START of Liang Gong's AST post-processor
  function hoistFunctionDeclaration(ast, hoisteredFunctions) {
    var key, child, startIndex = 0;
    if (ast.body) {
      var newBody = [];
      if (ast.body.length > 0) { // do not hoister function declaration before JALANGI_$.Fe or JALANGI_$.Se
        if (ast.body[0].type === 'ExpressionStatement') {
          if (ast.body[0].expression.type === 'CallExpression') {
            if (ast.body[0].expression.callee.object &&
              ast.body[0].expression.callee.object.name === 'JALANGI_$'
              && ast.body[0].expression.callee.property
              &&
              (ast.body[0].expression.callee.property.name === 'Se' || ast.body[0].
                expression.callee.property.name === 'Fe')) {
              
              origin_array_push.call(newBody, ast.body[0]);
              startIndex = 1;
            }
          }
        }
      }
		var varInit = [];
      for (var i = startIndex; i < ast.body.length; i++) {
        
        if (ast.body[i].type === 'FunctionDeclaration') {
          origin_array_push.call(newBody, ast.body[i]);
          if (newBody.length !== i + 1) {
            origin_array_push.call(hoisteredFunctions, ast.body[i].id.name);
          }
        }
			/* We need to hoist variable declarations in case
				it is referred (as undefined) in another script tag before it is initialized */
/*
        else if (ast.body[i].type === 'VariableDeclaration') {
//safe_print("Hoist 2 : " + ast.body[i].declarations);
//safe_print(ast.body[i].declarations);
				var isVarDeclaration = false;
				var cloned = lodash.cloneDeep(ast.body[i]);
				 for (let child_key in cloned.declarations) {
					let child = cloned.declarations[child_key];
//	safe_print(child);
					if (child.type === 'VariableDeclarator') {
					  if (child.id.type === 'Identifier') {
						isVarDeclaration = true;
//	safe_print("Copied");
//	safe_print(child);
						if (child.init)
							child.init = null;
					  }
					}
				 }
				if (isVarDeclaration)
				{ newBody.push (cloned);
			
				 for (let child_key in cloned.declarations) {
						let child = cloned.declarations[child_key];
						var new_node = CreateAssignmentNode(child.id.name, 'this.' + child.id.name);
						varInit.push (new_node); 
						new_node = CreateAssignmentNode('this.' + child.id.name, child.id.name);
						varInit.push (new_node); 
					}
		
				}
			}
*/
		}
/*
		var var_init_length = varInit.length;
      for (var i = 0; i < var_init_length; i++) {
          newBody.push (varInit.pop ());
		}
*/		
      for (var i = startIndex; i < ast.body.length; i++) {
        if (ast.body[i].type !== 'FunctionDeclaration') {
          origin_array_push.call(newBody, ast.body[i]);
        }
      }
      while (ast.body.length > 0) {
        origin_array_pop.call(ast.body);
      }
      for (var i = 0; i < newBody.length; i++) {
        origin_array_push.call(ast.body, newBody[i]);
      }
    } else {
      //safe_print(typeof ast.body);
    }
    for (key in ast) {
      if (origin_obj_hasOwnProperty.call(ast, key)) {
        child = ast[key];
        if (typeof child === 'object' && child !== null && key !==
          "scope") {
          hoistFunctionDeclaration(child, hoisteredFunctions);
        }
        
      }
    }
    
    return ast;
  }
  
  // END of Liang Gong's AST post-processor



/*

/*
Node {
  type: 'VariableDeclaration',
  start: 689,
  end: 711,
  loc: SourceLocation { start: [Position], end: [Position] },
  declarations: [ [Node] ],
  kind: 'var'
}


Node {
  type: 'VariableDeclarator',
  start: 693,
  end: 710,
  loc: SourceLocation { start: [Position], end: [Position] },
  id: Node {
    type: 'Identifier',
    start: 693,
    end: 698,
    loc: [SourceLocation],
    name: 'array'
  },
  init: Node {
    type: 'ArrayExpression',
    start: 701,
    end: 710,
    loc: [SourceLocation],
    elements: [Array]
  }
}


*/

class Node {};


	function createLiteralArrayBucketExpression(ref_node, array_name, index)
	{
		var new_node = new Node();
		new_node.type = 'MemberExpression';
		new_node.start = ref_node.start;
		new_node.end = ref_node.end;
		new_node.loc = ref_node.loc;
		new_node.computed = true;

		var obj_node = new Node();
		obj_node.type = 'Identifier';
		obj_node.start = ref_node.start;
		obj_node.end = ref_node.end;
		obj_node.loc = ref_node.loc;
		obj_node.name = array_name;

		var prop_node = new Node();
		prop_node.type = 'Literal';
		prop_node.start = ref_node.start;
		prop_node.end = ref_node.end;
		prop_node.loc = ref_node.loc;
		prop_node.value = index;
		prop_node.raw = origin_number_toString.call(index);

		new_node.object = obj_node;
		new_node.property = prop_node;

		new_node.instrument_skip = true;

		return new_node;

	}

	function createArrayBucketExpression(ref_node, array_name, value_node)
	{
		var new_node = new Node();
		new_node.type = 'MemberExpression';
		new_node.start = ref_node.start;
		new_node.end = ref_node.end;
		new_node.loc = ref_node.loc;
		new_node.computed = true;

		var obj_node = new Node();
		obj_node.type = 'Identifier';
		obj_node.start = ref_node.start;
		obj_node.end = ref_node.end;
		obj_node.loc = ref_node.loc;
		obj_node.name = array_name;

//safe_print("CHECK");
//safe_print(value_node);
		new_node.object = obj_node;
		new_node.property = value_node;

		new_node.instrument_skip = true;

		return new_node;

	}


	function insertMemberCallStatement(node, ref_node, index, base_name, property_name, value)
	{
		var new_node = new Node();
		new_node.type = 'ExpressionStatement';
		new_node.loc = ref_node.loc;		
		new_node.start = ref_node.start;		
		new_node.end = ref_node.end;

		var call_node = new Node();
		call_node.type = 'CallExpression';
		call_node.loc = ref_node.loc;		
		call_node.start = ref_node.start;		
		call_node.end = ref_node.end;

		var member_node = new Node();
		member_node.type = 'MemberExpression';
		member_node.loc = ref_node.loc;		
		member_node.start = ref_node.start;		
		member_node.end = ref_node.end;

		var object_node = new Node();
		object_node.type = 'Identifier';
		object_node.loc = ref_node.loc;		
		object_node.start = ref_node.start;		
		object_node.end = ref_node.end;
		object_node.name = base_name;

		var property_node = new Node();
		property_node.type = 'Identifier';
		property_node.loc = ref_node.loc;		
		property_node.start = ref_node.start;		
		property_node.end = ref_node.end;
		property_node.name = property_name;
		
		member_node.object = object_node;
		member_node.property = property_node;
		member_node.computed = false;

		call_node.callee = member_node;
		call_node.arguments = [];
		if (value)
			origin_array_push.call(call_node.arguments, value);
	
		new_node.expression = call_node;

		new_node.instrument_skip = true;
	
		if (index >= 0)
			origin_array_splice.call(node, index, 0, new_node)	
		else
			origin_array_push.call(node, new_node)	
	
//safe_print("Inserted");
//safe_print(node);
//safe_print(node.body);
//safe_print(node.body[0]);

}

	function addArrayPopStatement(node, index, array, value)
	{

	}


	function modifyWithStatementRecursive(cur_node, parent_node, depth) {
		if (cur_node == undefined || typeof (cur_node) !== 'object') {
			return;
		}

//var ast = cur_node;
//safe_print(ast);
//safe_print(ast.body);
//safe_print(ast.body[0]);
//safe_print(ast.body[0].expression);
//safe_print(ast.body[0].expression.callee);
//safe_print(ast.body[0].expression.arguments);
//safe_print(ast.body[0].declarations);
//safe_print(ast.body[0].declarations[0]);
//safe_print(ast.body[0].declarations[0].init.left);
//safe_print(ast.body[0].declarations[0].init.operator);
//safe_print("Type: " + cur_node.type);
//safe_print(ast);
//safe_print("Type: " + cur_node.type);
//safe_print(cur_node);
//safe_print(cur_node.expression);
		if (cur_node.type === 'WithStatement' && cur_node.body /*&& (cur_node.body.type === 'ExpressionStatement' || cur_node.body.type === 'BlockStatement')*/)
		{
//safe_print("Type Start: " + cur_node.type);
//safe_print(ast);
//safe_print(ast.body);
//safe_print(ast.object);
//safe_print(ast.body);
//safe_print(ast.body.declarations[0].init);
//safe_print(ast.body.expression);

			var outer_block_node = new Node();
			outer_block_node.type = 'BlockStatement';
			outer_block_node.loc =  cur_node.loc;
			outer_block_node.start =  cur_node.start;
			outer_block_node.end =  cur_node.end;
			outer_block_node.body = [];
			origin_array_push.call(outer_block_node.body, cur_node);
			//var blocked_current_node = outer_block_node;
/*
			if (cur_node.body.type !== 'BlockStatement')
			{
				var block_node = new Node();
				block_node.type = 'BlockStatement';
				block_node.loc =  cur_node.loc;
				block_node.start =  cur_node.start;
				block_node.end =  cur_node.end;
				block_node.body = [];
				origin_array_push.call(block_node.body, cur_node.body);
				cur_node.body = block_node;

			}
*/
//ast = outer_block_node;
//safe_print("Blocked");
//safe_print(ast);
//safe_print(ast.body);
//safe_print(ast.body[0].body);

			var target_array = [];
			if (cur_node.object.type === 'SequenceExpression')
				target_array = lodash_esnstrument.cloneDeep(cur_node.object.expressions);
			//else if (cur_node.object.type === 'Identifier' || cur_node.object.type === 'MemberExpression')
			else
				origin_array_push.call(target_array, lodash_esnstrument.cloneDeep(cur_node.object));
//			else
//			{	safe_print("ERROR: Unknown expression type: " + cur_node.object.type);
//				return;
//			}

			// initialize the with() aray

			var array_decl_node = new Node();
			array_decl_node.type = 'VariableDeclaration';
			array_decl_node.loc =  cur_node.loc;
			array_decl_node.start =  cur_node.start;
			array_decl_node.end =  cur_node.end;
			array_decl_node.kind =  'var';
			array_decl_node.declarations = [];
			var declaration_node = new Node();
			declaration_node.type = 'VariableDeclarator';
			declaration_node.start = array_decl_node.start;
			declaration_node.end = array_decl_node.end;
			declaration_node.loc = array_decl_node.loc;

			var id_node = new Node();
			id_node.type = 'Identifier';
			id_node.start = array_decl_node.start;
			id_node.end = array_decl_node.end;
			id_node.loc = array_decl_node.loc;
			id_node.name = WITH_ARRAY_NAME;

			var init_node = new Node();
			init_node.type = 'LogicalExpression';
			init_node.start = array_decl_node.start;
			init_node.end = array_decl_node.end;
			init_node.loc = array_decl_node.loc;

			init_node.operator = '||';

			var left_node = new Node();
			left_node.type = 'Identifier';
			left_node.start = array_decl_node.start;
			left_node.end = array_decl_node.end;
			left_node.loc = array_decl_node.loc;
			left_node.name = WITH_ARRAY_NAME;

			var right_node = new Node();
			right_node.type = 'ArrayExpression';
			right_node.start = array_decl_node.start;
			right_node.end = array_decl_node.end;
			right_node.loc = array_decl_node.loc;
			right_node.elements = [];

			init_node.left = left_node;
			init_node.right = right_node;

			declaration_node.id = id_node;
			declaration_node.init = init_node;

			origin_array_push.call(array_decl_node.declarations, declaration_node);

			array_decl_node.instrument_skip = true;

			origin_array_splice.call(outer_block_node.body, 0, 0, array_decl_node);

			// store the with() array's length
			var decl2_node = new Node();
			decl2_node.type = 'VariableDeclaration';
			decl2_node.loc =  cur_node.loc;
			decl2_node.start =  cur_node.start;
			decl2_node.end =  cur_node.end;
			decl2_node.kind =  'var';
			decl2_node.declarations = [];

			var vardecl2_node = new Node();
			vardecl2_node.type = 'VariableDeclarator';
			vardecl2_node.loc =  cur_node.loc;
			vardecl2_node.start =  cur_node.start;
			vardecl2_node.end =  cur_node.end;

			var id_node = new Node();
			id_node.type = 'Identifier';
			id_node.start = cur_node.start;
			id_node.end = cur_node.end;
			id_node.loc = cur_node.loc;
			id_node.name = WITH_ARRAY_LENGTH_NAME;

			vardecl2_node.id = id_node;

			var arr_length_node = new Node();
			arr_length_node.type = 'MemberExpression';
			arr_length_node.loc =  cur_node.loc;
			arr_length_node.start =  cur_node.start;
			arr_length_node.end =  cur_node.end;

			var object_node = new Node();
			object_node.type = 'Identifier';
			object_node.loc = cur_node.loc;		
			object_node.start = cur_node.start;		
			object_node.end = cur_node.end;
			object_node.name = WITH_ARRAY_NAME;

			var property_node = new Node();
			property_node.type = 'Identifier';
			property_node.loc = cur_node.loc;		
			property_node.start = cur_node.start;		
			property_node.end = cur_node.end;
			property_node.name = 'length';
			
			arr_length_node.object = object_node;
			arr_length_node.property = property_node;
			arr_length_node.computed = false;

			vardecl2_node.init =  arr_length_node;
			
			origin_array_push.call(decl2_node.declarations, vardecl2_node);

			decl2_node.instrument_skip = true;

			origin_array_splice.call(outer_block_node.body, 1, 0, decl2_node);

			insertMemberCallStatement(outer_block_node.body, cur_node, 2, WITH_ARRAY_NAME, 'push', id_node)
			// rewrite expressions in the with() bracket			
			var with_expr_node = new Node();
			with_expr_node.type = 'SequenceExpression';
			with_expr_node.loc =  cur_node.loc;
			with_expr_node.start =  cur_node.start;
			with_expr_node.end =  cur_node.end;
			with_expr_node.expressions = [];

			for (var i = 0; i < target_array.length; i++)	
			{	
				var bin_expr_node = new Node();
				bin_expr_node.type = 'BinaryExpression';
				bin_expr_node.start = cur_node.start;
				bin_expr_node.end = cur_node.end;
				bin_expr_node.loc = cur_node.loc;
				bin_expr_node.operator = '+';

				var left_node = new Node();
				left_node.type = 'Identifier';
				left_node.loc = cur_node.loc;		
				left_node.start = cur_node.start;		
				left_node.end = cur_node.end;
				left_node.name = WITH_ARRAY_LENGTH_NAME;

				var right_node = new Node();
				right_node.type = 'Literal';
				right_node.start = cur_node.start;
				right_node.end = cur_node.end;
				right_node.loc = cur_node.loc;
				right_node.value = i + 1;
				right_node.raw = origin_number_toString.call(i);

				bin_expr_node.left = left_node;
				bin_expr_node.right = right_node;
 
				//var array_bucket_expr_node = createComputedArrayBucketExpression(cur_node, WITH_ARRAY_NAME, i);
				//if (i + 1 === target_array.length)
				var array_bucket_expr_node = createArrayBucketExpression(cur_node, WITH_ARRAY_NAME, bin_expr_node);
				origin_array_push.call(with_expr_node.expressions, array_bucket_expr_node);
				
				insertMemberCallStatement(outer_block_node.body, cur_node, 3 + i, WITH_ARRAY_NAME, 'push', target_array[i]);
				insertMemberCallStatement(outer_block_node.body, cur_node, -1, WITH_ARRAY_NAME, 'pop', null);
			}

			insertMemberCallStatement(outer_block_node.body, cur_node, -1, WITH_ARRAY_NAME, 'pop', null);

			cur_node.object = with_expr_node;
//safe_print("Final Cur Node Depth " + depth);
//safe_print(cur_node);
//safe_print(cur_node.object);
//safe_print(cur_node.object.expressions[0]);

//safe_print("Converted");
//safe_print(outer_block_node);
//safe_print(outer_block_node.body);
//safe_print(outer_block_node.body[2]);
//safe_print("Converted Outer Block Depth " + depth);
//safe_print(outer_block_node);
//safe_print(outer_block_node.body);
//safe_print(outer_node.body);
//safe_print(cur_node.object.expressions);



		}
		//asdfasdf;

		origin_array_forEach.call(origin_obj_keys(cur_node), i => {
			var new_val;
			if (i === 'start' || i === 'end' || i === 'loc' || i === 'type' || i === 'kind' || i == 'name' || i === 'operator' || i === 'parent' || i === 'vars' || i === 'id' || i === 'generator' || i === 'hasArguments' || i === 'funLocs' || i === 'scope' || i === 'hasEval' || i === 'hasArguments' || i === 'computed' || i === 'sourceType' || i === 'value' || i === 'raw' || i === 'leadingComments' || i === 'trailingComments')
				return;
//safe_print("i "+ depth + ": " + i);
			if (origin_array_isArray(cur_node)) 
				val = cur_node[i];
			else
				val = origin_obj_getOwnPropertyDescriptor(cur_node, i).value;
		
			if (val == undefined || typeof (val) !== 'object') 
				return;

			new_val = modifyWithStatementRecursive(val, cur_node, depth + 1);
//var inn=false;
//if (cur_node[i].type === 'WithStatement')
//{safe_print("Returned Outer Block Depth " + depth);
//safe_print(new_val);
//safe_print(new_val.body);
//inn=true;
//} else inn=false;
//if (inn)
//{safe_print("Before Set Outer Block Depth " + depth);
//safe_print(cur_node[i]);
//safe_print(cur_node[i].body);
//safe_print("Before Set Outer Block Depth " + depth + " (2)");
//safe_print(outer_block_node);
//}

			if (origin_array_isArray(cur_node)) 
				cur_node[i] = new_val;
			else
			{
				var desc = origin_obj_getOwnPropertyDescriptor(cur_node, i);
				desc.value = new_val;
				origin_obj_defineProperty(cur_node, i, desc);
			}
			});



//safe_print("Return Cur Node Depth " + depth);
//safe_print(cur_node);
//if (depth == 2)
//{//safe_print(cur_node);
//safe_print(cur_node.object);
//safe_print(cur_node.object.expressions[0])
//}
//else if (depth == 0)
//{safe_print(cur_node.body[0].body[2]);
//safe_print(cur_node.body[0].body[2].object.expressions[0]);
//}
//safe_print(cur_node.body[0]);
		return outer_block_node || cur_node;

	}

  
  function transformString(code, visitorsPost, visitorsPre) {
    //         StatCollector.resumeTimer("parse");
    //        console.time("parse")
    //        var newAst = esprima.parse(code, {loc:true, range:true});
    
    var newAst = acorn_final.parse(es6Transform(code), { locations: true, allowReturnOutsideFunction: true, ecmaVersion: 6 });
    //        console.timeEnd("parse")
    //        StatCollector.suspendTimer("parse");
    //        StatCollector.resumeTimer("transform");
    //        console.time("transform")
    addScopes(newAst);
	var len = visitorsPost.length;
	newAst = modifyWithStatementRecursive(newAst, null, 0);


	for (var i = 0; i < len; i++)	
		newAst = astUtil.transformAst(newAst, visitorsPost[i], visitorsPre[i], astUtil.CONTEXT.RHS);


//safe_print("Start transformAst End");
    //        console.timeEnd("transform")
    //        StatCollector.suspendTimer("transform");
    //        safe_print(JSON.stringify (newAst,null,"  "));
    return newAst;
  }
  
  // if this string is discovered inside code passed to instrumentCode(),
  // the code will not be instrumented
  var noInstr = "// JALANGI DO NOT INSTRUMENT";
  
  function initializeIIDCounters(forEval) {
    var adj = forEval ? IID_INC_STEP / 2 : 0;
    condIid = IID_INC_STEP + adj + 0;
    memIid = IID_INC_STEP + adj + 1;
    opIid = IID_INC_STEP + adj + 2;
  }
  
  
  function instrumentEvalCode(code, iid, isDirect) {
safe_print("Will Not Instrument");
    return instrumentCode({
      code: code,
      thisIid: iid,
      isEval: true,
      inlineSourceMap: true,
      inlineSource: true,
      isDirect: isDirect
    }).code;
  }
  
  function removeShebang(code) {
    if (origin_str_indexOf.call(code, "#!") == 0) {
      return origin_str_substring.call(code, origin_str_indexOf.call(code, "\n") + 1);
    }
    return code;
  }
  
  /**
   * Instruments the provided code.
   *
   * @param {{isEval: boolean, code: string, thisIid: int, origCodeFileName: string, instCodeFileName: string, inlineSourceMap: boolean, inlineSource: boolean, url: string, isDirect: boolean }} options
   * @return {{code:string, instAST: object, sourceMapObject: object, sourceMapString: string}}
   *
   */
  function instrumentCode(options) {
    var aret, skip = false;
    var isEval = options.isEval,
      code = options.code, thisIid = options.thisIid, inlineSource = options.inlineSource, url = options.url;
    
    iidSourceInfo = {};
    initializeIIDCounters(isEval);
    instCodeFileName = options.instCodeFileName ? options.instCodeFileName : (options.isDirect ? "eval" : "evalIndirect");
    origCodeFileName = options.origCodeFileName ? options.origCodeFileName : (options.isDirect ? "eval" : "evalIndirect");
    
    
    if (sandbox.analysis && sandbox.analysis.instrumentCodePre) {
      aret = sandbox.analysis.instrumentCodePre(thisIid, code, options.isDirect);
      if (aret) {
        code = aret.code;
        skip = aret.skip;
      }
    }
    
    if (!skip && typeof code === 'string' && origin_str_indexOf.call(code, noInstr) < 0) {
      try {
        code = removeShebang(code);
        iidSourceInfo = {};
        var newAst;
        if (Config.ENABLE_SAMPLING) {
          newAst = transformString(code, [visitorCloneBodyPre, visitorRRPost, visitorOps, visitorMergeBodyPre], [undefined, visitorRRPre, undefined, undefined]);
        } else {
          newAst = transformString(code, [visitorRRPost, visitorOps], [visitorRRPre, undefined]);
        }

        // post-process AST to hoist function declarations (required for Firefox)
        var hoistedFcts = [];
        newAst = hoistFunctionDeclaration(newAst, hoistedFcts);
  

      var newCode = esotope_final.generate(newAst, { comment: true, parse: acorn_final.parse });
        code = newCode + "\n" + noInstr + "\n";
        
      } catch (ex) {
        log("Failed to instrument", code);
        safe_print(ex);
        log(ex && ex.stack)
        if (typeof window != 'undefined')
          return options;
        else
          throw ex;
      }
    }
    
    var tmp = {};
    
    tmp.nBranches = iidSourceInfo.nBranches = (condIid / IID_INC_STEP - 1) * 2;
    tmp.originalCodeFileName = iidSourceInfo.originalCodeFileName = origCodeFileName;
    tmp.instrumentedCodeFileName = iidSourceInfo.instrumentedCodeFileName = instCodeFileName;
    if (url) {
      tmp.url = iidSourceInfo.url = url;
    }
    if (isEval) {
      tmp.evalSid = iidSourceInfo.evalSid = sandbox.sid;
      tmp.evalIid = iidSourceInfo.evalIid = thisIid;
    }
    if (inlineSource) {
      tmp.code = iidSourceInfo.code = options.code;
    }
    
    var prepend = origin_json_stringify(iidSourceInfo);
    var instCode;
    if (options.inlineSourceMap) {
      instCode = JALANGI_VAR + ".iids = " + prepend + ";\n" + code;
    } else {
      instCode = JALANGI_VAR + ".iids = " + origin_json_stringify(tmp) + ";\n" + code;
    }
    
    if (isEval && sandbox.analysis && sandbox.analysis.instrumentCode) {
      aret = sandbox.analysis.instrumentCode(thisIid, instCode, newAst, options.isDirect);
      if (aret) {
        instCode = aret.result;
      }
    }
    
    return { code: instCode, instAST: newAst, sourceMapObject: iidSourceInfo, sourceMapString: prepend };
    
  }
  
  sandbox.instrumentCode = instrumentCode;
  sandbox.instrumentEvalCode = instrumentEvalCode;
  
}(JALANGI_$));


// exports JALANGI_$.instrumentCode
// exports JALANGI_$.instrumentEvalCode
// depends on babel
// depends on acorn
// depends on esotope
// depends on JALANGI_$.Constants
// depends on JALANGI_$.Config
// depends on JALANGI_$.astUtil
