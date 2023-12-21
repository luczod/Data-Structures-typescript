import { ValuePair } from '../dictionary/value-pair-class';
import { THashTable } from '../types';
import { defaultToString } from '../utils';

export class HashTable<K, V> {
  private table: THashTable<K, V> = {};

  constructor(public toStrFn = defaultToString) {}

  private loseloseHashCode(key: unknown) {
    // not better , It's easy to have a collision
    if (typeof key === 'number') {
      return key;
    }

    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key: unknown) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);

      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key: K): boolean {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }

    return false;
  }

  getTable() {
    return this.table;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
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
