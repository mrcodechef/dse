
# mitmdump --mode upstream:http://localhost:8181 --ssl-insecure -p 8182 proxy2.py
import time
import json
import codecs
import hashlib
import os
import sys
import inspect
import traceback
import subprocess
import shutil
import tempfile
from tempfile import NamedTemporaryFile
import glob
import time
from subprocess import Popen, PIPE
import webbrowser
import random
from mitmproxy import ctx
from mitmproxy.script import concurrent
import re

from subprocess import CalledProcessError, Popen, PIPE, STDOUT
from bs4 import BeautifulSoup
import jsbeautifier
from filelock import FileLock
import threading
import glob


def is_json(myjson):
  try:
    json_object = json.loads(myjson)
  except ValueError as e:
    return False
  return True


cache_id = os.getenv('PROXY_CACHE_FOLDER_NAME')

if cache_id != None and cache_id != '':
	print("Proxy Cache Folder Name: " + str(cache_id))
	CACHE_FOLDER = str(cache_id)
	TEMP_ORIGINAL_FILE_PREFIX = '/tmp/original_' + str(cache_id) + '_'
	TEMP_JALANGI_FILE_PREFIX = '/tmp/jalangi_' + str(cache_id) + '_'
	TEMP_JALANGI_HASHLIST_FILE = '/tmp/jalangi_hash_list_' + str(cache_id)
else:
	CACHE_FOLDER = 'cache'
	TEMP_ORIGINAL_FILE_PREFIX = '/tmp/original_'
	TEMP_JALANGI_FILE_PREFIX = '/tmp/jalangi_'
	TEMP_JALANGI_HASHLIST_FILE = '/tmp/jalangi_hash_list'

JALANGI_HOME = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(inspect.getframeinfo(inspect.currentframe()).filename
)), os.pardir))
WORKING_DIR = os.getcwd()

lock_hash_list = threading.Lock()
lock_jalangi_index = threading.Lock()
lock_html = threading.Lock()

global_filename_index = 0

sys.path.insert(0, JALANGI_HOME+'/scripts')

FILE_DIR = os.path.dirname(os.path.realpath(__file__))
WORKING_DIR = os.getcwd()

FILE_HASH_LIST = FILE_DIR + "/" + CACHE_FOLDER + "/file_hash_list.txt"
#JALANGI_HOME = os.path.abspath(os.path.join(os.path.dirname(__file__),os.pardir))
#INSTRUMENTATION_SCRIPT = JALANGI_HOME + "/src/js/commands/esnstrument_cli.js"
#INST_DIR_SCRIPT = JALANGI_HOME + "/src/js/commands/instrument.js"
ANALYSIS_SCRIPT = FILE_DIR + "/UniqueLines2.js"
JALANGI_SCRIPT = FILE_DIR + "/jalangi.js"

REGENERATOR_RUNTIME_JS = FILE_DIR + "/regeneratorRuntime.js"
CONFIG_JS = FILE_DIR + "/Config.js"
CONSTANTS_JS = FILE_DIR + "/Constants.js"
ASTUTIL_JS = FILE_DIR + "/astUtil.js"
INSTUTIL_JS = FILE_DIR + "/instUtil.js"
ESNSTRUMENT_JS = FILE_DIR + "/esnstrument.js"
ESNSTRUMENT_BROWSER_JS = FILE_DIR + "/esnstrument-browser.js"
IIDTOLOCATION_JS = FILE_DIR + "/iidToLocation.js"
ANALYSIS_JS = FILE_DIR + "/analysis.js"

SYMBOL_LIST = ["document.cookie", "screen.width", "screen.height", "screen.availWidth", "screen.availHeight", "screen.colorDepth", "screen.pixelDepth", "navigator.userAgent", "navigator.platform", "document.referrer", "document.lastModified", "Math.random", "crypto.getRandomValues", "Date.now", "new Date()", "document.documentElement.offsetWidth", "document.documentElement.offsetHeight", "document.documentElement.offsetLeft", "document.documentElement.offsetTop", "document.documentElement.scrollWidth", "document.documentElement.scrollHeight", "document.documentElement.scrollLeft", "document.documentElement.scrollTop", "document.documentElement.clientWidth", "document.documentElement.clientHeight", "document.documentElement.clientLeft", "document.documentElement.clientTop", "document.body.offsetWidth", "document.body.offsetHeight", "document.body.offsetLeft", "document.body.offsetTop", "document.body.scrollWidth", "document.body.scrollHeight", "document.body.scrollLeft", "document.body.scrollTop", "document.body.clientWidth", "document.body.clientHeight", "document.body.clientLeft", "document.body.clientTop"]

