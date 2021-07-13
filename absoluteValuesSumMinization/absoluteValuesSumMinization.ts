export function absoluteValuesSumMinimization(a: number[]): number {
    //This variable checks to see if the array is even or not
    // const isEven = a.length % 2 === 0;

    // return isEven ? a[a.length/2 - 1] : a[Math.floor(a.length / 2)]
    //In this function use Math.floor() where it rounds a number downward to its nearest integer


    

    //Math.ceil returns the largest integer
    return a[Math.ceil(a.length / 2) -1]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7, 7, 8]));