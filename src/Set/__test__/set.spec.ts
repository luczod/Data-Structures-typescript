import { beforeEach, describe, expect, it } from 'vitest';
import { SetCls } from '../set-class/set-class';

describe('Set', () => {
  let set: SetCls<number>;

  beforeEach(() => {
    set = new SetCls<number>();
  });

  it('starts empty', () => {
    expect(set.size()).toEqual(0);
    expect(set.isEmpty()).toEqual(true);
  });

  it('adds elements', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i);
      expect(set.size()).toEqual(i);
    }

    expect(set.isEmpty()).toEqual(false);
  });

  it('does not allow duplicated elements', () => {
    const setA = new SetCls<number>();
    setA.add(1, 2, 3, 4);
    setA.add(1, 2);

    expect(setA.values()).toEqual([1, 2, 3, 4]);
  });

  it('deletes elements', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i);
    }

    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toEqual(true);
    }

    // elements do not exist
    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toEqual(false);
    }

    expect(set.isEmpty()).toEqual(true);
  });

  it('returns if element exists', () => {
    for (let i = 1; i < 5; i++) {
      set.add(i);
      expect(set.has(i)).toEqual(true);
    }

    for (let i = 1; i < 5; i++) {
      expect(set.delete(i)).toEqual(true);
      expect(set.has(i)).toEqual(false);
    }
  });

  it('returns the correct size', () => {
    expect(set.size()).toEqual(0);

    for (let i = 1; i < 5; i++) {
      set.add(i);
      expect(set.size()).toEqual(i);
    }

    const max = 5;
    for (let i = 1; i < max; i++) {
      set.delete(i);
      expect(set.size()).toEqual(max - i - 1);
    }

    expect(set.size()).toEqual(0);
    expect(set.isEmpty()).toEqual(true);
  });

  it('returns if it is empty', () => {
    expect(set.isEmpty()).toEqual(true);

    for (let i = 1; i < 5; i++) {
      set.add(i);
      expect(set.isEmpty()).toEqual(false);
    }

    for (let i = 1; i < 5; i++) {
      set.delete(i);
      expect(set.isEmpty()).toEqual(!(i < 4));
    }

    expect(set.size()).toEqual(0);
    expect(set.isEmpty()).toEqual(true);
  });

  it('clears the set', () => {
    set.clear();
    expect(set.isEmpty()).toEqual(true);

    set.add(1);
    set.add(2);

    set.clear();
    expect(set.isEmpty()).toEqual(true);
  });

  function addValues(min: number, max: number) {
    set = new SetCls();

    for (let i = min; i <= max; i++) {
      set.add(i);
    }

    return set;
  }

  it('union between empty sets', () => {
    const set1 = new SetCls();
    const set2 = new SetCls();

    let setResult = set1.union(set2);
    expect(setResult.isEmpty()).toEqual(true);

    setResult = set2.union(set1);
    expect(setResult.isEmpty()).toEqual(true);
  });

  it('union between equal sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(1, 5);

    let setResult = set1.union(set2);
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.union(set1);
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('union between different sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(6, 10);

    let setResult = set1.union(set2);
    for (let i = 1; i <= 10; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.union(set1);
    for (let i = 1; i <= 10; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('union between sets with common values', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(3, 6);

    let setResult = set1.union(set2);
    for (let i = 1; i <= 6; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.union(set1);
    for (let i = 1; i <= 6; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('intersection between empty sets', () => {
    const set1 = new SetCls();
    const set2 = new SetCls();

    let setResult = set1.intersection(set2);
    expect(setResult.isEmpty()).toEqual(true);

    setResult = set2.intersection(set1);
    expect(setResult.isEmpty()).toEqual(true);
  });

  it('intersection between equal sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(1, 5);

    let setResult = set1.intersection(set2);
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.intersection(set1);
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('intersection different sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(6, 10);

    let setResult = set1.intersection(set2);
    expect(setResult.isEmpty()).toEqual(true);

    setResult = set2.intersection(set1);
    expect(setResult.isEmpty()).toEqual(true);
  });

  it('intersection between sets with common values', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(3, 6);

    let setResult = set1.intersection(set2);
    for (let i = 3; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.intersection(set1);
    for (let i = 3; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('difference between empty sets', () => {
    const set1 = new SetCls();
    const set2 = new SetCls();

    let setResult = set1.difference(set2);
    expect(setResult.isEmpty()).toEqual(true);

    setResult = set2.difference(set1);
    expect(setResult.isEmpty()).toEqual(true);
  });

  it('difference between equal sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(1, 5);

    let setResult = set1.difference(set2);
    expect(setResult.isEmpty()).toEqual(true);

    setResult = set2.difference(set1);
    expect(setResult.isEmpty()).toEqual(true);
  });

  it('difference different sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(6, 10);

    let setResult = set1.difference(set2);
    for (let i = 1; i <= 5; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.difference(set1);
    for (let i = 6; i <= 10; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('difference between sets with common values', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(3, 6);

    let setResult = set1.difference(set2);
    for (let i = 1; i <= 2; i++) {
      expect(setResult.has(i)).toEqual(true);
    }

    setResult = set2.difference(set1);
    for (let i = 6; i <= 6; i++) {
      expect(setResult.has(i)).toEqual(true);
    }
  });

  it('isSubsetOf between empty sets', () => {
    const set1 = new SetCls();
    const set2 = new SetCls();

    expect(set1.isSubsetOf(set2)).toEqual(true);
    expect(set2.isSubsetOf(set1)).toEqual(true);
  });

  it('isSubsetOf between equal sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(1, 5);

    expect(set1.isSubsetOf(set2)).toEqual(true);
    expect(set2.isSubsetOf(set1)).toEqual(true);
  });

  it('isSubsetOf different sets', () => {
    const set1 = addValues(1, 5);
    const set2 = addValues(6, 10);

    expect(set1.isSubsetOf(set2)).toEqual(false);
    expect(set2.isSubsetOf(set1)).toEqual(false);
  });

  it('isSubsetOf between sets with common values', () => {
    const set1 = addValues(1, 8);
    const set2 = addValues(3, 6);
    expect(set1.isSubsetOf(set2)).toEqual(false);
    expect(set2.isSubsetOf(set1)).toEqual(true);

    const set3 = addValues(1, 5);
    const set4 = addValues(3, 6);
    expect(set3.isSubsetOf(set4)).toEqual(false);
    expect(set4.isSubsetOf(set3)).toEqual(false);
  });

  it('returns toString primitive types', () => {
    expect(set.toString()).toEqual('');

    set.add(1);
    expect(set.toString()).toEqual('1');

    set.add(2);
    expect(set.toString()).toEqual('1, 2');

    set.clear();
    expect(set.toString()).toEqual('');
  });

  it('returns toString primitive types: string', () => {
    const ds = new SetCls<string>();
    ds.add('elem1');
    expect(ds.toString()).toEqual('elem1');

    ds.add('elem2');
    expect(ds.toString()).toEqual('elem1, elem2');
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

    const ds = new SetCls<MyObj>();
    expect(ds.toString()).toEqual('');

    ds.add(new MyObj(1, 2));
    expect(ds.toString()).toEqual('1|2');

    ds.add(new MyObj(3, 4));
    expect(ds.toString()).toEqual('1|2, 3|4');
  });
});
