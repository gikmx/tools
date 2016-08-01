'use strict';

const UTIL = require('util');

const is     = require('./is');
const object = require('./object');

const Defaults = { showHidden:true, depth:null };

module.exports = (target=null, options={}) => {
    if (is(options).object()) options = object(Defaults).merge(options);
    process.stdout.write(`\n${UTIL.inspect(target, options)}\n`)
};
