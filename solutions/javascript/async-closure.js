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
                    }, 100);
                })(i);
            }
        },

        asyncClosureBind: function() {
            var iTest2 = [];
            for (var i = 0; i < 5; i++) {
                setTimeout(function(newI) {
                    iTest2.push(newI);
                    if (newI == 4) {
                        $.publish('startAsyncClosureTest2', [iTest2]);
                    }
                }.bind(this, i), 100);
            }
        }
    };
});
