import { describe, expect, it } from 'vitest';
import MyObj from '../__mocks__';
import { HashTableSeparateChaining } from '../hash/hash-table-separate-chaining';

describe('HashTableSeparateChaining', () => {
  const A = 'Jonathan';
  const B = 'Jamie';
  const C = 'Sue';

  it('starts empty', () => {
    const hashTable = new HashTableSeparateChaining<number, number>();
    expect(hashTable.size()).toEqual(0);
    expect(hashTable.isEmpty()).toEqual(true);
  });

  it('generates hashcode', () => {
    // numbers
    let hashTable: any = new HashTableSeparateChaining<number, number>();
    expect(hashTable.hashCode(1)).toEqual(1);
    expect(hashTable.hashCode(10)).toEqual(10);
    expect(hashTable.hashCode(100)).toEqual(100);
    expect(hashTable.hashCode(1000)).toEqual(1000);

    // strings
    hashTable = new HashTableSeparateChaining<string, number>();
    expect(hashTable.hashCode('1')).toEqual(12);
    expect(hashTable.hashCode('10')).toEqual(23);
    expect(hashTable.hashCode('100')).toEqual(34);
    expect(hashTable.hashCode('1000')).toEqual(8);
    expect(hashTable.hashCode('a')).toEqual(23);
    expect(hashTable.hashCode('A')).toEqual(28);
    expect(hashTable.hashCode('Aba')).toEqual(1);

    // objects
    hashTable = new HashTableSeparateChaining<MyObj, MyObj>();
    const myObjList = [];
    for (let i = 1; i <= 5; i++) {
      myObjList.push(new MyObj(i, i + 1));
    }
    expect(hashTable.hashCode(myObjList[0])).toEqual(1);
    expect(hashTable.hashCode(myObjList[1])).toEqual(3);
    expect(hashTable.hashCode(myObjList[2])).toEqual(5);
    expect(hashTable.hashCode(myObjList[3])).toEqual(7);
    expect(hashTable.hashCode(myObjList[4])).toEqual(9);
  });

  it('puts undefined and null keys and values', () => {
    const hashTable = new HashTableSeparateChaining<string, number>();

    expect(hashTable.put('undefined', undefined)).toEqual(false);
    expect(hashTable.get('undefined')).toEqual(undefined);

    expect(hashTable.put('undefined', 1)).toEqual(true);
    expect(hashTable.get('undefined')).toEqual(1);

    expect(hashTable.put('null', null)).toEqual(false);
    expect(hashTable.get('null')).toEqual(undefined);

    expect(hashTable.put('null', 1)).toEqual(true);
    expect(hashTable.get('null')).toEqual(1);

    hashTable.clear();
    expect(hashTable.put(undefined, undefined)).toEqual(false);
    expect(hashTable.get(undefined)).toEqual(undefined);

    expect(hashTable.put(undefined, 1)).toEqual(false);
    expect(hashTable.get(undefined)).toEqual(undefined);

    expect(hashTable.put(null, null)).toEqual(false);
    expect(hashTable.get(null)).toEqual(undefined);

    expect(hashTable.put(null, 1)).toEqual(false);
    expect(hashTable.get(null)).toEqual(undefined);
  });

  it('puts values with number key without collisions', () => {
    const min = 1;
    const max = 5;
    const size = max - min + 1;
    const hashTable = new HashTableSeparateChaining<number, number>();

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size);

    const table = hashTable.getTable();
    for (let i = min; i <= max; i++) {
      const linkedList = table[i];
      expect(linkedList.size()).toEqual(1);
      const valuePair = linkedList.getHead();
      expect(valuePair.element.key).toEqual(i);
      expect(valuePair.element.value).toEqual(i);
    }
  });

  it('puts values with string key without collisions', () => {
    const hashTable = new HashTableSeparateChaining<string, number>();

    expect(hashTable.put('1', 1)).toEqual(true);
    expect(hashTable.put('10', 10)).toEqual(true);
    expect(hashTable.put('100', 100)).toEqual(true);
    expect(hashTable.put('1000', 1000)).toEqual(true);

    const table = hashTable.getTable();

    let linkedList = table[12];
    expect(linkedList.size()).toEqual(1);
    let valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual('1');
    expect(valuePair.element.value).toEqual(1);

    linkedList = table[23];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual('10');
    expect(valuePair.element.value).toEqual(10);

    linkedList = table[34];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual('100');
    expect(valuePair.element.value).toEqual(100);

    linkedList = table[8];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual('1000');
    expect(valuePair.element.value).toEqual(1000);
  });

  it('puts values with object key without collisions', () => {
    const hashTable = new HashTableSeparateChaining<MyObj, MyObj>();

    const myObjList = [];
    for (let i = 1; i <= 5; i++) {
      myObjList.push(new MyObj(i, i + 1));
      expect(hashTable.put(myObjList[i - 1], myObjList[i - 1])).toEqual(true);
    }

    const table = hashTable.getTable();

    let linkedList = table[1];
    expect(linkedList.size()).toEqual(1);
    let valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual(myObjList[0]);
    expect(valuePair.element.value).toEqual(myObjList[0]);

    linkedList = table[3];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual(myObjList[1]);
    expect(valuePair.element.value).toEqual(myObjList[1]);

    linkedList = table[5];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual(myObjList[2]);
    expect(valuePair.element.value).toEqual(myObjList[2]);

    linkedList = table[7];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual(myObjList[3]);
    expect(valuePair.element.value).toEqual(myObjList[3]);

    linkedList = table[9];
    expect(linkedList.size()).toEqual(1);
    valuePair = linkedList.getHead();
    expect(valuePair.element.key).toEqual(myObjList[4]);
    expect(valuePair.element.value).toEqual(myObjList[4]);
  });

  it('removes elements without collisions', () => {
    const min = 1;
    const max = 5;
    const size = max - min + 1;
    const hashTable = new HashTableSeparateChaining<number, number>();

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size);

    for (let i = min; i <= max; i++) {
      expect(hashTable.remove(i)).toEqual(true);
    }

    // elements do not exist
    for (let i = min; i <= max; i++) {
      expect(hashTable.remove(i)).toEqual(false);
    }

    expect(hashTable.isEmpty()).toEqual(true);
  });

  function addValuesCollision() {
    const hashTable = new HashTableSeparateChaining<string, string>();

    expect(hashTable.put(A, `${A}@email.com`)).toEqual(true);
    expect(hashTable.put(B, `${B}@email.com`)).toEqual(true);
    expect(hashTable.put(C, `${C}@email.com`)).toEqual(true);

    expect(hashTable.size()).toEqual(3);

    const expectedHash = 5;
    expect(hashTable.hashCode(A)).toEqual(expectedHash);
    expect(hashTable.hashCode(B)).toEqual(expectedHash);
    expect(hashTable.hashCode(C)).toEqual(expectedHash);

    expect(hashTable.getTable()[expectedHash].size()).toEqual(3);

    return hashTable;
  }

  function removeWithCollision(a: string, b: string, c: string) {
    const hashTable = addValuesCollision();

    expect(hashTable.remove(a)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).not.toEqual('undefined');
    expect(hashTable.get(c)).not.toEqual('undefined');

    expect(hashTable.remove(b)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).not.toEqual('undefined');

    expect(hashTable.remove(c)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).toEqual(undefined);

    expect(hashTable.isEmpty()).toEqual(true);
  }

  it('removes elements with collisions', () => {
    // test all possibilities for removal
    removeWithCollision(A, B, C);
    removeWithCollision(A, C, B);
    removeWithCollision(B, A, C);
    removeWithCollision(B, C, A);
    removeWithCollision(C, A, B);
    removeWithCollision(C, B, A);
  });

  it('returns toString primitive types without collisions', () => {
    const hashTable = new HashTableSeparateChaining<number, number>();

    expect(hashTable.toString()).toEqual('');

    hashTable.put(1, 1);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]}');

    hashTable.put(2, 2);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]},{2 => [#2: 2]}');

    hashTable.clear();
    expect(hashTable.toString()).toEqual('');
  });

  it('returns toString primitive types without collisions', () => {
    const hashTable = new HashTableSeparateChaining<string, number>();

    hashTable.put('el1', 1);
    expect(hashTable.toString()).toEqual('{36 => [#el1: 1]}');

    hashTable.put('el2', 2);
    expect(hashTable.toString()).toEqual('{0 => [#el2: 2]},{36 => [#el1: 1]}');
  });

  it('returns toString objects without collisions', () => {
    const hashTable = new HashTableSeparateChaining<MyObj, MyObj>();

    let myObj = new MyObj(1, 2);
    hashTable.put(myObj, myObj);
    expect(hashTable.toString()).toEqual('{1 => [#1|2: 1|2]}');

    myObj = new MyObj(3, 4);
    hashTable.put(myObj, myObj);
    expect(hashTable.toString()).toEqual('{1 => [#1|2: 1|2]},{5 => [#3|4: 3|4]}');
  });

  it('returns toString with collisions', () => {
    const hashTable = new HashTableSeparateChaining<number, number>();

    expect(hashTable.toString()).toEqual('');

    hashTable.put(1, 1);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]}');

    hashTable.put(2, 2);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]},{2 => [#2: 2]}');

    hashTable.put(1, 10);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1], [#1: 10]},{2 => [#2: 2]}');

    hashTable.clear();
    expect(hashTable.toString()).toEqual('');
  });
});
