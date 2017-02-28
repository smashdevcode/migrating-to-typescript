
# Presentation

## Overview

### Current State of Affairs

* Application with a code base that has organically grown over months or years
* Code is relatively clean but the team is afraid to make anything than a minor change
* If you're not careful JavaScript can become a "write-only" language

### What We Need

* Better tooling support to prevent simple mistakes
* Improved code discoverability and navigation
* Support ability to refactor
* Leverage newer JS features

### Possible Solutions

* Unit testing
* Integration testing
* Static typing

### TypeScript

* Superset of JavaScript
* Optional static typing
* Features from the future

### Incremental Migration

* Not an "all or nothing" proposition
* Migrate as you want to or have time

## Demos

### TypeScript Language Service

* "Salsa"
* Now the same in VS Code and VS "Proper"

### Immediate Benefits

* Show how the language service immediately adds value
* JS in same file is discovered

### Creating a Project

* Move input files into "src" folder
* Add jsconfig.json or tsconfig.json to discover JS in other files  
* Downlevel compilation

### Early Benefits

* You can use ES6/ES7 features and have then down compile to ES5
* You'll now have autocompletion in VS Code (or VS 2017)
* You can also catch certain bugs with
 * `noImplicitReturns`
 * `noFallthroughCasesInSwitch`
* TypeScript will also warn about unreachable code and labels

### Refining Type Information - Part 1

* JSDoc comments

### Why Migrate?

* We can still make mistakes
* Leaving our code in JS files doesn't allow the compiler to report those errors

### Migrating to TS

* Selectively converting JS files to TS
* Ability to add optional types
* Ability to define interfaces

### What to Convert First?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

### Refining Type Information - Part 2

* d.ts files

### Weeding Out Errors

#### Module imports and exports

#### Declaration Files

* Global and module "escape hatches"
* Downloading and installing declaration files

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

## Wrap Up

### Naysayers

* Nominate TS free zones
* Offer an escape hatch (throw out the TS and commit the generated JS to source control again)

### Resources

### Thanks!
