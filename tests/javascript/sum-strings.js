define([
    '../../solutions/javascript/sum-strings.js'
],
function(sumStrings) {
    module('Sum Strings', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = sumStrings.sumStrings('1', '2');
    var test2 = sumStrings.sumStrings('', '5');
    var test3 = sumStrings.sumStrings('290', '150');
    var test4 = sumStrings.sumStrings('25009', '2');
    var test5 = sumStrings.sumStrings('800', '9567');
    var test6 = sumStrings.sumStrings('712569312664357328695151392', '8100824045303269669937');
    var test7 = sumStrings.sumStrings('00103', '08567');

    test('Sum of all types of strings', function() {
        equal(test1, '3', 'Finds the solution of 1 + 2');
        equal(test2, '5', 'Should be able to handle empty strings');
        equal(test3, '440', 'Should be able to handle larger numbers');
        equal(test4, '25011', 'Should be able to handle one large number and one small number');
        equal(test5, '10367', 'Should be able to handle a small first number and a large second number');
        equal(test6, '712577413488402631964821329', 'Should be able to handle very large numbers');
        equal(test7, '8670', 'Should be able to handle leading zeros');
    });
});
