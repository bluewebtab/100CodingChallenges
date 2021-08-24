export function palindromeRearranging(inputString: string): boolean {
    const chars = inputString.split('')
    const letterObject = {}
    let oddCount = 0;


    for(let i = 0; i < chars.length; i++){
        //hasOwnProperty: method returns a boolean indicationg whether the object has the specified
        //property as its own property
        if(letterObject.hasOwnProperty(chars[i])){
            letterObject[chars[i]]++;
        }else{
            letterObject[chars[i]] = 1;
        }
    }
    for(let val in letterObject){
        if(letterObject[val] % 2 !== 0){
            oddCount++;
        }
    }

    console.log(oddCount)

    //oddCount 1 is ok because that char will be in the middle of the palindrome
    return oddCount > 1 ? false : true;
    
}

console.log(palindromeRearranging('aabb'));