module_list = []

with open(REGENERATOR_RUNTIME_JS,'r') as file:
	REGENERATOR_RUNTIME_STR = file.read()
with open(ANALYSIS_SCRIPT,'r') as file:
	ANALYSIS_SCRIPT_STR = file.read()
with open(CONFIG_JS,'r') as file:
	CONFIG_JS_STR = file.read()
with open(CONSTANTS_JS,'r') as file:
	CONSTANTS_JS_STR = file.read()
with open(ASTUTIL_JS,'r') as file:
	ASTUTIL_JS_STR = file.read()
with open(INSTUTIL_JS,'r') as file:
	INSTUTIL_JS_STR = file.read()
#with open(ESNSTRUMENT_JS,'r') as file:
#	ESNSTRUMENT_JS_STR = file.read()
with open(ESNSTRUMENT_BROWSER_JS,'r') as file:
	ESNSTRUMENT_BROWSER_JS_STR = file.read()
with open(IIDTOLOCATION_JS,'r') as file:
	IIDTOLOCATION_JS_STR = file.read()
with open(ANALYSIS_JS,'r') as file:
	ANALYSIS_JS_STR = file.read()
with open(ANALYSIS_SCRIPT,'r') as file:
	ANALYSIS_SCRIPT_STR = file.read()

#def start():
#	print('Jalangi home is ' + JALANGI_HOME)
#	print('Current working directory is ' + WORKING_DIR)

#def load(l):
#	l.add_option('args', str, "", "Jalangi2 Arguments")
#	l.add_option('cache', bool, True, "Jalangi2 use cache")


fileList = glob.glob(TEMP_JALANGI_FILE_PREFIX + '*')
for filePath in fileList:
    try:
        os.remove(filePath)
    except:
        print("Error while deleting file : ", filePath)

fileList = glob.glob(TEMP_ORIGINAL_FILE_PREFIX + '*')
for filePath in fileList:
    try:
        os.remove(filePath)
    except:
        print("Error while deleting file : ", filePath)

if not os.path.exists(CACHE_FOLDER):
   os.makedirs(CACHE_FOLDER)


if not os.path.isfile(FILE_HASH_LIST):
	with open(FILE_HASH_LIST, 'w') as file:
		file.write('')

def start():
    print('My MITM Proxy is Started')


def load(l):
    l.add_option('args', str, "", "Jalangi2 Arguments")
    l.add_option('cache', bool, True, "Jalangi2 use cache")



def encode_input(input):
    if input.startswith(codecs.BOM_UTF16):
        return input.decode('utf-16').encode('utf-8')
    elif input.startswith(codecs.BOM_UTF16_BE):
        return input.decode('utf-16-be').encode('utf-8')
    elif input.startswith(codecs.BOM_UTF16_LE):
        return input.decode('utf-16-le').encode('utf-8')
    return input


def execute(script, stdin=None, env=None, quiet=False):
    """Execute script and print output"""
    try:
        cmd = ["node"] + script.split(' ')

        sub_env = os.environ.copy()

        print("Cmd", str(cmd))

        if env:
            for key in env.keys():
                if key != None:
                    sub_env[key] = env[key]

        print(' '.join(cmd))
        p = Popen(cmd, env=sub_env, stdin=PIPE, stdout=PIPE, stderr=subprocess.STDOUT)
        stdout = p.communicate(input=encode_input(stdin) if stdin else None)[0]
        quiet = True
        if not quiet:
            print(stdout)
        return stdout
    except subprocess.CalledProcessError as e:
        print(e.output)


#def processFile (flow, content, ext, originalFileName, instrumentedFileName):
def processFile (flow, content, originalFileName, instrumentedFileName):
	try:
		if content == None:
			return
		elif originalFileName.find('service-worker.js') >= 0:
			return content
		elif is_json(content):
			return content

		filename_hash = hashlib.md5(originalFileName.encode('utf-8')).hexdigest()
		content_hash = hashlib.md5(content.encode('utf-8')).hexdigest()

		#combined = filename_hash + ' ' + content_hash + '\n'
		#combined = content_hash + ' ' + instrumentedFileName + '\n'
		isHashFound = False
		#with FileLock(FILE_HASH_LIST):
		#	print("Lock acquired.")
		global lock_hash_list
		global lock_jalangi_index
		global global_filename_index

		lock_hash_list.acquire()
		with open(FILE_HASH_LIST) as fp:
			while True:
				line = fp.readline()
				if not line:
					break
				if line[:32] == content_hash:
					isHashFound = True
					instrumentedFileName = line[33:]
					instrumentedFileName = instrumentedFileName[: len(instrumentedFileName) - 1]
					break
		#if isFound:
		#if os.path.isfile(originalFileName):
		#	print('Already original downloaded=====: ' + originalFileName)

		if isHashFound and os.path.isfile(instrumentedFileName):
			print('Already instrumented=====: ' + instrumentedFileName)
			with open (instrumentedFileName, "r") as file:
				data = file.read()
			lock_hash_list.release()
		else:
			lock_hash_list.release()
			print('In File: ' + originalFileName)
			print('Out File: ' + instrumentedFileName)

			path, basename = os.path.split(originalFileName)
			if not os.path.exists(path):
				os.makedirs(path)

