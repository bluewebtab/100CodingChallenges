export function newNumeralSystem(number: string): string[] {
    const numerals: string[] = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);
    console.log(startCharCount, endCharCount)
    while(startCharCount <= endCharCount){
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }

    return numerals;
}

console.log(newNumeralSystem('G'));