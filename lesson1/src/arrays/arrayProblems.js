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
    // todo: do stuff here
    return array.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    })
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

  static rotateLeft(array, n){
    array.push.apply(array, array.splice(0, n));
    return array;

  }
}
module.exports = ArrayProblems;