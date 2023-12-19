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

  intersection(otherSet: this): Set<T> {
    const intersectionSet = new Set<T>();

    const current = this.values(); // values from current class
    const otherValues = otherSet.values(); // values from parameter

    let biggerSet: T[] = current;
    let smallerSet: T[] = otherValues;

    if (otherValues.length > current.length) {
      biggerSet = otherValues;
      smallerSet = current;
    }

    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });

    return intersectionSet;
  }

  difference(otherSet: this): Set<T> {
    const differenceSet = new Set<T>();
    // values from current class
    this.values().forEach((value) => {
      // values from parameter
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });

    return differenceSet;
  }

  isSubsetOf(otherSet: this): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }

    const isSubset = this.values().every((value) => {
      if (!otherSet.has(value)) {
        return false;
      }
      return true;
    });

    return isSubset;
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
