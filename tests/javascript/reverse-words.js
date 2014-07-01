define([
    '../../solutions/javascript/reverse-words.js'
],
function(reverseWords) {
    module('Reverse Words Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var simple = reverseWords.reverseWord('This is a test!');
    var verbose = reverseWords.reverseWordVerbose('This is a test!');

    test('Reverse Words', function() {
        equal(simple, 'test! a is This', 'Function correctly reverses a simple string using native functions');

        equal(verbose, 'test! a is This', 'Function correctly reverses a string using non-native functions');
    });
});
