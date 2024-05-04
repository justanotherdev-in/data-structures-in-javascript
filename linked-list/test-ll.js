const { LinkedList } = require("./linked-list");

const ll = new LinkedList();

ll.addAtIndex(0, 15)
ll.addAtIndex(0, 10)
ll.addAtIndex(0, 5) // sentinal ---> 5 ---> 10 ---> 15
console.log(JSON.stringify(ll.head));
console.log(ll.getNodeAtIndex(2));
ll.deleteAtIndex(2);
console.log(JSON.stringify(ll.head));