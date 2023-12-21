import { describe, expect, it } from 'vitest';
import { palindromeChecker } from '../exemples/palindromeChecker';

describe('Palindrome', () => {
  it('Palindrome Checker', () => {
    expect(palindromeChecker('')).toEqual(false);
    expect(palindromeChecker('a')).toEqual(true);
    expect(palindromeChecker('aa')).toEqual(true);
    expect(palindromeChecker('aba')).toEqual(true);
    expect(palindromeChecker('ab')).toEqual(false);
    expect(palindromeChecker('radar')).toEqual(true);
    expect(palindromeChecker('Was it a car or a cat I saw')).toEqual(true);
  });
});
