class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail += 1
  }

  dequeue() {
    if (this.isEmpty()) {
        return -1;
    }
    let first = this.queue[this.head];
    this.head += 1;
    return first;
  }

  peek() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.queue[this.head];
  }

  length() {

  }
    isEmpty() {
       return (this.head == this.tail);
    }
  print() {
    for (let i = this.head; i < this.tail; ++i) {
        process.stdout.write(this.queue[i])
        if (i != this.tail-1) {
            process.stdout.write(", ")
        }
    }
  }
}
module.exports = Queue;
