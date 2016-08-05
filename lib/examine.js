'use strict';

const UTIL = require('util');

const is       = require('./is');
const object   = require('./object');
const defaults = { showHidden:true, depth:null };

module.exports = function(target=null, options={}){
    if (is(options).object()) options = object(defaults).merge(options);
    process.stdout.write(`\n${UTIL.inspect(target, options)}\n`)
};
