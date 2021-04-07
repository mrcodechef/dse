const puppeteer = require('puppeteer');
const PuppeteerHar = require('puppeteer-har');
const fs = require('fs');
const fse = require('fs-extra');
const jsonfile = require('jsonfile');
const {URL} = require('url');
const url2 = require('url');
const path = require('path');
const CRED = {
  id: "gogo9th@hanmail.net",
  password: "rkskekfk"
}

const envArgs = {
  isChromeHeadFull: String(process.env.HAR_CHROME_HEADFULL).trim() === '1'
};

/* !!! Always # sign in the front !!! */
var INPUT_TAG_ID = {
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

var isPastSession = false;
if (args.length == 9 || args.length == 8) {
  CRED.id = args[1];
  CRED.password = args[2];
  INPUT_TAG_ID.login_textbox = '#' + args[3];
  INPUT_TAG_ID.password_textbox = '#' + args[4];
  INPUT_TAG_ID.login_button = '#' + args[5];
} else if (fs.existsSync(args[0]))
  isPastSession = true;

if (args.length != 9 && args.length != 8 && (isPastSession && args.length != 4 && args.length != 3 || !isPastSession && args.length != 3 && args.length != 2)) {
  console.log("Usage 1: " + "node har.js <Visiting URL> <har outfile> (local proxy port)");
  console.log("Usage 2: " + "node har.js <Login URL> <Login ID> <Login Password> <Login Textbox Input Tag ID> <Password Textbox Input Tag ID> <Login Button Iput Tag ID> <Visiting URL> <har outfile> (local proxy port)");
  console.log("Usage 3: " + "node har.js <json-session.cookie> <Visiting URL> <har outfile> (local proxy port)");
  console.log("Usage 4: " + "node har.js <Visiting URL> <inject JS file path> (local proxy port)");
  process.exit(0);
}


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

//if (!envArgs.isChromeHeadFull) {
	chromeArg.push('--headless')
//}
//else
//	chromeArg.push('-auto-open-devtools-for-tabs')

if (args.length == 9)
  chromeArg.push('--proxy-server=' + (args[8].includes(':') ? args[8] : '127.0.0.1:' + args[8]));
else if (isPastSession && args.length == 4)
  chromeArg.push('--proxy-server=' + (args[3].includes(':') ? args[8] : '127.0.0.1:' + args[3]));
else if (!isPastSession && args.length == 3)
  chromeArg.push('--proxy-server=' + (args[2].includes(':') ? args[2] : '127.0.0.1:' + args[2]));


var visitURL;
var previsitURL = "";
var hostname;
var pathname


if (args.length == 9 || args.length == 8) {
  visitURL = args[6];
  previsitURL = args[0];
  hostname = url2.parse(previsitURL).host;
  pathname = url2.parse(previsitURL).pathname;
} else if (isPastSession) {
  visitURL = args[1];
  hostname = url2.parse(visitURL).host;
  pathname = url2.parse(visitURL).pathname;
} else {
  visitURL = args[0];
  hostname = url2.parse(visitURL).host;
  pathname = url2.parse(visitURL).pathname;
}


(async () => {
  const log_filename = `${(new Date()).getTime()}-${hostname.replace(':', '_')}${pathname !== '/' ? pathname.replace('/', '-') : ''}`;
  const log_file_path = `logs/${log_filename}.txt`;
  
  async function log(message) {
    console.log(message);
    console.log(log_file_path);
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
      headers['Cookie'] = process.env.COOKIE;
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
    
    var har_filename = 'results.har';
    if (args.length >= 8)
      har_filename = args[7];
    else if (isPastSession) {
      if (args[2].split('.').pop() != 'js')
        har_filename = args[2];
    } else {
      if (args[1].split('.').pop() != 'js')
        har_filename = args[1];
    }
    await har.start({path: har_filename});
    /* LOGIN FIRST */
    //    await sleep(5000);
    await page._client.send('Network.enable', {
      maxResourceBufferSize: 1024 * 1204 * 100,
      maxTotalBufferSize: 1024 * 1204 * 200,
    })
    if (args.length == 9 || args.length == 8) {
      await page.goto(previsitURL, {timeout: 30000000});
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
    } else if (isPastSession) {
      const cookiesArr = require('./' + args[0])
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
        let filePath;
        filePath = 'results.html'
        //if (args.length == 9 || args.length == 8)
        //	filePath = args[7] + ".html";
        //else if (isPastSession)
        //	filePath = args[2] + ".html";
        //else
        //	filePath = args[1] + ".html";
        
        //cookie["domain"] = url2.parse(response.url()).host;
        //cookie["path"] = url2.parse(response.url()).pathname;
        //await page.setCookie(...cookie);
        
        await fse.outputFile(filePath, await response.buffer());
        console.log("Saving the page as a file: " + response.url() + " to " + filePath);
      } else if (((response._headers.status && (response._headers.status === "300" || response._headers.status === "301" || response._headers.status === "302")) || (response._status && response._status == 300)) && !isPageSaved) {
        /* Cascade the cookie to the redirected page,
                because cache is applied per domain & path */
        //cookie[0]["domain"] = url2.parse(response._headers.location).host;
        //cookie[0]["path"] = url2.parse(response._headers.location).pathname;
        //console.log(cookie[0]);
        //await page.setCookie(...cookie);
      }
    });
    
    var inject_filepath = null;
    if (args.length < 8) {
      if (isPastSession && args[2].split('.').pop() == 'js')
        inject_filepath = args[2];
      if (!isPastSession && args[1].split('.').pop() == 'js')
        inject_filepath = args[1];
    }
    if (inject_filepath) {
      await page.evaluateOnNewDocument(
        () => {
console.log("Injected Javascript on new document!!!");
          const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (Array.from(mutation.addedNodes).some(node => node.nodeName === 'html' || node.nodeName === 'BODY')) {
//console.log("Add Node by eval() 1 !!!!!!!!!!!!!!!!!");
                eval(init_js_file_contents);
//console.log("Add Node by eval() 2 !!!!!!!!!!!!!!!!!");
                init_js_file(); // initialize from template
//console.log("Add Node by eval() 3 !!!!!!!!!!!!!!!!!");
                eval('if (typeof PrintAll != "undefined") PrintAll()');
//console.log("Add Node by eval() 4 !!!!!!!!!!!!!!!!!");
              }
              if (Array.from(mutation.addedNodes).some(node => node.nodeName === 'BODY')) {
                observer.disconnect();
              }
              
            }
          })
          observer.observe(document, {childList: true, subtree: true});
        });
      const injectFile = fs.readFileSync(inject_filepath, 'utf8');
      await page.evaluateOnNewDocument(injectFile);
    }
    
    
    await page.goto(visitURL, {timeout: 30000000});
    
    const timing = await page.evaluate(() => {
console.log('JALANGI_FINAL_COOKIE: ' + document.cookie);
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
await browser.close();
     }
    fs.readFile(har_filename, function (err, data) {
      var json = JSON.parse(data)
      //console.log(json['log']['pages'])
      if (json['log']['pages'].length > 0)
        json['log']['pages'][json['log']['pages'].length - 1]['pageTimings'] = loadTime;
      else
        json['log']['pages'].push({pageTimings: loadTime});
      
      fs.writeFile(har_filename, JSON.stringify(json), function (err, result) {
        if (err) console.log('error', err);
      })
      console.log("Saving the HAR file: " + har_filename);
    })
    
    
  } catch (error) {
    console.error("Error exit... ");
    console.error(error);
    browser.close();
  }
  
  
})();

