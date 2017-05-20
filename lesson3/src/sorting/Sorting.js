class Sorting {

  /*
   Insertion sort !
   */
  static insertionSort(array) {
    // you know what to do
    let length = array.length;

    for (let i = 1; i < length; i++) {
      let value = array[i];
      let empty = i;
      while (empty > 0 && array[empty - 1] > value) {
        array[empty] = array[empty - 1];
        empty = empty - 1;
      }
      array[empty] = value;
    }
    return array;
  }

  /*
   Bubble sort !
   */
  static bubbleSort(array) {
    // you know what to do
    let length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i); j++) {
        if (array[j] > array[j + 1]) {
          let curr = array[j];
          array[j] = array[j + 1];
          array[j + 1] = curr;
        }
      }
    }
    // console.log(`Done the array now is: ${array}`)
    return array;
  }

  /*
   Merge sort !
   */
  static mergeSort(array) {
    // you know what to do (we did it in class...)
    let length = array.length;
    if(length < 2) return array;
    let middle = Math.floor(length / 2);
    let left = this.mergeSort(array.slice(0, middle));
    let right = this.mergeSort(array.slice(middle, length));
    // left = 
    // right = this.mergeSort(right);
    return this.merge(left, right);
  }

  static merge(a, b) {
    // you know you'll need this method.
    let arr = [];
    while (a[0] && b[0]) {
      if (a[0] < b[0]) {
        arr.push(a.shift());
      } else {
        arr.push(b.shift());
      }
    }
    if (a.length > 0) {
      arr.push(...a);
    } else {
      arr.push(...b);
    }
    return arr;
  }
}

module.exports = Sorting;