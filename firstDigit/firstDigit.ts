export function firstDigit(inputString: string): string {
    let arrayNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let inputArr = inputString.split('')

    for(let i = 0; i < inputArr.length; i++){
        //The includes mehtod determine whether an array includes a certain value among its entries
        //in an array
        if(arrayNum.includes(inputArr[i])){
            return inputString[i]
        }
    }
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
