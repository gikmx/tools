'use strict';

/**
 * Type checker for feliz.util
 * @alias module:util.is
 * @param {mixed} target - The target value to be checked.
 * @return {module:util.is~checkers} Functions that will validate the target.
 * @example
 * ```js
 * const is = require('feliz.util/is');
 * const str = 'hello world';
 * if (is(str).string()) console.log(str); // will log 'hello world'
 * ```
 */
module.exports = function(target){

    /**
     * @class
     * @name module:util.is~checkers
     * @classdesc Available type-checkers for given target.
     */
    const checkers = {};

    /**
     * @method
     * @name module:util.is~checkers#object
     * @return {boolean}
     * @example
     * ```js
     * is({}).object()           // true
     * is(new Object()).object() // true
     * is(new String()).object() // true
     * ```
     */
    checkers.object = ()=> !!target && target.constructor === Object;

    /**
     * @method
     * @name module:util.is~checkers#string
     * @return {boolean}
     * @example
     * ```js
     * is('').string()                 // true
     * is(newString()).string()        // true
     * is('hello').string()            // true
     * is(new String('hola')).string() // true
     * ```
     */
    checkers.string = ()=> target === '' || !!target && target.constructor === String;

    /**
     * @method
     * @name module:util.is~checkers#array
     * @return {boolean}
     * @example
     * ```js
     * is([]).array()          // true
     * is(['hola']).array()    // true
     * is(new Array()).array() // true
     * ```
     */
    checkers.array = ()=> !!target && target.constructor === Array;

    /**
     * @method
     * @name module:util.is~checkers#number
     * @return {boolean}
     */
    checkers.number = ()=> !!target && target.constructor === Number;

    /**
     * @method
     * @name module:util.is~checkers#date
     * @return {boolean}
     */
    checkers.date = ()=> !!target && target.constructor === Date;

    /**
     * @method
     * @name module:util.is~checkers#regex
     * @return {boolean}
     */
    checkers.regex = ()=> !!target && target.constructor === RegExp;

    /**
     * @method
     * @name module:util.is~checkers#function
     * @return {boolean}
     */
    checkers.function = ()=> !!target && target.constructor === Function;

    /**
     * @method
     * @name module:util.is~checkers#null
     * @return {boolean}
     */
    checkers.null = ()=> target === null;

    /**
     * @method
     * @name module:util.is~checkers#undefined
     * @return {boolean}
     */
    checkers.undefined = ()=> target === undefined;

    checkers.arrayish = ()=> Array.isArray(target);

    checkers.objectish = ()=> typeof target == 'object';

    return checkers;
}

