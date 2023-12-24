import { Compare, NOT_EXIST } from '../../types';
import { defaultCompare } from '../../utils';
import { quickSort } from '../sorting/quicksort';

/*
  To make the algorithm work, the data structure
  must be ORDERED BEFORE.
*/

export function binarySearch<T>(array: T[], value: T, compareFn = defaultCompare) {
  const sortedArray = quickSort(array); // ordered before.
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2); // subarray in second iteration
    const pivot = sortedArray[midIndex]; // middle Element

    if (compareFn(pivot, value) === Compare.LESS_THAN) {
      // 0 + 1 -> left subarray
      low = midIndex + 1;
    } else if (compareFn(pivot, value) === Compare.BIGGER_THAN) {
      // last position - 1 -> right subarray
      high = midIndex - 1;
    } else {
      // pivot === value
      return midIndex;
    }
  }
  return NOT_EXIST;
}
