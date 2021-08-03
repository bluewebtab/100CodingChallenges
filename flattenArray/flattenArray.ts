export function flattenArray(arr: any[]): any[] {

    const oneArray = [];

    flatten(arr);

    function flatten(arr: any[]){
        //foreach loops through an array of an array to get elements
        arr.forEach((element) => {
            console.log(element)
            if(Array.isArray(element)){
                console.log(element)
                flatten(element)
            }else{
                oneArray.push(element)
            }
        })  
    }

    return oneArray
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
