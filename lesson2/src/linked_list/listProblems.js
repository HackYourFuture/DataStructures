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
}

module.exports = ListProblems;