let Stack = require("../src/stacks_queues/stack");

describe("Stack", function () {

  let stack = new Stack();

  stack.push(8);
  stack.push(4);
  stack.push(5);


  it("should pop the correct value (5)", function () {
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
  });

  it("should still have 1 element", function () {
    expect(stack.length()).toBe(1);
  });

  it("should be able to peek the remaining element (8)", function () {
    expect(stack.peek()).toBe(8);
  });

  it("should be empty only after poping out all elements", function () {
    expect(stack.isEmpty()).toBe(false);
    expect(stack.pop()).toBe(8);
    expect(stack.isEmpty()).toBe(true);
  });

});