#			with FileLock(FILE_HASH_LIST):
#				if not os.path.isfile(originalFileName):
#					print("Writing: " + originalFileName)
#					with open(originalFileName, 'w') as file:
#						file.write('placeholder')
#					print("Written: " + originalFileName)
#				else:
#					print("Duplicate")
#					duplicate = random.randint(1, 1000000000);
#					instrumentedFileName = instrumentedFileName + "-DUPLICATE" + str(duplicate)
#					#instrumentedFileName = instrumentedFileName #+ "_jalangi_.js"

			print("Beautifying: " + originalFileName)
			#print(content)
			content = jsbeautifier.beautify(content)
			content = content.replace("throw\n", "throw ").replace("throw\r", "throw ").replace("'use strict';", "").replace("\"use strict\";", "")
			print("Beautified: " + originalFileName)

			url = flow.request.scheme + '://' + flow.request.host + ':' + str(flow.request.port) + flow.request.path	
			sub_env = { 'JALANGI_URL': url }
			#execute(JALANGI_SCRIPT + ' ' + ctx.options.args + ' ' + fullname, None, sub_env)
			#execute(JALANGI_SCRIPT + ' --inlineIID --inlineSource --analysis ' + ANALYSIS_SCRIPT + ' --outfile ' + instrumentedFileName + ' ' + originalFileName, None, sub_env)

			########## LOCK INDEX ##########
			lock_jalangi_index.acquire()
			jalangi_index = global_filename_index
			global_filename_index += 1
			lock_jalangi_index.release()
			########## LOCK INDEX ##########

			print("Writing: " + TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index))
			with open(TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index), 'w') as file:
				file.write(content)
				#print("Write 3: " + fullname)
				#print (content)
			print("Written: " + TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index))
			
			execute(JALANGI_SCRIPT + ' --inlineIID --inlineSource --analysis ' + ANALYSIS_SCRIPT + ' --outfile ' + TEMP_JALANGI_FILE_PREFIX + str(jalangi_index) + ' ' + TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index), None, sub_env)


			with open (TEMP_JALANGI_FILE_PREFIX + str(jalangi_index), "r") as file:
				original_data = file.read()
			original_data = original_data.replace(TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index), originalFileName) 

			with open (TEMP_JALANGI_FILE_PREFIX + str(jalangi_index), 'w') as file:
				file.writelines(original_data)


			with open (TEMP_JALANGI_FILE_PREFIX + str(jalangi_index), "r") as file:
				data = file.read()

			########## LOCK JS FILE ##########
			lock_hash_list.acquire()
			isNewWritten = False
			with open(TEMP_JALANGI_HASHLIST_FILE, 'w') as fp2:
				with open(FILE_HASH_LIST) as fp:
					while True:
						line = fp.readline()
						if not line:
							if not isNewWritten:
								fp2.writelines(content_hash + ' ' + instrumentedFileName + '\n')
							break
						elif line == '':
							continue
						elif line[33:] == instrumentedFileName + '\n':
							fp2.writelines(content_hash + ' ' + instrumentedFileName + '\n')
							isNewWritten = True
						else:
							fp2.writelines(line)
			os.rename(TEMP_JALANGI_HASHLIST_FILE, FILE_HASH_LIST)				
			os.rename(TEMP_ORIGINAL_FILE_PREFIX + str(jalangi_index), originalFileName)				
			os.rename(TEMP_JALANGI_FILE_PREFIX + str(jalangi_index), instrumentedFileName)				
			print('Saved ============================== ' + instrumentedFileName)
			lock_hash_list.release()
			########## LOCK JS FILE ##########
		return data
	except:
		print('Exception in processFile() @ proxy.py')
		exc_type, exc_value, exc_traceback = sys.exc_info()
		lines = traceback.format_exception(exc_type, exc_value, exc_traceback)
		print(''.join(lines))
		return content

