class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = new Node(data);
    // insert in correct place
  }

  remove(data) {
    // there is a lot of ways of doing this one, ask for help if you get stuck
  }

  contains(data) {
    // change me
    return false;
  }

  /*
   All traversal algorithms are included here, but take a node and a function as a parameter.
   The node when calling on the tests will be this.root so it will traverse all the nodes, but it could just as well
   start with any node thats why we pass it as a parameter.

   The second parameter is just a function that says what to do with each visited node,

   Eg: To print the whole tree in console traversed pre ordered we would call
   let bst = new BinarySearchTree();
   bst.add(5);
   bst.add(2);
   bst.add(9);

   bst.preOrder(bst.root, e => console.log(e.data))
   */

  preOrder(node, fn) {
    // todo: implement me
  }

  inOrder(node, fn) {
    // todo: implement me
  }

  postOrder(node, fn) {
    // todo: implement me
  }

  getMin(node) {
   // todo: implement me
  }

  getMax(node) {
    // todo: implement me
  }

  getHeight(node) {
    // todo: implement me
  }


  print() {
    // use for debugging purpuses
    if (!this.root) {
      return 'No root node found';
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = '';
    while (queue.length) {
      const node = queue.shift();
      string += `${node.data.toString()} `;
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    string.slice(0, -2).trim();
  }
}
module.exports = BinarySearchTree;
