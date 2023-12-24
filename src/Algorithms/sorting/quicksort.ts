import { Compare, TCompareFunction } from '../../types';
import { defaultCompare, swap } from '../../utils';

/*
  Similar to merge sort, this algorithm also uses the divide
  and conquer approach, dividing the array original into smaller
  arrays (but without separating them as merge sort does)
  to do the sorting.

  complexity: O(n log n)
*/

function partition<T>(array: T[], left: number, right: number, compareFn: TCompareFunction<T>) {
  const pivot = array[Math.floor((right + left) / 2)]; // middle position
  let i = left; // first position
  let j = right; // last position
  // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++;
      // console.log('i = ' + i);
    }

    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
      // console.log('j = ' + j);
    }

    if (i <= j) {
      // console.log('swap ' + array[i] + ' with ' + array[j]);
      swap(array, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quick<T>(array: T[], left: number, right: number, compareFn: TCompareFunction<T>) {
  let index: number;
  // base case
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    // recursion
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }

    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

export const quickSort = <T>(array: T[], compareFn = defaultCompare) => {
  // array | left = 0 | right = array.length - 1
  return quick(array, 0, array.length - 1, compareFn);
};
