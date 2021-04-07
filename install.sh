#!/bin/bash

npm install puppeteer puppeteer-har fs fs-extra module path acorn argparse@1.0.10 esotope @babel/core @babel/plugin-transform-runtime uuid dayjs tough-cookie babel-plugin-transform-es2015-modules-commonjs-simple install babel-preset-es2017 babel-preset-es2015 lodash browserify @babel/plugin-transform-function-name
npm init
npx babel-upgrade --write
npm install
#npm install --save-dev babelify @babel/core
sed -i '/export PUPPETEER_EXECUTABLE_PATH=/d' ~/.bashrc
echo "export PUPPETEER_EXECUTABLE_PATH='/usr/bin/chromium-browser'" >> ~/.bashrc

