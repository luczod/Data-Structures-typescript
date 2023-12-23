import { beforeEach, describe, expect, it } from 'vitest';
import heapSort from '../Algorithms/heap-sort';
import { Compare } from '../../types';

// testSortAlgorithm(heapSort, 'Heap Sort');
const config = { reverseCompare: true };
const sortAlgorithm = heapSort;

describe('Heap Sort', () => {
  const SIZE = 100;

  function createNonSortedArray(): number[] {
    const array: number[] = [];
    for (let i = SIZE; i > 0; i--) {
      array.push(i);
    }
    return array;
  }

  function createSortedArray(): number[] {
    const array: number[] = [];
    for (let i = 1; i <= SIZE; i++) {
      array.push(i);
    }
    return array;
  }

  it('works with empty arrays', () => {
    expect(sortAlgorithm([])).toEqual([]);
  });

  it('works with sorted arrays', () => {
    let array = createSortedArray();
    const sortedArray = createSortedArray();
    array = sortAlgorithm(array);
    expect(array).toEqual(sortedArray);
  });

  it('works with non-sorted arrays', () => {
    let array = createNonSortedArray();
    const sortedArray = createSortedArray();
    array = sortAlgorithm(array);

    expect(array).toEqual(sortedArray);

    for (let i = 0; i < array.length - 1; i++) {
      expect(array[i] <= array[i + 1]).toEqual(true);
    }
  });

  function reverseCompare<T>(a: T, b: T): number {
    if (a === b) {
      return 0;
    }
    return a < b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
  }

  if (config.reverseCompare) {
    it('works with reverse comparator - descending order', () => {
      let array = createSortedArray();
      const sortedArray = createNonSortedArray();
      array = sortAlgorithm(array, reverseCompare);

      expect(array).toEqual(sortedArray);

      for (let i = 0; i < array.length - 1; i++) {
        expect(array[i] >= array[i + 1]).toEqual(true);
      }
    });
  }
});
