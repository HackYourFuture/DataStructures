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
    this.stack.push(value);
    this.top++;
  }

  /*
   Pop should return the value and remove it from the queue
   */
  pop() {
    // todo: do stuff
    this.top--;
    return this.stack.pop();
  }

  /*
   Peek should return the value without removing it from the queue
   */
  peek() {
    // todo: do stuff
    return this.stack[this.top - 1];
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
    return this.top === 0;
  }

}

module.exports = Stack;
