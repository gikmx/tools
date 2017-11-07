# [@gik/tools](http://gik.mx) *0.2.5*
> A [tools suite](https://github.com/search?q=tools+user%3Agikmx) for Node / Javascript development.

##### Contributors
- [Héctor Menéndez](mailto:hector@gik.mx) []()

##### Supported platforms
- darwin
- linux

#### <a name="table-of-contents"></a> Table of contents
- **[thrower](#thrower)** Errors with pretty stack and customizable name.
- **[streamer](#streamer)** An utility belt for our most common operations with RXJS's Observables.
  - **[fromAccess](#streamer.fromAccess)** `member` Determine if given path is accessible.
  - **[fromStat](#streamer.fromStat)** `member` Determine statistics about a file system node.
  - **[fromSpawn](#streamer.fromSpawn)** `member` Spawn a shell command.
  - **[fromDirMake](#streamer.fromDirMake)** `member` Creates a directory.
  - **[fromDirRequire](#streamer.fromDirRequire)** `member` Requires a directory path, if the directory does not exists, it's created.
  - **[fromDirRead](#streamer.fromDirRead)** `member` Get path of nodes in given directory (non recursively).
  - **[fromDirReadRecursive](#streamer.fromDirReadRecursive)** `member` Get path of nodes in given directory (recursively).
  - **[fromFileRead](#streamer.fromFileRead)** `member` Reads a file from the disk.
  - **[fromFileWrite](#streamer.fromFileWrite)** `member` Writes a file on the disk.
- **[server](#server)** A minimal webserver using [RxJS Observables](https://github.com/reactivex/rxjs).
- **[populator](#populator)** Allows properties in an object to inherit values from sibling properties.
- **[mapper](#mapper)** Generates a flattened object containing a map for all the properties
- **[logger](#logger)** A wrapper around [pino](http://getpino.io).
- **[checker](#checker)** A minimal type-checker for JavaScript purists.
  - **[is](#checker.is)** Determine if given value really belongs to the corresponding type.
    - **[objectEmpty](#checker.is.objectEmpty)** `member` Determine if an element is an object and has no keys
    - **[string](#checker.is.string)** `member` Determines if `value` is really a string.
    - **[number](#checker.is.number)** `member` Determines if `value` is really a number.
    - **[array](#checker.is.array)** `member` Determines if `value` is really an array.
    - **[function](#checker.is.function)** `member` Determines if `value` is really a function.
    - **[regexp](#checker.is.regexp)** `member` Determines if `value` is really a regexp.
    - **[boolean](#checker.is.boolean)** `member` Determines if `value` is really a boolean.
    - **[object](#checker.is.object)** `member` Determines if `value` is really an object.
  - **[props](#checker.props)** `function` Validates properties of given object.


# <a name="thrower"></a> thrower

Errors with pretty stack and customizable name.
> - [Standalone version](https://github.com/gikmx/tools-streamer).
> - [Report a Bug](https://github.com/gikmx/tools-streamer/issues).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a> | 
                <a href="#Array">Array</a> | 
                <a href="#Error">Error</a>
        </td>
        <td>The message or an Error instance to beautify.
When an array is sent, replace subject ALA printf. signature:<code>[subject, ...replacements]</code></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[name]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>An identifier for the error instance. <b>Default <code>'Error'</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[throws]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#boolean">boolean</a>
        </td>
        <td>If false, return error instance instead of throwing. <b>Default <code>true</code></b></td>
    </tr>
</table>


###### Returns
 [`Error`](#Error) <span style="font-weight:normal"> - A custom error instance with a pretty stack.</span>
###### Example 
```js
Thrower('test'); // A standard Error with prettified stack
Thrower(new TypeError('test2')); // Standard TypeError with prettified stack
Thrower('test3', 'TestError'); // Custom TestError with 'test3' as message
Thrower(['hola %s', 'mundo'], 'HelloError'); // HelloError with 'hola mundo' as message
const Err = Thrower('bad boy', 'CanineError', false); // Returns CanineError instance.
```

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="streamer"></a> streamer

An utility belt for our most common operations with RXJS's Observables.
> - [Standalone version](https://github.com/gikmx/tools-streamer).
> - [Report a Bug](https://github.com/gikmx/tools-streamer/issues).


###### To do
- [ ] Add unit tests for all operators.


###### Members

- [fromAccess](#streamer.fromAccess)
- [fromStat](#streamer.fromStat)
- [fromSpawn](#streamer.fromSpawn)
- [fromDirMake](#streamer.fromDirMake)
- [fromDirRequire](#streamer.fromDirRequire)
- [fromDirRead](#streamer.fromDirRead)
- [fromDirReadRecursive](#streamer.fromDirReadRecursive)
- [fromFileRead](#streamer.fromFileRead)
- [fromFileWrite](#streamer.fromFileWrite)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="streamer.fromAccess"></a> fromAccess
> static  property of [`streamer`](#streamer)


Determine if given path is accessible.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>A path to the node you want to check.</td>
    </tr>
</table>


###### Returns
 [`StreamBoolean`](#StreamBoolean) <span style="font-weight:normal"> - Wether the file is accessible or not.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromStat"></a> fromStat
> static  property of [`streamer`](#streamer)


Determine statistics about a file system node.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>A path to the node you want to check.</td>
    </tr>
</table>


###### Returns
 [`StreamStat`](#StreamStat) <span style="font-weight:normal"> - stat object for the node.</span>
###### Throws
- `Error` - When given an invalid node.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromSpawn"></a> fromSpawn
> static  property of [`streamer`](#streamer)


Spawn a shell command.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>command</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The command you wish to spawn.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>config</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>Configs sent to spawn command.</td>
    </tr>
</table>


###### Returns
 [`StreamOutput`](#StreamOutput) <span style="font-weight:normal"> - Each chunk of either stdout or stderr data.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirMake"></a> fromDirMake
> static  property of [`streamer`](#streamer)


Creates a directory.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The directory to be created.</td>
    </tr>
</table>


###### Returns
 [`StreamString`](#StreamString) <span style="font-weight:normal"> - The path of the directory that was just created.</span>
###### Throws
- `Error` - When directory cannot be created.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirRequire"></a> fromDirRequire
> static  property of [`streamer`](#streamer)


Requires a directory path, if the directory does not exists, it's created.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>dirpath</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`Array.<StreamString>`](#Array.<StreamString>) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirRead"></a> fromDirRead
> static  property of [`streamer`](#streamer)


Get path of nodes in given directory (non recursively).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`Array.<StreamDirNode>`](#Array.<StreamDirNode>) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromDirReadRecursive"></a> fromDirReadRecursive
> static  property of [`streamer`](#streamer)


Get path of nodes in given directory (recursively).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The requested directory.</td>
    </tr>
</table>


###### Returns
 [`StreamPath`](#StreamPath) <span style="font-weight:normal"> - The path of the directory.</span>
###### Throws
- `Error` - When requested path exists and is not a directory.


<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromFileRead"></a> fromFileRead
> static  property of [`streamer`](#streamer)


Reads a file from the disk.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The path to the file to read.</td>
    </tr>
</table>


###### Returns
 [`Observable.<string>`](#Observable.<string>) <span style="font-weight:normal"> - The contents of the file.</span>

<small>**[▲ Top](#streamer)**</small>

---

## <a name="streamer.fromFileWrite"></a> fromFileWrite
> static  property of [`streamer`](#streamer)


Writes a file on the disk.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>path</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The full path for the file.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>content</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The contents of the file.</td>
    </tr>
</table>


###### Returns
 [`Observable.<string>`](#Observable.<string>) <span style="font-weight:normal"> - The future value `true` if write was succesful.</span>
###### Throws
- `Error` - When the file cannot be written.


<small>**[▲ Top](#streamer)**</small>

---

# <a name="server"></a> server

A minimal webserver using [RxJS Observables](https://github.com/reactivex/rxjs).
> - [Standalone version](https://github.com/gikmx/tools-streamer).
> - [Report a Bug](https://github.com/gikmx/tools-streamer/issues).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>[config]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The configuration for the server.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.subscription]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#boolean">boolean</a>
        </td>
        <td>Should the server should be started right away. <b>Default <code>true</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.routes]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The location for the routes file. <b>Default <code>CWD/routes.json</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.handlers]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The location for the handlers folder. <b>Default <code>CWD/handlers</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.port]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The port to use when starting the server.
The <code>PORT</code> environment variable can also be used to set this. <b>Default <code>3333</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.host]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The host to use when starting the server.
The <code>HOST</code> environment variable can also be used to set this. <b>Default <code>0.0.0.0</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.handler404]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#function">function</a>
        </td>
        <td>The default handler for routes without handler.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.onNext]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#function">function</a>
        </td>
        <td>When subscription mode is enabled this is called
whenever the server inits or a request was handled.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[config.onError]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#function">function</a>
        </td>
        <td>When subscription mode is enabled this is called
whenever an error is thrown.</td>
    </tr>
</table>


###### Returns
 [`Subscription`](#Subscription) [`Observable`](#Observable) <span style="font-weight:normal"> - if subscription mode was enabled
a subscription would be returned, otherwise an observable is returned.</span>

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="populator"></a> populator

Allows properties in an object to inherit values from sibling properties.
This specially useful when creating JSON configuration files.
> - [Standalone version](https://github.com/gikmx/tools-streamer).
> - [Report a Bug](https://github.com/gikmx/tools-streamer/issues).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The object you need to be populated.</td>
    </tr>
</table>


###### Returns
 [`Object`](#Object) <span style="font-weight:normal"> - An object copy with references replaced.</span>
###### Example 
```js
const subject = {
    a: { b: { c: 'world' } },
    d: "hello ${a.b.c}${e}",
    e: "!!!",
    f: ["${e}", "${a.b.c}"]
};
const result = Populator(subject);
// result:
// { a: { b: { c: 'world' } }, d: "hello world!!!", e: "!!!", f: ["!!!", "world"] };
```

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="mapper"></a> mapper

Generates a flattened object containing a map for all the properties
available on `subject`.
> - [Standalone version](https://github.com/gikmx/tools-mapper).
> - [Report a Bug](https://github.com/gikmx/tools-mapper/issues).

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The object you want to map.</td>
    </tr>
</table>


###### Returns
 [`mapperResult`](#mapperResult) <span style="font-weight:normal"> - A flattened object.</span>
###### Throws
- `mapperTypeError`

###### Example 
```js
const subject = {
    a: {
        b: {
           d: true,
           e:  {
               g: 'foo'
           }
        },
        f: undefined,
    }
};
const result = Mapper(subject);
// result:
// { 'a.b.d': true, 'a.b.e.g': 'foo', 'a.f': undefined }
```

<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="logger"></a> logger

A wrapper around [pino](http://getpino.io).
> - [Standalone version](https://github.com/gikmx/tools-logger).
> - [Report a Bug](https://github.com/gikmx/tools-logger/issues).

###### Behaviour
- When the environment is *non-production* it will output prettier logs.

- All calls to `error` will use
  [@gik/tools-thrower](http://githib.com/gikmx/tools-thrower)
  halting the execution when the environment is *non-production* (ie: development)
  however, when in production, it will fallback to Pino's default logger.

- When the environment is set as *production* it will load
  [extreme-mode](http://getpino.io/#/docs/extreme)
  adding an even faster approach to logging. (make sure to read the documentation
  about the caveats)

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>cfg</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The default configuration applied for every environment.
<a href="http://getpino.io/#/docs/API?id=constructor">additional params</a></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[cfg.name]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The name for the returned logger instance.
By default, it will first try to determine the current process&#39; package
name, if that fails, then it will use the current process&#39; dirname.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[cfg.level]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>The level of debugging that should be used
supported levels are, check out <a href="#logger.Instance">logger.Instance</a> for more info.</p>
<p>you can also set the level using the LEVEL environment variable.
<code>~$ LEVEL=info node /path/to/your/file.js</code>. <b>Default <code>info</code></b></td>
    </tr>
</table>


###### Returns
 [`Types.Instance`](#Types.Instance) <span style="font-weight:normal"> - A function that you can use for logging.</span>
###### Throws
- `Types.ParamTypeError` - When parameters are not valid.


<small>**[▲ Top](#table-of-contents)**</small>

---

# <a name="checker"></a> checker

A minimal type-checker for JavaScript purists.
> - [Standalone version](https://github.com/gikmx/tools-checker).
> - [Report a Bug](https://github.com/gikmx/tools-checker/issues).


###### Members

- [is](#checker.is)
- [props](#checker.props)

<small>**[▲ Top](#table-of-contents)**</small>

---

## <a name="checker.is"></a> is

Determine if given value really belongs to the corresponding type.


###### Members

- [objectEmpty](#checker.is.objectEmpty)
- [string](#checker.is.string)
- [number](#checker.is.number)
- [array](#checker.is.array)
- [function](#checker.is.function)
- [regexp](#checker.is.regexp)
- [boolean](#checker.is.boolean)
- [object](#checker.is.object)

<small>**[▲ Top](#table-of-contents)**</small>

---

### <a name="checker.is.objectEmpty"></a> objectEmpty
> static  property of [`checker.is`](#checker.is)


Determine if an element is an object and has no keys

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Whether the object is empty or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.string"></a> string
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a string.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is string or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.number"></a> number
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a number.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is number or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.array"></a> array
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really an array.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is array or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.function"></a> function
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a function.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is function or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.regexp"></a> regexp
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a regexp.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is regexp or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.boolean"></a> boolean
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really a boolean.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is boolean or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

### <a name="checker.is.object"></a> object
> static  property of [`checker.is`](#checker.is)


Determines if `value` is really an object.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>value</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value you need to check.</td>
    </tr>
</table>


###### Returns
 [`boolean`](#boolean) <span style="font-weight:normal"> - Wheter `value` is object or not.</span>

<small>**[▲ Top](#checker.is)**</small>

---

## <a name="checker.props"></a> props
> static  method of [`checker`](#checker)


Validates properties of given object.

###### Parameters
<table>
    <tr>
        <td style="white-space: nowrap;">
            <code>subject</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>The object value whose properties will be inspected.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>defmap</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a>
        </td>
        <td>An definition object map, describing each of the prop&#39; types.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>defmap.prop</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#Object">Object</a> | 
                <a href="#string">string</a>
        </td>
        <td>The name of a corresponding subject&#39;s property.
If a string is used, it will be converted to: <code>{ type: &lt;string used&gt;, required:true }</code></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.type]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#string">string</a>
        </td>
        <td>Determines the type the prop should have,
all methods on <code>is()</code> are asupported. <b>Default <code>any</code></b></td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.required]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#bool">bool</a>
        </td>
        <td>Whether the prop can be omitted.</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.default]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#*">*</a>
        </td>
        <td>The value to use if prop is omitted
(cannot be used along <code>required</code>).</td>
    </tr><tr>
        <td style="white-space: nowrap;">
            <code>[defmap.map]</code>
        </td>
        <td style="white-space: nowrap;">
                <a href="#function">function</a>
        </td>
        <td>A function that will receive subject&#39;s
prop value and expects you to return acomputed value for it</td>
    </tr>
</table>


###### Returns
 [`Object`](#Object) <span style="font-weight:normal"> - The validated subject extended with default values (when applies).</span>
###### Throws
- `CheckerPropParamError` when invalid parameters are passed.
- `CheckerPropDefError` when a type definition is invalid.
- `CheckerPropDefTypeError` when a type defintiion is not supported.
- `CheckerPropReqError` when a required property is not found.
- `CheckerPropTypeError` when a property does not match the defintion.

###### Example 
```js
const subject = { a: 1, b: 'hello' z: undefined };
const result = props(subject, {
    a: { type:'number', required:true },
    b: 'string',
    c: { default: new Date() },
    d: { required: false, default: null, map: value => [value, true] },
})
// result:
// { a: 1, b: 'hello', c: '1981-06-23 10:06:08', d: [null, true], z: undefined }
```

<small>**[▲ Top](#checker)**</small>

---

