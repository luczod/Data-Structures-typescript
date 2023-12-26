import { describe, expect, it } from 'vitest';
import { matrixChainOrder } from '../matrix-chain-multiplication';

describe('Matrix Chain Multiplication', () => {
  it('works with DP approach', () => {
    const p = [10, 100, 5, 50, 1];

    expect(matrixChainOrder(p)).toEqual(1750);
  });
});
