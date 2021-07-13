export function add(param1: number, param2: number): number {
    return param1 + param2;
}

export function add2(...param1: number[]): number {
    //executes reducer function on each element of the array, resulting in a single output value
    // return param1.reduce((a, b) => {
    //     return a + b
    // })

    let total = 0;


    //forEach method executes a provided function once for each array leement
     param1.forEach((item) => {
        return total += item
    })

    return total

}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
