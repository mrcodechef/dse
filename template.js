const fs = require('fs');

const files = [
  'Config.js',
  'Constants.js',
  'astUtil.js',
  'esnstrument-browser.js', //  COMMENT OUT FOR DEBUGGING
  'iidToLocation.js',
// 'instUtil.js',
  'analysis.js',
  'UniqueLines2.js'
];

const getFromArgs = (argName) => {
  const argNameRgx = new RegExp(`^--${argName}=`, 'gmi');
  const argArray = process.argv;
  
  const initTemplateFile = argArray.find((arg) => argNameRgx.test(arg));
  if (initTemplateFile) {
    return initTemplateFile.replace(argNameRgx, '');
  }
};

let result = '';

// get argument --init-template=
const initTemplateArg = 'init-template';
const initTemplateFile = getFromArgs(initTemplateArg);
if (initTemplateFile) {
  result += fs.readFileSync(getFromArgs(initTemplateArg), {encoding: 'utf8', flag: 'r'});
} else {
  console.error('Error: --init-template=<filename> is required');
  return null;
}


// read files and add to result
result += `;function init_js_file() {
  console.log('start init_js_file');
`;

files.forEach((file) => {
  result += fs.readFileSync(`./${file}`, {encoding: 'utf8', flag: 'r'});
});
result += '};';

// get output --init-template=
const outputArg = 'output';
const outputFile = getFromArgs(outputArg);

if (outputFile) {
  fs.writeFileSync(outputFile, result);
} else {
  console.log(result)
}
