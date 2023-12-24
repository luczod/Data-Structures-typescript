import { findMaxValue } from '../search/min-max-search';

/*
  Counting sort uses a temporary array which will
  store how many times each element appears in the original array.
  After all elements have been accounted.

  complexity: O(n + k)
*/

export function countingSort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);

  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  // console.log('Frequencies: ' + counts.join());
  let sortedIndex = 0;
  counts.forEach((element, i) => {
    while (element > 0) {
      array[sortedIndex++] = i;
      element--;
    }
  });

  return array;
}
