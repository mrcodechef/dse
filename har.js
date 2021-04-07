const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const fs = require('fs');
const fse = require('fs-extra');
const jsonfile = require('jsonfile');
const {URL} = require('url');
const url2 = require('url');
const path = require('path');
const argparse = require('argparse');
const CRED = {
  id: "gogo9th@hanmail.net",
  password: "rkskekfk"
}

//const envArgs = {
//  isChromeHeadFull: String(process.env.HAR_CHROME_HEADFULL).trim() === '1'
//};

/* !!! Always # sign in the front !!! */
var INPUT_TAG_ID = {
  page_url: '',
  login_textbox: '#email_inp',
  password_textbox: '#pass_inp',
  login_button: '#submit_login'
};

const sleep = async (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, ms)
  });
}

function ValidURL(str) {
  var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(str)) {
    alert("Please enter valid URL.");
    return false;
  } else {
    return true;
  }
}

var args = process.argv.slice(2);

var parser = new argparse.ArgumentParser({
    addHelp: true,
    description: "Command-line utility to perform Jalangi2's instrumentation and analysis"
});
parser.addArgument(['--headless'], {help: "Run a headless browser (default: false)", action: 'storeTrue'});
parser.addArgument(['--do-not-close'], {help: "Do not close the browser after a pageload", action: 'storeTrue'});
parser.addArgument(['--proxy-address'], {help: "e.g., www.example.com:8181, 8181", dest: 'proxy_address'});
parser.addArgument(['--in-cookie-json'], {help: "input cookie file in the json format", dest: 'in_cookie_json'});
parser.addArgument(['--out-cookie-json'], {help: "output cookie file in the json format", dest: 'out_cookie_json'});
parser.addArgument(['--start-inject-js'], {help: "run this JavaScript at the beginning of every new document load (i.e., <head> and <body> tags)", dest: 'start_inject_js'});
parser.addArgument(['--end-inject-js'], {help: "run this JavaScript at the end of a pageload", dest: 'post_inject_js'});
parser.addArgument(['--outfile-har'], { help: "HAR output file (default: results.har)", dest:'outfile_har'});
parser.addArgument(['--outfile-html'], {help: "HTML output file (default: results.html)", dest: 'outfile_html'});
parser.addArgument(['--outfile-console'], {help: "Console output file", dest: 'outfile_console'});
parser.addArgument(['--login-password'], {help: "<login URL> <login ID> <login password> <login input textbox's tag ID> <password input textbox's tag ID> <login click button's tag ID>", nargs: 6});
parser.addArgument(['--url'], {help: "Visiting URL", required: true, dest: 'visit'});

var args = parser.parseArgs();

//console.log(args);

var is_headless = args.headless;
var do_not_close = args.do_not_close;
var proxy_address, in_cookie_json, out_cookie_json, start_inject_js, end_inject_js, outfile_har, outfile_html;

var visitURL = args.visit;

var hostname = url2.parse(visitURL).host;
var pathname = url2.parse(visitURL).pathname;

if (args.proxy_address)
	proxy_address = (args.proxy_address.includes(':') ? args.proxy_address[0] : '127.0.0.1:' + args.proxy_address)

if (args.login_password)
{	
	INPUT_TAG_ID.page_url = '#' + args.login_password[0];
	CRED.id = args.login_password[1];
	CRED.password = args.login_password[2];
	INPUT_TAG_ID.login_textbox = '#' + args.login_password[3];
	INPUT_TAG_ID.password_textbox = '#' + args.login_password[4];
	INPUT_TAG_ID.login_button = '#' + args.login_password[5];

	var login_hostname = url2.parse(INPUT_TAG_ID.page_url).host;
	var login_pathname = url2.parse(INPUT_TAG_ID.page_url).pathname;
}

