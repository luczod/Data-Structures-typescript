import { HashTable } from './hash-table';

const hash = new HashTable<string, string>();
hash.put('Daenerys', 'khaleesi@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

hash.show('Daenerys');
hash.show('John');
hash.show('Tyrion');

console.log(hash.get('Daenerys'));
console.log(hash.get('Loiane'));

hash.remove('Daenerys');
console.log(hash.get('Daenerys'));
