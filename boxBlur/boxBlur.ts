
export function boxBlur(image: number[][]): number[][] {
    const res = [];

    //for loop the length of the image array - 2
    for (let y = 0; y < image.length - 2; y++)
{   
    console.log(image.length - 2)
    const line = []
    //for loop the array inside the array length [7,4,0,1,5] 5 - 2 = 3
    for(let x = 0; x < image[y].length - 2; x++){
        console.log(y)
        let sum = 0;
        let count = 0;
        //for loop the y + 3 = 3 or 4
        for(let a = 0; a < y + 3; a++){
            //for loop the x + 3 = 3 or 4
          
            for(let b = 0; b < x + 3; b++){
              
                sum += image[a][b]
                count++;
            }
        }

        line.push(Math.floor(sum/count))
    }
    res.push(line)
}



return res;
}

// console.log(boxBlur([[1, 1, 1], 
//     [1, 7, 1], 
//     [1, 1, 1]]));
console.log(boxBlur([[7, 4, 0, 1], 
    [5, 6, 2, 2], 
    [6, 10, 7, 8], 
    [1, 4, 2, 0]]))