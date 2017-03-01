
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
 * Find all references
 * Renaming

## Creating a JS Project

* Move input files into a "client" folder
* Add `jsconfig.json` to the "client" folder to configure the TS compiler

```
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "../public"
  }
}
```

And to compile your JS project, run this command:

```
tsc -p client/jsconfig.json
```

Update the `package.json` file:

```
"scripts": {
  "prestart": "tsc -p client/jsconfig.json",
  "start": "node server/index.js"
}
```

### Early Benefits

* You can use ES6/ES7 features and have then down-compile to ES5
* You can also catch certain bugs with
 * `noImplicitReturns`
 * `noFallthroughCasesInSwitch`
* Warnings about unreachable code and labels

## Using JSDoc Comments to Refine Type Information

* JSDoc comments can be used to provide type information about parameters and return types

```
class Book {
  /**
   * @param {string} title - The title of the book.
   * @param {string} publisher - The publisher of the book.
   */
  constructor(title, publisher) {
    this.title = title;
    this.publisher = publisher;
    this.ratings = [];
  }

  /**
   * @param {string} username - The username for the rating.
   * @param {number} rating - The rating that the user is giving the book.
   * @param {string} comment - The comment that the user is giving the book.
   * @returns {Rating} Returns a Rating object.
   */
  addRating(username, rating, comment) {
    let ratingObj = new Rating(username, rating, comment);
    this.ratings.push(ratingObj);
    return ratingObj;
  }
}
```

### This Looks Pretty Good... Why Migrate?

* We can still make mistakes
* Leaving our code in JS files doesn't allow the compiler to report those errors

## Migrating to TypeScript

* Selectively converting JS files to TS
* Ability to add optional static typings
* Ability to define interfaces

Move the contents of the "server" folder into a "server/src" folder and add a `tsconfig.json` to the "server/src" folder

```
{
  "compilerOptions": {
    "target": "es6",
    "allowJs": true,
    "outDir": "../dist"
  }
}
```

And to compile your JS project, run this command:

```
tsc -p server/src/tsconfig.json
```

Update the `package.json` file:

```
"scripts": {
  "prestart": "tsc -p client/jsconfig.json && tsc -p server/src/tsconfig.json",
  "start": "node server/index.js"
}
```

And fix the path to the jQuery library in the server `index.js` file

```
app.get('/vendor/jquery.min.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../../node_modules', 'jquery', 'dist', 'jquery.min.js'));
});
```

### What to Convert First?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

## Using Interfaces to Refine Type Information

* d.ts files

`rating.d.ts`

```
declare class Rating {
  username: string;
  rating: number;
  comment: string;

  constructor(username: string, rating: number, comment: string);
}

export = Rating;
```

## Declaration Files

* Global and module "escape hatches"
* Downloading and installing declaration files

```
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "../public"
  },
  "typeAcquisition": {
    "include": [
      "jquery"
    ]
  }
}
```

```
npm install @types/node --save-dev
```

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





