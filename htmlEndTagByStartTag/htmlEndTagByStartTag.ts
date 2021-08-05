export function htmlEndTagByStartTag(startTag: string): string {
    let splitString = startTag.split(" ")
    let splitTag = splitString[0].toString().split("")
    let endTag = '</';
    for(let i = 1; i < splitTag.length; i++){
        endTag += splitTag[i];
    }
    console.log(endTag)
    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';
    return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));