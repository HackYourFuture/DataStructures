class Sorting {

  /*
   Insertion sort !
   */
  static insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const temp = array[i];// item being examend

      let rank = i - 1; // index of the last element from the sorted array (biggest sofar)

      // rank is not less than 0 and the item at that rank is bigger than the item being examend
      while (rank >= 0 && array[rank] > temp) {
        array[rank + 1] = array[rank];
        rank--;
      }
      array[rank + 1] = temp;
    }
    return array;
  }

  /*
   Bubble sort !
   */
  static bubbleSort(array) {
    let length = array.length - 1;// will be decremented each iteration cause last element will always be the biggest

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < length; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
        }
      }
      length--;
    }
    return array;
  }

  /*
   Merge sort !
   */
  static mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = this.mergeSort(array.slice(0, mid));
    const right = this.mergeSort(array.slice(mid));
    return this.merge(left, right);
  }

  static merge(arr1, arr2) {
    const resultArray = [];
    while (arr1.length > 0 && arr2.length > 0) {
      resultArray.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift()); // push the smaller one to array
    }
    return resultArray.concat(arr1.length ? arr1 : arr2);// push the resulting in one of the arrays
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////// FROM CLASS /////////////////////////////////////////////////////////
  static selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (i !== min) { // stable sorting: if you find two elements that are the same don't swap it
        this.swap(arr, min, i);
      }
    }
    return arr;
  }

  static swap(arr, index1, index2) {
    const temp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = temp;
  }
}

module.exports = Sorting;