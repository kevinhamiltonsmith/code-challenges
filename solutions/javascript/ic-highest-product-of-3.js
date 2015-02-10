define(function () {
    return {
        highestProductSorting: function(array) {
            // Sorting solution, which will be O(n log n) runtime.
            // Fails for negative numbers currently

            // Sort the array highest to lowest by numerical value
            array.sort(function(a,b) {
                if (a < b) {
                    return 1;
                }
                if ( a >b ) {
                    return -1;
                }
                return 0;
            });

            return array[0] * array[1] * array[2];
        },

        highestProduct: function(array) {
            // Greedy solution, which will be O(n) runtime.

            // Throw error when input array is too small
            if (array.length < 3) {
                return 'Input array must have at least 3 values!';
            }

            var highestProductOf3 = 0;

            // Set initial values for highest and lowest product of 2 numbers
            var highestProductOf2 = array[0] * array[1],
                lowestProductOf2 = array[0] * array[1];

            // Set initial values for highest and lowest numbers
            var highestNumber = Math.max(array[0], array[1]),
                lowestNumber = Math.min(array[0], array[1]);

            // Loop over the remaining values in the array (starting at the 3rd value),
            // finding the highest and lowest numbers, product of 2, and product of 3 as we go.
            for (var i = 2; i < array.length; i++) {
                var thisNum = array[i];

                // Test if this index gives us a new highestProductOf3
                highestProductOf3 = Math.max(highestProductOf2 * thisNum, lowestProductOf2 * thisNum, highestProductOf3);

                // Test if this index gives us a new highestProductOf2 or lowestProductOf2
                highestProductOf2 = Math.max(highestNumber * thisNum, lowestNumber * thisNum, highestProductOf2);
                lowestProductOf2 = Math.min(highestNumber * thisNum, lowestNumber * thisNum, lowestProductOf2);

                // Test if this index is the new highest or lowest number
                highestNumber = Math.max(thisNum, highestNumber);
                lowestNumber = Math.min(thisNum, lowestNumber);
            }

            return highestProductOf3;
        }
    };
});
