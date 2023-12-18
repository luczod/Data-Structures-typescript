import { numbers, numbers2 } from './base';

numbers.push(52);

console.log(numbers.indexOf(52));
console.log(numbers.indexOf(100)); // -1  the value does not exist in the array

function multipleOf13(element, index, array) {
  return element % 13 == 0;
}
console.log(numbers2.find(multipleOf13)); // return value
console.log(numbers2.findIndex(multipleOf13)); // return first index or undefined
console.log(numbers2.slice(10));
