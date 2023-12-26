import { describe, expect, it } from 'vitest';
import { matrixChainOrderGreedy } from '../matrix-chain-multiplication';

describe('Matrix Chain Multiplication with Greedy', () => {
  it('works with Greedy approach', () => {
    const p = [10, 100, 5, 50, 1];

    expect(matrixChainOrderGreedy(p)).toEqual(1750);
  });
});
