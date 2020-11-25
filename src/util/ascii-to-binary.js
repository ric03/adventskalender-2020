import {toString} from "./reduce-to-string";

export function convertStringToBinary(str) {
    if (!str || str.length === 0) return '';

    return str
        .split('')
        .map(convertCharToBinary)
        .reduce(toString);
}

function convertCharToBinary(char) {
    char = char.charCodeAt(0);
    let res = '';
    while (char > 0) {
        res += char % 2;
        char >>= 1;
    }
    return reverseString(res).padStart(8, '0');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}
