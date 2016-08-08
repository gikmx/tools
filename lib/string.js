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
     * @name module:util.string~actions#toTemplate
     * @param {object} context - The object defining the context to resolve.
     * @example
     * ```js
     * const str = require('feliz.util/string');
     * const foo = str('Hello ${name}').toTemplate({name:'Bar'}); // Hello Bar
     * ```
     **/
    string.toTemplate = context => {
        const reTokens = /\$\{([\s]*[^;\s]+[\s]*)\}/g;
        const reRemove = /(\$\{(?!map\.)[^}]+\})/g;
        const str = target
            // replaces expressions with ${map.expression}
            .replace(reTokens, (x,y) => `\$\{map.${y.trim()}\}`)
            // removes every expression that does not begin with "map."
            .replace(reRemove, '')
        return Function('map', `return \`${str}\``)(context);
    }

    return string;
}
