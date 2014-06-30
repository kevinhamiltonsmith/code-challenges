var reverseWords = require(['reverse-words']);
console.log('inside the test!', reverseWords);

QUnit.test('reverseWords test', function(assert) {
    assert.ok( 1 == "1", "Passed!" );
});