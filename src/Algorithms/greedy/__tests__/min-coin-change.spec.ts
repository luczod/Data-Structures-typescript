import { describe, expect, it } from 'vitest';
import { minCoinChangeGreedy } from '../min-coin-change';

describe('Min Coin Change Greedy', () => {
  it('works with greedy approach', () => {
    expect(minCoinChangeGreedy([1, 5, 10], 15)).toEqual([10, 5]);
    expect(minCoinChangeGreedy([1, 3, 4], 6)).toEqual([4, 1, 1]);
  });
});
