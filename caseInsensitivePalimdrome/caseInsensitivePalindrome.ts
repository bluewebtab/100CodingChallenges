export function isCaseInsensitivePalindrome(inputString: string): boolean {
    let checkPalindrome = inputString.toLowerCase().split('').reverse().join("")

    


    return inputString.toLowerCase() === checkPalindrome
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));