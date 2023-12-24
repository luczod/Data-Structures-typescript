import { Compare, TCompareFunction } from '../types';

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return 0;
  }
  // LESS OR BIGGER THAN
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultDiff<T>(a: T, b: T): number {
  return Number(a) - Number(b);
}

export function lesserEquals<T>(a: T, b: T, compareFn: TCompareFunction<T> = defaultCompare) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals<T>(a: T, b: T, compareFn: TCompareFunction<T> = defaultCompare) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

// swap (change) two values in an array
export function swap<T>(array: T[], a: number, b: number): void {
  const aux = array[a];
  array[a] = array[b];
  array[b] = aux;
}

export function reverseCompare<T>(compareFn: TCompareFunction<T>) {
  return (a: T, b: T) => compareFn(b, a);
}

export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

export function createNonSortedArray(size: number): number[] {
  const array: number[] = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}
