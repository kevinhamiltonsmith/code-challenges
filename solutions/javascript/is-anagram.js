define(function () {
    return {
        isAnagram: function(word1, word2) {
            var letterHash = {};

            // Preliminary checks to find simple cases
            if (word1.length !== word2.length) { return false; }
            if (word1 === word2) { return true; }

            word1 = word1.toLowerCase().split('');
            word2 = word2.toLowerCase().split('');

            // Build letter hash using first word, with counts at each letter
            for (var i = 0; i < word1.length; i++) {
                letterHash[word1[i]] = letterHash[word1[i]] ? letterHash[word1[i]] += 1 : 1;
            }

            // Loop over second word, testing at each letter hash location, decrimenting and deleting where applicable
            for (var j = 0; j < word2.length; j++) {
                if (letterHash[word2[j]] > 1) {
                    letterHash[word2[j]] -= 1;
                } else if (letterHash[word2[j]] === 1) {
                    delete letterHash[word2[j]];
                } else {
                    return false;
                }
            }

            // If second loop passes, it must be an anagram
            return true;
        },

        isAnagramSimple: function(word1, word2) {
            // Simple method using native javascript methods to sort and compare
            return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');
        }
    };
});
