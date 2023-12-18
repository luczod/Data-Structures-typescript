import { StackObj } from '../stack-object';
/*
Converting decimal numbers to binary
To convert a decimal number to a binary representation, we can
divide the number by 2 (binary is a base 2 number system) until the division result is 0.
*/

function baseConverter(decNumber: number, base: number) {
  const remStack = new StackObj<number>();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem: number;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return 'the base is invalid';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; // {7}
  }

  console.log(baseString);

  return baseString;
}

console.log(baseConverter(100345, 45));
baseConverter(100345, 8);
baseConverter(100345, 16);
baseConverter(100345, 35);
