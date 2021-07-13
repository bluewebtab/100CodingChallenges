export function adjacentElementsProduct(inputArray: number[]): number {
    let max = 0;
    for(let i = 0; i < inputArray.length; i++){
        let temp = inputArray[i] * inputArray[i + 1]
        if(max < temp){
            max = temp
        }
    }
    return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));