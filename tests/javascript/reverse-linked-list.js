define([
    '../../solutions/javascript/reverse-linked-list.js'
],
function(linkedList) {
    var thisList;

    module('Reverse Linked List Tests', {
        teardown: function() {
            document.getElementById('qunit-fixture').innerHTML = '';
        }
    });

    // Reset the linked list before each test group
    QUnit.testStart(function() {
        thisList = linkedList.makeLinkedList();
    });

    test('Build a Linked List with the add method', function() {
        thisList.add('ace of spades');
        equal(thisList.length, 1, 'Correctly calculates the length of the new list');
        equal(thisList.tail.value, 'ace of spades', 'Adds a single value to the end of the list');
        equal(thisList.head.value, 'ace of spades', 'Creates the head of the list');

        thisList.add('king of diamonds');
        equal(thisList.length, 2, 'Adds a second value to the list, and gives correct length');
        equal(thisList.tail.value, 'king of diamonds', 'Adds a second value to end the list');
        equal(thisList.head.value, 'ace of spades', 'Head of the list remains unchanged');
    });

    test('Build a Linked List with the prepend method', function() {
        thisList.prepend('queen of clubs');
        equal(thisList.length, 1, 'Correctly calculates the length of the new list');
        equal(thisList.head.value, 'queen of clubs', 'Adds a single value to the start of the list');
        equal(thisList.tail.value, 'queen of clubs', 'Creates the tail of the list');

        thisList.prepend('jack of hearts');
        equal(thisList.length, 2, 'Correctly calculates the length of the new list');
        equal(thisList.head.value, 'jack of hearts', 'Adds a single value to the start of the list');
        equal(thisList.tail.value, 'queen of clubs', 'Tail of the list remains unchanged');
    });

    test('Find if an item is in the list using the contains method', function() {
        thisList.add('deuce of clubs');
        thisList.add('three of clubs');
        thisList.add('four of clubs');

        var test1 = thisList.contains('deuce of clubs');
        var test2 = thisList.contains('four of hearts');
        equal(test1, true, 'Correctly returs true for a value that is in the list');
        equal(test2, false, 'Correctly returns false for an item not in the list');
    });

    test('Remove an item from the list using the remove method', function() {
        thisList.add('deuce of spades');
        thisList.add('three of spades');
        thisList.add('four of spades');
        thisList.add('five of spades');
        thisList.add('six of spades');

        thisList.remove('three of spades');
        equal(thisList.contains('three of spades'), false, 'Item has been successfully removed from the middle of the list');

        thisList.remove('ace of clubs');
        equal(thisList.length, 4, 'Item not in the list does not change the list at all');

        thisList.remove('deuce of spades');
        equal(thisList.contains('deuce of spades'), false, 'Item is removed from the head of the list');
        equal(thisList.head.value, 'four of spades', 'Head of the list is now the second item');

        thisList.remove('six of spades');
        equal(thisList.contains('six of spades'), false, 'Item is removed from the tail of the list');
        equal(thisList.tail.value, 'five of spades', 'Tail of the list is the previous second-to-last item');

        thisList.remove('four of spades');
        thisList.remove('five of spades');
        equal(thisList.length, 0, 'All items have been removed from the list');
        equal(thisList.head, null, 'Head is a null pointer for an empty list');
        equal(thisList.tail, null, 'Tail is a null pointer for an empty list');
    });

    test('Reverse method reverses the order of all nodes in the list', function() {
        thisList.add('deuce of diamonds');
        thisList.add('three of diamonds');
        thisList.add('four of diamonds');
        thisList.add('five of diamonds');
        thisList.add('six of diamonds');

        thisList.reverse();
        equal(thisList.tail.value, 'deuce of diamonds', 'Tail of the list is the old head');
        equal(thisList.head.value, 'six of diamonds', 'Head of the list is the old tail');
        equal(thisList.contains('deuce of diamonds'), true, 'Contains method can still find the tail of the new list');
    });
});