define([
    '../../solutions/javascript/async-closure.js'
],
function(asyncClosure) {
    module('Async Closure Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    asyncTest('Check if the closure is correctly handled', function() {
        asyncClosure.asyncClosure();
        
        $.subscribe('startAsyncClosureTest', function(sub, iTest) {
            deepEqual(iTest, [0,1,2,3,4], 'Immediately detects differences in word lengths');
            start();
        });
    });
});
