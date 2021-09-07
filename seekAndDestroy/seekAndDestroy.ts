export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {

    //The includes() method determines whether an array includes a certain value among
    //its entries, returning true or false as appropriate.
    
   return arr1.filter((element) => !arr2.includes(element)) 
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
