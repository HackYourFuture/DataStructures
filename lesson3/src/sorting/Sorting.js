class Sorting {

  /*
   Insertion sort !
   */
  static insertionSort(array) {
    // you know what to do
    for (let i = 0; i < array.length-1; i++) {
      let copy = array[i+1];
      if (array[i] > array[i+1]) {
        array[i+1] = array[i];
        for (let j = i; j >= 0; j--) {
          if(array[j] > array[j-1]) {
            if(array[j-1] < copy) {
              array[j] = copy;
              break;
            }
            array[j] = array[j-1];
          }else {
            array[j] = copy;
            break;
          }
        }
      }
    }
    return array;
  }

  /*
   Bubble sort !
   */
  static bubbleSort(array) {
    // you know what to do
    for (let j = 0; j < array.length; j++) {
      for (let i = 0; i < array.length-j-1; i++) {
          if(array[i] > array[i+1]) {
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
          }
      }
    }
    return array;
  }

  /*
   Merge sort !
   */
  static mergeSort(array) {
    // you know what to do (we did it in class...)
    if (array.length < 2)
        return array;
 
    let middle = parseInt(array.length / 2);
    let left   = array.slice(0, middle);
    let right  = array.slice(middle, array.length);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  static merge(left, right) {
    // you know you'll need this method.
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
  }
}

module.exports = Sorting;