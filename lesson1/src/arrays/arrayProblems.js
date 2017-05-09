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
        // todo: do stuff here
        // if(array[i] != array[j])
        //   return false
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
    // todo: do stuff here
    // let max = Math.max(...array);
    // Other one let max = array.reduce((a, b) => Math.max(a, b));
    // return max;
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i< array.length; i++){
      if (array[i] > max){
    // todo: 🙌 do magic !
    // let max;
    // (array.length)? max = array[0]: max = false;
    // for(let i = 1; i < array.length; i++) {
    //   if (max < array[i]) {
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
    array.push.apply(array, array.splice(0, n));
    return array;

    // todo: 🙌 do magic !
    // return array.splice(n,array.length-n).concat(array.splice(0,n))
  }
}
module.exports = ArrayProblems;