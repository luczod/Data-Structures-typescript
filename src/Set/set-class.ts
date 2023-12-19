import { ISet } from './set';
// type setObj<T> = { [key: number]: T };

export class SetCls<T> implements ISet {
  private items: any;

  constructor() {
    this.items = {};
  }

  has(element: T): boolean {
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(...elements: T[]): void {
    elements.forEach((element) => this.addSingle(element));
  }

  private addSingle(element: T): boolean {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element: T): boolean {
    if (this.has(element)) {
      delete this.items[element]; //items is object
      return true;
    }
    return false;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  values(): T[] {
    return Object.values(this.items);
  }

  union(otherSet: this): Set<T> {
    const unionSet = new Set<T>();
    // values from current class
    this.values().forEach((value) => unionSet.add(value));
    // values from parameter
    otherSet.values().forEach((value) => unionSet.add(value));

    return unionSet;
  }

  sizeLegacy(): number {
    let count = 0;
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  valuesLegacy(): T[] {
    const values = [];
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
}
