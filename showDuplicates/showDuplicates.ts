export function showDuplicates(n: string): any {
    let newString = n.split("").map(item => item.toLowerCase())

    
    let red = (map, val) => {
        if(map[val] == null){
            map[val] = 1
        }else{
            ++map[val]
        }

        return map
    }

     let newObj = newString.reduce(red, {})

    let secObj = {}

    //for... in loops through properties in an object
     for(let item in newObj){
         if(newObj[item] > 1){
            secObj[item] = newObj[item]
         }
     }

    return secObj
}

console.log(showDuplicates('h srfuedcbvc'));
console.log(showDuplicates('h qwrwesqeiQFuyuw'));