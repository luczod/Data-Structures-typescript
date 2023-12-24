import { Compare } from '../../types';
import { defaultCompare, swap } from '../../utils';

/*
  If we subtract from the inner loop the number
  of passes through the outer loop, we will avoid
  all unnecessary comparisons made by the inner loop

  complexity: O(n²)
*/

export function modifiedBubbleSort<T>(array: T[], compareFn = defaultCompare): T[] {
  const { length } = array;

  for (let i = 0; i < length; i++) {
    // New length - 1 - i
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}
