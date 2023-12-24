import { Compare } from '../../types';
import { defaultCompare } from '../../utils';

/*
  assumes that the first element is already sorted.
  So a comparison with the second value is carried out:
  the second value must remain in its place or must be
  inserted before the first?
  Comparing with each previous value until reaching the first index

  complexity: O(n²)
*/

export const insertionSort = <T>(array: T[], compareFn = defaultCompare) => {
  const { length } = array;
  let temp: T;

  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];

    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = temp;
  }

  return array;
};
