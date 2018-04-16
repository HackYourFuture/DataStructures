import ArrayProblems from '../arrays/arrayProblems.js'
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
    this.queue = ArrayProblems.rotateLeft(this.queue, 1)
    this.queue.pop()
  }

  // Should return (but not remove) an element from the queue
  peek() {
    // Todo: add your code here !
    return this.queue[0]
  }

  length() {
    // Todo: add your code here !
    let QueueLength=0
    for(let i in this.queue){
      QueueLength++
    }
    return QueueLength
  }

}

module.exports = Queue;
