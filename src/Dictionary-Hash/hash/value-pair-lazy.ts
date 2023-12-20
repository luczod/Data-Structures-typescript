import { ValuePair } from '../dictionary/value-pair-class';

export class ValuePairLazy<K, V> extends ValuePair<K, V> {
  constructor(
    public key: K,
    public value: V,
    public isDeleted = false,
  ) {
    super(key, value);
  }
}
