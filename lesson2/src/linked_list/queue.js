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
  }

  peek() {
    // todo: piece of cake 🍰 !
  }
}
module.exports = StackQueue;
