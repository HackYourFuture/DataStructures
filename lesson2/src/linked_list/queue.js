let Stack = require("../../../lesson1/src/stacks_queues/stack");

/*
 This should be a queue implemented with 2 internal stacks !
 */
class StackQueue {
  constructor() {
    // create 2 stacks here... you are not allowed to use an array or list
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
      if (!this.stack2.length) {
         if (!this.stack1.length) {
           return undefined;
         }
         while (this.stack1.length) {
           this.stack2.push(this.stack1.pop());
          }
       }
        return this.stack2.pop();
  }

  peek() {
    if(!this.stack1.length) {
      return this.stack2[0];
    }
  }
}
module.exports = StackQueue;
