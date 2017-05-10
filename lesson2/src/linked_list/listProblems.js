// const stack
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
    
    let current = list.head;
    let hash ={};
    let prev;
    while(current !== null){
      if(current.data in hash){// you can do: "hash[current.data]" as well
        prev.next = current.next;
      }else{
        hash[current.data] = true; // Or to my name;_) 
        prev = current;
      }
      current = current.next;
    }

    // while(current !== null){
    //   prev = current;
    //   while(prev.next !== null){
    //     if(prev.next.data === current.data){
    //       prev.next = prev.next.next;
    //     }else{
    //       prev = prev.next;
    //     }
    //   }
    //   current = current.next;
    // }


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
    //todo: do your magic ! ️‍
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