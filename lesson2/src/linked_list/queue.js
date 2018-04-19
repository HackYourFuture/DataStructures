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

    // If there are no elements in both stacks throw an error
    if (this.outbox.length() === 0 && this.inbox.length() === 0) {
      throw new Error('Queue is empty!');
    }

    // if there are elements in the outbox get the first one cause it's been there the most
    if (this.outbox.length() > 0) {
      return this.outbox.pop();
    }

    // go ahead fill the outbox stack with elements from the inbox stack (opposite order LIFO -> FIFO)
    this._fillOutboxStack();
    return this.outbox.pop();
  }

  peek() {
    // todo: piece of cake 🍰 !
    // If there are no elements in both stacks give a null back
    if (this.outbox.length() === 0 && this.inbox.length() === 0) {
      return null;
    }

    // if there are elements in the outbox get the first one cause it's been there the most
    if (this.outbox.length() > 0) {
      return this.outbox.peek();
    }

    // go ahead fill the outbox stack with elements from the inbox stack (opposite order LIFO -> FIFO)
    this._fillOutboxStack();
    return this.outbox.peek();
  }

  // should have been private
  _fillOutboxStack() {
    const length = this.inbox.length()
    for (let i = 0; i < length; i++) {
      this.outbox.push(this.inbox.pop());
    }
  }
}


module.exports = StackQueue;
