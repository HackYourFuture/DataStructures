class Stack {
  constructor() {
    this.stack = [];
    this.top = 0; // feel free to use or remove top
  }

  /*
   Push should insert the value into the stack
   */
  push(value) {
    this.stack[this.top] = value;
    this.top += 1;
  }

  /*
   Pop should return the value and remove it from the stack
   */
  pop() {
    // todo: do stuff
    if (this.isEmpty()) {
        return -1;
    }
    let popped = this.stack[this.top-1]
    this.top -= 1;
    return popped;
  }

  /*
   Peek should return the value without removing it from the stack
   */
  peek() {
    // todo: do stuff
    if (this.isEmpty()) {
        return -1;
    }
    return this.stack[this.top-1];
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
    return this.top ==0;
  }

}

module.exports = Stack;
