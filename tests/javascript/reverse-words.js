require([
    '../solutions/reverse-words.js'
], function(reverseWords) {
    var simple = reverseWords.reverseWord('This is a test!');

    test('Reverse Words', function() {
        equal(simple, 'test! a is This', 'Function correctly reversed a simple string');
    });
});
