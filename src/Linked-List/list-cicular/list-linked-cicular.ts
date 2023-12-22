import LinkedList from '../list-single/linked-list-class';
import { Node } from '../../models/linked-list-models';
import { TEqualsFunction } from '../../types';
import { defaultEquals } from '../../utils';

export class CircularLinkedList<T> extends LinkedList<T> {
  constructor(protected equalsFn: TEqualsFunction<T> = defaultEquals) {
    super(equalsFn); // call constructor from parent class
  }

  push(element: T): void {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }

    // set node.next to head - to have circular list
    node.next = this.head;

    this.count++;
  }

  insert(element: T, index: number): boolean {
    if (index >= 0 && index <= this.count) {
      const node = new Node<T>(element);
      let current = this.head; // first elemet

      if (index === 0) {
        if (this.head == null) {
          // NEW
          this.head = node;
          node.next = this.head;
        } else {
          // last item
          node.next = current; // points to first element
          current = this.getElementAt(this.size()); // NEW
          this.head = node;
          current.next = this.head; // NEW
        }
        // NEW
      } else {
        // middle item
        const previous = this.getElementAt(index - 1);

        node.next = previous.next; // New
        previous.next = node;
      }

      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index: number): T | undefined {
    if (index >= 0 && index < this.count) {
      let current = this.head; // first elemet

      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head; // first elemet

          current = this.getElementAt(this.size() - 1); // previus

          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}
