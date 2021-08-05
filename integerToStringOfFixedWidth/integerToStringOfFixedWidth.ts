export function integerToStringOfFixedWidth(number: number, width: number): string {
    let strDigits: string = number.toString();

    if(strDigits.length < width){
        return addDigits(strDigits, width)
    }else if(strDigits.length > width){
        return removeDigits(strDigits, width)
    }else {
        return strDigits
    }

    function addDigits(str: string, targetLength: number): string {
        let padding: string = "";
        for(let i = 0; i < (targetLength - str.length); i++){
            padding += '0'
        }
        return padding + str
    }


    function removeDigits(str: string, targetLength: number): string {
        //slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
        //slice(beginIndex, beginIndex, endIndex)
        //beginIndex: zero-based index at which to begin extraction
        //endIndex: extracts up to but not including end index
        return str.slice(str.length - targetLength);
    }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 6));
