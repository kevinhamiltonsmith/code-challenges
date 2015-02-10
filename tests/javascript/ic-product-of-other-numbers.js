define([
    '../../solutions/javascript/ic-product-of-other-numbers.js'
],
function(productsOfIntegers) {
    module('Return Products of all Integers Except at Index Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexBruteForce([1, 7, 3, 4]);
    var test2 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexBruteForce([5, 3, 0, 9]);

    var test3 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexLinear([3, 1, 2, 5, 6, 4]);
    var test4 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexLinear([10]);
    var test5 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexLinear([0, 0, 0]);

    var test6 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexDivision([3, 1, 2, 5, 6, 4]);
    var test7 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexDivision([134]);
    var test8 = productsOfIntegers.getProductsOfAllIntegersExceptAtIndexDivision([0, 2, 0]);

    test('Check For Maximum Profit', function() {
        deepEqual(test1, [84, 12, 28, 21], 'Correctly found the products of all integers not at current index using brute force');
        deepEqual(test2, [0, 0, 135, 0], 'Correctly found the products of all integers of array containing zeros');

        deepEqual(test3, [240, 720, 360, 144, 120, 180], 'Correctly found the products of all integers not at current index using linear time solution');
        deepEqual(test4, [1], 'Correctly handles arrays of only one element');
        deepEqual(test5, [0, 0, 0], 'Correctly handles arrays containing zeros');

        deepEqual(test6, [240, 720, 360, 144, 120, 180], 'Correctly found the products of all integers not at current index using linear division');
        deepEqual(test7, [1], 'Correctly handles arrays of only one element');
        deepEqual(test8, [0, 0, 0], 'Correctly handles arrays containing zeros');
    });
});