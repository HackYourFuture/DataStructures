class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  addNode(node) {
    if (node.data > this.data) {
      if (this.right === null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    } else if (node.data < this.data) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    }
  }

  contains(data) {
    // change me
    if (this.data === data) {
      return true;
    } else {
      if (this.data < data && this.right !== null) {
        return this.right.contains(data);
      } else if (this.left !== null) {
        return this.left.contains(data);
      }
    }
    return false;
  }

  remove(root, data) {
    if (root === null) return root;
    if (root.data > data) {
      root.left = this.remove(root.left, data);
    } else if (root.data < data) {
      root.right = this.remove(root.right, data);
    } else { // means the data is root.data..
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.data = this.getMin(root.right);
      root.right = this.remove(root.right, root.data);
    }
    return root;
  }

  getMin(root) {
    if (root.left === null) {
      return root.data;
    } else {
      return this.getMin(root.left);
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = new Node(data);
    // insert in correct place
    if (this.root === null) {
      this.root = node;
    }
    else {
      this.root.addNode(node);
    }
    // else if (this.root.data > data) {
    //   this.addLeft(this.root, node);
    // } else {
    //   this.addRight(this.root, node);
    // }
  }

  // addRight(root, node) {
  //   if (root.right === null) {
  //     root.right = node;
  //   } else {
  //     if (root.right.data > node.data) {
  //       this.addLeft(root.right, node);
  //     } else if (root.right.data < node.data) {
  //       this.addRight(root.right, node)
  //     }
  //   }
  // }

  // addLeft(root, node) {
  //   if (root.left === null) {
  //     root.left = node;
  //   } else {
  //     if (root.left.data > node.data) {
  //       this.addLeft(root.left, node);
  //     } else if (root.left.data < node.data) {
  //       this.addRight(root.left, node)
  //     }
  //   }
  // }

  remove(data) {
    // there is a lot of ways of doing this one, ask for help if you get stuck
    this.root.remove(this.root, data);
    let arr = [];
    this.inOrder(this.root, (e) => arr.push(e.data));
    return arr;
  }

  contains(data) {
    // change me
    if (this.root.data === data) {
      return true;
    } else {
      return this.root.contains(data);
    }
  }

  // containsLeft(root, data) {
  //   if (root.data === data) {
  //     console.log("the data is found in the left node: " + root.data)
  //     return true;
  //   } else if (root.data > data) {
  //     return this.containsLeft(root.left, data);
  //   } else if (root.data < data) {
  //     return this.containsRight(root.right, data);
  //   }
  //   return false;
  // }

  // containsRight(root, data) {
  //   if (root.data === data) {
  //     console.log("the data is found in the right node: " + root.data)
  //     return true;
  //   } else if (root.data > data) {
  //     return this.containsLeft(root.left, data);
  //   } else if (root.data < data) {
  //     return this.containsRight(root.right, data);
  //   }
  //   return false;
  // }

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
    if (node !== null) {
      fn(node);
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  inOrder(node, fn) {
    // todo: implement me
    if (node !== null) {
      this.inOrder(node.left, fn);
      fn(node);
      this.inOrder(node.right, fn);
    }
  }

  postOrder(node, fn) {
    // todo: implement me
    if (node !== null) {
      this.postOrder(node.right, fn);
      fn(node);
      this.postOrder(node.left, fn);
    }
  }

  getMin(root) {
    // todo: implement me
    // let min = root.data;
    // while (root.left !== null) {
    //   min = root.left.data;
    //   root = root.left;
    // }
    // return min;
    //recursively
    if (root.left === null) {
      return root.data;
    } else {
      return this.getMin(root.left);
    }
  }

  getMax(root) {
    // todo: implement me
    let max = root.data;
    while (root.right !== null) {
      max = root.right.data;
      root = root.right;
    }
    return max;
  }

  getHeight(root) {
    // todo: implement me
    if (root === null) return 0;

    return (1 + Math.max(this.getHeight(root.left), this.getHeight(root.right)));
  }


  print() {
    // use for debugging purpuses
    if (!this.root) {
      return 'No root node found';
    }
    const newline = new Node('|');
    const queue = [this.root, newline];
    let string = 'Root: ';
    while (queue.length) {
      const node = queue.shift();
      queue[0] === "left" ? string += `${queue.shift()}: ` : queue[0] === "right" ? string += `, ${queue.shift()}: ` : null;
      string += `${node.data.toString()} `;
      if (node === newline && queue.length) {
        queue.push(newline);
      }
      if (node.left) {
        queue.push(node.left);
        queue.push("left");
      }
      if (node.right) {
        queue.push(node.right);
        queue.push("right");
      }
    }
    string.slice(0, -2).trim();
    return string;
  }
}
module.exports = BinarySearchTree;
