export function convertString(s: string, t: string): boolean {
    //concat: method concatenates the string arguments to the calling string and returns a new string.
    //split(): split a string into an array of substrings

    let word = '';
    let tIndex = 0;
    const sChars: string[] = s.split('');


    for(let i = 0; i < sChars.length; i++){
        if(sChars[i] === t[tIndex]){
            word = word.concat(sChars[i])
            tIndex++;
            if(word === t){
                return true;
            }
        }
    }

    return false;

}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
