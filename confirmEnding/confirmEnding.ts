export function confirmEnding(str: string, target: string) {
    const start = str.length - target.length;

    console.log(str.length)
    //substr(start, length) method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
    console.log(str.substr(start, str.length)) 


}


console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));