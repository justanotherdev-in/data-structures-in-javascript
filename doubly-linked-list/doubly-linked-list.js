const DoublyListNode = require("./doubly-list-node");

function DoublyLinkedList() {
    this.size = 0;
    this.head = new DoublyListNode(0);
    this.tail = new DoublyListNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head; // head ==== tail
}

// Add at index
DoublyLinkedList.prototype.addAtIndex = function(index, value) {
    const { size } = this;
    if (index < 0 || index > size) {
        return;
    }

    let prev = this.head;
    let next = this.tail;

    if (index < size - index) {
        while (index) {
            prev = prev.next;
            index--;
        }
        next = prev.next;
    } else {
        while(size - index) {
            next = next.prev;
            index++;
        }
        prev = next.prev;
    }

    const newNode = new DoublyListNode(value);
    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode;
    this.size++;
}

DoublyLinkedList.prototype.addAtHead = function(value) {
    return this.addAtIndex(0, value);
}

DoublyLinkedList.prototype.getAtIndex = function(index) {
    const { size } = this;
    if (index < 0 || index >= size) {
        return null;
    }

    if (index < size - index) {
        let node = this.head;
        while (index >= 0) {
            node = node.next;
            index--;
        }
        return node;
    } else {
        let node = this.tail;
        while(size - index) {
            node = node.prev;
            index++;
        }
        return node;
    }
}

DoublyLinkedList.prototype.deleteAtIndex = function(index) {
    const { size } = this;
    if (index < 0 || index >= size) {
        return null;
    }

    let nodeToDelete = this.head;
    if (index < size - index) {
        while (index >= 0) {
            nodeToDelete = nodeToDelete.next;
            index--;
        }
    } else {
        nodeToDelete = this.tail;
        while(size - index) {
            nodeToDelete = nodeToDelete.prev;
            index++;
        }
    }
    console.log('NODE TO DELETE>>', nodeToDelete);
    const prevNode = nodeToDelete.prev;
    const nextNode = nodeToDelete.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    nodeToDelete.prev = null;
    nodeToDelete.next = null;
    this.size--;
}

module.exports = DoublyLinkedList


// ind 0, size 3, size - index = 3 
// ind 3, size 3, size - index = 0
// ind 1, size 3, size - index = 2
// ind 2, size 3, size - index = 1
// head ==== 3 ==== 4 === 5 === tail