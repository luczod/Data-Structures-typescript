import { numbers } from './base';

// reIndex
Array.prototype.reIndex = function <T>(myArray: []): T[] {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      // console.log(myArray[i]);
      newArray.push(myArray[i]);
    }
  }

  return newArray;
};

// remove first position manually and run reIndex
Array.prototype.removeFirstPosition = function <T>(): T[] {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  this.pop();
  return this.reIndex(this);
};

const numbers2 = Array.from(numbers);

numbers2.removeFirstPosition();
numbers2.shift();
console.log(numbers2);

// removing elements from a specific position
// delete numbers[0] => numbers[0] = undefined
numbers2.splice(5, 0, 52, 59, 60);
console.log(numbers2);
