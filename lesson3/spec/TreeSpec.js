let BinarySearchTree = require("../src/trees/bst");

describe("Tree", function () {

  console.log("\nTesting the BinarySearchTree..");

  let bst = new BinarySearchTree();
  it("should be able to create a BST with 3 elements", function () {
    bst.add(5);
    bst.add(2);
    bst.add(9);
    expect(bst.root.data).toBe(5);
  });

  it("should be able to add an element to existing tree", function () {
    bst.add(7);
    console.log(bst.print());

  });

  it("should be able to traverse in order", function () {
    let aux = [];
    bst.inOrder(bst.root, e => aux.push(e.data));
    expect(aux).toEqual([2,5,7,9]);
  });

});
