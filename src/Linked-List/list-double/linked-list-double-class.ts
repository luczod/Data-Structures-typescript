import LinkedList from '../list-single/linked-list-class';
import { DoublyNode, Node } from '../../models/linked-list-models';
import { TEqualsFunction } from '../../types';
import { defaultEquals } from '../../utils';

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected head: DoublyNode<T> | undefined; // overwrite
  protected tail: DoublyNode<T> | undefined;

  constructor(protected equalsFn: TEqualsFunction<T> = defaultEquals) {
    super(equalsFn); // call constructor from parent class
  }

  push(element: T): void {
    const node = new DoublyNode(element);

    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode<T>(element);
      let current = this.head;

      if (index === 0) {
        if (this.head == null) {
          // NEW
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node; // NEW
          this.head = node;
        }
        // NEW
      } else if (index === this.count) {
        current = this.tail; // last item
        current.next = node;

        node.prev = current;
        this.tail = node;
      } else {
        // middle item
        const previous = this.getElementAt(index - 1);

        current = previous.next;
        node.next = current;
        previous.next = node;

        current.prev = node; // NEW
        node.prev = previous; // NEW
      }

      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let current = this.head; // first positons
      if (index === 0) {
        this.head = current.next;

        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
        // last item – New
      } else if (index === this.count - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
        // middle item
      } else {
        current = this.getElementAt(index);
        const previous = current.prev;

        previous.next = current.next;
        current.next.prev = previous; // New
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element: T): number {
    let current = this.head;
    let index = 0;

    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  getHead(): DoublyNode<T> {
    return this.head;
  }

  getTail(): DoublyNode<T> {
    return this.tail;
  }

  clear(): void {
    super.clear();
    this.tail = undefined;
  }

  toString(): string {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;

    while (current != null) {
      objString = `${objString}, ${current.element}`;
      current = current.next; // next value
    }
    return objString;
  }

  inverseToString(): string {
    if (this.tail == null) {
      return '';
    }

    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;

    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev; // prev value
    }
    return objString;
  }
}
