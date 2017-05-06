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
        if (array[j] != array[i]) {
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
    let max = -99999
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    // todo: 🙌 do magic !
    return Math.max(...array)
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
    for (let i = 0; i < n; ++i) {
            for (let i = 0, j = array.length-1; i < j; ++i, --j) {
                let t = array[i]
                array[i] = array[j]
                array[j] = t
            }
            for (let i = 0, j = array.length-2; i < j; ++i, --j) {
                let t = array[i]
                array[i] = array[j]
                array[j] = t
            }
    }
    return array
  }
}
module.exports = ArrayProblems;
