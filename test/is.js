'use strict';

const tape = require('tape');
const is   = require('../lib/is');

tape('is.object()', t => {
    const case1 = is().object();
    const case2 = is({}).object();
    const case3 = is(new Object()).object();
    const case4 = is(new String()).object();
    t.equals(case1 , false , 'should return false when no target sent');
    t.equals(case2 , true  , 'should return true when sent {}');
    t.equals(case3 , true  , 'should return true when sent new Object()');
    t.equals(case4 , false , 'should return false with different kinds of objects');
    t.end();
});

tape('is.string()', t => {
    const case1 = is().string();
    const case2 = is('').string();
    const case3 = is(new String()).string();
    const case4 = is(new String('hola')).string();
    const case5 = is('hola').string();
    const case6 = is(new Number(1)).string();
    const case7 = is({}).string();
    t.equals(case1 , false , 'should return false when no target sent');
    t.equals(case2 , true  , 'should return true when empty string');
    t.equals(case3 , true  , 'should return true when empty string instance');
    t.equals(case4 , true  , 'should return true when string instance');
    t.equals(case5 , true  , 'should return true when normal string');
    t.equals(case6 , false , 'should return false when different type of instance');
    t.equals(case7 , false , 'should return false when different type')
    t.end()
});

tape('is.array()', t => {
    const case1 = is().array();
    const case2 = is([]).array();
    const case3 = is(['hola']).array();
    const case4 = is(new Array()).array();
    const case5 = is(new Array(4)).array();
    const case6 = is(new Object()).array();
    t.equals(case1 , false , 'should return false when no target sent');
    t.equals(case2 , true  , 'should return true when empty array');
    t.equals(case3 , true  , 'should return true when non empty array');
    t.equals(case4 , true  , 'should return true when empty array instance');
    t.equals(case5 , true  , 'should return true when non empty array instance');
    t.equals(case6 , false , 'should return false when different type');
    t.end();
});

tape('is.number()', t => {
    const case1 = is().number();
    const case2 = is(-1).number();
    const case3 = is(0xFF).number();
    const case4 = is(0.5).number();
    const case5 = is(123e5).number();
    const case6 = is(NaN).number();
    const case7 = is(Infinity).number();
    const case8 = is('89').number();
    const case9 = is('089').number();
    const case0 = is(new Number(9)).number();
    const caseA = is(new Number()).number();
    t.equals(case1 , false , 'should return false when no target sent');
    t.equals(case2 , true  , 'should return true when negative number');
    t.equals(case3 , true  , 'should return true when hexadecimal number');
    t.equals(case4 , true  , 'should return true when decimal number');
    t.equals(case5 , true  , 'should return true when scientific big number');
    t.equals(case6 , false , 'should return false when NaN');
    t.equals(case7 , true  , 'should return true when Infinity');
    t.equals(case8 , false , 'should return false when string with number');
    t.equals(case9 , false , 'should return false when string with leading zero');
    t.equals(case0 , true  , 'should return true when number instance');
    t.equals(caseA , true  , 'should return true when empty number instace');
    t.end();
});

