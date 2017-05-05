class Queue {

  // todo: add a constructor? and implement the methods
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[this.top];
  }

  length() {
     return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}
module.exports = Queue;