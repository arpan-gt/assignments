/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));
