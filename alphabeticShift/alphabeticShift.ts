export function alphabeticShift(inputString: string): string {

    //have an array of the alphabet
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    //split the inputstring into an array of characters
    //use split("")
    let newArr = inputString.split("")

    /*use a for loop*/
    for(let i = 0; i < newArr.length; i++){
    //inside the for loop make a variable with index of 0
    let index = 0;

    //make an if statement where if element is not equal to 'z' then:
    if(newArr[i] !== "z"){

    //use indexOf to find the element in the alphabet and add one to increase the index
    //display index variable as the new index number
    //indexOf: method returns the first index at which a given element can be found in the array, or -1 if it is not present.

    index = alphabet.indexOf(newArr[i]) + 1
    //replace original letter with new letter index
    }

    newArr[i] = alphabet[index]

    }
    return newArr.join("")
    //get new array and make into a string
    //use join("")


}

console.log(alphabeticShift('crazy'));