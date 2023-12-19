import { DoublyLinkedList } from '../list-double/linked-list-double-class';

export default class StackLinkedList<T> {
  private items: DoublyLinkedList<T>; // O(1)

  constructor() {
    this.items = new DoublyLinkedList<T>();
  }

  push(...elements: T[]): void {
    elements.forEach((element) => this.items.push(element));
  }

  pop(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items.removeAt(this.size() - 1);
    return result;
  }

  peek(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1).element;
  }

  isEmpty(): boolean {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}
