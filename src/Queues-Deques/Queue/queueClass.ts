import { IQueue } from './queue';

export type queueObj<T> = { [key: number]: T };

export class Queue<T> implements IQueue {
  private count: number = 0;
  private lowestCount: number = 0;
  private items: queueObj<T> = {};

  enqueue(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;

    // console.log(result);

    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
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
      this.dequeue();
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
