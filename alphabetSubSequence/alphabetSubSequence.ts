export function alphabetSubsequence(s: string): boolean {
//splitting the string into an array of characters
 let newArr = s.split("")

 
//map through each element 
//return an integer using the charCodeAt()
let newCharArr = newArr.map((item) => {
    return item.charCodeAt(0)
})


//make a for loop that goes through the array
for(let i = 0; i < newCharArr.length; i++){

//the for loop goes through each element and compares the one after it 
//if the present element is greater than or equal to the next element then it returns false
if(newCharArr[i] >= newCharArr[i+1]){
   console.log(newCharArr[i])
    return false
}
  
}

//if for loop is complete then it returns true

return true

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
