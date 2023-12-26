import { describe, expect, it } from 'vitest';
import { knapSackGreedy } from '../knapsack';

describe('KnapSack Greedy', () => {
  it('works with greedy approach', () => {
    const values = [3, 4, 5];
    const weights = [2, 3, 4];
    const capacity = 5;
    const n = values.length;

    expect(knapSackGreedy(capacity, weights, values)).toEqual(7);
  });
});
