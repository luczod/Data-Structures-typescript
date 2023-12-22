import { TCompareFunction } from 'src/types';
import { defaultCompare, swap } from '../../utils';

// Algorithms Heapshort
export default function heapSort<T>(array: T[], compareFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, compareFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

function buildMaxHeap<T>(array: T[], compareFn = defaultCompare) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

// heapify
function heapify<T>(array: T[], index: number, heapSize: number, compareFn: TCompareFunction<T>) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }

  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}
