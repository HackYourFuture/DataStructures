class Queue {

  constructor() {
    this.queue = [];
  }

  // Queue should insert the value into the queue
  enqueue(value) {
    this.queue.unshift(value);
  }

  // Dequeue should dequeue an element from the queue
  dequeue() {
    // Todo: add your code here !
    return this.queue.pop();
  }

  // Should return (but not remove) an element from the queue
  peek() {
    // Todo: add your code here !
    return this.queue[this.queue.length - 1];
  }

  length() {
    // Todo: add your code here !
    return this.queue.length;
  }

}

module.exports = Queue;
