const DoublyLinkedList = require("./doubly-linked-list");

const dll = new DoublyLinkedList();

dll.addAtHead(4);
dll.addAtHead(5);
dll.addAtHead(6); // 6  --> 5 ---> 4
// console.log(dll.head.next);
dll.addAtIndex(1, 12); // 6 === 12 === 5 === 4
// console.log(dll.head.next);
dll.deleteAtIndex(2);
// console.log(dll.head.next);
console.log(dll.getAtIndex(1).value);