define(function () {
    return {
        spiralSort: function(array) {
            var len = array.length,
                bounds = {
                    xMin: 0,
                    yMin: 0,
                    xMax: len -1,
                    yMax: len -1
                },
                col = 0,
                row = 0,
                direction = 'right',
                sorted = [];

            for (var i = 0; i < len*len; i++) {
                if (array[row][col]) {
                    sorted.push(array[row][col]);
                }

                // Directional cases
                switch(direction) {
                    case 'right':
                        if (col == bounds.xMax) {
                            direction = 'down';
                            row++;
                            bounds.xMax--;
                            bounds.yMin++;
                        } else {
                            col++;
                        }
                        break;
                    case 'down':
                        if (row == bounds.yMax) {
                            direction = 'left';
                            col--;
                            bounds.yMax--;
                        } else {
                            row++;
                        }
                        break;
                    case 'left':
                        if (col == bounds.xMin) {
                            direction = 'up';
                            row--;
                            bounds.xMin++;
                        } else {
                            col--;
                        }
                        break;
                    case 'up':
                        if (row == bounds.yMin) {
                            direction = 'right';
                            col++;
                            bounds.yMin++;
                        } else {
                            row--;
                        }
                        break;
                }
            }
            return sorted;
        }
    };
});
