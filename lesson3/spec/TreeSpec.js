let BinarySearchTree = require("../src/trees/bst");

describe("Tree", function () {

  console.log("\nTesting the BinarySearchTree..");

  let bst = new BinarySearchTree();
  it("should be able to create a BST with 3 elements", function () {
    bst.add(5);
    bst.add(2);
    bst.add(9);
    bst.add(3);
    bst.add(1);
    bst.add(10);
    expect(bst.root.data).toBe(5);
  });

  it("should be able to add an element to existing tree", function () {
    bst.add(7);
    console.log(bst.print());

  });

  it("should be able to traverse in order", function () {
    let aux = [];
    bst.inOrder(bst.root, e => aux.push(e.data));
    expect(aux).toEqual([1,2,3,5,7,9,10]);
  });

  it("should be able to traverse post order", function () {
    let aux = [];
    bst.postOrder(bst.root, e => aux.push(e.data));
    expect(aux).toEqual([10, 9, 7, 5, 3, 2, 1]);
  });

  it("should be able to traverse pre order", function () {
    let aux = [];
    bst.preOrder(bst.root, e => aux.push(e.data));
    expect(aux).toEqual([ 5, 2, 1, 3, 9, 7, 10 ]);
  });

   it("should search for a given element", function () {
    let check = bst.contains(1);
    expect(check).toBe(true);
  });

  it("should get the min element", function () {
    let min = bst.getMin(bst.root);
    expect(min).toBe(1);
  });

  it("should get the max element", function () {
    let max = bst.getMax(bst.root);
    expect(max).toBe(10);
  });

  it("should get the height of the tree", function () {
    let max = bst.getHeight(bst.root);
    expect(max).toBe(3);
  });

  it("should delete number from the tree", function () {
    //remove and get array of the remaining nodes(element(s))..
    let remaining = bst.remove(3);
    expect(remaining).toEqual([1, 2, 5, 7, 9, 10 ]);
  });

});
