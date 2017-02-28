
# Demo

## What We'll Cover

* Project Overview
* Default Development Experience in Visual Studio Code
* Creating a JS Project
* Using JSDoc Comments to Refine Type Information
* Migrating to TypeScript
* Using Interfaces to Refine Type Information
* Declaration Files

## Project Overview

* Express API that returns a list of books
* Front end app calls the API and appends the books to the DOM using jQuery

## Default Development Experience in Visual Studio Code

### TypeScript Language Service

* Also known as "Salsa"
* Now the same in VS Code and VS "Proper"

### Immediate Benefits

* JS in same project is automatically discovered
* The language service immediately adds value
 * Autocompletion
 * Browse or peek definition
 * Renaming

## Creating a JS Project

* Move input files into "src" folder
* Add jsconfig.json to configure the TS compiler

### Early Benefits

* You can use ES6/ES7 features and have then down-compile to ES5
* You can also catch certain bugs with
 * `noImplicitReturns`
 * `noFallthroughCasesInSwitch`
* Warnings about unreachable code and labels

## Using JSDoc Comments to Refine Type Information

* JSDoc comments can be used to provide type information about parameters and return types

### This Looks Pretty Good... Why Migrate?

* We can still make mistakes
* Leaving our code in JS files doesn't allow the compiler to report those errors

## Migrating to TypeScript

* Selectively converting JS files to TS
* Ability to add optional static typings
* Ability to define interfaces

### What to Convert First?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

## Using Interfaces to Refine Type Information

* d.ts files

## Declaration Files

* Global and module "escape hatches"
* Downloading and installing declaration files








### Weeding Out Errors

#### Module imports and exports

#### Arguments Object

* Function overloads

```
function sum() {
  let values = [];

  if (arguments.length === 2 && Array.isArray(arguments[1])) {
    values = values.concat(arguments[1]);
  } else {
    let argumentsArray = Array.prototype.slice.call(arguments);
    values = values.concat(argumentsArray.slice(1));
  }

  let result = values.reduce((acc, val) => {
    return acc + val;
  }, 0);

  arguments[0](result);
}

sum((x) => console.log(x));
sum((x) => console.log(x), 1, 2, 3, 4);
sum((x) => console.log(x), [1, 2, 3, 4]);
```

#### Sequentially Added Properties

#### Constructor Functions

* Not allowing implicit `any` on `this`

### Stricter Checks