@concurrent
def response(flow):

	# Do not invoke jalangi if the requested URL contains the query parameter noInstr
	# (e.g. https://cdn.com/jalangi/jalangi.min.js?noInstr=true)

	print("RESPONSE")
	print(flow.request.path);
	if flow.request.query and flow.request.query.get('noInstr', None):
		return

	#print ("METHOD")
	#print (flow.request.method)
	if flow.request.method != "GET":
		return

	try:
		flow.response.decode()

		content_type = None
		csp_key = None

		for key in flow.response.headers.keys():
			if key.lower() == "content-type":
				content_type = flow.response.headers[key].lower()
			elif key.lower() == "content-security-policy":
				csp_key = key

		if not content_type:
			return

		query_index = flow.request.path.find('?')
		if query_index != -1:
			resource_path = flow.request.path[:query_index]
			query_string_slash_escaped = flow.request.path[query_index:].replace('/', '__SLASH__')
		else:
			resource_path = flow.request.path
			query_string_slash_escaped = ''

		
		if content_type.find('html') >= 0 and resource_path[len(resource_path) - 1] == '/':
			resource_path += 'index.html'

		fullname = os.path.join(FILE_DIR, CACHE_FOLDER + '/' + flow.request.host + '/' + resource_path + query_string_slash_escaped)

		isFirst = True
		fullnameFinal = ''
		for element in fullname.split('/'):
			if isFirst:
				isFirst = False
			else:
				fullnameFinal += '/'
			finalName = element
			if len(element) > 255:
				finalName = hashlib.md5(element.encode('utf-8')).hexdigest()
			fullnameFinal += finalName
		fullname = fullnameFinal
		print("FULLNAME : " + fullname)
		print("Content Type: " + content_type);

		if content_type.find('javascript') >= 0 and flow.request.url not in module_list:	
			print("URL: " + flow.request.url)
			foundDate = False	
			res = re.search("[ \t]+instanceof[ \t]+Date", flow.response.text)
			if res != '' and res != None:
				print ("JS INSTANCEOF DATE FOUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
				foundDate = True;
			
			print(module_list)
			isSymbol = False
			if flow.response.text != None:
				flow.response.text = flow.response.text.replace("'use strict';", "").replace("\"use strict\";", "")
			for x in SYMBOL_LIST:
				if x in flow.response.text:
					print('JS SYMBOL!!!!!!!! ' + x)
					isSymbol = True		
			
			foundDate = False
			if not isSymbol:
				res = re.search("[ \t]+instanceof[ \t]+Date", flow.response.text)
				if res != '' and res != None:
					print ("HTML INSTANCEOF DATE FOUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
					foundDate = True;

			if any(x in flow.response.text for x in SYMBOL_LIST) or foundDate:
				#flow.response.text = processFile(flow, flow.response.text, 'js', fullname)
				flow.response.text = processFile(flow, flow.response.text, fullname, fullname + "_jalangi_.js")
				print("Returned for : " + fullname)
				print(len(flow.response.text))
			else:
				print ("JS NO SYMBOL<<<<<<<<<<<<<<<<<<<<<")
				flow.response.text = processFile(flow, flow.response.text, fullname, fullname + "_jalangi_.js")
				print("Returned2 for : " + fullname)


		elif content_type.find('html') >= 0:
			instrumentedFileName = fullname + "_jalangi_.html"

			if False and os.path.isfile(instrumentedFileName):
				with open (instrumentedFileName, "r") as file:
					html_instrumented_str = file.read()
				print ("Already Instrumented=====: " + instrumentedFileName)
			else:
				soup = BeautifulSoup(flow.response.text, 'html.parser')

				path, basename = os.path.split(fullname)
				if not os.path.exists(path):
					os.makedirs(path)

				if not os.path.isfile(fullname):
					with open(fullname, 'w') as file:
						file.write(str(soup))

				scripts = soup.find_all('script')
				html_script_index = 0

				script_count = len(scripts)
				index = 0
				last_script_writable = None

				for script in scripts:
					#print(script.string)
					if 'type' in script.attrs and script.attrs['type'].find('module') >= 0:
						######## DANGEROUS:  script.attrs['type'] = 'text/javascript'
							if flow.request.url[len(flow.request.url) - 1] == '/': 
								prefix = flow.request.url
							else:
								prefix = flow.request.url + '/'
							if script.attrs['src'].find('https://') == 0 or script.attrs['src'].find('http://') == 0:
								module_list.append(script.attrs['src'])
							elif script.attrs['src'].find('./') == 0: # ./resource.js
								module_list.append(prefix + script.attrs['src'].substr(2))
							elif script.attrs['src'].find('/') == 0:  # /resource.js
								module_list.append(script.attrs['src'].substr(1))
							else:
								module_list.append(script.attrs['src']) # resource.js or ../resource.js
							#print("Module Appended")
					if 'type' not in script.attrs or script.attrs['type'] == '' or script.attrs['type'].find('javascript') >= 0:
						isSymbol = False
						for x in SYMBOL_LIST:
							if script.string and x in script.string:
								print('HTML SYMBOL!!!!!!!! ' + x)
								isSymbol = True

						foundDate = False	
						if not isSymbol:
							print ("HTML NO SYMBOL<<<<<<<<<<<<<<<<<<<<<")
							res = re.search("[ \t]+instanceof[ \t]+Date", flow.response.text)
							if res != '' and res != None:
								print ("HTML INSTANCEOF DATE FOUND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
								foundDate = True;

						if script.string != None:
							script.string = script.string.replace("'use strict';", "").replace("\"use strict\";", "")

						# Must always instrument to prevent side effects
						if script.string != None and script.string != '':
							print("Script Tag " + fullname + "_" + str(html_script_index) + " Instrumenting...")
							#processedString = processFile(flow, script.string, str(html_script_index), original_fullname)
							processedString = processFile(flow, script.string, fullname + "_" + str(html_script_index), fullname + "_" + str(html_script_index) + "_jalangi_.html")
							html_script_index += 1
							script.string = processedString
							#is_html_instrumented = True

					if script.string != None and 'src' not in script.attrs:
						last_script_writable = script
					index += 1


				new_script_tag = soup.new_tag('script')
				#new_script_tag.string="console.log('BeautifulSoup Injected Script')\n"

				# COMMENT OUT FOR DEBUGGING
				new_script_tag.string = REGENERATOR_RUNTIME_STR + CONFIG_JS_STR + CONSTANTS_JS_STR + ASTUTIL_JS_STR + ESNSTRUMENT_BROWSER_JS_STR + IIDTOLOCATION_JS_STR + ANALYSIS_JS_STR + ANALYSIS_SCRIPT_STR
				#new_script_tag.string = CONFIG_JS_STR + CONSTANTS_JS_STR + ASTUTIL_JS_STR + IIDTOLOCATION_JS_STR + ANALYSIS_JS_STR + ANALYSIS_SCRIPT_STR



				#new_script_tag.string = CONFIG_JS_STR + CONSTANTS_JS_STR + ASTUTIL_JS_STR + IIDTOLOCATION_JS_STR + ANALYSIS_JS_STR + ANALYSIS_SCRIPT_STR
				#new_script_tag.string = CONSTANTS_JS_STR + IIDTOLOCATION_JS_STR + ANALYSIS_JS_STR + ANALYSIS_SCRIPT_STR
				new_script_tag.string = ' if (typeof JALANGI_$ == "undefined") { ' + new_script_tag.string + '}'
				#print(str(soup.html))
				if soup.html == None:
					return

				if soup.html.head != None:
					soup.html.head.insert(0, new_script_tag)	
				elif soup.html.body != None:
					soup.html.body.insert(0, new_script_tag)	

#				append_string = " ;\nconsole.log('JALANGI_FINAL_COOKIE: ' + document.cookie);\n"
#				if last_script_writable != None:
#					last_script_writable.string += append_string
#					#last_script_writable.string += "J$.analysis.printSymbols();\n"
#				else:
#					new_script_tag2 = soup.new_tag('script')
#					new_script_tag2.string = append_string
#					if soup.html.body != None:
#						soup.html.body.append(new_script_tag2)
#						#soup.html.body.insert(6, new_script_tag2)
#					elif soup.html.head != None:
#						soup.html.head.append(new_script_tag2)

				html_instrumented_str= str(soup)

				#lock_html.acquire()
				if not os.path.isfile(instrumentedFileName):
					with open(instrumentedFileName, 'w') as file:
						file.write(html_instrumented_str)
				#lock_html.release()
				print('Saved ============================== ' + instrumentedFileName)

			flow.response.text = str(html_instrumented_str)


		# Disable the content security policy since it may prevent jalangi from executing
		if csp_key:
			flow.response.headers.pop(csp_key, None)
	except:
		print('Exception in response() @ proxy.py')
		exc_type, exc_value, exc_traceback = sys.exc_info()
		lines = traceback.format_exception(exc_type, exc_value, exc_traceback)
		print(''.join(lines))

