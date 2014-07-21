define([
    '../../solutions/javascript/is-anagram.js'
],
function(isAnagram) {
    module('Is Anagram Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    var test1 = isAnagram.isAnagram('house', 'computer');
    var test2 = isAnagram.isAnagram('house', 'mouse');
    var test3 = isAnagram.isAnagram('aaaaccde', 'aaaaccdd');
    var test4 = isAnagram.isAnagram('plane', 'panel');
    var test5 = isAnagram.isAnagram('abcdefghijklmmmm', 'abcdefghijklmmmm');
    var test6 = isAnagram.isAnagram('aabbccddeeffgg', 'ggffeeddccbbaa');
    var test7 = isAnagram.isAnagram('pLaNe', 'panel');

    test('Check if two words are anagrams', function() {
        equal(test1, false, 'Immediately detects differences in word lengths');
        equal(test2, false, 'Detects differences in letters of words of the same length');
        equal(test3, false, 'Can handle words with multiple same letters');
        equal(test4, true, 'Can detect simple anagrams');
        equal(test5, true, 'Immediately detects if the words are the same');
        equal(test6, true, 'Can detect more complex anagrams');
        equal(test7, true, 'Can handle upper and lowercase letters');
    });

    var test8 = isAnagram.isAnagramSimple('house', 'computer');
    var test9 = isAnagram.isAnagramSimple('house', 'mouse');
    var test10 = isAnagram.isAnagramSimple('aaaaccde', 'aaaaccdd');
    var test11 = isAnagram.isAnagramSimple('plane', 'panel');
    var test12 = isAnagram.isAnagramSimple('abcdefghijklmmmm', 'abcdefghijklmmmm');
    var test13 = isAnagram.isAnagramSimple('aabbccddeeffgg', 'ggffeeddccbbaa');
    var test14 = isAnagram.isAnagramSimple('pLaNe', 'panel');

    test('Simple Algorithm - check if two words are anagrams', function() {
        equal(test8, false, 'Immediately detects differences in word lengths');
        equal(test9, false, 'Detects differences in letters of words of the same length');
        equal(test10, false, 'Can handle words with multiple same letters');
        equal(test11, true, 'Can detect simple anagrams');
        equal(test12, true, 'Immediately detects if the words are the same');
        equal(test13, true, 'Can detect more complex anagrams');
        equal(test14, true, 'Can handle upper and lowercase letters');
    });
});
