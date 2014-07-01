require([
    // Add new tests here
    '../tests/javascript/reverse-words.js'
], function() {
    module('Testing Framework Tests', {
        setup: function() {

        },
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });
    test('Testing Framework', function() {
        ok( 1 == "1", "Testing framework correctly initialized" );
    });
});
