import {describe, expect, it} from '@jest/globals';
import { PalindromeChecker } from '../src/index';

describe('palindrome checker', () => {
    it('exists', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker).toBeDefined();
    });

    it('should be able to tell when "mom" is a palindrome', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
    });
    it('should be able to tell that "bill" is not a palindrome', () => {
        let palindromeChecker = new PalindromeChecker();
        expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
    });
});