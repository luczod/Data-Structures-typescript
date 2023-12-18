import { IDeque } from './deque';
import { queueObj } from '../Queue/queueClass';

export class Deque<T> implements IDeque {
  private count: number = 0;
  private lowestCount: number = 0;
  private items: queueObj<T> = {};

  addFront(element: T): void {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }

      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element: T): void {
    // enqueue method of the Queue class
    this.items[this.count] = element;
    this.count++;
  }

  removeFront(): T | undefined {
    // dequeue method of the Queue class
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    // console.log(result);

    return result;
  }

  removeBack(): T | undefined {
    // pop method of the Stack class
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    // console.log(result);

    return result;
  }

  peekFront(): T {
    // peek method of the Queue class
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack(): T {
    // Stack class peek method
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    // console.log(this.count === 0);
    // return this.size() === 0;
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear(): void {
    /* this.items = {};
    this.count = 0;
    this.lowestCount = 0; */

    while (!this.isEmpty()) {
      this.removeFront();
    }
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`; // only one element
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}
