import { Queue } from './queueClass';

const queue = new Queue<string>();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jane');
queue.enqueue('Jack');
console.log(queue.toString());
console.log();

console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue(); // remove John (0)
queue.dequeue(); // remove Jane (1)
console.log(queue.toString());
