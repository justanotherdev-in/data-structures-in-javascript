const { Stack } = require("./stack");

const stack = new Stack();

stack.push(1);
console.log(stack.peek())
stack.push(2);
console.log(stack.peek())
stack.push(3);
console.log(stack.peek())
console.log(stack.pop());
console.log(stack.peek());