describe("Problems", function () {
  let LinkedList = require('../src/linked_list/list');
  let ListProblems = require('../src/linked_list/listProblems');
  console.log("\n-----------------------------\n");
  console.log("Now testing listProblems.js!");

  it("should remove duplicates from List(5,9,2,9,3,3,7)", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5, 9, 2, 9, 3, 3, 7].forEach(e => list.append(e));
    console.log("Done.. list now is: " + list.toArray());
    console.log("Trying to remove duplicates..");

    ListProblems.removeDuplicates(list);
    console.log("Done.. list now is: " + list.toArray());
    expect(list.toArray()).toEqual([5, 9, 2, 3, 7]);
  });

  it("should find the 2 to last element in List(5,9,2,9,3,7)", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5, 9, 2, 9, 3, 7].forEach(e => list.append(e));
    console.log("Done.. list now is: " + list.toArray());
    console.log("Trying to find 2nd to last element..");

    let kthToLast = ListProblems.kthToLast(list, 2);
    console.log("Done.. 2nd to last element found is " + kthToLast);
    expect(kthToLast.toEqual(9));
  });

  it("should find the last element in List(5,9,2,9,3,7)", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5, 9, 2, 9, 3, 7].forEach(e => list.append(e));
    console.log("Done.. list now is: " + list.toArray());
    console.log("Trying to find 2nd to last element..");

    let kthToLast = ListProblems.kthToLast(list, 0);
    console.log("Done.. 2nd to last element found is " + kthToLast);
    expect(kthToLast.toEqual(7));
  });

  it("should detect that list has a cycle", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5, 9, 2, 9, 3, 7].forEach(e => list.append(e));

    console.log("Done.. list now is: " + list.toArray());
    console.log("adding a cycle.. from last element to element index 2");

    let p = list.head;
    let cycleNode = null;
    let idx = 0;
    while (p.next) {
      p = p.next;
      idx++;
      if (idx === 1) {
        cycleNode = p.next;
      }
    }
    p.next = cycleNode;

    let testPointer = list.head;
    console.log("printing the cycle first 20 elements");
    for (let j = 0; j < 20; j++) {
      testPointer = testPointer.next;
      console.log("element at index " + j + " : " + testPointer.data);
    }
    expect(ListProblems.detectCycle(list)).toEqual(true);
  });

  it("should detect that list has NO cycle", function () {
    console.log("\nCreating the list");
    let list = new LinkedList();
    [5, 9, 2, 9, 3, 7].forEach(e => list.append(e));

    console.log("Done.. list now is: " + list.toArray());
    expect(ListProblems.detectCycle(list)).toEqual(false);
  });


});
