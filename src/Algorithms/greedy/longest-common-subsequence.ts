export function lcsGreedy(
  wordX: string,
  wordY: string,
  m = wordX.length,
  n = wordY.length,
): number {
  if (m === 0 || n === 0) {
    return 0;
  }

  if (wordX[m - 1] === wordY[n - 1]) {
    return 1 + lcsGreedy(wordX, wordY, m - 1, n - 1);
  } else {
    const a = lcsGreedy(wordX, wordY, m, n - 1);
    const b = lcsGreedy(wordX, wordY, m - 1, n);

    return a > b ? a : b;
  }
}
