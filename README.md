# Concolic Execution of Javascript Webpages

## Quick Remote Setup
    $ sshpass -p rkskekfkak ssh -o StrictHostKeyChecking=no  skyer@165.22.176.134
    $ cd dse
    
#### Manual Local Setup: Platform Requirement
Ubuntu 20.04 Desktop or Server
#### Manual Local Setup: Install Preliminaries
    $ sudo apt update && sudo apt-get install -y protobuf-compiler apache2 apache2-dev ssl-cert libprotobuf-dev \
      xcb-proto xcb libx11-xcb-dev libxcb-present-dev libsdl-pango-dev pkg-config dnsmasq libssl-dev python3-venv \ 
      python3-pip chromium-browser pipx

#### Manual Local Setup: Install Mahimahi  (To simulate web servers)
    $ sudo make-ssl-cert generate-default-snakeoil
    $ sudo usermod --append --groups ssl-cert <user name>
    $ sudo ls -l /etc/ssl/certs/ssl-cert-snakeoil.pem /etc/ssl/private/ssl-cert-snakeoil.key

    $ cd ~
    $ git clone https://github.com/ravinet/mahimahi
    $ cd mahimahi
    $ ACLOCAL_FLAGS="-I /usr/share/aclocal" ./autogen.sh
    $ ./configure
    $ >>> In file 'src/util/netdevice.cc:38', change 'strncpy' to 'memcpy'
    $ make -j4
    $ sudo make install

#### Manual Local Setup: Install MITM-Proxy (To instrument Javascript resources on the fly)
    $ sudo pip3 install -U pip
    $ pip3 install mitmproxy bs4 jsbeautifier filelock
    $ pipx mitmproxy
    $ echo ". ~/.local/pipx/venvs/mitmproxy/bin/activate" >> ~/.bashrc

#### Manual Local Setup: Install Node 10.23.0 & 15.4.0 (to run ExpoSE & Puppeteer with Jalangi)
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    $ source ~/.bashrc
    $ nvm --version
    $ nvm ls-remote
    $ nvm install 15.4.0
    $ nvm install 10.23.0
    $ nvm alias default 15.4.0
    $ echo "nvm use 15.4.0" >> ~/.bashrc
    $ nvm use 15.4.0


#### Manual Local Setup: Setup Github SSH Keys (to install Z3JavaScript)
https://www.freecodecamp.org/news/git-ssh-how-to/

    $ mkdir $HOME/.ssh # if not exists
    $ ssh-keygen -t rsa -b 4096 -C <your github.com email address>   # create your key
    $ eval "$(ssh-agent -s)"   # check if ssh-agent is running
    $ ssh-add ~/.ssh/id_rsa   # add your key to the ssh-agent
    $ cat ~/.ssh/id_rsa.pub   # print your key

> Then, visit https://github.com/settings/keys 

> click "New SSH Key" 

> Paste the contents of id_ras.pub 

> click "Add SSH Key"

    $ ssh -T git@github.com   # check if your key is added to your Github.com account


#### Manual Local Setup: Install ExpoSE (to run the SMT solver in Javascript)
    $ cd ~
    $ git clone https://github.com/ExpoSEJS/ExpoSE
    $ cd ExpoSE
    $ nvm use 10.23.0
    $ npm install
    $ sed -i "s| node | $(which node) |g" scripts/play # force ExpoSE to use Node v10.23.0
    $ echo "export PATH=\"$PATH:$(pwd)\"" >> ~/.bashrc
    $ source ~/.bashrc
    $ expoSE tests/eval/test.js   # Test


#### Manual Local Setup: Our Software Installation (for webpage concolic execution)
    $ nvm use 15.4.0
    $ cd ~
    $ git clone https://github.com/ihjkoh/dse
    $ cd dse
    $ npm install puppeteer puppeteer-har fs fs-extra module path acorn argparse@1.0.10 esotope @babel/core @babel/plugin-transform-runtime uuid dayjs tough-cookie babel-plugin-transform-es2015-modules-commonjs-simple install babel-preset-es2017 babel-preset-es2015 lodash browserify @babel/plugin-transform-function-name
    $ npm init
    $ npx babel-upgrade --write
    $ npm install
    $ echo "export PUPPETEER_EXECUTABLE_PATH='/usr/bin/chromium-browser'" >> ~/.bashrc
    $ source ~/.bashrc
    
#### Manual Local Setup: Copy the mahimahi database folder
Place the top-level mahimahi database folder in the `dse` directory
    
## Run Webpage Concolic Analysis
    $ ./horcrux-mahimahi-final.sh <start index for websites> <end index for websites>
    
#### Example
    $ ./horcrux-mahimahi.sh 10 20   # www.facebook.com

#### Results
The `path-results` folder contains a sub-folder for each analyzed webpage, such as `www.cnet.com`. For each webpage's folder, it contains as many `symbol_assignment_*.js` JavaScript files as the number of execution paths discovered by concolic execution. Each Javascript file is automatically generated in such a way that once it is executed at the beginning of the page load, it will initialize the browser's client-side values (e.g., `navigator.userAgent`, `screen.width`) such that it will its unique execution path. 

