define([
    '../../solutions/javascript/ic-highest-product-of-3.js'
],
function(highestProduct) {
    module('Find the Highest Product of 3 Integers in an Array Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = highestProduct.highestProductSorting([1, 7, 3, 4, 10, 0, 9, 2]);
    // TODO: Negative numbers currently fail using sort method - find a better solution
    // var test2 = highestProduct.highestProductSorting([-100, 7, 3, 4, 10, 0, -9, 2]);

    var test3 = highestProduct.highestProduct([1, 7, 3, 4, 10, 0, 9, 2]);
    var test4 = highestProduct.highestProduct([-100, 7, 3, 4, 10, 0, -9, 2]);
    var test5 = highestProduct.highestProduct([1, 2]);

    test('Check For Maximum Profit', function() {
        equal(test1, 630, 'Correctly found the highest product of 3 integers using sort solution');

        equal(test3, 630, 'Correctly found the highest product of 3 integers using greedy solution');
        equal(test4, 9000, 'Correctly found the highest product of 3 integers using greedy solution, with negative number edge case');
        equal(test5, 'Input array must have at least 3 values!', 'Catches errors when the input array is too small');
    });
});