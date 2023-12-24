import { Compare, NOT_EXIST } from '../../types';
import {
  biggerEquals,
  defaultCompare,
  defaultDiff,
  defaultEquals,
  lesserEquals,
} from '../../utils';

export function interpolationSearch<T>(
  array: T[],
  value: T,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff,
): number {
  const { length } = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while (low <= high && biggerEquals(value, array[low]) && lesserEquals(value, array[high])) {
    // readme.md
    delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
    position = low + Math.floor((high - low) * delta);

    if (equalsFn(array[position], value)) {
      return position;
    }

    if (compareFn(array[position], value) === Compare.LESS_THAN) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }

  return NOT_EXIST;
}