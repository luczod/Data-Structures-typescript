import { describe, expect, it } from 'vitest';
import { findMaxValue, findMinValue } from '../min-max-search';

describe('Min and Max Values Search', () => {
  const SIZE = 10;

  function createSortedArray() {
    const array: number[] = [];
    for (let i = 1; i <= SIZE; i++) {
      array.push(i);
    }
    return array;
  }

  it('min value - works with empty arrays', () => {
    expect(findMinValue([])).toEqual(undefined);
  });

  it('max value - works with empty arrays', () => {
    expect(findMaxValue([])).toEqual(undefined);
  });

  it('min value', () => {
    expect(findMinValue(createSortedArray())).toEqual(1);
  });

  it('max value', () => {
    expect(findMaxValue(createSortedArray())).toEqual(SIZE);
  });
});
