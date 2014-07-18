define([
    '../../solutions/javascript/check-balanced-parentheses.js'
],
function(checkBalanced) {
    module('Check if Parentheses are Balanced', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = checkBalanced.checkBalanced('([{}])');
    var test2 = checkBalanced.checkBalanced('([]{}()');
    var test3 = checkBalanced.checkBalanced('({(([{[[]]}]))})');
    var test4 = checkBalanced.checkBalanced('(){}[(])');
    var test5 = checkBalanced.checkBalanced('((((([]){})){{[]}}))');

    test('Check Balanced Parentheses', function() {
        equal(test1, true, 'Checks a simple string for each parentheses type');
        equal(test2, false, 'Immediately returns false for odd string lengths');
        equal(test3, true, 'Checks a more complex string');
        equal(test4, false, 'Each open parentheses must be closed in the correct nested order');
        equal(test5, true, 'Can handle more complex nesting');
    });
});
