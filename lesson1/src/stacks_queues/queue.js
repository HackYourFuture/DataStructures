class Queue {

  // todo: add a constructor? and implement the methods
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);

  }

  dequeue() {
    return this.length() > 0 ? this.queue.shift() : null;
  }

  peek() {
    return this.length() > 0 ? this.queue[0] : null;
  }

  length() {
    return this.queue.length;
  }

  isEmpty(){
    return this.length() > 0 ? true : false;
  }

  print() {
    if(this.length() < 1) return null;
    console.log();
    console.log(`The queue is empty: ${this.isEmpty()}.
    The queue consist of: ${this.length()} element(s).
    The first element in the queue: ${this.peek()}.
    Here is the queue: [${this.queue}].`)
    return this.queue;
  }
}
module.exports = Queue;
