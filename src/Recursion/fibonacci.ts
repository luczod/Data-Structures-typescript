// Iterative NOT Recursion
function fibonacciIterative(n: number): number {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  // n >= 2
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2; // f(n) = f(n-1) + f(n-2)
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }

  console.log(fibN);
  return fibN;
}
fibonacciIterative(3);

// Recursion
function fibonacci(n: number): number {
  if (n < 1) return 0;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2); // call recursion
}
console.log(fibonacci(3));

// Recursion with Memoizatio ('Cache')
function fibonacciMemoization(n: number): number {
  if (n < 1) return 0;
  const memo = [0, 1];

  const fibonacciMem = (num: number): number => {
    if (memo[num] != null) return memo[num]; // check memo
    // call recursion and push to memo
    return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
  };

  return fibonacciMem(n);
}
