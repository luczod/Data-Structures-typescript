import { IStack } from './stack';

type stackObj<T> = { [key: number]: T };

export class StackObj<T> implements IStack {
  private items: stackObj<T> = {};
  private count: number = 0;

  push(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  size(): number {
    console.log(this.count);
    return this.count;
  }

  isEmpty(): boolean {
    // console.log(this.count === 0);
    return this.count === 0;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    // console.log(result);

    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear(): void {
    /*   this.items = {};
    this.count = 0; */

    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`; // only one element
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    console.log('objString', objString);

    return objString;
  }
}
