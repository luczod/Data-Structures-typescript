import LinkedList from '../../Linked-List/list-single/linked-list-class';
import { ValuePair } from '../dictionary/value-pair-class';

/* In a dictionary, the ideal would be to store keys of type string and any
value type (from primitive types like numbers, a string, to objects
complexes). */

export type TDictionary<K, V> = { [key: string]: ValuePair<K, V> };
export type THashTable<K, V> = { [key: number]: ValuePair<K, V> };
export type THashTableChaining<K, V> = { [key: number]: LinkedList<ValuePair<K, V>> };
