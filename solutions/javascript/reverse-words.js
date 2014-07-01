define(function () {
    return {
        reverseWord: function(string) {
            return string.split(' ').reverse().join(' ');
        },

        reverseWordVerbose: function(string) {
            var rev = string.split(' '),
                i = 0,
                j = rev.length - 1;

            while (i < j) {
              var temp = rev[i];
              rev[i] = rev[j];
              rev[j] = temp;
              i++;
              j--;
            }
            return rev.join(' ');
        }
    };
});
