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

    if (!this.root) return this.root = node; // base case

    if (data > this.root.data) {
      if (!this.root.right) {
        this.root.right = new BinarySearchTree();
      }
      this.root.right.add(data);
    } else {
      if (!this.root.left) {
        this.root.left = new BinarySearchTree();
      }
      this.root.left.add(data);
    }

  }

  remove(data) {
    // base case I'm at the element (practically binary search tree as well! I'll make it a null)
    if (this.root.data === data) {
      return this.root = null;
    }

    if (data > this.root.data) {
      this.root.right.remove(data);
    } else {
      this.root.left.remove(data);
    }
  }

  contains(data) {
    if (this.root.data === data) {
      return true;
    }

    if (data > this.root.data) {
      return this.root.right ? this.root.right.contains(data) : false;
    } else {
      return this.root.left ? this.root.left.contains(data) : false;
    }
    return false
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

  // root > left > right
  preOrder(node, fn) {
    if (!node) return;
    fn(node.root.data); // root
    this.preOrder(node.root.left, fn); // left
    this.preOrder(node.root.right, fn); // right
  }

  inOrder(node, fn) {
    // todo: implement me
    if (!node) return;
    this.inOrder(node.root.left, fn); // left
    fn(node.root.data); // root
    this.inOrder(node.root.right, fn);// right
  }

  // left > right > root
  postOrder(node, fn) {
    if (!node) return;
    this.preOrder(node.root.left, fn); // left
    this.preOrder(node.root.right, fn); // right
    fn(node.root.data); // root
  }

  getMin(node) {
    return node.root.left
      ? this.getMin(node.root.left) // go deeper  
      : node.root.data; // this is min
  }

  getMax(node) {
    return node.root.right
      ? this.getMax(node.root.right) // go deeper  
      : node.root.data; // this is max
  }

  getHeight(node) {
    if (!node) return -1; // it has doesn't exist but it was called upon and will be counted unless this is done
    const leftHeight = this.getHeight(node.root.left); // run this function for the left side
    const rightHeight = this.getHeight(node.root.right); // run this function for the right side
    return Math.max(leftHeight, rightHeight) + 1; // + 1 is because there is a parent edge
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
      string += `${node.data} `;
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
