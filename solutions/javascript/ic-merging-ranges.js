define(function () {
    return {
        condense_meeting_times: function(array) {
            var result = [],
                sortedArray = [],
                merge,
                mergeSort,
                prevEnd,
                prevStart;

            // Sort meeting times by start time using merge sort
            merge = function(left, right) {
                var result = [];

                while (left.length || right.length) {
                    if (left.length && right.length) {
                        if (left[0][0] < right[0][0]) {
                            result.push(left.shift());
                        } else if (left[0][0] === right[0][0]) {
                            // Sort ties by end time value
                            if (left[0][1] < right[0][1]) {
                                result.push(left.shift());
                            } else {
                                result.push(right.shift());
                            }
                        } else {
                            result.push(right.shift());
                        }
                    } else if (left.length) {
                        result.push(left.shift());
                    } else if (right.length) {
                        result.push(right.shift());
                    }
                }

                return result;
            };
            mergeSort = function(arr) {
                var middle = Math.floor(arr.length / 2),
                    left = arr.slice(0, middle),
                    right = arr.slice(middle);

                if (arr.length < 2) {
                    return arr;
                }

                return merge(mergeSort(left), mergeSort(right));
            };
            sortedArray = mergeSort(array);

            // Store start and end values for the first meeting time
            prevStart = sortedArray[0][0];
            prevEnd = sortedArray[0][1];

            // Iterate over all meetings, starting at the second meeting
            for (var i = 1; i < sortedArray.length; i++) {
                // check if current meeting starts before prev meeting ends
                if (sortedArray[i][0] <= prevEnd) {
                    // take the later of the end of the previous meeting or the end of the current meeting
                    prevEnd = Math.max(prevEnd, sortedArray[i][1]);
                } else {
                    // add previous meeting to final array
                    result.push([prevStart, prevEnd]);
                    // set new previous values
                    prevStart = sortedArray[i][0];
                    prevEnd = sortedArray[i][1];
                }
            }

            // add final previous meeting to the result
            result.push([prevStart, prevEnd]);

            return result;
        }
    };
});
