import { describe, expect, it } from 'vitest';
import { lcs } from '../longest-common-subsequence';

describe('LCS Dynamic Programming with print solution', () => {
  it('works with DP approach with print solution', () => {
    const wordX = 'acbaed';
    const wordY = 'abcadf';

    expect(lcs(wordX, wordY)).toEqual('acad');
  });
});
