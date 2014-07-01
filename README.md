# Code Challenges
Various algorithm and code problems, for both fun and interview preparation.

## Get started
```sh
npm install # Install project dependencies
grunt test  # Run QUnint tests from the command line
```

## Add a New Challenge
To add a new code challenge to this repo, first define the challenge in the problems folder. Create a new sub-folder with the challenge name, then add a descriptive README to that folder.

For the solution, add it to the solutions folder, under the correct language sub-folder.
All solutions should follow the [definition module pattern](http://requirejs.org/docs/api.html#define) using require.js.
For testing purposes, it is best to return a method containing your solution function.
```javascript
define(function () {
    return {
        mySolutionMethod: function(args) {
            // solution goes here
            return somthing;
        }
    };
});
```

## Testing
JS unit testing is done with QUnit.

To add a new unit test for your challenge solution, add a new js file to the tests folder, under the correct language subfolder.
New unit tests should require the solution file, following this pattern:
```javascript
require([
    '../solutions/javascript/my-solution-file.js'
], function(mySolution) {
    var testOutput = mySolution.mySolutionMethod('input');

    test('My Solution', function() {
        equal(testOutput, 'input, 'Function correctly does something with mySolution');
    });
});
```
New unit tests should then be included in the require array of tests/tests.js.

To use the QUnit in-browser UI, open tests/tests.html in your browser.
Unit tests can also be run in a headless state (using PhantomJS) from the command line:
```sh
grunt test  # Run QUnint tests from the command line
```

## Credits
Inspiration from Blake Embry: https://github.com/blakeembrey/code-problems
