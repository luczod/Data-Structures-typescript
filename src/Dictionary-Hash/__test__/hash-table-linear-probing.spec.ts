import { describe, expect, it } from 'vitest';
import MyObj from '../__mocks__';
import { HashTableLinearProbing } from '../hash/hash-table-linear-probing';

describe.skip('Hash-Table-Linear-Probing', () => {
  const A = 'Jonathan';
  const B = 'Jamie';
  const C = 'Sue';

  it('starts empty', () => {
    const hashTable = new HashTableLinearProbing<number, number>();
    expect(hashTable.size()).toEqual(0);
    expect(hashTable.isEmpty()).toEqual(true);
  });

  it('generates hashcode', () => {
    // numbers
    let hashTable: any = new HashTableLinearProbing<number, number>();
    expect(hashTable.hashCode(1)).toEqual(347);
    expect(hashTable.hashCode(10)).toEqual(356);
    expect(hashTable.hashCode(100)).toEqual(653);
    expect(hashTable.hashCode(1000)).toEqual(324);

    // objects
    hashTable = new HashTableLinearProbing<MyObj, MyObj>();
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
    const hashTable = new HashTableLinearProbing<string, number>();

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
    const hashTable = new HashTableLinearProbing<number, number>();

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size);

    const table = hashTable.getTable();
    for (let i = min; i <= max; i++) {
      expect(table[i].key).toEqual(i);
      expect(table[i].value).toEqual(i);
    }
  });

  it('puts values with string key without collisions', () => {
    const hashTable = new HashTableLinearProbing<string, number>();

    expect(hashTable.put('1', 1)).toEqual(true);
    expect(hashTable.put('10', 10)).toEqual(true);
    expect(hashTable.put('100', 100)).toEqual(true);
    expect(hashTable.put('1000', 1000)).toEqual(true);

    const table = hashTable.getTable();

    expect(table[12].key).toEqual('1');
    expect(table[12].value).toEqual(1);

    expect(table[23].key).toEqual('10');
    expect(table[23].value).toEqual(10);

    expect(table[34].key).toEqual('100');
    expect(table[34].value).toEqual(100);

    expect(table[8].key).toEqual('1000');
    expect(table[8].value).toEqual(1000);
  });

  it('puts values with object key without collisions', () => {
    const hashTable = new HashTableLinearProbing<MyObj, MyObj>();

    const myObjList = [];
    for (let i = 1; i <= 5; i++) {
      myObjList.push(new MyObj(i, i + 1));
      expect(hashTable.put(myObjList[i - 1], myObjList[i - 1])).toEqual(true);
    }

    const table = hashTable.getTable();

    expect(table[1].key).toEqual(myObjList[0]);
    expect(table[1].value).toEqual(myObjList[0]);

    expect(table[3].key).toEqual(myObjList[1]);
    expect(table[3].value).toEqual(myObjList[1]);

    expect(table[5].key).toEqual(myObjList[2]);
    expect(table[5].value).toEqual(myObjList[2]);

    expect(table[7].key).toEqual(myObjList[3]);
    expect(table[7].value).toEqual(myObjList[3]);

    expect(table[9].key).toEqual(myObjList[4]);
    expect(table[9].value).toEqual(myObjList[4]);
  });

  function addValuesCollision() {
    const hashTable = new HashTableLinearProbing<string, string>();

    expect(hashTable.put(A, `${A}@email.com`)).toEqual(true);
    expect(hashTable.put(B, `${B}@email.com`)).toEqual(true);
    expect(hashTable.put(C, `${C}@email.com`)).toEqual(true);
    expect(hashTable.size()).toEqual(3);

    const expectedHash = 5;
    expect(hashTable.hashCode(A)).toEqual(expectedHash);
    expect(hashTable.hashCode(B)).toEqual(expectedHash);
    expect(hashTable.hashCode(C)).toEqual(expectedHash);

    expect(hashTable.size()).toEqual(3);

    return hashTable;
  }

  it('puts values with collisions', () => {
    const min = 1;
    const max = 5;
    const size = max - min + 1;
    const hashTable = new HashTableLinearProbing<number, number>();

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size);

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i + 10)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size * 2);

    for (let i = min; i <= max; i++) {
      expect(hashTable.put(i, i + 100)).toEqual(true);
    }
    expect(hashTable.size()).toEqual(size * 3);

    const table = hashTable.getTable();
    for (let i = min; i <= max; i++) {
      expect(table[i].key).toEqual(i);
      expect(table[i].value).toEqual(i);

      expect(table[i + size].key).toEqual(i);
      expect(table[i + size].value).toEqual(i + 10);

      expect(table[i + size * 2].key).toEqual(i);
      expect(table[i + size * 2].value).toEqual(i + 100);
    }

    addValuesCollision();
  });

  it('removes elements without collisions', () => {
    const min = 1;
    const max = 5;
    const size = max - min + 1;
    const hashTable = new HashTableLinearProbing<number, number>();

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

  function removeWithCollision(a: string, b: string, c: string) {
    const hashTable = addValuesCollision();

    expect(hashTable.remove(a)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).to.not.equal(undefined);
    expect(hashTable.get(c)).to.not.equal(undefined);

    expect(hashTable.remove(b)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).to.not.equal(undefined);

    expect(hashTable.remove(c)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).toEqual(undefined);

    expect(hashTable.isEmpty()).toEqual(true);
  }

  it('removes elements with collisions: scenario 1', () => {
    // test all possibilities for removal
    removeWithCollision(A, B, C);
    removeWithCollision(A, C, B);
    removeWithCollision(B, A, C);
    removeWithCollision(B, C, A);
    removeWithCollision(C, A, B);
    removeWithCollision(C, B, A);
  });

  function addValuesCollision2() {
    const hashTable = new HashTableLinearProbing<string, string>();

    expect(hashTable.put(')', `parenthesis@email.com`)).toEqual(true);
    expect(hashTable.put(A, `${A}@email.com`)).toEqual(true);
    expect(hashTable.put('+', `plus@email.com`)).toEqual(true);
    expect(hashTable.put(B, `${B}@email.com`)).toEqual(true);
    expect(hashTable.put(',', `comma@email.com`)).toEqual(true);
    expect(hashTable.put(C, `${C}@email.com`)).toEqual(true);
    expect(hashTable.put('-', `minus@email.com`)).toEqual(true);
    expect(hashTable.put('0', `zero@email.com`)).toEqual(true);

    const expectedHash = 5;
    expect(hashTable.hashCode(A)).toEqual(expectedHash);
    expect(hashTable.hashCode(B)).toEqual(expectedHash);
    expect(hashTable.hashCode(C)).toEqual(expectedHash);
    expect(hashTable.hashCode(')')).toEqual(4);
    expect(hashTable.hashCode('+')).toEqual(6);
    expect(hashTable.hashCode(',')).toEqual(7);
    expect(hashTable.hashCode('-')).toEqual(8);
    expect(hashTable.hashCode('0')).toEqual(11);

    expect(hashTable.size()).toEqual(8);

    const table = hashTable.getTable();
    expect(table[4].key).toEqual(')');
    expect(table[5].key).toEqual(A);
    expect(table[6].key).toEqual('+');
    expect(table[7].key).toEqual(B);
    expect(table[8].key).toEqual(',');
    expect(table[9].key).toEqual(C);
    expect(table[10].key).toEqual('-');
    expect(table[11].key).toEqual('0');

    return hashTable;
  }

  function verifyOtherKeys(hashTable: HashTableLinearProbing<string, string>) {
    expect(hashTable.get(')')).to.not.equal(undefined);
    expect(hashTable.get('+')).to.not.equal(undefined);
    expect(hashTable.get(',')).to.not.equal(undefined);
    expect(hashTable.get('-')).to.not.equal(undefined);
    expect(hashTable.get('0')).to.not.equal(undefined);
  }

  function removeWithCollision2(a: string, b: string, c: string) {
    const hashTable = addValuesCollision2();

    expect(hashTable.remove(a)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).to.not.equal(undefined);
    expect(hashTable.get(c)).to.not.equal(undefined);
    verifyOtherKeys(hashTable);

    expect(hashTable.remove(b)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).to.not.equal(undefined);
    verifyOtherKeys(hashTable);

    expect(hashTable.remove(c)).toEqual(true);
    expect(hashTable.get(a)).toEqual(undefined);
    expect(hashTable.get(b)).toEqual(undefined);
    expect(hashTable.get(c)).toEqual(undefined);
    verifyOtherKeys(hashTable);
  }

  it('removes elements with collisions: scenario 2', () => {
    // test all possibilities for removal
    removeWithCollision2(A, B, C);
    removeWithCollision2(A, C, B);
    removeWithCollision2(B, A, C);
    removeWithCollision2(B, C, A);
    removeWithCollision2(C, A, B);
    removeWithCollision2(C, B, A);
  });

  it('returns toString primitive types without collisions', () => {
    const hashTable = new HashTableLinearProbing<number, number>();

    expect(hashTable.toString()).toEqual('');

    hashTable.put(1, 1);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]}');

    hashTable.put(2, 2);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]},{2 => [#2: 2]}');

    hashTable.clear();
    expect(hashTable.toString()).toEqual('');
  });

  it('returns toString primitive types without collisions', () => {
    const hashTable = new HashTableLinearProbing<string, number>();

    hashTable.put('el1', 1);
    expect(hashTable.toString()).toEqual('{36 => [#el1: 1]}');

    hashTable.put('el2', 2);
    expect(hashTable.toString()).toEqual('{0 => [#el2: 2]},{36 => [#el1: 1]}');
  });

  it('returns toString objects without collisions', () => {
    const hashTable = new HashTableLinearProbing<MyObj, MyObj>();

    let myObj = new MyObj(1, 2);
    hashTable.put(myObj, myObj);
    expect(hashTable.toString()).toEqual('{1 => [#1|2: 1|2]}');

    myObj = new MyObj(3, 4);
    hashTable.put(myObj, myObj);
    expect(hashTable.toString()).toEqual('{1 => [#1|2: 1|2]},{5 => [#3|4: 3|4]}');
  });

  it('returns toString with collisions', () => {
    const hashTable = new HashTableLinearProbing<number, number>();

    expect(hashTable.toString()).toEqual('');

    hashTable.put(1, 1);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]}');

    hashTable.put(2, 2);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]},{2 => [#2: 2]}');

    hashTable.put(1, 10);
    expect(hashTable.toString()).toEqual('{1 => [#1: 1]},{2 => [#2: 2]},{3 => [#1: 10]}');

    hashTable.clear();
    expect(hashTable.toString()).toEqual('');
  });
});
