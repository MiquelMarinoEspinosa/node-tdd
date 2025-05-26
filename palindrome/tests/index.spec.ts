import {describe, expect, it} from '@jest/globals';
import { PalindromeChecker } from '../src/index';

describe('palindrome checker', () => {
    it('exists', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker).toBeDefined()
    });
});