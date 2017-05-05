class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    if(this.queue){
      this.frontElement = this.queue[0]
      this.queue.shift()
      return this.frontElement
    } else {
      return null
    }
  }

  peek() {
    if(this.queue){
      this.frontElement = this.queue[0]
      return this.frontElement
    } else {
      return null
    }
  }

  length() {
    return this.queue.length()
  }

  print() {
    return this.queue
  }
}

module.exports = Queue;
