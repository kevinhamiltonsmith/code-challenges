define(function () {
    return {
        largestDifference: function(data) {
            var diff = 0;

            for (var i = 0; i < data.length; i++) {
                for (var j = i + 1; j < data.length; j++) {
                    if (data[i] <= data[j] && (j-i) > diff) {
                        diff = j - i;
                    }
                }
            }
            return diff;
        }
    };
});
