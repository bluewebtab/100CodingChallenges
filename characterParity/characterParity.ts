export function characterParity(symbol: string): string {
    // parseInt parses a string argument and returns an integer
  const result = parseInt(symbol)
  
 //isNaN is a function that determines whether a value is NaN or not
  return isNaN(result) ? "not a digit" : result % 2 === 0 ? 'even' : 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
