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

    it('should still detecte a palindrome even if the casting is off', () => {
        expect(palindromeChecker.isAPalindrome("Mom")).toBeTruthy()
    });

    it('should be able to tell that "Was It A Rat I Saw"', () => {
        expect(palindromeChecker.isAPalindrome("Was It A Rat I Saw")).toBeTruthy();
    });

    it('should be able to tell that "Never Odd or Even" is palindrome', () => {
        expect(palindromeChecker.isAPalindrome("Never Odd or Even")).toBeTruthy();
    });
});