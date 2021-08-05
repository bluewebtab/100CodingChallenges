export function houseOfCats(legs: number): number[] {
    const peopleCount: number[] = []

    if(legs === 2){
        return [1]
    }

    //unshift method adds new items to the beginning of an array, and returns the new length
    
    while(legs >= 0){
        peopleCount.unshift(legs/2)
        legs -= 4;
    }

    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
