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
    const newnode = new Node(data);
    if (this.root == null) {
        this.root = newnode
        return
    }
    let nav = this.root
    while (true)
    {
        if(data < nav.data) {
            if (nav.left == null) {
                nav.left = newnode
                break
            }
            nav = nav.left
        } else {
            if (nav.right == null) {
                nav.right = newnode
                break
            }
            nav = nav.right
        }
    }
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
    if (node != null) {
        fn(node)
        this.preOrder(node.left, fn)
        this.preOrder(node.right, fn)
    }
  }

  inOrder(node, fn) {
    if (node != null) {
        this.inOrder(node.left, fn)
        fn(node)
        this.inOrder(node.right, fn)
    }
  }

  postOrder(node, fn) {
    if (node != null) {
        this.postOrder(node.left, fn)
        this.postOrder(node.right, fn)
        fn(node)
    }
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
