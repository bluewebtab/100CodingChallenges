export function firstNotRepeatingCharacter(s: string): string {
    let strArr = s.split('')
    let visited = {}

    for(let num of strArr){
        if(visited[num]){
            visited[num] += 1
        }else{
            visited[num] = 1
        }
       
    }

    for(let num in visited){
        if(visited[num] == 1){
            return num
        }
    }

    return '_'
    console.log(visited)
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
