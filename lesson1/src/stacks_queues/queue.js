class Queue {

  constructor() {
    this.queue = [];
  }

  // Queue should insert the value into the queue
  enqueue(value) {
    return this.queue.push(value);
  }

  // Dequeue should dequeue an element from the queue
  dequeue() {
    // Todo: add your code here !
    return this.queue.shift();
  }

  // Should return (but not remove) an element from the queue
  peek() {
    // Todo: add your code here !
    return this.queue.length !==0 ? this.queue[0] : null; 

  }

  length() {
    // Todo: add your code here !
    return this.queue.length;
  }

}

module.exports = Queue;
