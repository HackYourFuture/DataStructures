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
    let checkedAgainstNode = list.head;

    for (let i = 0; i < list.size(); i++) {
      // don't go to the element at next if it's the first iteration
      if (i !== 0) checkedAgainstNode = checkedAgainstNode.next;

      // if (!checkedAgainstNode) break;// It will keep looping till next of some node is null so break out the loop then

      let currentNode = checkedAgainstNode.next;// node being compared with checkedAgainstNode
      let previousNode = checkedAgainstNode;// node before that which break the link between itself and the duplicate item if existed

      for (let y = i; y < list.size(); y++) {
        if (!currentNode) break;// It will keep looping till next of some node is null so break out the loop then

        if (currentNode.data === checkedAgainstNode.data) {
          // there is one duplicate make the node before it point at the one after it 
          previousNode.next = currentNode.next;
          currentNode = previousNode.next;
          list.length--;
        } else {
          previousNode = previousNode.next;// 1 step forward
          currentNode = currentNode.next; // 1 step forward
        }
      }
    }
    return list;

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
    let node = list.head;// used to loop through the list

    let wantedIndex = 0; // will represent the k-th to end index from the beginning (length - k)

    while (node) {
      wantedIndex++;
      node = node.next;
    }

    wantedIndex -= k; // get the index in the right order
    node = list.head;// reset this so that we can loop again

    for (let i = 0; i < wantedIndex - 1; i++) {
      node = node.next; // keep overwriting it till the last element
    }
    return node.data;
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

    let node = list.head;


    while (node) {
      // Okay I've had help from the internet but could find no other way
      if (node.seen) {
        return true;
      }
      node.seen = true;
      node = node.next;
    }
    return false;
  }

}

module.exports = ListProblems;