'use strict';

/**
 * Type checker for feliz.util
 * @alias module:util.is
 * @param {mixed} target - The target value to be checked.
 * @return {module:util.is~checkers} Functions that will validate the target.
 */
module.export = function(target){

    /**
     * @class
     * @name module:util.is~checkers
     * @classdesc Available type-checkers for target.
     */
    const checkers = {};

    /**
     * @method
     * @name module:util.is~checkers#object
     * @return {boolean}
     */
    checkers.object = ()=> target && target.constructor === Object;

    /**
     * @method
     * @name module:util.is~checkers#string
     * @return {boolean}
     */
    checkers.string = ()=> target && target.constructor === String;

    /**
     * @method
     * @name module:util.is~checkers#array
     * @return {boolean}
     */
    checkers.array = ()=> target && target.constructor === Array;

    /**
     * @method
     * @name module:util.is~checkers#number
     * @return {boolean}
     */
    checkers.number = ()=> target && target.constructor === Number;

    /**
     * @method
     * @name module:util.is~checkers#date
     * @return {boolean}
     */
    checkers.date = ()=> target && target.constructor === Date;

    /**
     * @method
     * @name module:util.is~checkers#regex
     * @return {boolean}
     */
    checkers.regex = ()=> target && target.constructor === RegExp;

    /**
     * @method
     * @name module:util.is~checkers#function
     * @return {boolean}
     */
    checkers.function = ()=> target && target.constructor === Function;

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

    return checkers;
}

