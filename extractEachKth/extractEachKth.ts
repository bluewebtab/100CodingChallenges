export function extractEachKth(inputArray: number[], k: number): number[] {
    //filter out elements that does have a division remainder of 0
    return inputArray.filter((element, index) => (index + 1) % k !== 0)

}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));