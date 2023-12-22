import { ValuePair } from '../Dictionary-Hash/dictionary/value-pair-class';
import LinkedList from '../Linked-List/list-single/linked-list-class';

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,
}

export type strnum = string | number;
export type TCallfn = (vertex: strnum) => unknown;

export enum Colors {
  RED = 0,
  BLACK = 1,
}

export type TEqualsFunction<T> = (a: T, b: T) => boolean;
export type TCompareFunction<T> = (a: T, b: T) => number;

/* In a dictionary, the ideal would be to store keys of type string and any
value type (from primitive types like numbers, a string, to objects
complexes). */

export type TDictionary<K, V> = { [key: string]: ValuePair<K, V> };
export type THashTable<K, V> = { [key: number]: ValuePair<K, V> };
export type THashTableChaining<K, V> = { [key: number]: LinkedList<ValuePair<K, V>> };
