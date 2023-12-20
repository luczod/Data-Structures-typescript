import { IStack } from './stack';

export class StackArr<T> implements IStack {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  pop(): T {
    return this.items.pop();
  }

  isEmpty(): boolean {
    console.log(this.items.length === 0);
    return this.items.length === 0;
  }

  size(): number {
    console.log(this.items.length);
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): T[] {
    return this.items;
  }

  toString(): string {
    return this.items.toString();
  }
}
