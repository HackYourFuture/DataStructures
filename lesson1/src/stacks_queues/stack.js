class Stack {
  constructor() {
    this.stack = [];
  }

  /*
   Push should insert the value into the queue
   */
  push(value) {
     this.stack.push(value);
  }

  /*
   Pop should return the value and remove it from the queue
   */
  pop() {
    return this.stack.pop()
  }

  /*
   Peek should return the value without removing it from the queue
   */
  peek() {
    return this.stack[this.stack.length-1];
  }

  /*
   Self explanatory freebie, nothing to do here yay !
   unless you removed top, then you should something trivial here..
   */
  length() {
    return this.stack.length;
  }

  /*
   Should return a boolean indicating if queue is empty
   */
  isEmpty() {
    return this.stack.length === 0;
  }

}

module.exports = Stack;
