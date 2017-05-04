class ArrayProblems {

  static allEqualElements(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] != array[j]) {
          return false;
        }
      }
    }
    return true;
  }

  static getMax(array) {
    if (array) {
      array.sort(function (n1, n2) {
        return n1 - n2;
      });
      return array.pop();
    } else {
      return -1;
    }
  }

  static getMax2(array) {
    let temp = array[0];
    let i = 0;
    if (array.length != 0) {
      for (i; i < array.length; i++) {
        if (temp >= array[i]) {
          console.log(array[i]);
          temp = array[i];
        }
      }
    }
    if (temp < 0) {
      temp = -1;
    }
    return temp;
  }

  static rotateLeft(array, n) {
    for (let i = 0; i < n; i++) {
      let temp = array[0];
      array.shift();
      temp = array.push(temp);
    }
    return array;
  }
}
module.exports = ArrayProblems;