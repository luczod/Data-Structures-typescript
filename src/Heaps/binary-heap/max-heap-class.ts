import { TCompareFunction } from '../../types';
import { defaultCompare, reverseCompare } from '../../utils';
import { MinHeap } from './min-heap-class';

export class MaxHeap<T> extends MinHeap<T> {
  constructor(protected compareFn: TCompareFunction<T> = defaultCompare) {
    super(compareFn);
    this.compareFn = reverseCompare(compareFn);
  }
}
