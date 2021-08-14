export function lateRide(n: number): number {
    //convert to hours
    //Round down
    const hours = Math.floor(n / 60)
    
    //gather the remainder of minutes
    const minutes = n % 60

    console.log(hours)
    console.log(minutes)

    //This will separate each digit from each number
    //then it will make a new array with all the digits separated
    const time = hours.toString().concat(minutes.toString()).split('').map((char) => {
        return parseInt(char)
    }
    )
   
    console.log(time)
    //this will add all the digits together
    return time.reduce((a, b) => a + b)
}

console.log(lateRide(240));
console.log(lateRide(808));
