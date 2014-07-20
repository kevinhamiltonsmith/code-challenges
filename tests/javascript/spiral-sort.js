define([
    '../../solutions/javascript/spiral-sort.js'
],
function(spiralSort) {
    module('Spiral Sort Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = spiralSort.spiralSort([[1,2,3],[4,5,6],[7,8,9]]);
    var test2 = spiralSort.spiralSort([[1,2,3,4],[6,6,7,5],[7,9,8,6],[8,9,8,7]]);
    var test3 = spiralSort.spiralSort([[]]);

    test('Spiral Sort an Array', function() {
        deepEqual(test1, [1,2,3,6,9,8,7,4,5], 'Correctly sorts a 3x3 array');
        deepEqual(test2, [1,2,3,4,5,6,7,8,9,8,7,6,6,7,8,9], 'Correctly sorts a 4x4 array');
        deepEqual(test3, [], 'Handles empty nested arrays');
    });
});
