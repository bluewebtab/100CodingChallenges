export function celsiusToFahrenheit(celsius: number): number {

   const newTemp = (celsius * 9/5) + 32


    return newTemp;
}

console.log(celsiusToFahrenheit(-30));
console.log(celsiusToFahrenheit(-10));
console.log(celsiusToFahrenheit(0));