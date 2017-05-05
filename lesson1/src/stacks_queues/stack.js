class Stack {
  constructor() {
    this.stack = [];
    this.top = 0; // feel free to use or remove top
  }

  /*
   Push should insert the value into the queue
   */
  push(value) {
    this.stack.push(value)
    this.top += 1
  }

  /*
   Pop should return the value and remove it from the queue
   */
  pop() {
    this.top -= 1
    return this.stack.pop()
  }

  /*
   Peek should return the value without removing it from the queue
   */
  peek() {
    if (this.top != 0) {
      this.frontElement = this.stack[(this.top - 1)]
      return this.frontElement
    } else {
      return null
    }
  }

  /*
   Self explanatory freebie, nothing to do here yay !
   unless you removed top, then you should something trivial here..
   */
  length() {
    return this.top; // not if you removed it 😉
  }

  /*
   Should return a boolean indicating if queue is empty
   */
  isEmpty() {
    if (this.top == 0) {
      return true
    } else {
      return false
    }
  }

}

module.exports = Stack;
