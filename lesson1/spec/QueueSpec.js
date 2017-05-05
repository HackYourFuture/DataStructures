let Queue = require("../src/stacks_queues/queue");

describe("Stack", function () {

  let queue = new Queue();

  queue.enqueue(5);
  queue.enqueue(7);
  queue.enqueue(9);

  it("should dequeue values in order (5,7,9)", function () {
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(7);
    expect(queue.dequeue()).toBe(9);
  });

});
