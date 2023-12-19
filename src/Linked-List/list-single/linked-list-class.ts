import { defaultEquals } from '../utils';
import { Node } from '../models/linked-list-models';
import { ILinkedList } from './linked-list';
import { TEqualsFunction } from '../types';

export default class LinkedList<T> implements ILinkedList {
  protected count: number = 0;
  protected head: Node<T> | undefined;

  constructor(protected equalsFn: TEqualsFunction<T> = defaultEquals) {}

  push(element: T): void {
    const node = new Node(element);
    let current: Node<T> | undefined;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }

      current.next = node;
    }

    this.count++;
  }

  removeAt(index: number): T | undefined {
    // checks values out of range
    if (index >= 0 && index < this.count) {
      let current = this.head;

      // remove the first item
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  getElementAt(index: number): Node<T> | undefined {
    if (index >= 0 && index <= this.count) {
      let node = this.head;

      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }

      return node;
    }
    return undefined;
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const newElement = new Node<T>(element);
      // add in the first position
      if (index === 0) {
        const proximate = this.head; // index 0

        newElement.next = proximate;
        this.head = newElement;
      } else {
        const previous = this.getElementAt(index - 1);
        const proximate = previous.next;

        newElement.next = proximate;
        previous.next = newElement;
      }

      this.count++; // size of linked list
      return true;
    }

    return false;
  }

  indexOF(element: T): number {
    let current = this.head; // index 0

    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i; // position
      }
      current = current.next;
    }
    return -1;
  }

  remove(element: T): T {
    const index = this.indexOF(element);
    return this.removeAt(index);
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  getHead(): Node<T> {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.head.element}`;
    let proximate = this.head.next;

    for (let i = 1; i < this.size() && proximate != null; i++) {
      objString = `${objString},${proximate.element}`;
      proximate = proximate.next; // go to next element
    }

    return objString;
  }
}
