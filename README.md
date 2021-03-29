# Webpage Concolic Execution (i.e., Concrete + Symbolic Execution)
Concolic Execution of Javascript Webpages

### Platform
Ubuntu 20.04 Desktop or Server

### Installation
    $ git clone https://github.com/ihjkoh/dse
    $ cd dse/src
    $ npm install
    
### Run Analysis
    $ ./horcrux-mahimahi.sh <start index for websites> <end index for websites>
    $ ./stat.sh 
    
### Example
    $ ./horcrux-mahimahi.sh 10 20
    $ ./stat.sh 

### Result
The `path-results` folder contains a sub-folder for each analyzed webpage, such as `www.cnet.com`. For each webpage's folder, it contains as many `symbol_assignment_*.js` JavaScript files as the number of execution paths discovered by concolic execution. Each Javascript file is automatically generated in such a way that once it is executed at the beginning of the page load, it will initialize the browser's client-side values (e.g., `navigator.userAgent`, `screen.width`) such that it will its unique execution path. 

