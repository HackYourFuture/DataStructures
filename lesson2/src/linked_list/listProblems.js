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
    console.log("yes! i got this list = " + list.toArray());
    let set = [];
    let previous = null;
    let runner = list.head;
    console.log("first element is  = " + runner.data);
    while (runner) {
      console.log(runner.data);
      if (set.indexOf(runner.data) > 0) {
        previous.next = runner.next;
        runner = runner.next;
      } else {
        set.push(runner.data);
        previous = runner;
        runner = runner.next;
      }
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
    if (!list.head) {
      return null;
    }

    // slow pointer traverses the list normally
    // fast pointer traverses the list starting k elements after.
    let slow = list.head;
    let fast = list.head;
    for (let i = 0; i < k; i++) {
      if (fast === null) {
        return -1;
      }
      fast = fast.next;
    }
    // traverse until fast reaches the end
    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    // then the slow pointer is at position end-k
    return slow.data;
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
    let slowPointer = list.head,
      fastPointer = list.head;

    while (slowPointer && fastPointer && fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
        return true;
      }
    }
    return false;
  }

}

module.exports = ListProblems;