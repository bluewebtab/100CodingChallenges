export function depositProfit(deposit: number, rate: number, threshold: number): number {
  let account = deposit
  let years = 0;


  //use while loop 
  //because we don't know how many loops to take
  while(threshold > account){
      account += account * (rate /100)
      years++
     
  }

  return years
}

console.log(depositProfit(100, 20, 170))