var start_inject_js = args.start_inject_js;
var end_inject_js = args.end_inject_js;
var outfile_har = (args.outfile_har ? args.outfile_har : 'results.har');
var outfile_html = (args.outfile_html ? args.outfile_html : 'results.html');

var incookiefile = (args.in_cookie_json ? args.in_cookie_json : null);
var outcookiefile = (args.out_cookie_json ? args.out_cookie_json : 'cookie.json');


//console.log(args);
//console.log(is_headless);
//console.log(do_not_close);




var chromeArg = [
  '--disable-extensions',
  '--ignore-certificate-errors',
  "--log-level=3",
  "--no-sandbox",
  '--disable-setuid-sandbox',
  '--disable-web-security',
	'--proxy-bypass-list=<-loopback>',
	'--allow-running-insecure-content'
];

if (is_headless) 
	chromeArg.push('--headless')
else
	chromeArg.push('-auto-open-devtools-for-tabs')

if (proxy_address)
  chromeArg.push('--proxy-server=' + proxy_address);


(async () => {
  //const log_filename = `${(new Date()).getTime()}-${hostname.replace(':', '_')}${pathname !== '/' ? pathname.replace('/', '-') : ''}`;
  //const log_file_path = `logs/${log_filename}.txt`;
  
  async function log(message) {
    console.log(message);
    //console.log(log_file_path);
    //await fse.appendFile(log_file_path, `\n${message}`);
  }
  
  const options = {
    args: chromeArg,
    headless: false,
//     dumpio: true, // console output
    ignoreHTTPSErrors: true
  };
  
  var cookie = [ // cookie exported by google chrome plugin editthiscookie
    {
      "domain": hostname,
      //"expirationDate": 1597288045,
      //"expires": 0,
      "hostOnly": false,
      "httpOnly": false,
      "name": "token",
      "path": pathname,
      "sameSite": "no_restriction",
      "secure": false,
      "session": false,
      "storeId": "0",
      "value": "ExpoSE",
      "id": 1
    },
    
    {
      "domain": hostname,
      //"expirationDate": 1597288045,
      //"expires": 0,
      "hostOnly": false,
      "httpOnly": false,
      "name": "token2",
      "path": pathname,
      "sameSite": "no_restriction",
      "secure": false,
      "session": false,
      "storeId": "1",
      "value": "ExpoSE2",
      "id": 1
    }
  ]
  
  const browser = await puppeteer.launch(options);
  
  //const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // /* CONTROL: Maunally Set User Agent */ await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36');
  /* CONTROL: Manually Set Cookie */
  
  //await page.setCookie(...cookie);
  
  if (process.env.USER_AGENT)
    await page.setUserAgent(process.env.USER_AGENT);
  if (process.env.COOKIE) {
    cookie["value"] = process.env.COOKIE;
    await page.setCookie(...cookie);
  }
  
  const har = new PuppeteerHar(page);
  
  var isPageSaved = false;
  
  try {
    
    /* !!! THIS DOESN'T WORK FOR LOGIN !!! */
    /*** ENABLE DYNAMIC HEADER MODIFICATION *****/
    
    /*!!! THIS DOESN'T WORK FOR LOGIN !!!*/
    await page.setRequestInterception(true);
    
    /***** MODIFY HTTP HEADER *****/
    page.on('request', request => {
      // Do nothing in case of non-navigation requests.
      if (!request.isNavigationRequest() || isPageSaved) {
        request.continue();
        return;
      }
      /* CONTROL */
      // Add a new header for navigation request.
      const headers = request.headers();
      // headers['Accept-Encoding'] = "gzip";
      // headers['Accept-Encoding'] = "q=0,deflate,sdch";
      // headers['User-Agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36';
      // headers['Cookie'] = process.env.COOKIE;
      // console.log("Setting Cookie");
      // console.log(request);
      // console.log(headers);
      request.continue({headers});
    });
    
    
    // output console.log & console.err
    page.on('console', async msg => {
      await log(`[CONSOLE LOG]: ${msg.text()}`);
    });
    page.on("error", async function (err) {
      await log(`[ERROR]: ${err.toString()}`);
    });
    page.on('pageerror', async pageerr => {
      await log(`[CONSOLE PAGE ERROR]: ${pageerr}`);
    });
    
    
    /***** CONTROL: MODIFY REFERER *****/
    await page.setExtraHTTPHeaders({
      // referer: 'https://example.com/'
    });
    
    await har.start({path: outfile_har});
    /* LOGIN FIRST */
    //    await sleep(5000);
    await page._client.send('Network.enable', {
      maxResourceBufferSize: 1024 * 1204 * 100,
      maxTotalBufferSize: 1024 * 1204 * 200,
    })


    if (args.length == 9 || args.length == 8) {
      await page.goto(INPUT_TAG_ID.page_url, {timeout: 30000000});
      await page.waitForSelector(INPUT_TAG_ID.login_textbox);
      await page.waitForSelector(INPUT_TAG_ID.password_textbox);
      await page.waitForSelector(INPUT_TAG_ID.login_button);
      await page.type(INPUT_TAG_ID.login_textbox, CRED.id);
      await page.type(INPUT_TAG_ID.password_textbox, CRED.password);
      // click and wait for navigation
      await Promise.all([
        await page.click(INPUT_TAG_ID.login_button),
        await page.waitForNavigation({waitUntil: 'load'})
      ]);
      
      // Save Session Cookies
      const cookiesObject = await page.cookies()
      // Write cookies to temp file to be used in other profile pages
      jsonfile.writeFile(args[7] + ".cookie.json", cookiesObject, {spaces: 2},
        function (err) {
          if (err) {
            console.log('The file could not be written.', err)
          }
          console.log('Session (cookie) has been successfully saved')
        })
    } 
		
	if (in_cookie_json) {
      const cookiesArr = require('./' + in_cookie_json)
      console.log(cookiesArr)
      if (cookiesArr.length !== 0) {
        for (let cookie of cookiesArr) {
          await page.setCookie(cookie)
        }
        console.log('The previous session (cookie) has been loaded in the browser')
      }
    }
    /*******/
    
    
    page.on('response', async (response) => {
      const url = new URL(response.url());
      //if (response._headers.status === "200" && (args[0] === response.url() || args[0] === response.url() + "/" || args[0] + "/" === response.url() || "http://" + args[0] === response.url() || "http://" + args[0] === response.url() + "/" || "http://" + args[0] + "/" === response.url() || "https://" + args[0] === response.url() || "https://" + args[0] === response.url() + "/" || "https://" + args[0] + "/" === response.url()))

//	await inner();
//	function inner()
//console.log("Check " + url, "Status:", response._headers.status, response._status, response._headers.status && response._headers.status === "200", response._status && response._status == 200,((response._headers.status && response._headers.status === "200") || (response._status && response._status == 200)),((response._headers.status && response._headers.status === "200") || (response._status && response._status == 200)) && !isPageSaved);
//console.log(response);
//console.log(response._headers);
      if (((response._headers.status && response._headers.status === "200") || (response._status && response._status == 200)) && !isPageSaved) {	/* CONTROL: Store every resources being downloaded under the "output" folder */
        //const url = new URL(response.url());
        //let filePath = path.resolve(`./output${url.pathname}`);
        //if (path.extname(url.pathname).trim() === '') {
        //	filePath = `${filePath}/index.html`;
        //}
//console.log(response._headers);
//console.log("Called");
        isPageSaved = true;
        //if (args.length == 9 || args.length == 8)
        //	filePath = args[7] + ".html";
        //else if (is_past_session)
        //	filePath = args[2] + ".html";
        //else
        //	filePath = args[1] + ".html";
        
        //cookie["domain"] = url2.parse(response.url()).host;
        //cookie["path"] = url2.parse(response.url()).pathname;
        //await page.setCookie(...cookie);
        
        await fse.outputFile(outfile_html, await response.buffer());
        console.log("Saving the page as a file: " + response.url() + " to " + outfile_html);
      } else if (((response._headers.status && (response._headers.status === "300" || response._headers.status === "301" || response._headers.status === "302")) || (response._status && response._status == 300)) && !isPageSaved) {
        /* Cascade the cookie to the redirected page,
                because cache is applied per domain & path */
        //cookie[0]["domain"] = url2.parse(response._headers.location).host;
        //cookie[0]["path"] = url2.parse(response._headers.location).pathname;
        //console.log(cookie[0]);
        //await page.setCookie(...cookie);
      }
    });
    
    if (start_inject_js) {
      await page.evaluateOnNewDocument(
        () => {
          const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (Array.from(mutation.addedNodes).some(node => node.nodeName === 'html' || node.nodeName === 'BODY')) {

						if (Array.from(mutation.addedNodes).some(node => node.nodeName === 'html'))
							console.log("========== Inject Javascript on the new HTML:<head> ==========");
						else
							console.log("========== Inject Javascript on the new HTML:<body> ==========");

						eval(init_js_file_contents);
						init_js_file(); // initialize from template
						eval('if (typeof PrintAll !== "undefined") PrintAll()');
              }
              if (Array.from(mutation.addedNodes).some(node => node.nodeName === 'BODY')) {
                observer.disconnect();
              }
            }
          })
          observer.observe(document, {childList: true, subtree: true});
        });
      const injectFile = fs.readFileSync(start_inject_js, 'utf8');
      await page.evaluateOnNewDocument(injectFile);
    } 
    
    await page.goto(visitURL, {timeout: 30000000});

	if (end_inject_js)    
		var injectFile2 = fs.readFileSync(end_inject_js, 'utf8');

    const timing = await page.evaluate((injectFile2) => {
		console.log("========== Injected Javascript on pageload completion ==========");
		eval(injectFile2);
      const result = {};
      for (const key of Object.keys(window.performance.timing.__proto__))
        result[key] = window.performance.timing[key];
      return result;
    });
    //console.log(timing);


    var loadTime = (parseInt((timing["loadEventEnd"]) - parseInt(timing["navigationStart"])) / 1000.0);
