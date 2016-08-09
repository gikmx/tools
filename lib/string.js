'use strict';

const FelizError = require('feliz.error');
const is = require('./is');

/**
 * String utilities for feliz.util
 * @alias module:util.string
 * @param {string} target - The string to target.
 * @return {module:util.string~actions}
 * @example
 * ```js
 * const str = require('feliz.util/string');
 * const ops = str('hello world');
 * // returns object with actions for target string
 * ```
 */
module.exports = target => {

    if (!is(target).string()) throw FelizError.type({
        name: 'feliz.util:string',
        type: 'String',
        data: !target? target : target.constructor.name
    });

    /**
     * @class
     * @name module:util.string~actions
     * @classdesc Actions to be applied to given string target.
     */
    const string = {};

    /**
     * Allows given string to be converted according to a context.
     * @method
     * @name module:util.string~actions#template
     * @param {object} context - The object defining the context to resolve.
     * @example
     * ```js
     * const str = require('feliz.util/string');
     * const foo = str('Hello ${name}').template({name:'Bar'}); // Hello Bar
     * ```
     **/
    string.template = context => {
        const regx = /\$\{([^\}]+)\}/g;
        const expr = target.replace(regx, (m, name, i) => '${map.' + name.trim() + '}');
        return Function('map', 'return `' + expr + '`')(context);
    }

    return string;
}
