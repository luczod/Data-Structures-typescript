import { Queue } from '../Queue/queueClass';

// Circular queue
// enqueue and dequeue several times according to the number(num) received
export function hotPotato<T>(elementsList: T[], num: number) {
  const queue = new Queue<T>();
  const elimitatedList: T[] = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato<string>(names, 10);

result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);
