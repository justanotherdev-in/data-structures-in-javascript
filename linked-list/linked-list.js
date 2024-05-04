// list node ---> elements/items

const { ListNode } = require("./list-node");

// { value: 4, next: null }

// initialize --> head, size

// Insert/Add at particular index, begin, end
// Delete at a particular index, begin, end
// Get the value of node at a particular index


function LinkedList() {
    this.head = new ListNode(0);
    this.size = 0;
}

LinkedList.prototype.addAtIndex = function(index, value) {
    if (index < 0 || index > this.size) {
        return null;
    }

    let pre = this.head;
    let i = 0;
    while (i < index) {
        pre = pre.next;
        i++;
    }

    const currRef = pre.next;
    const newNode = new ListNode(value);
    pre.next = newNode;
    newNode.next = currRef;
    this.size += 1;
}

LinkedList.prototype.addAtStart = function(value) {
    return this.addAtIndex(0, value);
}

LinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return null;
    }

    let pre = this.head;
    let i = 0;
    while (i < index) {
        pre = pre.next;
        i++;
    }

    pre.next = pre.next.next;
    this.size -= 1;
}

LinkedList.prototype.getNodeAtIndex = function(index) {
    if (index < 0 || index > this.size) {
        return null;
    }

    let pre = this.head;
    let i = 0;
    while (i <= index) {
        pre = pre.next;
        i++;
    }

    return pre.value;
}

exports.LinkedList = LinkedList
/// sentinal ---> 1 ---> 2 -----> 3
/// sentinal ---> 1 --> 5 --> 2 -----> 3