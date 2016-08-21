[![Build Status](https://travis-ci.org/gikmx/feliz.util.svg?branch=master)](https://travis-ci.org/gikmx/feliz.util)
[![Coverage Status](https://coveralls.io/repos/github/gikmx/feliz.util/badge.svg?branch=master)](https://coveralls.io/github/gikmx/feliz.util?branch=master)
[![npm](https://img.shields.io/npm/dt/feliz.util.svg?maxAge=2592000)]()

# feliz.util
Various utilities ready to use for any project, but if you use
[feliz.js](http://github.com/gikmx/feliz) you'll be extra happy.

## API Documentation (WIP)

* [util](#module_util)
    * [.is(target)](#module_util.is) ⇒ <code>[checkers](#module_util.is..checkers)</code>
        * [~checkers](#module_util.is..checkers)
            * [.object()](#module_util.is..checkers+object) ⇒ <code>boolean</code>
            * [.string()](#module_util.is..checkers+string) ⇒ <code>boolean</code>
            * [.array()](#module_util.is..checkers+array) ⇒ <code>boolean</code>
            * [.number()](#module_util.is..checkers+number) ⇒ <code>boolean</code>
            * [.date()](#module_util.is..checkers+date) ⇒ <code>boolean</code>
            * [.regex()](#module_util.is..checkers+regex) ⇒ <code>boolean</code>
            * [.function()](#module_util.is..checkers+function) ⇒ <code>boolean</code>
            * [.null()](#module_util.is..checkers+null) ⇒ <code>boolean</code>
            * [.undefined()](#module_util.is..checkers+undefined) ⇒ <code>boolean</code>
            * [.arrayish()](#module_util.is..checkers+arrayish) ⇒ <code>boolean</code>
            * [.objectish()](#module_util.is..checkers+objectish) ⇒ <code>boolean</code>
            * [.feliz()](#module_util.is..checkers+feliz) ⇒ <code>boolean</code>
    * [.object(target)](#module_util.object) ⇒ <code>[actions](#module_util.object..actions)</code>
        * [~actions](#module_util.object..actions)
            * [.merge(...reference)](#module_util.object..actions+merge) ⇒ <code>object</code>
    * [.string(target)](#module_util.string) ⇒ <code>[actions](#module_util.string..actions)</code>
        * [~actions](#module_util.string..actions)
            * [.template(context)](#module_util.string..actions+template)

<a name="module_util.is"></a>

### util.is(target) ⇒ <code>[checkers](#module_util.is..checkers)</code>
Type checker for feliz.util

**Kind**: static method of <code>[util](#module_util)</code>  
**Returns**: <code>[checkers](#module_util.is..checkers)</code> - Functions that will validate the target.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>mixed</code> | The target value to be checked. |

**Example**  
```js
const is = require('feliz.util/is');
const str = 'hello world';
if (is(str).string()) console.log(str); // will log 'hello world'
```

* [.is(target)](#module_util.is) ⇒ <code>[checkers](#module_util.is..checkers)</code>
    * [~checkers](#module_util.is..checkers)
        * [.object()](#module_util.is..checkers+object) ⇒ <code>boolean</code>
        * [.string()](#module_util.is..checkers+string) ⇒ <code>boolean</code>
        * [.array()](#module_util.is..checkers+array) ⇒ <code>boolean</code>
        * [.number()](#module_util.is..checkers+number) ⇒ <code>boolean</code>
        * [.date()](#module_util.is..checkers+date) ⇒ <code>boolean</code>
        * [.regex()](#module_util.is..checkers+regex) ⇒ <code>boolean</code>
        * [.function()](#module_util.is..checkers+function) ⇒ <code>boolean</code>
        * [.null()](#module_util.is..checkers+null) ⇒ <code>boolean</code>
        * [.undefined()](#module_util.is..checkers+undefined) ⇒ <code>boolean</code>
        * [.arrayish()](#module_util.is..checkers+arrayish) ⇒ <code>boolean</code>
        * [.objectish()](#module_util.is..checkers+objectish) ⇒ <code>boolean</code>
        * [.feliz()](#module_util.is..checkers+feliz) ⇒ <code>boolean</code>

<a name="module_util.is..checkers"></a>

#### is~checkers
Available type-checkers for given target.

**Kind**: inner class of <code>[is](#module_util.is)</code>  

* [~checkers](#module_util.is..checkers)
    * [.object()](#module_util.is..checkers+object) ⇒ <code>boolean</code>
    * [.string()](#module_util.is..checkers+string) ⇒ <code>boolean</code>
    * [.array()](#module_util.is..checkers+array) ⇒ <code>boolean</code>
    * [.number()](#module_util.is..checkers+number) ⇒ <code>boolean</code>
    * [.date()](#module_util.is..checkers+date) ⇒ <code>boolean</code>
    * [.regex()](#module_util.is..checkers+regex) ⇒ <code>boolean</code>
    * [.function()](#module_util.is..checkers+function) ⇒ <code>boolean</code>
    * [.null()](#module_util.is..checkers+null) ⇒ <code>boolean</code>
    * [.undefined()](#module_util.is..checkers+undefined) ⇒ <code>boolean</code>
    * [.arrayish()](#module_util.is..checkers+arrayish) ⇒ <code>boolean</code>
    * [.objectish()](#module_util.is..checkers+objectish) ⇒ <code>boolean</code>
    * [.feliz()](#module_util.is..checkers+feliz) ⇒ <code>boolean</code>

<a name="module_util.is..checkers+object"></a>

##### checkers.object() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
**Example**  
```js
is({}).object()           // true
is(new Object()).object() // true
is(new String()).object() // true
```
<a name="module_util.is..checkers+string"></a>

##### checkers.string() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
**Example**  
```js
is('').string()                 // true
is(newString()).string()        // true
is('hello').string()            // true
is(new String('hola')).string() // true
```
<a name="module_util.is..checkers+array"></a>

##### checkers.array() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
**Example**  
```js
is([]).array()          // true
is(['hola']).array()    // true
is(new Array()).array() // true
```
<a name="module_util.is..checkers+number"></a>

##### checkers.number() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+date"></a>

##### checkers.date() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+regex"></a>

##### checkers.regex() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+function"></a>

##### checkers.function() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+null"></a>

##### checkers.null() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+undefined"></a>

##### checkers.undefined() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.is..checkers+arrayish"></a>

##### checkers.arrayish() ⇒ <code>boolean</code>
An array, but not strictly an array.

**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
**Example**  
```js
const ex1 = [];
const ex2 = new Array();
const ex3 = new (class Test extends Array {});
const is = require('feliz.util/is');
// prints: true true false
console.log(is(ex1).array(), is(ex2).array(), is(ex3).array())
// prints: true true true
console.log(is(ex1).arrayish(), is(ex2).arrayish(), is(ex3).arrayish())
```
<a name="module_util.is..checkers+objectish"></a>

##### checkers.objectish() ⇒ <code>boolean</code>
An object, but not strictly an object.

**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
**Example**  
```js
const ex1 = {};
const ex2 = new Object();
const ex3 = new (class Test extends Object {});
const is = require('feliz.util/is');
// prints: true true false
console.log(is(ex1).object(), is(ex2).object(), is(ex3).object())
// prints: true true true
console.log(is(ex1).objectish(), is(ex2).objectish(), is(ex3).objectish())
```
<a name="module_util.is..checkers+feliz"></a>

##### checkers.feliz() ⇒ <code>boolean</code>
A feliz instance.

**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  
<a name="module_util.object"></a>

### util.object(target) ⇒ <code>[actions](#module_util.object..actions)</code>
Given a target, operate using [actions](#module_util.object..actions)

**Kind**: static method of <code>[util](#module_util)</code>  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>object</code> | The object used as target/source. |


* [.object(target)](#module_util.object) ⇒ <code>[actions](#module_util.object..actions)</code>
    * [~actions](#module_util.object..actions)
        * [.merge(...reference)](#module_util.object..actions+merge) ⇒ <code>object</code>

<a name="module_util.object..actions"></a>

#### object~actions
Available actions for the target object.

**Kind**: inner class of <code>[object](#module_util.object)</code>  
<a name="module_util.object..actions+merge"></a>

##### actions.merge(...reference) ⇒ <code>object</code>
Recursively merge reference(s) with target.

**Kind**: instance method of <code>[actions](#module_util.object..actions)</code>  
**Returns**: <code>object</code> - The resulting object.  

| Param | Type | Description |
| --- | --- | --- |
| ...reference | <code>object</code> | Objects to be merged with target. |

<a name="module_util.string"></a>

### util.string(target) ⇒ <code>[actions](#module_util.string..actions)</code>
String utilities for feliz.util

**Kind**: static method of <code>[util](#module_util)</code>  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>string</code> | The string to target. |

**Example**  
```js
const str = require('feliz.util/string');
const ops = str('hello world');
// returns object with actions for target string
```

* [.string(target)](#module_util.string) ⇒ <code>[actions](#module_util.string..actions)</code>
    * [~actions](#module_util.string..actions)
        * [.template(context)](#module_util.string..actions+template)

<a name="module_util.string..actions"></a>

#### string~actions
Actions to be applied to given string target.

**Kind**: inner class of <code>[string](#module_util.string)</code>  
<a name="module_util.string..actions+template"></a>

##### actions.template(context)
Allows given string to be converted according to a context.

**Kind**: instance method of <code>[actions](#module_util.string..actions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>object</code> | The object defining the context to resolve. |

**Example**  
```js
const str = require('feliz.util/string');
const foo = str('Hello ${name}').template({name:'Bar'}); // Hello Bar
```

## License
The MIT License (MIT)

Copyright (c) 2016 Héctor Adán Menéndez Rivera

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
