export function allLongestStrings(inputArray: string[]): string[] {
    
    //creates a new array populates with the results of calling a provided function on every element in the calling array
    let longestStrNum = inputArray[0].length;
    inputArray.map(item => {
        if(item.length > longestStrNum){
            longestStrNum = item.length
        }
    })


    //filter(element, index, array) : creates a new array with all elements that pass the test implemented by the provided function

    return inputArray.filter((item) => {
        return item.length == longestStrNum
    })
}

console.log(allLongestStrings(["aba", "aa", "add", "vcd", "aba"]));