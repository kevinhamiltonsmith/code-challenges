define(function () {
    return {
        makeLinkedList: function() {
            var linkedList = {};

            linkedList.length = 0;
            linkedList.head = null;
            linkedList.tail = null;

            linkedList.add = function(value) {
                var node = this.makeNode(value);

                if (this.head === null) {
                    this.head = node;
                } else {
                    this.tail.next = node;
                }
                this.tail = node;
                this.length += 1;
            };

            linkedList.prepend = function(value) {
                var node = this.makeNode(value);

                if (this.tail === null) {
                    this.tail = node;
                } else {
                    node.next = this.head;
                }
                this.head = node;
                this.length += 1;
            };

            linkedList.remove = function(value) {
                var self = this;

                var removeNode = function(currentNode, previousNode) {
                    if (self.head.value === currentNode.value) {
                        self.head = currentNode.next ? currentNode.next : null;
                    }
                    if (self.tail.value === currentNode.value) {
                        self.tail = previousNode ? previousNode : null;
                    }
                    if (previousNode) {
                        previousNode.next = currentNode.next;
                    }
                    self.length -= 1;
                };

                return self.iterate(value, removeNode, false);
            };

            linkedList.reverse = function() {
                var currentNode = this.head,
                    previousNode = null;

                while(currentNode) {
                    tempNode = currentNode.next;

                    if (tempNode === null) {
                        this.head = currentNode;
                        currentNode.next = previousNode ? previousNode : currentNode;
                        return this;
                    }

                    if (previousNode) {
                        currentNode.next = previousNode;
                    } else {
                        this.tail = currentNode;
                        currentNode.next = null;
                    }
                    previousNode = currentNode;
                    currentNode = tempNode;
                }

                return this;
            };

            linkedList.contains = function(value) {
                return this.iterate(value, false, true);
            };

            // Helper Functions
            linkedList.makeNode = function(value) {
                var node = {
                    value: value,
                    next: null
                };
                return node;
            };
            linkedList.iterate = function(value, iterator, returnBoolean) {
                var currentNode = this.head,
                    previousNode = null;

                while(currentNode) {
                    if (currentNode.value === value) {
                        if (iterator) { iterator(currentNode, previousNode); }
                        return returnBoolean ? true : currentNode;
                    } else {
                        previousNode = currentNode;
                        currentNode = currentNode.next;
                    }
                }
                return false;
            };

            return linkedList;
        }
    };
});
