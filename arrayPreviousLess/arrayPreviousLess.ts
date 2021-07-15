export function arrayPreviousLess(items: number[]): number[] {
let result = []

for(let i = 0; i < items.length; i++){
    (items[i - 1] < items[i]) ? result.push(items[i - 1]) : result.push(-1)
}
return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));