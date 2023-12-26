import { Compare } from '../types';
import { defaultCompare, defaultEquals, swap } from '../utils';

/*
  The parameter doesn't matter; the performance of
  increment function will be the same.

  NOTATION O(1)
*/
function increment(num: number): number {
  return ++num;
}
increment(2);

/*
  the total cost of executing the sequentialSearch function
  depends on the number of elements in the array (size) and
  the value that we look for.

  NOTATION O(n)
*/
function sequentialSearch(array: number[], value: number, callFn = defaultEquals): number {
  let cost = 0;
  for (let i = 0; i < array.length; i++) {
    cost++;
    if (callFn(value, array[i])) {
      // {1}
      return i;
    }
  }
  console.log(`cost for this function with input size ${array.length} is ${cost}`);
  return -1;
}
sequentialSearch([10, 20, 30], 20);

/*
  The Code whose complexity is O(n) has ONLY ONE FOR LOOP,
  while, for O(n2), there are TWO NESTED FOR LOOPS. If the algorithm has
  three loops for iterating through the array, it will probably have a
  complexity of O(n3).

  NOTATION O(n²)
*/
function bubbleSort(array: number[], compareFn = defaultCompare) {
  const { length } = array;
  let cost = 0;

  for (let i = 0; i < length; i++) {
    cost++;
    for (let j = 0; j < length - 1; j++) {
      cost++;
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  console.log(`cost for bubbleSort with input size ${length} is ${cost}`);
  return array;
}
bubbleSort([10, 20, 30]);
