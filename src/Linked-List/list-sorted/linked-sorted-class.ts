import LinkedList from '../list-single/linked-list-class';
import { defaultEquals, defaultCompare } from '../utils';
import { TCompareFunction, TEqualsFunction } from '../types';

export class CircularLinkedList<T> extends LinkedList<T> {
  constructor(
    protected equalsFn: TEqualsFunction<T> = defaultEquals,
    protected compareFn: TCompareFunction<T> = defaultCompare,
  ) {
    super(equalsFn); // call constructor from parent class
  }
}
