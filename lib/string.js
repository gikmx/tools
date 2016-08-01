'use strict';

const is = require('./is');

module.exports = target => {

    if (!is(target).string()) throw FelizError.type({
        name: 'feliz.util:string',
        type: 'String',
        data: !target? target : target.constructor.name
    });
    const string = {};

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
