var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var babelrc = fs.readFileSync('./.babelrc');
var config;
var parseData
try {
  parseData = decoder.write(babelrc);
  config = JSON.parse(parseData);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-core/register')(config);
require('../server');