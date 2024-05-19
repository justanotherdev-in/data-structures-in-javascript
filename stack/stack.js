// Linked List
// Pop / Push (add, remove) at one end in stack
// Linked List 

const { LinkedList } = require('../linked-list/linked-list');

function Stack() {
    this.stack = new LinkedList();
}

// Stack is empty -- isEmpty
// Find element at top -- peek
// Push -- push
// Pop --- pop

Stack.prototype.isEmpty = function() {
    return this.stack.size === 0;
}

// Push and Pop at the same end
// Linked List - we can access the first index in constant time 
// Push 1 ---> 1
// Push 2 ---> 2 --- 1
// Push 3 ---> 3 --- 2 --- 1
Stack.prototype.push = function(value) {
    this.stack.addAtIndex(0, value);
    // console.log(this.stack);
}

// Stack ---> 3 --- 2 --- 1
// Pop ---> 2 --- 1
// Pop ---> 1
Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null;
    }

    const node = this.stack.deleteAtIndex(0);
    return node.value;
}

Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        return null;
    }

    const node = this.stack.getNodeAtIndex(0);
    return node.value;
}

exports.Stack = Stack;