import { describe, expect, it } from 'vitest';
import { fibonacci, fibonacciIterative, fibonacciMemoization } from '../fibonacci';

describe('Fibonacci', () => {
  it('Fibonacci Recursive', () => {
    expect(fibonacci(-1)).toEqual(0);
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
  });

  it('Fibonacci Iterative', () => {
    expect(fibonacciIterative(-1)).toEqual(0);
    expect(fibonacciIterative(0)).toEqual(0);
    expect(fibonacciIterative(1)).toEqual(1);
    expect(fibonacciIterative(2)).toEqual(1);
    expect(fibonacciIterative(3)).toEqual(2);
    expect(fibonacciIterative(4)).toEqual(3);
  });

  it('Fibonacci with Memoization', () => {
    expect(fibonacciMemoization(-1)).toEqual(0);
    expect(fibonacciMemoization(0)).toEqual(0);
    expect(fibonacciMemoization(1)).toEqual(1);
    expect(fibonacciMemoization(2)).toEqual(1);
    expect(fibonacciMemoization(3)).toEqual(2);
    expect(fibonacciMemoization(4)).toEqual(3);
  });
});
