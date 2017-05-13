let Stack = require("../../../lesson1/src/stacks_queues/stack");

/*
 This should be a queue implemented with 2 internal stacks !
 */
class StackQueue {
  constructor() {
    // create 2 stacks here... you are not allowed to use an array or list
    this.stack = new Stack();
    this.stack1 = new Stack();
  }
  
  enqueue(value) {
    // implement all methods
    this.stack.push(value);
  }

  dequeue() {
    // implement all methods
    while(!this.stack.isEmpty()){
      this.stack1.push(this.stack.pop())
    }
    return this.stack1.pop();
  }

  peek() {
    // implement all methods
  }
}
module.exports = StackQueue;
