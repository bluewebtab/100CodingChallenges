export function arrayConversion(inputArray: number[]): number {
    //have a variable with a true value
    let isOdd = true;

    //make a while loop that stops when inputArray.length is equal to 1
    while(inputArray.length !== 1){
        //change inputArray by calling a function that takes two arguments 
        
        inputArray = letSum(inputArray, isOdd)

        isOdd = !isOdd
    }

    return inputArray[0]
    
}

function letSum(nums: number[], isOdd: boolean): number[]{
    let sumProducts: number[] = []

    if(isOdd){
        for(let i = 0; i < nums.length; i += 2){
            sumProducts.push(nums[i] + nums[i + 1])
        }
    }else{
        for(let i = 0; i < nums.length; i += 2){
            sumProducts.push(nums[i] * nums[i + 1])
        }
    }

    return sumProducts
}



console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
