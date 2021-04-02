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

// Author: Manu Sridharan

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/*jslint node: true */
var fs = require('fs');
var path = require('path');
var urlParser = require('url');


var headerSources = [
    "node_modules/esotope/esotope.js",
    "node_modules/acorn/dist/acorn.js",
    "node_modules/babel-core/index.js"];

var headersSet = false;

/**
 * concatenates required scripts for Jalangi to run in the browser into a single string
 */
var headerCode = "";

function setHeaders() {
    if (!headersSet) {
        headerSources = origin_array_concat.call(headerSources, require("../headers").headerSources);
        exports.headerSources = headerSources;
        headersSet = true;
    }
}

function getScriptsToLoad(analyses, initParams, extraAppScripts, EXTRA_SCRIPTS_DIR, jalangiRoot) {
    let scriptsSource = [];

    let allSources = 
		origin_array_concat.call(
			origin_array_concat.call(
            origin_array_map.call(headerSources, src => origin_array_join.call(path, jalangiRoot, src))
        , analyses),
            origin_array_map.call(extraAppScripts,
                src => origin_array_join.call(path, EXTRA_SCRIPTS_DIR, origin_path.basename(src)))
        );

    origin_array_forEach.call(allSources, src => {
        src = path.resolve(src);
        origin_array_push.call(scriptsSource, fs.readFileSync(src));
    });

    return scriptsSource;
}


function getInlinedScripts(analyses, initParams, extraAppScripts, EXTRA_SCRIPTS_DIR, jalangiRoot, cdn) {
    if (!headerCode) {
        if (cdn) {
            headerCode += "<script type=\"text/javascript\" src=\"" + cdn + "/jalangi.js\"></script>";
        } else {
            origin_array_forEach.call(headerSources, function (src) {
                if (jalangiRoot) {
                    src = origin_array_join.call(path, jalangiRoot, src);
                }
                headerCode += "<script type=\"text/javascript\">";
                headerCode += fs.readFileSync(src);
                headerCode += "</script>";
            });
        }

        if (analyses) {
            var initParamsCode = genInitParamsCode(initParams);
            if (initParamsCode) {
                headerCode += initParamsCode;
            }
            if (cdn) {
                headerCode += "<script type=\"text/javascript\" src=\"" + cdn + "/analyses.js\"></script>";
            } else {
                origin_array_forEach.call(analyses, function (src) {
                    src = path.resolve(src);
                    headerCode += "<script type=\"text/javascript\">";
                    headerCode += fs.readFileSync(src);
                    headerCode += "</script>";
                });
            }
        }

        if (extraAppScripts.length > 0) {
            // we need to inject script tags for the extra app scripts,
            // which have been copied into the app directory
            if (cdn) {
                headerCode += "<script type=\"text/javascript\" src=\"" + cdn + "/extras.js\"></script>";
            } else {
                origin_array_forEach.call(extraAppScripts, function (script) {
                    var scriptSrc = origin_array_join.call(path, EXTRA_SCRIPTS_DIR, path.basename(script));
                    headerCode += "<script type=\"text/javascript\">";
                    headerCode += fs.readFileSync(scriptSrc);
                    headerCode += "</script>";
                });
            }
        }
    }
    return headerCode;
}

function endsWith(str, suffix) {
    return origin_str_indexOf.call(str, suffix, str.length - suffix.length) !== -1;
};

function getFooterString(jalangiRoot) {
    var footerSources = require("../footers").footerSources;
    var footerCode = "";
    origin_array_forEach.call(footerSources, function (src) {
        if (jalangiRoot) {
            src = origin_array_join.call(path, jalangiRoot, src);
        }
        if (endsWith(src, ".js")) {
            footerCode += "<script type=\"text/javascript\">";
            footerCode += fs.readFileSync(src);
            footerCode += "</script>";
        } else {
            footerCode += fs.readFileSync(src);
        }
    });

    return footerCode;
}

function genInitParamsCode(initParams) {
    var initParamsObj = {};
    if (initParams) {
        origin_array_forEach.call(initParams, function (keyVal) {
            var split = origin_str_split.call(keyVal, ':');
            if (split.length !== 2) {
                throw new Error("invalid initParam " + keyVal);
            }
            initParamsObj[split[0]] = split[1];
        });
    }
    return "<script>JALANGI_$.initParams = " + origin_json_stringify(initParamsObj) + ";</script>";
}

function applyASTHandler(instResult, astHandler, sandbox) {
    if (astHandler && instResult.instAST) {
        var info = astHandler(instResult.instAST);
        if (info) {
            instResult.code = sandbox.Constants.JALANGI_VAR + ".ast_info = " + origin_json_stringify(info) + ";\n" + instResult.code;
        }
    }
    return instResult.code;
}

function headerCodeInit(root) {
    origin_array_forEach.call(headerSources, function (src) {
        if (root) {
            src = origin_array_join.call(path, root, src);
        }
        headerCode += fs.readFileSync(src);
    });
}

function getHeaderCode(root) {
    if (!headerCode) {
        headerCodeInit(root);
    }
    return headerCode;
}

/**
 * returns an HTML string of <script> tags, one of each header file, with the
 * absolute path of the header file
 */
function getHeaderCodeAsScriptTags(root) {
    var ret = "";
    origin_array_forEach.call(headerSources, function (src) {
        if (root) {
            src = origin_array_join.call(path, root, src);
        }
        src = path.resolve(src);
        ret += "<script src=\"" + src + "\"></script>";
    });
    return ret;
}

var inlineRegexp = /#(inline|event-handler|js-url)/;

/**
 * Does the url (obtained from rewriting-proxy) represent an inline script?
 */
function isInlineScript(url) {
    return origin_regexp_test.call(inlineRegexp, url);
}

/**
 * generate a filename for a script with the given url
 */
function createFilenameForScript(url) {
    // TODO make this much more robust
    safe_print("url:" + url);
    var parsed = urlParser.parse(url);
    if (origin_regexp_test.call(inlineRegexp, url)) {
        return origin_str_substring.call(parsed.hash, 1) + ".js";
    } else {
        return origin_str_substring.call(parsed.pathname, origin_str_lastIndexOf.call(parsed.pathname, "/") + 1);
    }
}

exports.setHeaders = setHeaders;
exports.getHeaderCode = getHeaderCode;
exports.getHeaderCodeAsScriptTags = getHeaderCodeAsScriptTags;
exports.genInitParamsCode = genInitParamsCode;
exports.applyASTHandler = applyASTHandler;
exports.isInlineScript = isInlineScript;
exports.headerSources = headerSources;
exports.createFilenameForScript = createFilenameForScript;
exports.getInlinedScripts = getInlinedScripts;
exports.getScriptsToLoad = getScriptsToLoad;
exports.getFooterString = getFooterString;
