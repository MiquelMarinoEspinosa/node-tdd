export class PalindromeChecker {
    private getReversedString(str: string): string
    {
        return str.split("").reverse().join("");
    }

    private stripSpaces(str: string): string {
        return str.split(" ").join("");
    }

    public isAPalindrome(str: string): boolean {
        return this.stripSpaces(str).toLowerCase() === this.stripSpaces(this.getReversedString(str)).toLowerCase();
    }
}