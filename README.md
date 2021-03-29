# Concolic Execution of Javascript Webpages

## Quick Setup
    $ sshpass -p rkskekfkak ssh -o StrictHostKeyChecking=no  skyer@165.22.176.134
    $ cd dse/src
    
#### Manual Setup: Platform
Ubuntu 20.04 Desktop or Server

#### Manual Setup: Install Mahimahi
    $ sudo apt-get install -y protobuf-compiler apache2-dev ssl-cert libprotobuf-dev xcb-proto xcb libx11-xcb-dev libxcb-present-dev libsdl-pango-dev pkg-config

    $ sudo make-ssl-cert generate-default-snakeoil
    $ sudo usermod --append --groups ssl-cert yyuu
    $ ls -l /etc/ssl/certs/ssl-cert-snakeoil.pem /etc/ssl/private/ssl-cert-snakeoil.key

    $ git clone https://github.com/ravinet/mahimahi
    $ cd mahimahi
    $ ACLOCAL_FLAGS="-I /usr/share/aclocal" ./autogen.sh
    $ ./configure
    $ >>> In file 'src/util/netdevice.cc:38', change 'strncpy' to 'memcpy'
    $ make -j8
    $ sudo make install

#### Manual Setup: Install MITM-Proxy
    $ git clone https://github.com/mitmproxy/mitmproxy.git
    $ cd mitmproxy
    $ python3 -m venv venv
    $ venv/bin/pip install -e ".[dev]"
    $ echo ". $(pwd)/venv/bin/activate" >> ~/.bashrc

#### Manual Setup: Installation
    $ git clone https://github.com/ihjkoh/dse
    $ cd dse/src
    $ npm install
    
## Run Analysis
    $ ./horcrux-mahimahi.sh <start index for websites> <end index for websites>
    $ ./stat.sh 
    
## Example
    $ ./horcrux-mahimahi.sh 10 20
    $ ./stat.sh 

## Result
The `path-results` folder contains a sub-folder for each analyzed webpage, such as `www.cnet.com`. For each webpage's folder, it contains as many `symbol_assignment_*.js` JavaScript files as the number of execution paths discovered by concolic execution. Each Javascript file is automatically generated in such a way that once it is executed at the beginning of the page load, it will initialize the browser's client-side values (e.g., `navigator.userAgent`, `screen.width`) such that it will its unique execution path. 

