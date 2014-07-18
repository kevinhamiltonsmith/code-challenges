define(function () {
    return {
        checkBalanced: function(string) {
            var pairs = {
                    '(': ')',
                    '[': ']',
                    '{': '}'
                },
                opens = [];

            // Odd length strings have to be unbalanced
            if (string.length % 2 !== 0) {
                return false;
            }

            string = string.split('');
            for (var i = 0; i < string.length; i++) {
                if (pairs.hasOwnProperty(string[i])) {
                    opens.push(string[i]);
                } else if (string[i] === pairs[opens[opens.length - 1]]) {
                    opens.pop();
                }
            }
            return opens.length === 0 ? true : false;
        }
    };
});
