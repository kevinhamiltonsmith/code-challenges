# Async Closure

Alter the function below to perform as expected, with each console statement printing i as it increments from 0 to 4. Currently, the function logs the number 5, five times.

Not working function:
```javascript
var delayedConsole = function() {
    var iTest = [];
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
            iTest.push(i);
        }, 1000);
    }
};
delayedConsole();
```
