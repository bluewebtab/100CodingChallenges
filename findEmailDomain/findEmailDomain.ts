export function findEmailDomain(address: string): string {

    //method returns the index within the calling string object of the
    //last occurrence of the specified value
    const lastAtIndex = address.lastIndexOf('@')

    //add one to not get the @ symbol
    return address.slice(lastAtIndex + 1, address.length)
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
