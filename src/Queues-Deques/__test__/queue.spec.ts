import { beforeEach, describe, expect, it } from 'vitest';
import { Queue } from '../Queue/queueClass';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('starts empty', () => {
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
  });

  it('enqueues elements', () => {
    queue.enqueue(1);
    expect(queue.size()).toEqual(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(2);

    expect(queue.isEmpty()).toEqual(false);
  });

  it('dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(undefined);
  });

  it('implements FIFO logic', () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(undefined);
  });

  it('allows to peek at the front element in the queue without dequeuing it', () => {
    expect(queue.peek()).toEqual(undefined);

    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);

    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);

    queue.dequeue();
    expect(queue.peek()).toEqual(2);
  });

  it('returns the correct size', () => {
    expect(queue.size()).toEqual(0);
    queue.enqueue(1);
    expect(queue.size()).toEqual(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(2);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);

    queue.dequeue();
    expect(queue.size()).toEqual(1);
    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    expect(queue.isEmpty()).toEqual(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);
    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);

    queue.dequeue();
    expect(queue.isEmpty()).toEqual(false);
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('clears the queue', () => {
    queue.clear();
    expect(queue.isEmpty()).toEqual(true);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toEqual(false);

    queue.clear();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    expect(queue.toString()).toEqual('');

    queue.enqueue(1);
    expect(queue.toString()).toEqual('1');

    queue.enqueue(2);
    expect(queue.toString()).toEqual('1, 2');

    queue.clear();
    expect(queue.toString()).toEqual('');

    const queueString = new Queue<string>();
    queueString.enqueue('elem1');
    expect(queueString.toString()).toEqual('elem1');

    queueString.enqueue('elem2');
    expect(queueString.toString()).toEqual('elem1, elem2');
  });

  it('returns toString objects', () => {
    class MyObj {
      constructor(
        public el1: any,
        public el2: any,
      ) {}
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const queueMyObj = new Queue<MyObj>();
    expect(queueMyObj.toString()).toEqual('');

    queueMyObj.enqueue(new MyObj(1, 2));
    expect(queueMyObj.toString()).toEqual('1|2');

    queueMyObj.enqueue(new MyObj(3, 4));
    expect(queueMyObj.toString()).toEqual('1|2, 3|4');
  });
});
