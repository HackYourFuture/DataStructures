/*
 Linked list implementation, feel free to change constructors.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /*
   Append should insert an element at the end of the list.
   Eg1: List(2,4) append(5)  -> List (2,4,5)
   Eg2: List() append(5)  -> List (5)
   */
  append(data) {
    // first create a Node with the data
    let node = new Node(data);

    //todo: implement 🦑

  }

  /*
   Prepend should insert an element at the start of the list.
   Eg1: List(2,4) prepend(5)  -> List (5, 2, 4)
   */
  prepend(data) {
    // first create a Node with the data
    let node = new Node(data);
    //todo: implement 🦑
  }

  /*
   Remove should delete the first occurrence of given data from the list.
   Eg1: List(2, 4, 5, 4) remove(2)  -> List (4,5,4)
   Eg2: List(2, 4, 5, 4) remove(4)  -> List (2,5,4)
   */
  remove(data) {
    //todo: implement 🦑
  }

  /*
   Size should return the size of the list.
   Eg1: List(2, 4, 5, 4) size() -> 4
   */
  size() {
    return this.length;
  }


  /*
   This is for debugging purposes You can print this array iIf you want to see what your list looks like.
   Its already implemented.
   Eg1: List(2,4,5) -> [2,4,5]
   */
  toArray() {
    let nodeToCheck = this.head;
    let aux = [];
    while (nodeToCheck) {
      aux.push(nodeToCheck.data);
      nodeToCheck = nodeToCheck.next;
    }
    return aux;
  }

}

module.exports = LinkedList;