import { numbers } from './base';

// @@iterator
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

iterator = numbers[Symbol.iterator]();
console.log();
for (const n of iterator) {
  console.log(n);
}

const aEntries = numbers.entries(); // obtém um iterador de chave/valor
console.log(aEntries.next().value); // [0, 1] - posição 0, valor 1
console.log(aEntries.next().value); // [1, 2] - posição 1, valor 2
console.log(aEntries.next().value);

const numbers2 = Array.from(numbers);
console.log(numbers2);

const ones = Array(6).fill(1);

const copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3); // [4,5,6,4,5,6]
