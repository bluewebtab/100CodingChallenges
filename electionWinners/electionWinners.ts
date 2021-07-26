export function electionsWinners(votes: number[], k: number): number {
    let inTheRunning = 0;
    //find largest value
    const mostVotes = Math.max(...votes);
    console.log(mostVotes)
    //return largest to smallest
    const sortedVotes = votes.sort((a, b) => b - a)
    console.log(sortedVotes)


    //returns one because we have a winner
    if(sortedVotes[0] !== sortedVotes[1] && k === 0){
        return 1;
    }

    votes.forEach((voteCount) => {
        if(mostVotes - voteCount < k){
            console.log(voteCount)
            inTheRunning++;
        }
    })

    return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));