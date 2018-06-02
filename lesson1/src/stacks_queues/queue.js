class Queue {

  constructor() {
    this.head = 0;
    this.tail = -1;
    this.queue = [];
  }

  // Queue should insert the value into the queue
  enqueue(value) {
    // when an item is added increment put it in the tail and increment it.
    this.queue[++this.tail] = value;
  }

  // Dequeue should dequeue an element from the queue
  dequeue() {
    // Todo: add your code here !
    // when an item is dequeued the head is incremented and gets closer to tail
    if (this.tail === this.head) {
      // head is equals to tail there are no elements!
      throw new Error('There are no elements in the queue!');
    }
    return this.queue[this.head++];

  }

  // Should return (but not remove) an element from the queue
  peek() {
    // Todo: add your code here !
    return this.queue[this.head];
  }

  length() {
    // Todo: add your code here !
    return this.head - this.tail
  }

}

module.exports = Queue;
