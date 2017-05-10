describe("Problems", function () {
  let LinkedList = require('../src/linked_list/list');
  let ListProblems = require('../src/linked_list/listProblems');
  console.log("\n-----------------------------\n");
  console.log("Now testing listProblems.js!");

  it("should remove duplicates from List(5,9,2,9,3,3,7)", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5,4,9,2,4,4,9,3,4,3,7].forEach(e => list.append(e));
    console.log("Done.. list now is: " + list.toArray());
    console.log("Trying to remove duplicates..");

    ListProblems.removeDuplicates(list);
    console.log("Done.. list now is: " + list.toArray());
    expect(list.toArray()).toEqual([5,4,9,2,3,7]);
  });



});
