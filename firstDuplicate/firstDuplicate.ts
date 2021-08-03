export function firstDuplicate(a: number[]): number {
<<<<<<< HEAD
    const firstDup = {};

    for(let num of a){
        if(firstDup.hasOwnProperty(num)){
            return num
        }else{
            firstDup[num] = num
        }
    }
    
    return - 1;
=======
    let visited = {}

    for(let num of a){
        if(visited[num])return num
        else visited[num] = true;
    }

    return -1;
>>>>>>> 8af2e11fa8bfbecb6257df6bbc0c9ed8f558bab5
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
