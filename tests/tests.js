require([
    // Add new tests here
    '../tests/javascript/async-closure.js',
    '../tests/javascript/check-balanced-parentheses.js',
    '../tests/javascript/ic-highest-product-of-3.js',
    '../tests/javascript/ic-merging-ranges.js',
    '../tests/javascript/ic-product-of-other-numbers.js',
    '../tests/javascript/ic-stock-price.js',
    '../tests/javascript/is-anagram.js',
    '../tests/javascript/largest-difference-increasing.js',
    '../tests/javascript/longest-sequence.js',
    '../tests/javascript/reverse-linked-list.js',
    '../tests/javascript/reverse-words.js',
    '../tests/javascript/spiral-sort.js',
    '../tests/javascript/sum-strings.js',
    '../tests/javascript/who-likes-it.js'
], function() {
    module('Testing Framework Tests', {
        setup: function() {

        },
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });
    test('Testing Framework', function() {
        ok( 1 == "1", "Testing framework correctly initialized" );
    });
});
