export function composeRanges(nums: number[]): string[] {

    if(nums.length < 1){
        return [];
    }
    //const: obj keys can be reassigned but overwriting the object throws an error
    const ranges: any[] = [{start: nums[0], end: nums[0]}];

    for(let i = 1; i < nums.length; i++){
        if(ranges[ranges.length - 1].end + 1 === nums[i]){
            console.log(ranges)
            ranges[ranges.length - 1].end = nums[i];
        }else{
            console.log(ranges)
            ranges.push({start: nums[i], end: nums[i]})
        }
    }
    console.log(ranges)

    for(let i = 0; i < ranges.length; i++){
        if(ranges[i].start !== ranges[i].end){
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        }else{
            console.log(ranges)
            ranges[i] = ranges[i].start.toString()
            console.log(ranges)
        }
    }

    return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));