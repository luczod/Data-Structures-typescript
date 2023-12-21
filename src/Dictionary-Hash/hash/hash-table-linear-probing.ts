import { ValuePair } from '../dictionary/value-pair-class';
import { THashTable } from '../types';
import { defaultToString } from '../utils';

export class HashTableLinearProbing<K extends V, V> {
  private table: THashTable<K, V> = {};

  constructor(public toStrFn = defaultToString) {}

  private djb2HashCode(key: unknown): number {
    const tableKey = this.toStrFn(key);
    let hash = 5381; // Prime number

    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i); // ASCII
    }

    return hash % 1013;
  }

  private loseloseHashCode(key: unknown) {
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
    return this.djb2HashCode(key);
  }

  hashCodeOld(key: unknown) {
    return this.loseloseHashCode(key);
  }

  put(key: K, value: V = key): boolean {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;

        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }

      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const position = this.hashCode(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }

      let index = position + 1;

      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }

    return undefined;
  }

  remove(key: K): boolean {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);

        return true;
      }

      let index = position + 1;

      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }

      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }

    return false;
  }

  getTable() {
    return this.table;
  }

  private verifyRemoveSideEffect(key: K, removedPosition: number): void {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;

    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);

      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];

        removedPosition = index;
      }

      index++;
    }
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
