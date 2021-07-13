export function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2)


    //adds one or more elements to the beginning of an array and
    //returns the new length of the array
    picture.unshift(wall)
    //adds element to the end of the array and returns a new length of the array
    picture.push(wall)


    //The concat() method concatenates the string arguments to the calling string and returns a new string
    
    for(let i = 1; i < picture.length - 1; i++){
        picture[i] = '*'.concat(picture[i], '*')
    }

    return  picture;
}

console.log(addBorder(["abc", "ded"]));