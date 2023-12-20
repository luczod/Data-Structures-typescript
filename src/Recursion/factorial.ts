// Iterative NOT Recursion
function factorialIterative(num: number): number {
  if (num < 0) return undefined;

  let total = 1;

  for (let n = num; n > 1; n--) {
    total = total * n;
  }

  return total;
}
console.log(factorialIterative(5));

// Recursion
function factorial(n: number): number {
  if (n === 1 || n === 0) {
    return 1; // base case -> break
  }
  return n * factorial(n - 1); // call recursiva
}
console.log(factorial(5));
