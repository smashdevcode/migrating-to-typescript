
# Notes




## TODO



Setup slides



Setup jsconfig and tsconfig demo (i.e. project organization)

Setup JSDoc (for type refinement) demo

Setup d.ts (for type refinement) demo

Setup other demos
    Modules
    ???



Setup React book app with Node/Express backend
    Cover all of the migration examples in this one demo app
    Migrate the app and make notes along the way




Practice running things from the Surface

Play around with source maps

Include bit about updating webpack???
    Do this within the context of a React app???




Find an app or develop an app that I can convert in the talk???
  App from Treehouse React course?










## Migrating from JavaScript

https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html

### General Setup

Migrating to TS can be tedious, but usually not challenging

Separate your input files from your output files
  This will keep the compiler from overwriting your source files
  If you're already using a front end build process, you probably are already doing this

```
projectRoot
├── src
│   ├── file1.js
│   └── file2.js
├── built
└── tsconfig.json
```

Add a tsconfig.json file

```
{
    "compilerOptions": {
        "outDir": "./built",
        "allowJs": true,
        "target": "es5"
    },
    "include": [
        "./src/**/*"
    ]
}
```

### Early Benefits

* You can use ES6/ES7 features and have then down compile to ES5
* You'll now have autocompletion in VS Code (or VS 2017)
* You can also catch certain bugs with
 * `noImplicitReturns`
 * `noFallthroughCasesInSwitch`
* TypeScript will also warn about unreachable code and labels

### Integrating with Build Tools

gulp
webpack

Setting up webpack

`npm install awesome-typescript-loader source-map-loader`

webpack.config.js

```
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // Other options...
};
```

_Note: The TypeScript loader needs to run before any other loader that deals with .js files_

### Moving to TypeScript Files

Change .js to .ts or .jsx to .tsx

Even if there are errors the TS compiler will emit a .js file
  You can change this behavior by setting the `noEmitOnError` compiler option

`noImplicitAny` can be used to ferret out implicit `any`s

### Weeding Out Errors

Sometimes they'll be bugs in your code

Sometimes you'll need to make your intent clearer to the TS compiler

If you're using modules, you might get errors like `Cannot find name 'require'.` or `Cannot find name 'define'.`
  You can get TS to ignore these errors by declaring the missing functions
  `declare function require(path: string): any;`
  `declare function define(...args: any[]): any;`

#### Modules

But it's better to switch to using the TS syntax for modules

First, set the `module` compiler option
  "None", "CommonJS", "AMD", "System", "UMD", "ES6", or "ES2015"
  Only "AMD" and "System" can be used in conjunction with --outFile
  "ES6" and "ES2015" values may not be used when targeting "ES5" or lower

Node/CommonJS

```
var foo = require("foo");
foo.doStuff();
```

RequireJS/AMD

```
define(["foo"], function(foo) {
    foo.doStuff();
})
```

Then switch to...

```
import foo = require("foo");
foo.doStuff();
```

#### Getting Declaration Files

Once you convert to using TypeScript imports, you'll probably run into errors that TS can't find the modules for your libraries

Use NPM to install the missing types

```
npm install --save-dev @types/lodash
```

#### Exporting from Modules

Change...

```
module.exports.feedPets = function(pets) {
    // ...
}
```

To...

```
export function feedPets(pets) {
    // ...
}
```

Or...

```
function foo() {
    // ...
}
module.exports = foo;
```

To...

```
function foo() {
    // ...
}
export = foo;
```

### Too Many, Too Few Arguments

If you're using the `arguments` object, you'll need to define your function with overloads

### Sequentially Added Properties

TS will complain about adding properties to an empty object literal

```
var options = {};
options.color = "red";
options.volume = 11;
```

You can move the property declarations inside of the object literal itself

```
let options = {
    color: "red",
    volume: 11
};
```

You could also define an interface

```
interface Options { color: string; volume: number }

let options = {} as Options;
options.color = "red";
options.volume = 11;
```

### `any`, `Object`, and `{}`

Prefer `any` over `Object` and `{}`
Prefer `{}` over `Object`

### Getting Stricter Checks

No implicit any
Strict `null` and `undefined` checks
No implicit `any` for `this`


## Migrating From JavaScript

https://basarat.gitbooks.io/typescript/docs/types/migrating.html

In general the process consists of the following steps:

* Add a tsconfig.json
* Change your source code file extensions from .js to .ts. Start suppressing errors using any
* Write new code in TypeScript and make as little use of any as possible
* Go back to the old code and start adding type annotations and fix identified bugs
* Use ambient definitions for third party JavaScript code

### Third Party JS

In the beginning we recommend you create a vendor.d.ts (the .d.ts extension specifies the fact that this is a declaration file) and start adding dirty stuff to it

```
declare var $: any;
```

### Third Party Modules

Similar to global variable declaration you can declare a global module quite easily

```
declare module "jquery";
```

```
import * as $ from "jquery";
```

## Incrementally Migrating JavaScript to TypeScript

https://medium.com/@clayallsopp/incrementally-migrating-javascript-to-typescript-565020e49c88#.g3f5po8ny

TypeScript is an ES6 transpiler, type-checker, and module transformer. It can be used in place of Babel, Flow, and Browserify

### Migrating a 10,000-line legacy JavaScript codebase to TypeScript

http://www.pgbovine.net/migrating-legacy-codebase-to-typescript.htm

To silence most remaining errors, I either added any declarations for missing variables:

```
declare var initCodeopticon: any;
```

or as any type casts, like:

```
(ret as any).survey = surveyObj;
```

or by declaring the variables with any types:

```
var s: any = { mode: 'display' };
```

## TypeScript Practical Migration

https://app.pluralsight.com/library/courses/typescript-practical-migration/table-of-contents

### Introduction

Pretty good quick overview of TS and why you'd want to use it

### First Conversion

What to convert first?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

Don't commit generated JS to source control

Nominate TS free zones

Offer an escape hatch (throw out the TS and commit the generated JS to source control again)

Convert related tests once the target code has been converted

You can define an interface for constructor functions that you don't want to migrate to classes

```
interface MyInterface {
  new (param1: number, param2: string): MyInterface;
}
```

### Migration Toolbox and Workflow

Converting object literals to classes

Converting constructor functions to classes


