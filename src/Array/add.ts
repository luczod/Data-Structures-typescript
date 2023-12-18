import { numbers } from './base';
numbers[numbers.length] = 10;

numbers.push(11);
numbers.push(12, 13);

// add in begin
Array.prototype.insertFirstPosition = function (value: number) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(3);

numbers.unshift(-2);
numbers.unshift(-4, -3);
console.log(numbers);
