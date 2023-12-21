import { StackObj } from '../stack-object';
/*
Converting decimal numbers to binary
To convert a decimal number to a binary representation, we can
divide the number by 2 (binary is a base 2 number system) until the division result is 0.
*/

export function decimalToBinary(decNumber: number) {
  const remStack = new StackObj();
  let number = decNumber;
  let rem: number;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  console.log(binaryString);

  return binaryString;
}

decimalToBinary(50);
decimalToBinary(233);
decimalToBinary(1000);
