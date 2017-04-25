class ArrayProblems {

  /*
   This method should return true if a given Array (array)
   has all equal elements and false otherwise
   Eg1: [1,1,1] -> true
   Eg2: [1,1,1,2] -> false
   */
  static allEqualElements(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] !== array[j]) {
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
    return array.reduce(function (a, b) {
      return ((a > b) ? a : b);
    });
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i< array.length; i++){
      if (array[i] > max){
        max = array[i];
      }
    }
    return max;
  }

  /*
   A left rotation operation on an array shifts each
   of the array's elements 1 unit to the left.
   For example, if 2 left rotations are performed on array [1,2,3,4,5],
   then the array would become [3,4,5,1,2].

   This method should perform n left rotations on the array
   */
  static rotateLeft(array, n){
    // todo: 🙌 do magic !
  }
}
module.exports = ArrayProblems;