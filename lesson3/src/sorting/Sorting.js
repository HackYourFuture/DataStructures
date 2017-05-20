class Sorting {

  /*
   Insertion sort !
   */
  static insertionSort(array) {
    // you know what to do
        for (let j = 1; j < array.length; ++j) {
            let key = array[j]
            let i = j-1
            while (i >= 0 && array[i] > key) {
                array[i+1] = array[i]
                i -= 1
            }
            array[i+1] = key
        }
        return array
  }

  /*
   Bubble sort !
   */
  static bubbleSort(array) {
    // you know what to do
    let n = array.length
    while (true) {
            let swapped = false
            for (let j = 1; j < n; ++j) {
                if (array[j] < array[j-1]) {
                    let temp = array[j]
                    array[j] = array[j-1]
                    array[j-1] = temp
                    swapped = true
                }
            }
            if (swapped == false) {
                break
            }
            n -= 1
    }
    return array
  }

  /*
   Merge sort !
   */
  static merge(left,right) {
    // you know you'll need this method.
    let result = []
    let l = 0
    let r = 0
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++])
        } else {
            result.push(right[r++])
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r))
  }

  static mergeSort(array) {
    // you know what to do (we did it in class...)
    if (array.length < 2) {
        return array
    }

    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
    return this.merge(this.mergeSort(left), this.mergeSort(right))
  }

}

module.exports = Sorting;
