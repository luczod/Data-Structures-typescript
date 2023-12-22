import { beforeEach, describe, expect, it } from 'vitest';
import heapSort from '../Algorithms/heap-sort';
import { MinHeap } from '../binary-heap/min-heap-class';

describe('Heap', () => {
  let heap: MinHeap<number>;

  beforeEach(() => {
    heap = new MinHeap<number>();
  });

  it('starts empty MinHeap', () => {
    expect(heap.size()).toEqual(0);
    expect(heap.isEmpty()).toEqual(true);
  });

  it('inserts values in the MinHeap', () => {
    const resultArray = [];
    for (let i = 1; i < 10; i++) {
      resultArray.push(i);
      heap.insert(i);
      expect(heap.getAsArray()).toEqual(resultArray);
    }
  });

  it('finds the min value from the MinHeap', () => {
    const resultArray = [];

    for (let i = 10; i >= 1; i--) {
      resultArray.push(i);
      heap.insert(i);
      expect(heap.findMinimum()).toEqual(i);
    }
  });

  it('performs heapify in the MinHeap', () => {
    const resultArray = [];
    for (let i = 10; i >= 1; i--) {
      resultArray.push(i);
    }
    expect(heap.heapify(resultArray)).toEqual(resultArray);
  });

  it('extracts the min value from the MinHeap', () => {
    let resultArray = [];

    for (let i = 1; i < 10; i++) {
      resultArray.push(i);
      heap.insert(i);
      expect(heap.getAsArray()).toEqual(resultArray);
    }

    resultArray = [
      [],
      [2, 4, 3, 8, 5, 6, 7, 9],
      [3, 4, 6, 8, 5, 9, 7],
      [4, 5, 6, 8, 7, 9],
      [5, 7, 6, 8, 9],
      [6, 7, 9, 8],
      [7, 8, 9],
      [8, 9],
      [9],
      [],
    ];

    for (let i = 1; i < 10; i++) {
      expect(heap.extract()).toEqual(i);
      expect(heap.getAsArray()).toEqual(resultArray[i]);
    }
  });

  it('Heap Sort', () => {
    const array = [3, 2, 5, 6, 1, 7, 8, 9];

    expect(heapSort(array)).toEqual([1, 2, 3, 5, 6, 7, 8, 9]);
  });
});
