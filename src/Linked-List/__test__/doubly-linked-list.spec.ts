import { beforeEach, describe, expect, it } from 'vitest';
import { Node } from '../models/linked-list-models';
import MyObj from '../__mocks__';
import { DoublyLinkedList } from '../list-double/linked-list-double-class';

describe('Doubly-Linked-List', () => {
  let list: DoublyLinkedList<number>;
  let min: number;
  let max: number;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
    min = 1;
    max = 3;
  });

  function pushesElements() {
    for (let i = min; i <= max; i++) {
      list.push(i);
    }
  }

  function verifyList() {
    let current = list.getHead();

    for (let i = min; i <= max && current; i++) {
      expect(current).not.toEqual(undefined);
      if (current) {
        expect(current.element).not.toEqual(undefined);
        expect(current.element).toEqual(i);

        if (i < max) {
          expect(current.next).not.toEqual(undefined);
          if (current.next) {
            expect(current.next.element).toEqual(i + 1);
          }
        } else {
          expect(current.next).not.toEqual('undefined');
        }

        current = current.next;
      }
    }
  }

  it('starts empty', () => {
    expect(list.size()).toEqual(0);
    expect(list.isEmpty()).toEqual(true);
    expect(list.getHead()).toEqual(undefined);
  });

  it('pushes elements', () => {
    pushesElements();
    verifyList();
  });

  it('returns element at specific index: invalid position', () => {
    // list is empty
    expect(list.getElementAt(3)).toEqual(undefined);
  });

  it('returns element at specific index', () => {
    let node: Node<number>;

    pushesElements();

    for (let i = min; i <= max; i++) {
      node = list.getElementAt(i - 1);
      expect(node).not.toEqual('undefined');

      if (node) {
        expect(node.element).toEqual(i);
      }
    }
  });

  it('inserts elements first position empty list', () => {
    const element = 1;
    max = element;

    expect(list.insert(element, 0)).toEqual(true);
    verifyList();
  });

  it('inserts elements first position not empty list', () => {
    max = 2;
    expect(list.insert(max, 0)).toEqual(true);

    expect(list.insert(min, 0)).toEqual(true);

    verifyList();
  });

  it('inserts elements invalid position empty list', () => {
    expect(list.insert(1, 1)).toEqual(false);
  });

  it('inserts elements invalid position not empty list', () => {
    const element = 1;
    expect(list.insert(element, 0)).toEqual(true);
    expect(list.insert(element, 2)).toEqual(false);
  });

  it('inserts elements in the middle of list', () => {
    expect(list.insert(3, 0)).toEqual(true);
    expect(list.insert(1, 0)).toEqual(true);
    expect(list.insert(2, 1)).toEqual(true);
    verifyList();
  });

  it('inserts elements at the end of list', () => {
    max = 5;

    for (let i = min; i <= max; i++) {
      expect(list.insert(i, i - 1)).toEqual(true);
    }

    verifyList();
  });

  it('returns index of elements', () => {
    let index: number;

    pushesElements();

    for (let i = min; i <= max; i++) {
      index = list.indexOF(i);
      expect(index).toEqual(i - 1);
    }

    expect(list.indexOF(max + 2)).toEqual(-1);
  });

  it('removes valid elements', () => {
    let element;

    pushesElements();

    for (let i = min; i <= max; i++) {
      element = list.remove(i);
      expect(element).not.toEqual('undefined');
      expect(element).toEqual(i);
    }
  });

  it('removes invalid elements', () => {
    let element;

    pushesElements();

    for (let i = max + 2; i <= max + 4; i++) {
      element = list.remove(i);
      expect(element).toEqual(undefined);
    }
  });

  it('removes element invalid position empty list', () => {
    let element;

    for (let i = min; i <= max; i++) {
      element = list.removeAt(i - 1);
      expect(element).toEqual(undefined);
    }
  });

  it('removes element invalid position not empty list', () => {
    let element;

    pushesElements();

    for (let i = max + 2; i <= max + 4; i++) {
      element = list.removeAt(i);
      expect(element).toEqual(undefined);
    }
  });

  it('removes first element list single element', () => {
    const value = 1;
    list.push(value);

    const element = list.removeAt(0);
    expect(element).not.toEqual('undefined');
    expect(element).toEqual(value);

    expect(list.getHead()).toEqual(undefined);
    expect(list.isEmpty()).toEqual(true);
  });

  it('removes first element list multiple elements', () => {
    pushesElements();

    const element = list.removeAt(0);
    expect(element).not.toEqual('undefined');
    expect(element).toEqual(min);

    min = 2;
    verifyList();
  });

  it('removes element from middle of list', () => {
    pushesElements(); // 1, 2, 3

    const element = list.removeAt(1); // element 2
    expect(element).not.toEqual('undefined');
    expect(element).toEqual(2);

    // list needs to be [1, 3]
    let current = list.getHead();

    // element 1
    expect(current).not.toEqual('undefined');
    if (current) {
      expect(current.element).not.toEqual('undefined');
      expect(current.element).toEqual(1);
      expect(current.next).not.toEqual('undefined');
      if (current.next) {
        expect(current.next.element).toEqual(3);
        current = current.next;
      }
    }

    // element 3
    expect(current).not.toEqual('undefined');
    if (current) {
      expect(current.element).not.toEqual('undefined');
      expect(current.element).toEqual(3);
      expect(current.next).toEqual(undefined);
    }
  });

  it('removes element from end of list', () => {
    let element;

    pushesElements();

    const maxIndex = max;
    for (let i = maxIndex; i >= min; i--) {
      element = list.removeAt(i - 1);
      expect(element).not.toEqual('undefined');
      expect(element).toEqual(i);
      max--;
      verifyList();
    }
  });

  it('returns the head of the list', () => {
    expect(list.getHead()).toEqual(undefined);

    list.push(1);
    expect(list.getHead()).not.toEqual('undefined');
  });

  it('returns the correct size', () => {
    expect(list.size()).toEqual(0);

    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.size()).toEqual(i);
    }

    const size = max;
    for (let i = min; i <= max; i++) {
      list.remove(i);
      expect(list.size()).toEqual(size - i);
    }

    expect(list.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    expect(list.isEmpty()).toEqual(true);
    for (let i = min; i <= max; i++) {
      list.push(i);
      expect(list.isEmpty()).toEqual(false);
    }

    for (let i = min; i < max; i++) {
      list.remove(i);
      expect(list.isEmpty()).toEqual(false);
    }
    list.remove(max);
    expect(list.isEmpty()).toEqual(true);

    pushesElements();
    expect(list.isEmpty()).toEqual(false);

    list.clear();
    expect(list.isEmpty()).toEqual(true);
  });

  it('clears the list', () => {
    expect(list.size()).toEqual(0);
    list.clear();
    expect(list.size()).toEqual(0);
    pushesElements();
    expect(list.size()).toBeGreaterThan(0);
    list.clear();
    expect(list.size()).toEqual(0);
  });

  it('returns toString primitive types', () => {
    expect(list.toString()).toEqual('');

    list.push(1);
    expect(list.toString()).toEqual('1');

    list.push(2);
    expect(list.toString()).toEqual('1, 2');

    list.clear();
    expect(list.toString()).toEqual('');
  });

  it('returns toString primitive types: string', () => {
    const ds = new DoublyLinkedList<string>();
    ds.push('elem1');
    expect(ds.toString()).toEqual('elem1');

    ds.push('elem2');
    expect(ds.toString()).toEqual('elem1, elem2');
  });

  it('returns toString objects', () => {
    const ds = new DoublyLinkedList<MyObj>();
    expect(ds.toString()).toEqual('');

    ds.push(new MyObj(1, 2));
    expect(ds.toString()).toEqual('1|2');

    ds.push(new MyObj(3, 4));
    expect(ds.toString()).toEqual('1|2, 3|4');
  });
});
