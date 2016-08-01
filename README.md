[![Build Status](https://travis-ci.org/gikmx/feliz.util.svg?branch=master)](https://travis-ci.org/gikmx/feliz.util)
[![Coverage Status](https://coveralls.io/repos/github/gikmx/feliz.util/badge.svg?branch=master)](https://coveralls.io/github/gikmx/feliz.util?branch=master)
[![npm](https://img.shields.io/npm/dt/feliz.util.svg?maxAge=2592000)]()

# feliz.util
Various utilities ready to use for any project, but if you use
[feliz.js](http://github.com/gikmx/feliz) you'll be extra happy.

## API Documentation (WIP)

-

<a name="module_util.is"></a>

## util.is(target) ⇒ <code>[checkers](#module_util.is..checkers)</code>
Type checker for feliz.util

**Kind**: static method of <code>[util](#module_util)</code>  
**Returns**: <code>[checkers](#module_util.is..checkers)</code> - Functions that will validate the target.  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>mixed</code> | The target value to be checked. |


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


-

<a name="module_util.is..checkers"></a>

### is~checkers
Available type-checkers for target.

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


-

<a name="module_util.is..checkers+object"></a>

#### checkers.object() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+string"></a>

#### checkers.string() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+array"></a>

#### checkers.array() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+number"></a>

#### checkers.number() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+date"></a>

#### checkers.date() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+regex"></a>

#### checkers.regex() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+function"></a>

#### checkers.function() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+null"></a>

#### checkers.null() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.is..checkers+undefined"></a>

#### checkers.undefined() ⇒ <code>boolean</code>
**Kind**: instance method of <code>[checkers](#module_util.is..checkers)</code>  

-

<a name="module_util.object"></a>

## util.object(target) ⇒ <code>[actions](#module_util.object..actions)</code>
Given a target, operate using [actions](#module_util.object..actions)

**Kind**: static method of <code>[util](#module_util)</code>  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>object</code> | The object used as target/source. |


* [.object(target)](#module_util.object) ⇒ <code>[actions](#module_util.object..actions)</code>
    * [~actions](#module_util.object..actions)
        * [.merge(...reference)](#module_util.object..actions+merge) ⇒ <code>object</code>


-

<a name="module_util.object..actions"></a>

### object~actions
Available actions for the target object.

**Kind**: inner class of <code>[object](#module_util.object)</code>  

-

<a name="module_util.object..actions+merge"></a>

#### actions.merge(...reference) ⇒ <code>object</code>
Recursively merge reference(s) with target.

**Kind**: instance method of <code>[actions](#module_util.object..actions)</code>  
**Returns**: <code>object</code> - The resulting object.  

| Param | Type | Description |
| --- | --- | --- |
| ...reference | <code>object</code> | Objects to be merged with target. |


-


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