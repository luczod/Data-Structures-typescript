import { Deque } from './dequeClass';

/* to Deque classes, we can call operations from the Stack and
Queue.  */

const deque = new Deque<string>();
console.log(deque.isEmpty());

deque.addBack('John');
deque.addBack('Jane');
deque.addBack('Jack');
deque.addBack('Jackie');
console.log(deque.toString());
deque.removeFront(); // remove John
console.log(deque.toString());
deque.removeBack(); // jackie out
console.log(deque.toString()); // Jane, Jack
deque.addFront('John'); // John is back
console.log(deque.toString()); // John, Jane, Jack
