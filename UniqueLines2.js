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
var PRINT_LINE_PERIOD_FACTOR = Infinity;0;Infinity;1;0;1;Infinity;//0;1;//1000; 
	// 0: do not print line info
	// 1: print every time, 									
	// 1000: print every 1000th times
	// INFINITY: print only once
var PRINT_STACK_START_DEPTH = 0;1000;300;0;0;500;0;500;1000;500;
// Setting PRINT_STACK_START_DEPTH to 0 makes the program run fastest

var JALANGI_READ = true;//false; //true;

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects */

var hacked_native_fn_array = [ origin_Date_now, 
								origin_Date_getTime, 
								origin_Date_setTime, 
								origin_Date_parse,
								origin_Date_toGMTString,
								origin_Date_UTC,
								origin_Math_random, 
								(typeof origin_crypto_getRandomValues !== 'undefined' ? origin_crypto_getRandomValues : null) ]

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
  return origin_array_find.call(origin_obj_keys(no_dom_native_fn_dict), (function (key) { var desc = origin_obj_getOwnPropertyDescriptor(no_dom_native_fn_dict, key); return desc && desc.value  === f }));
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
    parent_pc_loc = "root";
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
//      if (fn === origin_fn_toString || fn === origin_obj_toString)
//        return true;
//		return (no_dom_native_fn_str(fn) != undefined) || typeof fetch !== 'undefined' && fn === fetch;
 
      var fn_str = '';
      if (typeof fn === 'function') {
//safe_print("Before 1");
        fn_str = origin_fn_toString.call(fn);
//safe_print("After 1");
        // origin_fn_toString_async(fn)
        //   .then((result) => {
        //     fn_str = result;
        //   });
      } else if (typeof fn === 'object') {
        fn_str = origin_obj_toString.call(fn);
      }
