class Stack {
  constructor() {
    this.stack = [];
    
  }

  /*
   Push should insert the value into the queue
   */
  push(value) {
    // todo: do stuff
    return this.stack.push(value)
  }

  /*
   Pop should return the value and remove it from the queue
   */
  pop() {
    // todo: do stuff
    return this.stack.pop();
  }

  /*
   Peek should return the value without removing it from the queue
   */
  peek() {
    // todo: do stuff

    return this.stack.length !== 0 ? this.stack[(this.stack.length)-1] : null;
  }

  /*
   Self explanatory freebie, nothing to do here yay !
   unless you removed top, then you should something trivial here..
   */
  length() {
    return this.stack.length; // not if you removed it 😉
  }

  /*
   Should return a boolean indicating if queue is empty
   */
  isEmpty() {
    // todo: do stuff
    return this.stack.length == 0;
  }

}

module.exports = Stack;
