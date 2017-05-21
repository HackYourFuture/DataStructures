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
    if(!this.root) {
      this.root = node;
    } else {
      searchAndAdd(this.root, node)
      function searchAndAdd(rootNode, node) {
        if(rootNode.data < node.data) {
          if(!rootNode.right) {
            rootNode.right = node;
          } else {
            searchAndAdd(rootNode.right, node);
          }
        } else {
          if(!rootNode.left) {
            rootNode.left = node;
          } else {
            searchAndAdd(rootNode.left, node);
          }
        }
      }
    }
  }

  remove(data) {
    // there is a lot of ways of doing this one, ask for help if you get stuck
    removeNode(this.root, data);
    function removeNode(node, data) {
      if(!node)
        return null;
      if(node.data === data) {
        if(!node.right && !node.left) {
          node.data = null;
        }else {
          if(!node.right) {
            node.data = node.left;
          } else {
            if(!node.left) {
              node.data = node.right;
            } else {
              // now we know that node.right && node.left === true;
              let alternative = findAlternative(node.left);
              if(!alternative.left) {
                node.data = alternative.data;
                deleteAlternative(node.left);
              } else {
                removeNode(node.left, alternative.data);
              }
            }
          }
        }
      } else {
        if(node.data < data) {
          removeNode(node.right, data);
        } else {
          removeNode(node.left, data)
        }
      }
    }
    function findAlternative(node){
      while(node.right){
        findAlternative(node.right);
      }
      return node.right;
    }
    function deleteAlternative(node){
      while(node.right){
        findAlternative(node.right);
      }
      node.data = null;
    }
  }

  contains(data) {
    // change me
    let contain = this.root;
    if (!contain) {
      return false;
    }
    while (contain) {
      if (data === contain.data) {
        return true;
      }
      if (data > contain.data) {
        contain = contain.right;
      } else {
        contain = current.left;
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
    // todo: implement me
    if (!this.root) {
      return null;
    } else {
      let result = [];
      search(this.root);

      function search(node) { 
        result.push(node.data);      
        if(node.left) {
          search(node.left);
        }
        if(node.right) {
          search(node.right);
        }
      }

      return result;
    }
  }

  inOrder(node, fn) {
    // todo: implement me
      let result;
      fn(node);

      function fn(node) {       
        if(node.left) {
          fn(node.left);
        }
        result = node.data;
        if(node.right) {
          fn(node.right);
        }
      }

      return result;
  }

  postOrder(node, fn) {
    // todo: implement me
  }

  getMin(node) {
   // todo: implement me
    let min = this.root;
    while (!min.left) {
      min = min.left;
    }
    return min.data;
  }

  getMax(node) {
    // todo: implement me
    let max = this.root;
    while (!max.right) {
      max = max.right;
    }
    return max.data;
  }

  getHeight(node) {
    // todo: implement me
    if (node == null) {
        return false;
    };
    let left = this.getHeight(node.left);
    let right = this.getHeight(node.right);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }
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
