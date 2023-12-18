import { Deque } from '../Deque/dequeClass';

/* As long as we have elements on the deque (if only
one character, it will be a palindrome) */

function palindromeChecker(aString: string) {
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false;
  }

  const deque = new Deque<string>();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');

  let isEqual = true;
  let firstChar: string, lastChar: string;

  for (let i = 0; i < lowerString.length; i++) {
    // enqueue
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront(); // dequeue method of the Queue class
    lastChar = deque.removeBack(); // pop method of the Stack class

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log('a:', palindromeChecker('a'));
console.log('aa:', palindromeChecker('aa'));
console.log('arara:', palindromeChecker('arara'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
