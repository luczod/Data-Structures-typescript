import { beforeEach, describe, expect, it } from 'vitest';
import { StackObj } from '../../Stack/stack-object';
import StackLinkedList from '../list-stack/list-linked-stack';

describe('Stack-Linked-List', () => {
  let stack: StackLinkedList<number>;

  beforeEach(() => {
    stack = new StackLinkedList<number>();
  });

  it('starts empty', () => {
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toEqual(true);
  });

  it('pushes elements', () => {
    stack.push(1);
    expect(stack.size()).toEqual(1);

    stack.push(2);
    expect(stack.size()).toEqual(2);

    expect(stack.isEmpty()).toEqual(false);
  });

  it('pops elements', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  it('implements LIFO logic', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toEqual(undefined);
  });

  it('allows to peek at the top element in the stack without popping it', () => {
    expect(stack.peek()).toEqual(undefined);

    stack.push(1);
    expect(stack.peek()).toEqual(1);

    stack.push(2);
    expect(stack.peek()).toEqual(2);

    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  it('returns the correct size', () => {
    expect(stack.size()).toEqual(0);
    stack.push(1);
    expect(stack.size()).toEqual(1);
    stack.push(2);
    expect(stack.size()).toEqual(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.pop();
    expect(stack.size()).toEqual(1);
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    expect(stack.isEmpty()).toEqual(false);
    stack.push(2);
    expect(stack.isEmpty()).toEqual(false);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.pop(); // 2
    expect(stack.isEmpty()).toEqual(false);
    stack.pop(); // 1
    expect(stack.isEmpty()).toEqual(true);
  });

  it('clears the stack', () => {
    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    expect(stack.toString()).toEqual('');

    stack.push(1);
    expect(stack.toString()).toEqual('1');

    stack.push(2);
    expect(stack.toString()).toEqual('1, 2');

    stack.clear();
    expect(stack.toString()).toEqual('');

    const stackString = new StackObj<string>();
    stackString.push('elem1');
    expect(stackString.toString()).toEqual('elem1');

    stackString.push('elem2');
    expect(stackString.toString()).toEqual('elem1, elem2');
  });

  it('returns toString objects', () => {
    class MyObj {
      constructor(
        public elem1: any,
        public elem2: any,
      ) {}
      toString() {
        return `${this.elem1.toString()}|${this.elem2.toString()}`;
      }
    }
    const stackMyObj = new StackObj<MyObj>();
    expect(stackMyObj.toString()).toEqual('');

    stackMyObj.push(new MyObj(1, 2));
    expect(stackMyObj.toString()).toEqual('1|2');
  });
});
