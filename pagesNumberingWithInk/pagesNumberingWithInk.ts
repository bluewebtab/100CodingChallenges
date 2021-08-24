export function pagesNumberingWithInk(current: number, numberOfDigits: number): number {

    while(numberOfDigits >= current.toString().length){
        console.log(current.toString().length)
        
        numberOfDigits -= current.toString().length;
        console.log(numberOfDigits)
        if(numberOfDigits >= current.toString().length){
            current++;
        }
    }

    return current;
}

console.log(pagesNumberingWithInk(102,10));
// console.log(pagesNumberingWithInk(21,5));
// console.log(pagesNumberingWithInk(8,4));