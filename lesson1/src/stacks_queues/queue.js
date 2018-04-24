class Queue {

  constructor() {
    this.queue = [];
  }

  // Queue should insert the value into the queue
  enqueue(value) {
    this.queue.push(value);
  }

  // Dequeue should dequeue an element from the queue
  dequeue() {
    // Todo: add your code here !
    let popped = this.queue[0];
    this.queue.shift();
    return popped;
  }

  // Should return (but not remove) an element from the queue
  peek() {
    // Todo: add your code here !
    return this.queue[0];
  }

  length() {
    // Todo: add your code here !
    let length = 0
    for (let i in this.queue) {
      length++;
    }
    return length;
  }

}

module.exports = Queue;