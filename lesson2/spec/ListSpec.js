describe("LinkedList", function() {
  let LinkedList = require('../src/linked_list/list');
  let list = new LinkedList();

  it("should have length 3 after adding 3 elements", function() {
    list.append(2);
    list.append(3);
    list.append(4);

    expect(list.size()).toEqual(3);
  });

});
