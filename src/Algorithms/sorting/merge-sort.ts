import { Compare, TCompareFunction } from '../../types';
import { defaultCompare } from '../../utils';

/*
  Merge sort will transform a larger array
  into smaller arrays until they
  contain only one value.

  complexity: O(n log n)
*/

function merge<T>(left: T[], right: T[], compareFn: TCompareFunction<T>): T[] {
  let i = 0;
  let j = 0;
  const result: T[] = [];

  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++]);
  }

  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

export function mergeSort<T>(array: T[], compareFn = defaultCompare): T[] {
  // base case length < 1
  if (array.length > 1) {
    const { length } = array;

    const middle = Math.floor(length / 2);
    // recursion
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);

    array = merge(left, right, compareFn);
  }

  return array;
}
