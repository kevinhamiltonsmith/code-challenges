define(function () {
    return {
        spiralSort: function(array) {
            var len = array.length,
                bottomBound = len,
                col = 0,
                leftBound = 0,
                rightBound = len,
                row = 0,
                sorted = [],
                topBound = 0;

            for (var i = 0; i < len-i; i++) {
                while (col < rightBound) {
                    if (array[row][col]) {
                        sorted.push(array[row][col]);
                    }
                    col++;
                }
                col--;
                row++;
                while (row < bottomBound) {
                    sorted.push(array[row][col]);
                    row++;
                }
                col--;
                row--;
                bottomBound--;
                while (col >= leftBound) {
                    sorted.push(array[row][col]);
                    col--;
                }
                row--;
                col++;
                leftBound++;
                topBound++;
                while (row >= topBound) {
                    sorted.push(array[row][col]);
                    row--;
                }
                row++;
                col++;
                rightBound--;
            }
            return sorted;
        }
    };
});
