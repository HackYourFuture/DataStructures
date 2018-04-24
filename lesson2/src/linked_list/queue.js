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
    if(this.outbox.isEmpty()){
      while(!this.inbox.isEmpty()){
        this.outbox.push(this.inbox.pop());
      }
    }
    return this.outbox.pop();
  }

  peek() {
    // todo: piece of cake 🍰 !
    return this.outbox.isEmpty() ? this.inbox[length + 1] : this.outbox.peek();
  }
}
module.exports = StackQueue;
