import { Compare, TCompareFunction } from '../types';

export function defaultEquals<T>(a: T, b: T): boolean {
  return a === b;
}

export function defaultCompare<T>(a: T, b: T): number {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
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
