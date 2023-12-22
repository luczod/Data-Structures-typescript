import { MinHeap } from './min-heap-class';

const heap = new MinHeap<number>();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1
console.log('Extract minimum: ', heap.extract());
