let Stack = require("../../../lesson1/src/stacks_queues/stack");

/*
 This should be a queue implemented with 2 internal stacks !
 */
class StackQueue {
  constructor() {
<<<<<<< HEAD
    // create 2 stacks here... you are not allowed to use an array or list
    this.stack = new Stack();
    this.stack1 = new Stack();
=======
    this.inbox = new Stack();
    this.outbox = new Stack();
>>>>>>> 2a2c69af338ee4667402cf93b1ef22ffe04c7801
  }
  
  enqueue(value) {
<<<<<<< HEAD
    // implement all methods
    this.stack.push(value);
  }

  dequeue() {
    // implement all methods
    while(!this.stack.isEmpty()){
      this.stack1.push(this.stack.pop())
    }
    return this.stack1.pop();
=======
    this.inbox.push(value);
  }

  dequeue() {
    if (this.outbox.isEmpty()){
      while (!this.inbox.isEmpty()){
        let value = this.inbox.pop();
        this.outbox.push(value);
      }
    }
    return this.outbox.pop();
>>>>>>> 2a2c69af338ee4667402cf93b1ef22ffe04c7801
  }

  peek() {
    if (this.outbox.isEmpty()){
      while (!this.inbox.isEmpty()){
        this.outbox.push(this.inbox.pop());
      }
    }
    this.outbox.peek();
  }
}
module.exports = StackQueue;
