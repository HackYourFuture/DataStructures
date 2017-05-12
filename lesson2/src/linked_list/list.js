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


  isEmpty() {
    return this.head === null;
  }

  /*
   Append should insert an element at the end of the list.
   Eg1: List(2,4) append(5)  -> List (2,4,5)
   Eg2: List() append(5)  -> List (5)
   */
  append(data) {
    let node = new Node(data);
    if(this.isEmpty()) {
      this.head = node;
      return;
    }

    let current = this.head;

    while(current.next !== null) {
           current = current.next
    }

    current.next = node;

  }

  /*
   Prepend should insert an element at the start of the list.
   Eg1: List(2,4) prepend(5)  -> List (5, 2, 4)
   */
  prepend(data) {
    let node = {
      data: data,
      next: this.head
    };

    this.head = node;
  }

  /*
   Remove should delete the first occurrence of given data from the list.
   Eg1: List(2, 4, 5, 4) remove(2)  -> List (4,5,4)
   Eg2: List(2, 4, 5, 4) remove(4)  -> List (2,5,4)
   */
  remove(data) {
    if(this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let previous = null;
    let current = this.head;

    while(current.data !== data) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }

  /*
   Size should return the size of the list.
   Eg1: List(2, 4, 5, 4) size() -> 4
   */
  size() {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
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