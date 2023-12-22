import { MinHeap } from './min-heap-class';
import { MaxHeap } from './max-heap-class';

console.log('------MinHeap-------');
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

console.log('------MaxHeap-------');
const maxHeap = new MaxHeap<number>();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap min value: ', maxHeap.findMinimum()); // 5
