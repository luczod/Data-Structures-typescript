import { describe, expect, it } from 'vitest';
import { lcsGreedy } from '../longest-common-subsequence';

describe('LCS Greedy', () => {
  it('works with Greedy approach with print solution', () => {
    const wordX = 'acbaed';
    const wordY = 'abcadf';

    expect(lcsGreedy(wordX, wordY)).toEqual(4);
  });
});
