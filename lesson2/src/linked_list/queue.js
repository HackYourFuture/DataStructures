let Stack = require("../../../lesson1/src/stacks_queues/stack");

/*
 This should be a queue implemented with 2 internal stacks !
 */
class StackQueue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
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
