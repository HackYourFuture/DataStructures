class Queue {
  // todo: add a constructor? and implement the methods
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
    //return this.queue[this.queue.length-1]
  }

  length() {
    return this.queue.length;
  }

  print() {
    this.queue.forEach((a) => console.log(a));
  }
}
module.exports = Queue;
