define([
    '../../solutions/javascript/ic-merging-ranges.js'
],
function(mergingRanges) {
    module('Find the times in a day when everyone is available - Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = mergingRanges.condense_meeting_times([[1, 3], [2, 4]]);
    var test2 = mergingRanges.condense_meeting_times([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]);
    var test3 = mergingRanges.condense_meeting_times([[0, 7], [8, 9], [1, 2], [1, 4], [1, 3], [2, 6]]);

    test('Show overlapping meeting times', function() {
        deepEqual(test1, [[1, 4]], 'Correct found condensed range for simple meeting times');
        deepEqual(test2, [[0, 1], [3, 8], [9, 12]], 'Correct found condensed range for tougher times');
        deepEqual(test3, [[0, 7], [8, 9]], 'Correct found condensed range for even harder meeting times');
    });
});