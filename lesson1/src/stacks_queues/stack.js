class Stack {
  constructor() {
    this.stack = [];
    this.top = 0; // feel free to use or remove top
  }

  /*
   Push should insert the value into the queue
   */
  push(value) {
    // todo: do stuff
    this.stack[this.top] = value
    this.top++
  }
 
  /*
   Pop should return the value and remove it from the queue
   */
  pop() {
    // todo: do stuff
    if (this.top <= 0) {
      return "Empty Stack"
    }
    let newStack = []
    let poppedItem = this.stack[this.top - 1]
    for (let i = 0; i < this.top - 1; i++) {
      newStack[i] = this.stack[i]
    }
    this.stack=newStack
    this.top--
    return poppedItem
  }

  /*
   Peek should return the value without removing it from the queue
   */
  peek() {
    // todo: do stuff
    return this.stack[this.top-1]
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
    // todo: do stuff
    return this.top<=0?true:false
  }

}

module.exports = Stack;
