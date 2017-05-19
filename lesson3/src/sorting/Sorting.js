class Sorting {

  /*
   Insertion sort !
   */
  static insertionSort(array) {
    if(array.length === 0) {
      return null;
    }
    for (let i = 1; i < array.length; i++) {
        let tmp = array[i]; 
        for (var j = i - 1; j >= 0 && (array[j] > tmp); j--) {
            array[j + 1] = array[j];
        }
         array[j + 1] = tmp;
    }
    return array;
  }

  /*
   Bubble sort !
   */
  static bubbleSort(array) {
    if(array.length === 0) {
       return null;
    }
     let bubbled;
     for(let i = 0; i < array.length - 1; i++) {
        bubbled = false;
        for(let j = 0; j < array.length - i - 1; j++) {
          if(array[j]  > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            bubbled = true;
          }
        }
        if(!bubbled) {
          break;
        }
     }
     return array;
  }

  /*
   Merge sort !
   */
  static mergeSort(array) {
    if(array.length < 2) { 
       return array;
    }
      let mid = Math.floor(array.length / 2);
      let left = this.mergeSort(array.slice(0, mid));
      let right = this.mergeSort(array.slice(mid));
      
      return this.merge(left, right)
  }

  static merge(a,b) {
     var result = [];
     while(a.length > 0 && b.length > 0){
       result.push(a[0] < b[0] ? a.shift() : b.shift());
     }
     
     return result.concat(a.length ? a : b);
  }
}

module.exports = Sorting;

let arr = [7, 2, 5, 9, 1, 10, 3];

// console.log(Sorting.insertionSort(arr));
// console.log(Sorting.bubbleSort(arr));
// console.log(Sorting.mergeSort(arr));
