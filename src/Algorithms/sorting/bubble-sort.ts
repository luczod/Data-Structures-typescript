import { Compare } from '../../types';
import { defaultCompare, swap } from '../../utils';

/*
  compare each two adjacent values and
  swaps them if the first value is greater than the second.

  Very simple, however, it is one of the worst
  sorting algorithms when it comes to execution time

*/

export function bubbleSort<T>(array: T[], compareFn = defaultCompare): T[] {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}
