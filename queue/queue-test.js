const Queue = require('./queue');

const q = new Queue();
console.log(q.size);
q.enqueue(5);
console.log(q.peek());
q.enqueue(6)
console.log(q.peek());
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.isEmpty())
