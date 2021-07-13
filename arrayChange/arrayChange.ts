export function arrayChange(inputArray: number[]): number {
 //make a variable to count how many times you move in the array
 let count = 0;

 //make a for loop to go through the array
 for(let i = 0; i < inputArray.length; i++){
     //Make an if and else statement checking if the current element is greater or equal than the next element
     if(inputArray[i] >= inputArray[i + 1]){
         const difference = (inputArray[i] + 1) - inputArray[i + 1];
         inputArray[i + 1] = inputArray[i] + 1
         count += difference;

     }
 }

 return count;
}

// console.log(arrayChange([1, 1, 1]));
// console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));
console.log(arrayChange([0,0,0]));