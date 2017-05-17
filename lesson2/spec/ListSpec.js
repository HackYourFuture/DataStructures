describe("LinkedList", function () {
  let LinkedList = require('../src/linked_list/list');
  let list = new LinkedList();

  it("should have length 3 after appending 3 elements", function () {
    console.log("\nappending 3 elements to empty list...");
    list.append(2);
    list.append(3);
    list.append(4);
    console.log("Done.. list now is");
    console.log(list.toArray());
  });

  it("should have length 3 after appending 3 elements", function () {
    console.log("\nList should have 3 elements... if it doesn't you need to implement append first");
    console.log(list.toArray());
    expect(list.size()).toEqual(3);
  });

  it("should be possible to prepend an element (1)", function () {
    console.log("\nNow trying to prepend a 1 into the list..");
    list.prepend(1);
    console.log("Done.. list now is: " + list.toArray());

    console.log("and I expect the list size to be 4, and in fact is : " + list.size());
    expect(list.size()).toEqual(4);
  });

  it("should be possible to delete the first occurrence of 2", function () {

    console.log("\nTo make this more exiting i'll add another 2");
    list.append(2);
    console.log("Done.. list now is: " + list.toArray());
    console.log("\nNow trying to delete the first occurrence of 2..");
    list.remove(2);
    console.log("Done.. list now is: " + list.toArray());
    console.log("and I expect the list size to be 4, and in fact is : " + list.size());
    expect(list.size()).toEqual(4);

    console.log("\nNow trying to delete the first (since it should be the only one left) occurrence of 2..");
    list.remove(9999);
    console.log("Done.. list now is: " + list.toArray());
    console.log("and I expect the list size to be 3, and in fact is : " + list.size());
    expect(list.size()).toEqual(4);
  });

});
