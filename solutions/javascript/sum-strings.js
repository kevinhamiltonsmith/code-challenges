define(function () {
    return {
        sumStrings: function(a, b) {
            var carry = 0,
                longestArr = 0,
                shortestArr = 0,
                sum = [];

            a = a ? a.split('') : ['0'];
            b = b ? b.split('') : ['0'];

            // Make each array match in terms of length. Add 0's to the front of shorter numbers
            if (a.length < b.length) {
                longestArr = b.length;
                shortestArr = a.length;
                for (var i = 0; i < longestArr - shortestArr; i++) {
                    a.unshift('0');
                }
            } else if (a.length > b.length) {
                longestArr = a.length;
                shortestArr = b.length;
                for (var j = 0; j < longestArr - shortestArr; j++) {
                    b.unshift('0');
                }
            }

            // Iterate over each array from the end, while adding values at each index
            for (var k = a.length - 1; k >= 0; k--) {
                var tempSum = carry ? carry : 0;
                carry = 0;

                tempSum += parseInt(a[k], 10) + parseInt(b[k], 10);

                if (tempSum > 9) {
                    carry = 1;
                    tempSum -= 10;
                }

                sum.unshift(tempSum);
            }
            if (carry) {
                sum.unshift('1');
            }

            return sum.join('').replace(/^0+/, '').toString();
        }
    };
});
