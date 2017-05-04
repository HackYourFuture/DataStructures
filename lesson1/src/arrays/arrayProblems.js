class ArrayProblems {

  /*
   This method should return true if a given Array (array)
   has all unique elements and false otherwise
   Eg1: [1,1,1] -> true
   Eg2: [1,1,1,2] -> false
   */
  static allEqualElements(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        // todo: do stuff here
        if (array[j] !== array[i]) {
          return false;
        }
      }
    }
    return true;
  }

  /*
   This method should return the maximum element from an integer Array (array)
   Eg1: [1,1,1] -> 1
   Eg2: [-3,-1,0,5] -> 5
   */
  static getMax(array) {
    // todo: do stuff here
    return array.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    })
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    // todo: 🙌 do magic !
    let result;
    let i = 0;
    let j = 0;
    while(i < array.length){
      while(j < array.length -1){
        if(array[i] > array[j]){
          result = array[i];
        }else if(array[j] > array[i]){
          result = array[j];
        }
        j++
      }
      i++
      j = i;
    }
    // for (let i = 0; i < array.length; i++) {
    //   for (let j = i; j < array.length - 1; j++) {
    //     // todo: do stuff here
    //     if (array[j] > array[i]) {
    //       result = array[j];
    //     } else if (array[i] > array[j]) {
    //       result = array[i];
    //     }
    //   }
    // }
    return result;
  }

  static rotateLeft(array, n){
    // todo: 🙌 do magic !
    let count= 0;
    while(count < n){
      array.push(array.shift());
      count++
    }
    return array;
  }
}
module.exports = ArrayProblems;