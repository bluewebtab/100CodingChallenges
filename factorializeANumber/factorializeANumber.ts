export function factorializeANumber(num: number): number {
    //if n === 1 then you have to return something (Ex: 1) for
    //recursion to work
    if(num === 1) return 1;

    //this will cause a recursion
    //where num = num - 1 going through the function
    return num * factorializeANumber(num - 1)


}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));