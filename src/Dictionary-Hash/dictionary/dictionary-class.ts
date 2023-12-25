import { TDictionary } from '../../types';
import { defaultToString } from '../../utils';
import { IDictionaryCls } from './dictionary';
import { ValuePair } from './value-pair-class';

export default class Dictionary<K, V> implements IDictionaryCls {
  private table: TDictionary<K, V> = {};

  constructor(public toStrFn = defaultToString) {}

  hasKey(key: K | string): boolean {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key: K, value: V): boolean {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);

      return true;
    }
    return false;
  }

  remove(key: K): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];

      return true;
    }
    return false;
  }

  get(key: K): V | undefined {
    const valuePair = this.table[this.toStrFn(key)];

    return valuePair == null ? undefined : valuePair.value;
  }

  keyValues(): ValuePair<K, V>[] {
    /*   const valuePairs: K[] = [];
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]);
      }
    }
    return valuePairs; */
    return Object.values(this.table);
  }

  keys(): K[] {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values(): unknown[] {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  forEach(callBackFn: (key: K, value?: V) => any): void {
    const valuePairs = this.keyValues();

    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i].key, valuePairs[i].value);

      if (result === false) {
        break;
      }
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

    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;

    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }

    return objString;
  }
}