//console.log(timing["loadEventEnd"]);
//console.log(timing["navigationStart"]);
//   console.log("Har Stop"); 
    await log(`- Load Time: ${loadTime.toString()} s`);
//   console.log("Har Stop 2"); 
//console.log(pref)
//await page._client.send('Performance.enable');
//const response = await page._client.send('Performance.getMetrics');
//console.log(response)
    
    
    /*	INCOMPLETE page download: The page contents to be stored are processed by the parser. So after eery document...appendChild(), the HTML contents become modified and stored by this code.
        const html = await page.content();
       fs.writeFile(args[1] + ".html", html, function (err) {
        if (err) throw err;
              //console.log('Saved!');
        });
    */
    
    await har.stop();

     if (chromeArg.includes('--headless')) {
       await browser.close();
     } else {
       // disable javascript, but leave the browser open
       await page.setJavaScriptEnabled(false);
//await browser.close();
     }
    fs.readFile(outfile_har, function (err, data) {
      var json = JSON.parse(data)
      //console.log(json['log']['pages'])
      if (json['log']['pages'].length > 0)
        json['log']['pages'][json['log']['pages'].length - 1]['pageTimings'] = loadTime;
      else
        json['log']['pages'].push({pageTimings: loadTime});
      
      fs.writeFile(outfile_har, JSON.stringify(json), function (err, result) {
        if (err) console.log('error', err);
      })
      console.log("Saving the HAR file: " + outfile_har);
    })

  } catch (error) {
    console.error("Error exit... ");
    console.error(error);
    browser.close();
  }
  
})();

