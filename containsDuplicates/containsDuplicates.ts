export function containsDuplicates(a: number[]): boolean {

    let elemObj = {}

    for(let i = 0; i < a.length; i++){
        if(elemObj[a[i]] === undefined){
            elemObj[a[i]] = 1;
        }else{
            elemObj[a[i]]++
        }
    }

    for(let key in elemObj){
        if(elemObj[key] > 1){
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
