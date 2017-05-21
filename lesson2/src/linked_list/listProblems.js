let LinkedList = require("./list");


class ListProblems {

  /*
   This method should remove all duplicates from an integer list.
   It will take an unsorted list as a parameter, and should return the list
   without duplicate elements

   Eg1: List(5,9,2,9,3,3,7) -> List(5,9,2,3,7)
   Eg2: List(1,1,1,1,1) -> List(1)

   Hint1: You don't have to use list.remove()
   Hint2: I'll let you use a special unicorn array, but you can do without
   */
  static removeDuplicates(list) {
    //todo : implement !

    // check if data is in list or not
    function include(list, data) {
      let currentNode = list.head;
      while (currentNode) {
        if(currentNode.data === data) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      return false;
    }

    let nonDuplicates = new LinkedList();
    let currentNode = list.head;
    while (currentNode) {
      if(include(nonDuplicates, currentNode.data)) {
        currentNode = currentNode.next;
      } else {
        nonDuplicates.append(currentNode.data)
      }
    }
    list.head = nonDuplicates.head;
  }

  /*
   This method should return the k-th to last element on a list
   🚫 YOU CANNOT USE THE LENGTH OF THE LIST ! 🚫
   Eg1: List(5,9,2,9,3,7) k=2 -> 9
   Eg1: List(5,9,2,9,3,7) k=0 -> 7
   Eg1: List(5,9,2,9,3,7) k=4 -> 9

   Hint1: you can do this with recursion, but i think iterative with 2
   pointers should be easier.
   */
  static kthToLast(list, k) {
    //todo: do your magic ! ️‍
    let p1 = null;
    let p2 = list.head;
    let p3;

    while (p2) {
      p3 = p2.next;
      p2.next = p1;
      p1 = p2;
      p2 = p3;
    }

    list.head = p1;
    //return list.toArray()[k];
    let currentNode = list.head;
    while (k !== 0) {
      currentNode = currentNode.next;
      k--;
    }
    return currentNode.data;
  }

  /*
   A list has a cycle when some node on the list points to a previous node on the list
   For example if the "last node" of the list has set its next propery to the first
   or second node on the list.

   for the tests ill have the following list.. and then set the .next property of the last node (7)
   to point at the third node (2).. this way the list will become..

   List(5,9,2,9,3,7) -> List(5,9,2,9,3,7,2,9,3,7,2,9,3,7,2,9......)

   This method should detect if the given list contains a cycle.

   Hint1: you should definitely traverse the list with 2 pointers...
    maybe move them at different speed?
   */
  static detectCycle(list) {
    //todo: supoer magic!
  }

}

module.exports = ListProblems;