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

    test('Build a Linked List with the add method', function() {
        thisList1 = linkedList.makeLinkedList();
        thisList1.add('ace of spades');
        equal(thisList1.length, 1, 'Correctly calculates the length of the new list');
        equal(thisList1.tail.value, 'ace of spades', 'Adds a single value to the end of the list');
        equal(thisList1.head.value, 'ace of spades', 'Creates the head of the list');

        thisList1.add('king of diamonds');
        equal(thisList1.length, 2, 'Adds a second value to the list, and gives correct length');
        equal(thisList1.tail.value, 'king of diamonds', 'Adds a second value to end the list');
        equal(thisList1.head.value, 'ace of spades', 'Head of the list remains unchanged');
    });

    test('Build a Linked List with the prepend method', function() {
        thisList2 = linkedList.makeLinkedList();
        thisList2.prepend('queen of clubs');
        equal(thisList2.length, 1, 'Correctly calculates the length of the new list');
        equal(thisList2.head.value, 'queen of clubs', 'Adds a single value to the start of the list');
        equal(thisList2.tail.value, 'queen of clubs', 'Creates the tail of the list');

        thisList2.prepend('jack of hearts');
        equal(thisList2.length, 2, 'Correctly calculates the length of the new list');
        equal(thisList2.head.value, 'jack of hearts', 'Adds a single value to the start of the list');
        equal(thisList2.tail.value, 'queen of clubs', 'Tail of the list remains unchanged');
    });

    test('Find if an item is in the list using the contains method', function() {
        thisList3 = linkedList.makeLinkedList();
        thisList3.add('deuce of clubs');
        thisList3.add('three of clubs');
        thisList3.add('four of clubs');

        var test1 = thisList3.contains('deuce of clubs');
        var test2 = thisList3.contains('four of hearts');
        equal(test1, true, 'Correctly returs true for a value that is in the list');
        equal(test2, false, 'Correctly returns false for an item not in the list');
    });

    test('Remove an item from the list using the remove method', function() {
        thisList4 = linkedList.makeLinkedList();
        thisList4.add('deuce of spades');
        thisList4.add('three of spades');
        thisList4.add('four of spades');
        thisList4.add('five of spades');
        thisList4.add('six of spades');

        thisList4.remove('three of spades');
        equal(thisList4.contains('three of spades'), false, 'Item has been successfully removed from the middle of the list');

        thisList4.remove('ace of clubs');
        equal(thisList4.length, 4, 'Item not in the list does not change the list at all');

        thisList4.remove('deuce of spades');
        equal(thisList4.contains('deuce of spades'), false, 'Item is removed from the head of the list');
        equal(thisList4.head.value, 'four of spades', 'Head of the list is now the second item');

        thisList4.remove('six of spades');
        equal(thisList4.contains('six of spades'), false, 'Item is removed from the tail of the list');
        equal(thisList4.tail.value, 'five of spades', 'Tail of the list is the previous second-to-last item');

        thisList4.remove('four of spades');
        thisList4.remove('five of spades');
        equal(thisList4.length, 0, 'All items have been removed from the list');
        equal(thisList4.head, null, 'Head is a null pointer for an empty list');
        equal(thisList4.tail, null, 'Tail is a null pointer for an empty list');
    });

    test('Reverse method reverses the order of all nodes in the list', function() {
        thisList5 = linkedList.makeLinkedList();
        thisList5.add('deuce of diamonds');
        thisList5.add('three of diamonds');
        thisList5.add('four of diamonds');
        thisList5.add('five of diamonds');
        thisList5.add('six of diamonds');

        thisList5.reverse();
        equal(thisList5.tail.value, 'deuce of diamonds', 'Tail of the list is the old head');
        equal(thisList5.head.value, 'six of diamonds', 'Head of the list is the old tail');
        equal(thisList5.contains('deuce of diamonds'), true, 'Contains method can still find the tail of the new list');
    });
});