//return false;
//safe_print(fn_str);
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

    function concretizeRecursive(obj, depth, obj_dict, offset, depth) {
      //if (obj === undefined || typeof obj !== 'object' || obj_dict.includes(obj))
       // return obj;

      // if (obj_dict.length > 1000) {
      // 	debugger;
      // }
       safe_print('concretizeRecursive depth: ' + depth);
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

	function captureSymbol(base, offset, val, isFunction)
   {  if (typeof window === 'undefined')
        return null;
      else if (!isFunction && base === window.screen && offset === 'width') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.width");
        origin_obj_defineProperty(symbol_dict, 'window_screen_width', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_width');
      } else if (!isFunction && base === window.screen && offset === 'height') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.height");
        origin_obj_defineProperty(symbol_dict, 'window_screen_height', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_height');
      } else if (!isFunction && base === window.screen && offset === 'availWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.availWidth");
        origin_obj_defineProperty(symbol_dict, 'window_screen_availWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_availWidth');
      } else if (!isFunction && base === window.screen && offset === 'availHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.availHeight");
        origin_obj_defineProperty(symbol_dict, 'window_screen_availHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_availHeight');
      } else if (!isFunction && base === window.screen && offset === 'colorDepth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.colorDepth");
        origin_obj_defineProperty(symbol_dict, 'window_screen_colorDepth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_colorDepth');
      } else if (!isFunction && base === window.screen && offset === 'pixelDepth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: screen.pixelDepth");
        origin_obj_defineProperty(symbol_dict, 'window_screen_pixelDepth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_screen_pixelDepth');
      } else if (!isFunction && base === window.navigator && offset === 'userAgent') {
        if (JALANGI_READ) safe_print("JALANGI_READ: navigator.userAgent");
        origin_obj_defineProperty(symbol_dict, 'window_navigator_userAgent', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_navigator_userAgent');
      } else if (!isFunction && base === window.navigator && offset === 'platform') {
        if (JALANGI_READ) safe_print("JALANGI_READ: navigator.platform");
        origin_obj_defineProperty(symbol_dict, 'window_navigator_platform', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_navigator_platform');
      } else if (!isFunction && base === window.document && offset === 'cookie') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.cookie");
        origin_obj_defineProperty(symbol_dict, 'window_document_cookie', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_cookie');
      } else if (!isFunction && base === window.document && offset === 'referrer') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.referrer");
        origin_obj_defineProperty(symbol_dict, 'window_document_referrer', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_referrer');
      } else if (!isFunction && base === window.document && offset === 'lastModified') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.lastModified");
        origin_obj_defineProperty(symbol_dict, 'window_document_lastModified', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_lastModified');
      } else if (!isFunction && base === window.document.documentElement && offset === 'offsetWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetWidth");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_offsetWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_offsetWidth');
      } else if (!isFunction && base === window.document.documentElement && offset === 'offsetHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetHeight");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_offsetHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_offsetHeight');
      } else if (!isFunction && base === window.document.documentElement && offset === 'offsetLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetLeft");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_offsetLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_offsetLeft');
      } else if (!isFunction && base === window.document.documentElement && offset === 'offsetTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.offsetTop");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_offsetTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_offsetTop');
      } else if (!isFunction && base === window.document.documentElement && offset === 'scrollWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollWidth");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_scrollWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_scrollWidth');
      } else if (!isFunction && base === window.document.documentElement && offset === 'scrollHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollHeight");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_scrollHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_scrollHeight');
      } else if (!isFunction && base === window.document.documentElement && offset === 'scrollLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollLeft");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_scrollLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_scrollLeft');
      } else if (!isFunction && base === window.document.documentElement && offset === 'scrollTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.scrollTop");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_scrollTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_scrollTop');
      } else if (!isFunction && base === window.document.documentElement && offset === 'clientWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientWidth");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_clientWidth', {enumerable: false, writable: true, value: val});
        return new ConcolicValue(val, 'window_document_documentElement_clientWidth');
      } else if (!isFunction && base === window.document.documentElement && offset === 'clientHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientHeight");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_clientHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_clientHeight');
      } else if (!isFunction && base === window.document.documentElement && offset === 'clientLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientLeft");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_clientLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_clientLeft');
      } else if (!isFunction && base === window.document.documentElement && offset === 'clientTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.documentElement.clientTop");
        origin_obj_defineProperty(symbol_dict, 'window_document_documentElement_clientTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_documentElement_clientTop');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'offsetWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetWidth");
        origin_obj_defineProperty(symbol_dict, 'window_body_offsetWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_offsetWidth');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'offsetHeight') {
        //safe_print("JALANGI_READ: document.body.offsetHeight");
        origin_obj_defineProperty(symbol_dict, 'window_body_offsetHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_offsetHeight');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'offsetLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetLeft");
        origin_obj_defineProperty(symbol_dict, 'window_body_offsetLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_offsetLeft');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'offsetTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.offsetTop");
        origin_obj_defineProperty(symbol_dict, 'window_body_offsetTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_offsetTop');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'scrollWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollWidth");
        origin_obj_defineProperty(symbol_dict, 'window_body_scrollWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_scrollWidth');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'scrollHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollHeight");
        origin_obj_defineProperty(symbol_dict, 'window_body_scrollHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_scrollHeight');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'scrollLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollLeft");
        origin_obj_defineProperty(symbol_dict, 'window_body_scrollLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_scrollLeft');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'scrollTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.scrollTop");
        origin_obj_defineProperty(symbol_dict, 'window_body_scrollTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_scrollTop');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'clientWidth') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientWidth");
        origin_obj_defineProperty(symbol_dict, 'window_body_clientWidth', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_clientWidth');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'clientHeight') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientHeight");
        origin_obj_defineProperty(symbol_dict, 'window_body_clientHeight', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_clientHeight');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'clientLeft') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientLeft");
        origin_obj_defineProperty(symbol_dict, 'window_body_clientLeft', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_clientLeft');
      } else if (!isFunction && window.document.body && base === window.document.body && offset === 'clientTop') {
        if (JALANGI_READ) safe_print("JALANGI_READ: document.body.clientTop");
        origin_obj_defineProperty(symbol_dict, 'window_body_clientTop', { enumerable: false, writable: true, value: val });
        return new ConcolicValue(val, 'window_document_body_clientTop');
      } else if (isFunction && window.Math === base && offset === 'random') {
        if (!('window_Math_random' in symbol_dict))
				origin_obj_defineProperty(symbol_dict, 'window_Math_random', { enumerable: false, writable: true, value: [] });
        if (JALANGI_READ) safe_print("JALANGI_READ: Math.random");
        origin_array_push.call(origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Math_random').value, val);
        return new ConcolicValue(val, 'window_Math_random_' + origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Math_random').value.length);
      } else if (isFunction && window.Date === base && offset === 'now') {
        if (!('window_Date_now' in symbol_dict))
				origin_obj_defineProperty(symbol_dict, 'window_Date_now', { enumerable: false, writable: true, value: [] });
        if (JALANGI_READ) safe_print("JALANGI_READ: Date.now");
        origin_array_push.call(origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Date_now').value, val);
        //origin_array_push.call(symbol_dict['window_Date_now'], val);
        return new ConcolicValue(val, 'window_Date_now_' + origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Date_now').value.length);
      } else if (isFunction && window.crypto === base && offset === 'getRandomValues') {
        if (!('window_crypto_getRandomValues' in symbol_dict))
				origin_obj_defineProperty(symbol_dict, 'window_crypto_getRandomValues', { enumerable: false, writable: true, value: [] });
        if (JALANGI_READ) safe_print("JALANGI_READ: crypto.getRandomValues");
        origin_array_push.call(origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_crypto_getRandomValues').value, val);
        return new ConcolicValue(val, 'window_crypto_getRandomValues_' + origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_crypto_getRandomValues').value.length);
      } else if (isFunction && window.Date === base && offset === 'getTime') {
        if (!('window_Date_getTime' in symbol_dict))
				origin_obj_defineProperty(symbol_dict, 'window_Date_getTime', { enumerable: false, writable: true, value: [] });
        if (JALANGI_READ) safe_print("JALANGI_READ: Date.getTime");
        origin_array_push.call(origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Date_getTime').value, val);
        return new ConcolicValue(val, 'window_Date_getTime_' + origin_obj_getOwnPropertyDescriptor(symbol_dict, 'window_Date_getTime').value.length);
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
        safe_print("JALANGI_PC: (parent= " + parent_pc_loc + " ) (result= " + concrete_result + " ) " + "(loc= " + (JALANGI_$.sid + "-" + iid)  + " ) " + result.getSymbolic());
        pc_depth++;
			parent_pc_loc = JALANGI_$.sid + "-" + iid
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
//NativeOkCheck();
    };
    this.getField = function (iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
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
		var ret = captureSymbol(base, offset, val, false);


		/* INCLUDE THIS LATER */
		// if (ret != null)
			// val = ret;



      //safe_print(symbol_dict);
      if (DEBUG) 
        safe_print("<getField> End")
//if (offset == 'document')
//safe_print(val);
      return {result: val}
    };
	var client_function_prototype_toString;
	var client_object_prototype_toString;
	var client_symbol_prototype_toString;

//	function INTERCEPT_Function_prototype_toString () {
//	
//		safe_print("INTERCEPT_Function_prototype_toString() called");
//		(new Error()).stack[1];
//		//Error.stackTraceLimit = 1000;
//
//	}
	function NativeOkCheck()
	{	
      if (result = !isNativeFn(origin_obj_hasOwnProperty))
			safe_print("origin_obj_hasOwnProperty ERROR!!!");
      if (result = !isNativeFn(origin_obj_defineProperty))
			safe_print("origin_obj_defineProperty ERROR!!!");
      if (result = !isNativeFn(origin_obj_getOwnPropertyDescriptor))
			safe_print("origin_obj_getOwnPropertyDescriptor ERROR!!!");
      if (result = !isNativeFn(origin_obj_values))
			safe_print("origin_obj_values ERROR!!!");
      if (result = !isNativeFn(origin_obj_toString))
			safe_print("origin_obj_toString ERROR!!!");
//      if (result = !isNativeFn(origin_obj_toString_call))
//			safe_print("origin_obj_toString_call ERROR!!!");
      if (result = !isNativeFn(origin_obj_keys))
			safe_print("origin_obj_keys ERROR!!!");
      if (result = !isNativeFn(origin_array_includes))
			safe_print("origin_array_includes ERROR!!!");
      if (result = !isNativeFn(origin_array_push))
			safe_print("origin_array_push ERROR!!!");
      if (result = !isNativeFn(origin_array_pop))
			safe_print("origin_array_pop ERROR!!!");
      if (result = !isNativeFn(origin_array_slice))
			safe_print("origin_array_slice ERROR!!!");
      if (result = !isNativeFn(origin_array_join))
			safe_print("origin_array_join ERROR!!!");
      if (result = !isNativeFn(origin_array_forEach))
			safe_print("origin_array_forEach ERROR!!!");
      if (result = !isNativeFn(origin_array_map))
			safe_print("origin_array_map ERROR!!!");
      if (result = !isNativeFn(origin_array_concat))
			safe_print("origin_array_concat ERROR!!!");
      if (result = !isNativeFn(origin_array_shift))
			safe_print("origin_array_shift ERROR!!!");
      if (result = !isNativeFn(origin_array_unshift))
			safe_print("origin_array_unshift ERROR!!!");
      if (result = !isNativeFn(origin_array_isArray))
			safe_print("origin_array_isArray ERROR!!!");
      if (result = !isNativeFn(origin_array_reverse))
			safe_print("origin_array_reverse ERROR!!!");
      if (result = !isNativeFn(origin_array_splice))
			safe_print("origin_array_splice ERROR!!!");
      if (result = !isNativeFn(origin_array_find))
			safe_print("origin_array_find ERROR!!!");
      
      if (result = !isNativeFn(origin_fn_apply))
			safe_print("origin_fn_apply ERROR!!!");
      if (result = !isNativeFn(origin_fn_toString))
			safe_print("origin_fn_toString ERROR!!!");
//      if (result = !isNativeFn(origin_fn_toString_call))
//			safe_print("origin_fn_toString_call ERROR!!!");
      if (result = !isNativeFn(origin_symbol_toString))
			safe_print("origin_symbol_toString ERROR!!!");
      if (result = !isNativeFn(origin_str_search))
			safe_print("origin_str_search ERROR!!!");
      if (result = !isNativeFn(origin_str_includes))
			safe_print("origin_str_includes ERROR!!!");
      if (result = !isNativeFn(origin_str_indexOf))
			safe_print("origin_str_indexOf ERROR!!!");
      if (result = !isNativeFn(origin_str_split))
			safe_print("origin_str_split ERROR!!!");
      if (result = !isNativeFn(origin_str_substring))
			safe_print("origin_str_substring ERROR!!!");
      if (result = !isNativeFn(origin_str_replace))
			safe_print("origin_str_replace ERROR!!!");
      
      if (result = !isNativeFn(origin_json_stringify))
			safe_print("origin_json_stringify ERROR!!!");
      if (result = !isNativeFn(origin_json_parse))
			safe_print("origin_json_parse ERROR!!!");
      
      if (result = !isNativeFn(origin_regexp_exec))
			safe_print("origin_regexp_exec ERROR!!!");
      if (result = !isNativeFn(origin_regexp_test))
			safe_print("origin_regexp_test ERROR!!!");
      if (result = !isNativeFn(origin_console_log))
			safe_print("origin_console_log ERROR!!!");
      
/*      if (result = !isNativeFn(origin_date))
			safe_print("origin_date ERROR!!!");
      if (result = !isNativeFn(origin_Date_now))
			safe_print("origin_Date_now ERROR!!!");
      if (result = !isNativeFn(origin_Date_UTC))
			safe_print("origin_Date_UTC ERROR!!!");
      if (result = !isNativeFn(origin_Date_parse))
			safe_print("origin_Date_parse ERROR!!!");
      if (result = !isNativeFn(origin_Date_getTime))
			safe_print("origin_Date_getTime ERROR!!!");
      if (result = !isNativeFn(origin_Date_setTime))
			safe_print("origin_Date_setTime ERROR!!!");
      if (result = !isNativeFn(origin_Date_toGMTString))
			safe_print("origin_Date_toGMTString ERROR!!!");

      if (result = !isNativeFn(origin_Math))
	 		safe_print("origin_Math ERROR!!!");
      if (result = !isNativeFn(origin_Math_random))
			safe_print("origin_Math_random ERROR!!!");
*/
		if (result)
		{	//safe_print(origin_console_log);
			//safe_print(origin_fn_toString.call(origin_console_log));
			//safe_print(origin_fn_toString.call(origin_Math_random));
			//safe_print(origin_fn_toString.call(origin_obj_values));
			//safe_print(origin_fn_toString.call(origin_json_stringify));
			throw Error;
		}

	}

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

//if (offset === 'toString' || offset == 'call' || offset == 'stringify')

//var desc = origin_obj_getOwnPropertyDescriptor(base, offset);

//if (desc && isNativeFn(desc.value))
//{	
//	safe_print("HACK DETECTED");
//        safe_print("base:")
//        safe_print(base)
//        safe_print("offset: " + offset);
//        safe_print(desc.value ? desc.value.name : 'undefined...')
//        safe_print("val:")
//        safe_print(val)
/*	
			if (offset === Symbol.prototype.toString)
			{	safe_print("Symbol.prototype.toString");
			}
			else if (offset === Object.prototype.toString)
			{	safe_print("Object.prototype.toString");
			}
			else if (offset === Number.prototype.toString)
			{	safe_print("Number.prototype.toString");
			}
			else if (offset === Function.prototype.toString)
			{	safe_print("Function.prototype.toString");
				client_function_prototype_toString = val;
				//val = INTERCEPT_Function_prototype_toString;
			}	
			else if (offset === JSON.stringify)
			{	safe_print("JSON.stringify");
				client_json_stringify = val;
				//val = INTERCEPT_Function_prototype_toString;
			}
*/
	//val = desc.value;	
//}


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
        safe_print("name: " + name)
        safe_print("val:")
        safe_print(val)
        safe_print("(typeof: " + (!val ? 'NONE' : (typeof val === 'object' ? 'object - ' + val.constructor.name : typeof val)) + ")")
        safe_print("lhs:")
        safe_print(lhs)
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
      line = JALANGI_$.iidToLine(JALANGI_$.sid, iid);
      loc = JALANGI_$.iidToLocation(JALANGI_$.sid, iid);
		updateLineInfo(iid, line, "read()");
//safe_print(withBase);
		if (withBase)
			ret = captureSymbol(withBase, name, val, false);

		/* INCLUDE THIS LATER */
		//	if (ret)
		//		val = ret;


		/* REMOVE THIS LATER */
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

		/* REMOVE THIS LATER */
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
        safe_print("base:")
        safe_print(base)
//        safe_print(base === JSON)
//        safe_print(base === Object)
        safe_print("offset: ");
        safe_print(offset)
//        safe_print("f:")
//        safe_print(f)
        safe_print("args:")
        safe_print(args)
//			safe_print("invokeFun_id: " + invokeFun_id);
      }
//safe_print("<invokeFunPre> " + offset + " id=" + invokeFun_id)
//return;
//safe_print("One");
      if (typeof base === 'object' && base instanceof ConcolicValue) {	
			// Example: var a = navigator.userAgent; a.toString(); -> must concretize 'a'
			//safe_print("Instanceof: base");
//safe_print("Two");
        f = base.getConcrete()[offset]
//safe_print("Three");
        base = base.getConcrete();
//safe_print("Four");
			if (f === undefined)
			{
				safe_print("[WARNING] The base function " + offset + " does not exist for the concretized ConcolicValue");
				safe_print("base:");
				safe_print(base);
			}
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
//safe_print("isNativeFn(): " + isNativeFn(f) + ", isModeledFn(): " + isModeledFn(f));
      if (0 && (isNativeFn(f) || f in hacked_native_fn_array /*&& !isModeledFn(f)*/ /*&& no_dom_native_fn_str(f) !== undefined*/ /*&& isArgContainsSymbol(args)*/)) {
//safe_print("Concretize!!");
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
          if (typeof arg === 'undefined')
          { //safe_print("Nine 1"); 
				arg_str = 'null';
			}
          else if (typeof arg === 'number' || typeof arg === 'bigint' || typeof arg === 'boolean')
          { //safe_print("Nine 1"); 
				arg_str = arg;
			}
          else if (arg instanceof ConcolicValue)
          { //safe_print("Nine 1"); 
				arg_str = arg.getSymbolic();
			}
          else if (typeof window !== 'undefined' && arg === window)
          {	//safe_print("Nine 2");	
				arg_str = 'window';
			}
          else if (typeof window !== 'undefined' && arg === document)
          { //safe_print("Nine 3"); 
				arg_str = 'document';
			}
          else if (typeof window !== 'undefined' && arg === window.navigator)
          { //safe_print("Nine 3"); 
				arg_str = 'nagivator';
			}
          else if (typeof arg === 'object')  // either an array or a json object
          /* !!!이 부분 구현 필요 !!!
                          객체 안을 재귀적으로 들어가서 stringify해야 하며
                          ConcolicValue를 만날 때마다 getSymbolic을 불러야 함  */
          {  //safe_print("Nine 4");
					arg_str = '';
					arg_str = arg;//origin_json_stringify(arg);
			}
          //arg_str = origin_json_stringify(arg);
          else if (typeof arg === 'function')
          { //safe_print("Nine 5"); 
				arg_str = origin_fn_toString.call(arg);
			}
          else if (typeof arg === 'symbol')
          {  //safe_print("Nine 6");
				arg_str = origin_symbol_toString.call(arg);
			}
          else if (typeof arg === 'string')
          {	//safe_print("Nine 7");  
				arg_str = '"' + arg + '"';
			}
			else
          { //safe_print("Nine 8"); 
            //safe_print(origin_json_stringify === JSON.stringify); 
				//arg_str = origin_json_stringify(arg);
				//arg_str = safe_json_stringify(arg);
				arg_str = arg;
           safe_print("Nine 8 Done"); 
			}
          invokeFun_str += arg_str;

          if (i + 1 != args.length)
            invokeFun_str += ",";
        }
        invokeFun_str += ')'
//safe_print("Ten");

        obj_dict = [];
        isAnyConcolicValue = false;
//		if (offset === 'Bn') 
			if (DEBUG) 
				safe_print("Concretizing...");

safe_print("Concretize Start");
        concretizeRecursive(args, 0, obj_dict, offset, 1);
safe_print("Concretize End");

//			if (DEBUG) {
//			 	safe_print("Concretized values");
//				for (var i = 0; i < args.length; i++)
//					safe_print(args[i]);
//			}
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
//if (offset === 'fetch')
//{safe_print("Fetch");
//safe_print(args[0]);
//}
      if (DEBUG) {
//		if (offset === 'apply') { 
//        safe_print("arguments Final:")
//        safe_print(args)
        safe_print("<invokeFunPre> End")
      }
//safe_print("End invokeFunPre");
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
	
		var ret = captureSymbol(base, offset, result, true);

		if (invokeFun_id in native_invokeFun_dict && no_dom_native_fn_str(f) !== undefined) // return value of a native call whose arguments contained a symbol
      {	/* 이전 invokeFunPre에서 네이티브 함수의 기호식을 생성했을 경우 그것을 불러들여서 사용하기.
					  현 코드 구조라면 async에 의해서 같은 코드가 여러 코드들에 의해 중복 실행되더라도
						race condition이 발생되지 않을 것임.
					*/
			ret.symbolic = native_invokeFun_dict[invokeFun_id];



//		safe_print("Find Dictionary " + invokeFun_id);
//			safe_print(native_invokeFun_dict);
      }

		/* INCLUDE THIS LATER */
		// if (ret != null)
			// result = ret;


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
            //origin_array_push.call(symbolic_left_right, origin_json_stringify(left_right[i]));
            origin_array_push.call(symbolic_left_right, safe_json_stringify(left_right[i]));
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

