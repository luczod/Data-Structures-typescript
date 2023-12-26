export function matrixChainOrderGreedy(p: number[], i = 1, j = p.length - 1): number {
  if (i === j) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  for (let k = i; k < j; k++) {
    const count =
      matrixChainOrderGreedy(p, i, k) +
      matrixChainOrderGreedy(p, k + 1, j) +
      p[i - 1] * p[k] * p[j];

    if (count < min) {
      min = count;
    }
  }

  return min;
}
