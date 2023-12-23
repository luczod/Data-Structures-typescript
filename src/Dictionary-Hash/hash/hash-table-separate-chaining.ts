import LinkedList from '../../Linked-List/list-single/linked-list-class';
import { ValuePair } from '../dictionary/value-pair-class';
import { THashTableChaining } from '../../types';
import { defaultToString } from '../../utils';
// avoid collisions

export class HashTableSeparateChaining<K, V> {
  private table: THashTableChaining<K, V> = {};

  constructor(public toStrFn = defaultToString) {}

  private loseloseHashCode(key: unknown) {
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i); // ASCII
    }

    return hash % 37;
  }

  hashCode(key: unknown) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new LinkedList(); // initial class empty
      }

      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead(); // first position

      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }

    return undefined;
  }

  remove(key: K): boolean {
    const position = this.hashCode(key);
    const linkedList = this.table[position];

    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead(); // first position

      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);

          if (linkedList.isEmpty()) {
            delete this.table[position]; // remove empty list from table
          }

          return true;
        }
        current = current.next; // got to next element list
      }
    }

    return false;
  }

  getTable(): THashTableChaining<K, V> {
    return this.table;
  }

  size(): number {
    // return Object.keys(this.table).length;
    let count = 0;
    Object.values(this.table).forEach((linkedList) => (count += linkedList.size()));
    return count;
  }

  clear(): void {
    this.table = {};
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;

    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }

    return objString;
  }

  show(key: K): void {
    console.log(this.hashCode(key) + ` - ${key}`);
  }
}
