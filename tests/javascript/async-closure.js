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
            deepEqual(iTest, [0,1,2,3,4], 'Correctly outputs array using anonymous closure function');
            start();
        });
    });

    asyncTest('Check if the closure is correctly handled with bind approach', function() {
        asyncClosure.asyncClosureBind();

        $.subscribe('startAsyncClosureTest2', function(sub, iTest2) {
            deepEqual(iTest2, [0,1,2,3,4], 'Correctly outputs array using bind method');
            start();
        });
    });
});
