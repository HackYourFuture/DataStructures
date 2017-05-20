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
    if(!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while(current) {
        if(node.data < current.data) {
          if(!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if(node.data > current.data) {
          if(!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
           return null;
        }
      }
    }
  }
  
  // The remove function is very complicated, it will be great if you give us explanation in the class.
  remove(data) {
    const removeNode = function(node, data) {
      if (!node) {
        return null;
      }
      if (data == node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  contains(data) {
    let current = this.root;
    while(current) {
      if(data === current.data) {
        return true;
      }
      if(data < current.data) {
         current = current.left;
      } else {
         current = current.right;
      }
    }
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
      if(node) {
        if(fn) {
          fn(node);
        }
        this.preOrder(node.left, fn);
        this.preOrder(node.right, fn);
      }
  }

  inOrder(node, fn) {
     if(node) {
        this.inOrder(node.left, fn);
        if(fn) {
          fn(node);
        }
        this.inOrder(node.right, fn);
      }  
  }

  postOrder(node, fn) {
    if(node) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      if(fn) {
        fn(node);
      }
    }
  }

  getMin(node) {
    let current = this.root;
    while(current.left) {
      current = current.left;
    }
    return current.data;
  }

  getMax(node) {
      let current = this.root;
      while(current.right) {
        current = current.right;
      }
      return current.data;
  }

  // I find the function below hard. Some explanation will be great.
  getHeight(node = this.root) {      if(!node) {
      return -1;
    }
    let left = this.getHeight(node.left);
    let right = this.getHeight(node.right);
    
    return Math.max(left, right) + 1;
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
    return string.slice(0, -2).trim();
  }
}

module.exports = BinarySearchTree;


let bst = new BinarySearchTree();
let arr = [];
let arr2 = [];
let arr3 = [];

bst.add(5);
bst.add(10);
bst.add(15);
bst.add(2);
bst.add(50);
bst.add(25);
bst.add(1);

// console.log(bst.contains(25));
// bst.remove(25);
// console.log(bst.contains(25));
// console.log(bst.getHeight());
bst.preOrder(bst.root, e => arr.push(e.data));
bst.inOrder(bst.root, e => arr2.push(e.data));
bst.postOrder(bst.root, e => arr3.push(e.data));
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(bst.getMin());
// console.log(bst.getMax());
// console.log(bst.print());


