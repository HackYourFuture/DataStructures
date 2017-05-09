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
    // todo: implement me 🦑️
    if (this.head === null) {
      this.head = node;
      this.length++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++
    }
  }

  /*
   Prepend should insert an element at the start of the list.
   Eg1: List(2,4) prepend(5)  -> List (5, 2, 4)
   */
  prepend(data) {
    // first create a Node with the data
    let node = new Node(data);
    // todo: implement me 🦑️
    if(this.head === null){
      this.head = node;
      this.length++
    }else{
      let newHead = node;
      newHead.next = this.head;
      this.head = newHead;
      this.length++      
    }
  }

  /*
   Remove should delete the first occurrence of data in the list.
   Eg1: List(2, 4, 5, 4) delete(4)  -> List (2,5,4)
   */
  remove(data) {
    // todo: implement me 🦑️
    if(!this.head) return null;
    if(this.head.data === data){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let count = 0;
    while(count < this.length){
      if(data === current.next.data){
        current.next = current.next.next;
        this.length--
        return;
      }
      current = current.next;
      count++
    }
  }

  /*
   Size should return the size of the list.
   Eg1: List(2, 4, 5, 4) size() -> 4
   */
  size() {
    // todo: implement me 🦑️
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

  eachItem(){
    let count = 0;
    let current = this.head;

    while(count < this.length && current){
      console.log('the item is: ', current.data);
      current = current.next;
      count++
    }
  }

}


module.exports = LinkedList;