import {beforeEach, describe, expect, it} from '@jest/globals';
import { PalindromeChecker } from '../src/index';

describe('palindrome checker', () => {
    let palindromeChecker: PalindromeChecker;

    beforeEach(() => {
        palindromeChecker = new PalindromeChecker();
    })

    it('exists', () => {
        expect(palindromeChecker).toBeDefined();
    });

    it('should be able to tell when "mom" is a palindrome', () => {
        expect(palindromeChecker.isAPalindrome('mom')).toBeTruthy();
    });
    it('should be able to tell that "bill" is not a palindrome', () => {
        expect(palindromeChecker.isAPalindrome('bill')).toBeFalsy();
    });
});