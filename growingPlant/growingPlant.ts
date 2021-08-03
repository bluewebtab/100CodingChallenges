export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let days = 0;
    let height = 0;

    console.log(days)
    while(height < desiredHeight){

        days++;
        height += upSpeed;
       
        console.log(height)
        if(height < desiredHeight){
            height -= downSpeed
        }
        

    }
    return days;
}

console.log(growingPlant(100, 10, 910))