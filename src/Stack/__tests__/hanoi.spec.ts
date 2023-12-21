import { describe, expect, it } from 'vitest';
import { hanoi, hanoiStack } from '../exemples/hanoi';

describe('Tower of Hanoi', () => {
  it('Hanoi', () => {
    for (let i = 0; i < 10; i++) {
      const result = hanoi(i, 'a', 'b', 'c');
      expect(result.length).toEqual(2 ** i - 1);
    }
  });

  it('Hanoi with Stack', () => {
    for (let i = 0; i < 10; i++) {
      const result = hanoiStack(i);
      expect(result.length).toEqual(2 ** i - 1);
    }
  });
});
