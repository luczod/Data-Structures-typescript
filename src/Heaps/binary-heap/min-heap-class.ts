import { Compare, TCompareFunction } from '../../types';
import { defaultCompare, swap } from '../../utils';

export class MinHeap<T> {
  protected heap: T[] = [];

  constructor(protected compareFn: TCompareFunction<T> = defaultCompare) {}

  private getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  private getParentIndex(index: number): number {
    if (index === 0) {
      return undefined;
    }

    return Math.floor((index - 1) / 2);
  }

  insert(value: T): boolean {
    if (value != null) {
      const index = this.heap.length;
      this.heap.push(value);
      this.siftUp(index);

      return true;
    }

    return false;
  }

  extract(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.shift();
    }

    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);

    return removedValue;
  }

  heapify(array: T[]): T[] {
    if (array) {
      this.heap = array;
    }

    const maxIndex = Math.floor(this.size() / 2) - 1;

    for (let i = 0; i <= maxIndex; i++) {
      this.siftDown(i);
    }

    return this.heap;
  }

  findMinimum(): T | undefined {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() <= 0;
  }

  getAsArray(): T[] {
    return this.heap;
  }

  clear() {
    this.heap = [];
  }

  private siftDown(index: number): void {
    let element = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();

    if (
      left < size &&
      this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left;
    }

    if (
      right < size &&
      this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right;
    }

    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  }

  private siftUp(index: number): void {
    let parent = this.getParentIndex(index);

    while (
      index > 0 &&
      this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
}
