import { Compare } from '../../types';
import { defaultCompare, swap } from '../../utils';

/*
  The general idea behind selection sort is to find
  the minimum value in the data structure, put it in
  the first position and then find the second minimum
  value, place it in the second position, and so on.

  complexity: O(n2)
*/

export const selectionSort = (array: any[], compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin: number;

  for (let i = 0; i < length - 1; i++) {
    indexMin = i; // first position

    for (let j = i; j < length; j++) {
      // if bigger
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j; // new indexMin
      }
    }
    // If the minimum value is different from the original
    // minimum value, we will exchange these values.
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }

  return array;
};
