import { Compare, TCompareFunction } from '../../types';
import { defaultCompare } from '../../utils';

export default class PriorityQueue<T> {
  private items: T[];

  constructor(
    private compareFn: TCompareFunction<T> = defaultCompare,
    private compare: Compare = Compare.LESS_THAN,
  ) {
    this.items = [];
  }

  enqueue(element: T): void {
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.compareFn(element, this.items[i]) === this.compare) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(element);
    }
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  clear(): void {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

  toString(): T[] | string {
    if (this.isEmpty()) {
      return '';
    }
    return this.items;
  }
}
