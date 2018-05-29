# ECMAScript
[![Build Status](https://travis-ci.org/exercism/ecmascript.svg?branch=master)](https://travis-ci.org/exercism/ecmascript)
[![Join the chat at https://gitter.im/exercism/xecmascript](https://badges.gitter.im/exercism/xecmascript.svg)](https://gitter.im/exercism/xecmascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Exercism exercises in ECMAScript 6



## Running the Unit Test Suite

[Node.js](https://nodejs.org) must be installed. Follow these [instructions](http://exercism.io/languages/ecmascript/installation) for installing nodejs.
We recommend using the latest LTS version.

Use `npm` to install all required dependencies:

    npm install

#### Linting Your Code
This project uses [eslint](https://github.com/eslint/eslint) to help you write quality
ECMAScript code by checking for common formatting errors, enforcing style rules,
and suggesting changes that conform to best practices.

    npm run lint-test

#### Test All Assignments
The make script will test all exercises:

    make test
    
Note: `make test` is recommended BEFORE submitting a PR.  It will test your submission, and help guard against unintentional, unrelated changes.
#### Test Specific Assignment
Pass the exercise name to make script to run the tests for a specific exercise:

    make test-assignment ASSIGNMENT=hello-world
    
## Contributing Guide
For an in-depth discussion of how exercism language tracks and exercises work, please see [CONTRIBUTING.md](https://github.com/exercism/ecmascript/blob/master/CONTRIBUTING.md)
