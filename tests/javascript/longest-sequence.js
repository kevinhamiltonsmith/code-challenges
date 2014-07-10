define([
    '../../solutions/javascript/longest-sequence.js'
],
function(longestSequence) {
    module('Longest Sequence of Non-Decreasing Cells', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = longestSequence.longestSequence(
        [[8,2,4],
         [0,7,1],
         [3,7,9]]
    );
    var test2 = longestSequence.longestSequence(
        [[8, 2, 4,  7,  8,10,25,94],
         [0, 7, 1,101,300, 2, 8,43],
         [2, 5, 7,  7,125, 3, 7, 9],
         [0,23,45,  2,  6,11, 3, 7]]
    ); // Correct solution starts at coordinate(1-5) with value of 2 > 3 > 3 > 7 > 7 > 8 > 10 > 25 > 43 > 94


    test('Largest Difference in Increasing Indexes', function() {
        equal(test1, 6, 'Finds the longest sequence for a simple grid');
        equal(test2, 10, 'Finds the longest sequence for a large grid');
    });
});
