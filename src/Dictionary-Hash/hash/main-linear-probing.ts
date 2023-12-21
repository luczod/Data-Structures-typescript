import { HashTableLinearProbing } from './hash-table-linear-probing';

const hash = new HashTableLinearProbing<string, string>();
hash.put('Ygritte');
hash.put('Athelstan');
hash.put('Jamie');

hash.show('Ygritte');
hash.show('Athelstan');
hash.show('Jamie');
console.log(hash.size());
