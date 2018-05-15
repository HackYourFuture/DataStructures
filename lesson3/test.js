const arr = [1, 3, 5, 7, 9, 11];

function binarySearch(arr, value, left = 0, right = arr.length - 1) {
  if (left >= right) return -1; // base case

  let mid = Math.floor((right + left) / 2) === left ? right : Math.floor((right + left) / 2);
  if (arr[mid] == value) {
    return mid;
  } else if (arr[mid] >= value) {
    return binarySearch(arr, value, left, mid);
  } else {
    return binarySearch(arr, value, mid, right);
  }
}

console.log(binarySearch(arr, 11));

// .. merge sort is nlog(n)
// binary search is log(n)
// fibonachi is o(2^n)

function fibonacci(num) {
  if (num <= 1) return 1;
  console.log(num);
  return fibonacci(num - 1) + fibonacci(num - 2);
}
fibonacci(1234);