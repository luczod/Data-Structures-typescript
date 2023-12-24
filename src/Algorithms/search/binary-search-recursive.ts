import { Compare, NOT_EXIST } from '../../types';
import { defaultCompare } from '../../utils';
import { quickSort } from '../sorting/quicksort';

function binarySearchRecursive<T>(
  array: T[],
  value: T,
  low: number,
  high: number,
  compareFn = defaultCompare,
): number {
  // base case
  if (low <= high) {
    const midIndex = Math.floor((low + high) / 2); // subarray in second iteration
    const pivot = array[midIndex]; // middle Element

    if (compareFn(pivot, value) === Compare.LESS_THAN) {
      // 0 + 1 -> left subarray
      return binarySearchRecursive(array, value, midIndex + 1, high, compareFn);
    } else if (compareFn(pivot, value) === Compare.BIGGER_THAN) {
      // last position - 1 -> right subarray
      return binarySearchRecursive(array, value, low, midIndex - 1, compareFn);
    } else {
      // pivot === value
      return midIndex;
    }
  }
  return NOT_EXIST;
}

export function binarySearch<T>(array: T[], value: T, compareFn = defaultCompare) {
  const sortedArray = quickSort(array); // ordered before.
  const low = 0;
  const high = sortedArray.length - 1;

  return binarySearchRecursive(array, value, low, high, compareFn);
}
