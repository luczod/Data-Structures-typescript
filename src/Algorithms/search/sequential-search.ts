import { NOT_EXIST, TEqualsFunction } from '../../types';
import { defaultEquals } from '../../utils';

/*
  It consists of comparing each element of the
  data structure with the one we are looking for.
  AND also the most INEFFICIENT algorithm there is.
*/

export function sequentialSearch<T>(
  array: T[],
  value: T,
  equalsFn: TEqualsFunction<T> = defaultEquals,
) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) {
      return i;
    }
  }
  return NOT_EXIST;
}
