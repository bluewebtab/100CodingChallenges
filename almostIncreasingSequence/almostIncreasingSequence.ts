export function almostIncreasingSequence(sequence: number[]): boolean {
let count = 0;

for(let i = 0; i < sequence.length; i++){
    if(sequence[i] <= sequence[i - 1]){
        count++
        if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
            return false
        }
    }
}

console.log(count)

 return count <= 1
}

console.log(almostIncreasingSequence([1, 2, 3, 4,5, 6,7,8,9,10,7,11,12,8,13,14,15,13,16,17])) 
console.log(almostIncreasingSequence([1, 3, 2])) 