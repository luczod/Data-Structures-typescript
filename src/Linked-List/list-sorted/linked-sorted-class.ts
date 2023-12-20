import LinkedList from '../list-single/linked-list-class';
import { defaultEquals, defaultCompare } from '../utils';
import { Compare, TCompareFunction, TEqualsFunction } from '../types';

export class SortedLinkedList<T> extends LinkedList<T> {
  constructor(
    protected equalsFn: TEqualsFunction<T> = defaultEquals,
    protected compareFn: TCompareFunction<T> = defaultCompare,
  ) {
    super(equalsFn); // call constructor from parent class
  }

  insertMult(...elements: T[]): void {
    elements.forEach((element) => this.insert(element));
  }

  insert(element: T, index: number = 0): boolean {
    if (this.isEmpty()) {
      return super.insert(element, 0); // first position
    }
    index = this.getIndexNextSortedElement(element); // compare indexes
    return super.insert(element, index);
  }

  getIndexNextSortedElement(element: T): number {
    let current = this.head; // first position

    for (let i = 0; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }

    return 0; // first position
  }
}
