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
    this.inbox.push(value); //todo: this one you get for free
  }

  dequeue() {
    // todo: we know what to do ... right?
    
    if (this.outbox.length() > 0) {
      return this.outbox.pop();
    }

    this.reverseStack();
    return this.outbox.pop();
  }

  peek() {
    // todo: piece of cake 🍰 !
    if (this.outbox.length() > 0) {
      return this.outbox.peek();
    }

    this.reverseStack();
    return this.outbox.peek();
  }

  reverseStack() {
    const length = this.inbox.length()
    for (let i = 0; i < length; i++) {
      this.outbox.push(this.inbox.pop());
    }
  }
}
module.exports = StackQueue;
