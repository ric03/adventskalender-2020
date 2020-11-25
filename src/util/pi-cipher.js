import {toString} from "./reduce-to-string";

export function piCipher(text) {
    if (!text || text.length === 0) return Math.PI.toString();

    const decimals = text.split('')
        .map(char => char.charCodeAt(0))
        .map(charCode => charCode.toString().padStart(3, '0'))
        .reduce(toString);

    return '3.1415' + decimals;
}