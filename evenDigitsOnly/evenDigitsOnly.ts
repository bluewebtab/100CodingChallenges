export function evenDigitsOnly(n: number): boolean {
    //make an array of string characters
    const digits = n.toString().split('')

    //parseInt each character and check if remainder is equal to 0
    //use every because if every element is true than it returns true
    return digits.every((digit) => parseInt(digit) % 2 === 0)
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));