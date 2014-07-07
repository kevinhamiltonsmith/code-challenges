define([
    '../../solutions/javascript/largest-difference-increasing.js'
],
function(largestDifference) {
    module('Largest Difference Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    // Test cases from Codewars.com
    var test1 = largestDifference.largestDifference([9,4,1,10,3,4,0,-1,-2]);
    var test2 = largestDifference.largestDifference([3,2,1]);
    var test3 = largestDifference.largestDifference([4,3,3,1,5,2]);
    var test4 = largestDifference.largestDifference([78, 88, 64, 94, 17, 91, 57, 69, 38, 62, 13, 17, 35, 15, 20 ]);

    test('Largest Difference in Increasing Indexes', function() {
        equal(test1, 4, 'Finds the largest difference between indexes for a simple array');
        equal(test2, 0, 'Returns 0 for arrays that do not contain increasing numbers');
        equal(test3, 4, 'Correctly finds a solution for another test array');
        equal(test4, 10, 'Correctly finds a solution for a larger test array');
    });
});
