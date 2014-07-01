define([
    '../../solutions/javascript/who-likes-it.js'
],
function(whoLikesIt) {
    module('Who Likes It Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = whoLikesIt.whoLikesIt([]);
    var test2 = whoLikesIt.whoLikesIt(['Peter']);
    var test3 = whoLikesIt.whoLikesIt(['Jacob', 'Alex']);
    var test4 = whoLikesIt.whoLikesIt(['Max', 'John', 'Mark']);
    var test5 = whoLikesIt.whoLikesIt(['Alex', 'Jacob', 'Mark', 'Max']);

    test('Reverse Words', function() {
        equal(test1, 'no one likes this', 'Correctly handles cases where input array is empty');
        equal(test2, 'Peter likes this', 'Correctly handles cases with a single user');
        equal(test3, 'Jacob and Alex like this', 'Correctly handles cases with 2 users');
        equal(test4, 'Max, John and Mark like this', 'Correctly handles cases with 3 users');
        equal(test5, 'Alex, Jacob and 2 others like this', 'Correctly handles cases with more than 3 users');
    });
});