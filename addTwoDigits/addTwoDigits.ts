export function addTwoDigits(n: any): number {
    //toString() turns the number into a string
    //split("") makes an array with substrings from the strings
    let num = n.toString().split("")

    //map()  method creates a new array populated with the results of calling a provided function on every element in the calling array.
    //parseInt() makes each string element into a number
    //reduce() 
    let newNum = num.map(item => parseInt(item)).reduce((a, b) => {
         return a + b
    })

    return newNum;

}

console.log(addTwoDigits(29));