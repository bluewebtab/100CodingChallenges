export function pigLatin(str: string): string {
    const letters: string[] = str.split("");
    const vowelRegex = /[aeiou]/;

    if(vowelRegex.test(str[0])){
        return `${str}way`
    }

    while(true){
        if(!vowelRegex.test(letters[0])){
            const firstConsonant = letters.splice(0, 1)[0]
            letters.push(firstConsonant)
        }else{
            break;
        }
    }

    str = letters.join('') + 'ay';

    return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
