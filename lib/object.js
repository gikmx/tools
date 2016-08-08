'use strict';

const Merge = require('lodash.merge');
const is    = require('./is');

/**
 * Given a target, operate using {@link module:util.object~actions|actions}
 * @alias module:util.object
 * @param {object} target - The object used as target/source.
 * @return {module:util.object~actions}
 */
module.exports = target => {

    if (!is(target).object()) throw FelizError.type({
        name: 'feliz.util:object',
        type: 'Object',
        data: !target? target : target.constructor.name
    });

    /**
     * @class
     * @name module:util.object~actions
     * @classdesc Available actions for the target object.
     */
    const object = {};

    /**
     * Recursively merge reference(s) with target.
     * @method
     * @name module:util.object~actions#merge
     * @param {...object} reference - Objects to be merged with target.
     * @return {object} The resulting object.
     */
    object.merge = function(){
        const args = Array.prototype.slice.call(arguments);
        args.unshift(target);
        args.unshift({});
        return Merge.apply(null, args);
    }

    return object;
};
