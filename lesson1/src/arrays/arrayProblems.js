class ArrayProblems {

  /*
   This method should return true if a given Array (array)
   has all unique elements and false otherwise
   Eg1: [1,1,1] -> true
   Eg2: [1,1,1,2] -> false
   */
  static allUniqueElements(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        // todo: do stuff here
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
  }

  /*
   Can you implement getMax again without using any js collection method?
   */
  static getMax2(array) {
    // todo: 🙌 do magic !
  }
}
module.exports = ArrayProblems;