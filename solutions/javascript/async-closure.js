define(function () {
    return {
        asyncClosure: function() {
            var iTest = [];
            for (var i = 0; i < 5; i++) {
                (function(newI) {
                    setTimeout(function() {
                        iTest.push(newI);
                        if (newI == 4) {
                            $.publish('startAsyncClosureTest', [iTest]);
                        }
                    }, 1000);
                })(i);
            }
        },
    };
});
