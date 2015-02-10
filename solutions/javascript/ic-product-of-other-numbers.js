define(function () {
    return {
        getProductsOfAllIntegersExceptAtIndexBruteForce: function(array) {
            // Brute force solution using O(n^2) runtime (loop within a loop)
            var productArray = [];

            for (var i = 0; i < array.length; i++) {
                var tempProduct = 1;

                for (var j = 0; j < array.length; j++) {
                    if (i !== j) {
                        tempProduct *= array[j];
                    }
                }
                productArray.push(tempProduct);
            }
            return productArray;
        },

        getProductsOfAllIntegersExceptAtIndexLinear: function(array) {
            // Greedy solution using O(n) runtime, without using division
            var productAfter = 1,
                productBefore = 1,
                //Array with all values of 1, of the same length as the input array
                resultArray = Array.apply(null, new Array(array.length)).map(Number.prototype.valueOf,1);

            for (var i = 0; i < array.length; i++) {
                // Find product of all integers before the current index.
                // Multiply this by what is currently stored in the results array.
                resultArray[i] *= productBefore;
                productBefore *= array[i];

                // Find product of all integers after each index, walking down from the end of the array.
                // Multiply this value by what is currently stored in the results array.
                resultArray[array.length - i - 1] *= productAfter;
                productAfter *= array[array.length - i - 1];
            }
            return resultArray;
        },

        getProductsOfAllIntegersExceptAtIndexDivision: function(array) {
            // Easier, division solution using O(n) runtime
            var resultArray = [],
                totalProduct = array.reduce(function(a, b) {
                    return a * b;
                }),
                currentInteger;

            for (var i = 0; i < array.length; i++) {
                currentInteger = array[i];

                if (currentInteger === 0) {
                    resultArray.push(0);
                } else {
                    resultArray.push(totalProduct / currentInteger);
                }
            }
            return resultArray;
        }
    };
});
