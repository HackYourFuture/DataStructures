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
    // todo ... you know what to do
    console.log(list.head.next)
    if (list.head === null || list.head.next === null) {
      console.log("One or less elements in the list");
    }
    let node1 = list.head;
    let node2 = node1.next;
    let nodes = {};
    nodes[node1.data] = true;
    while (node2 !== null) {
      let data = node2.data
      console.log(data, nodes)
      if (nodes[data]) {
        node1.next = node2.next;
        // list.length--;
      } else {
        nodes[data] = true;
        node1 = node2;

      }
      console.log(list)
      node2 = node2.next;
    }
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
    // console.log("Magical", list)
    // todo ✏️
    let pointer1 = list.head;
    let pointer2 = list.head;
    for (let i = 0; i <= k; i++) {
      if (pointer2 === null) {
        return;
      }
      pointer2 = pointer2.next
    }
    if (pointer2 === null) {
      return;
    }
    while (pointer2 !== null) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
    return pointer1.data;
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
    // todo: super magic 2 speed moving pointers ! 🎉
    let pointer1 = list.head;
    let pointer2 = list.head;
    while (pointer2.next.next) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next.next;
      if (pointer1 === pointer2) {
        return true;
      }
    }
    return false;
  }

}

module.exports = ListProblems;