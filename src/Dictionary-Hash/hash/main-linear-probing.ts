import { HashTableLinearProbing } from './hash-table-linear-probing';

const hashTable = new HashTableLinearProbing<number, number>();

console.log(hashTable.hashCode(1));
console.log(hashTable.hashCode(10));
console.log(hashTable.hashCode(100));
console.log(hashTable.hashCode(1000));
