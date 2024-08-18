// Linked List

const { ListNode: Node } = require('../linked-list/list-node');

function Queue() {
    this.size = 0;
    this.front = null;
    this.rear = null;
}

// Enqueue - Add item to the end of the queue
// 5
// 5 - 6 (rear)
Queue.prototype.enqueue = function(val) {
    const node = new Node(val);
    if (this.size === 0) {
        this.front = node;
        this.rear = node;
    } else {
        this.rear.next = node;
        this.rear = node;
    }
    this.size += 1;
    return this.size;
}

// Dequeue - Remove item from the front
// 5 - 6
// 5
Queue.prototype.dequeue = function() {
    if (this.size === 0) {
        return null;
    }

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    if (this.size === 1) {
        this.rear = null;
    }

    this.size -= 1;
    return temp;
}

// isEmpty
Queue.prototype.isEmpty = function() {
    return this.size === 0;
}

// Peek - Return the front element
Queue.prototype.peek = function() {
    return this.front ? this.front.value : null;
}

module.exports = Queue;