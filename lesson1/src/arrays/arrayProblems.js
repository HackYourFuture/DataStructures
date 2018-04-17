class ArrayProblems {
  
    /*
     This method should return true if a given Array (array)
     has all equal elements and false otherwise
     Eg1: [1,1,1] -> true
     Eg2: [1,1,1,2] -> false
     */
    static allEqualElements(array) {
      let arrayBase = array[0]
      for (let i = 0; i < array.length; i++) {
        if (array[i] !== arrayBase) {
          return false
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
      let arrayMax = array[0]
      for (let i = 0; i < array.length; i++) {
        if (array[i] > arrayMax) {
          arrayMax = array[i]
        }
      }
      return arrayMax;
    }
  
    /*
     Can you implement getMax again without using any js collection method?
     */
    static getMax2(array) {
      // todo: 🙌 do magic !
      let arrayMax = array[0]
      array.forEach(element => {
        if (element > arrayMax) {
          arrayMax = element
        }
      });
      return arrayMax;
    }
  
    /*
     A left rotation operation on an array shifts each
     of the array's elements 1 unit to the left.
     For example, if 2 left rotations are performed on array [1,2,3,4,5],
     then the array would become [3,4,5,1,2].
  
     This method should perform n left rotations on the array
     */
    static rotateLeft(array, n) {
      // todo: 🙌 do magic !
      // get the desired shifted elements in separate array 
      let shiftedElements = []
      for (let i = 0; i < n; i++) {
        shiftedElements[i] = array[i]
      }
      // do the shifts here 
      let arrayLength = array.length
      let shiftedArrayIndex = 0
      for (let j = 0; j < arrayLength; j++) {
        if (j < arrayLength - n) {
          array[j] = array[j + n]
        }
        else {
          array[j] = shiftedElements[shiftedArrayIndex]
          shiftedArrayIndex++
        }
      }
      return array
    }
  }
  module.exports = ArrayProblems;