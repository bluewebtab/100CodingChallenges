export function candies(n: number, m: number): number {

    let numCandies = Math.floor(m / n)


    return numCandies * n;

}

console.log(candies(3, 10));