export function avoidObstacles(inputArray: number[]): number {
 inputArray = inputArray.sort((a, b) => a - b)
 const largestArrayVal = inputArray[inputArray.length - 1];


 console.log(inputArray)
 for(let i = 1; i <= largestArrayVal + 1; i++){
     /**
      Example:
      Every function will go through all the elements in the array with the same index
      5 % 1 3 % 1 6 %  1 ....5 % 2  3 % 2  6 % 2...
      */
    if(inputArray.every((element) => element % i !== 0)){
        return i;
    }
}
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));