export function chunkyMonkey(arr: any[], size: number): any[][] {
  //use slice: returns a copy of  a portion of an array into a new array object
  //selected from start to end (end not included) where start and end represent the 
  //index of items in that array
  //slice(start, end)
  //if end (num) has an unreachable index then it will get the remaing items
//  let arr2 = []
//  let subArr = []
//  for(let i = 0; i < arr.length; i += size){
//      subArr = arr.slice(i, i + size);
//      console.log(subArr)
//      arr2.push(subArr)
//  }

//  return arr2
const nested = []
let count = 0;

while(count < arr.length){
  nested.push(arr.slice(count, count += size))
}

return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));