export function knapSackRecursive(
  capacity: number,
  weights: number[],
  values: number[],
  n: number,
): number {
  if (n === 0 || capacity === 0) {
    return 0;
  }

  if (weights[n - 1] > capacity) {
    return knapSackRecursive(capacity, weights, values, n - 1);
  } else {
    const a: number =
      values[n - 1] + knapSackRecursive(capacity - weights[n - 1], weights, values, n - 1);

    const b: number = knapSackRecursive(capacity, weights, values, n - 1);
    // bigger number
    return a > b ? a : b;
  }
}

// EXEMPLE
const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;

console.log(knapSackRecursive(capacity, weights, values, n)); // show 7
