import {toString} from "./reduce-to-string";

export function substitutionCipherWrapper(dict) {
    return (text) => substitutionCipher(text, dict);
}

export function substitutionCipher(text, dictionary) {
    if (!text || text.length === 0) return '';
    if (!isDictionaryValid(dictionary)) return text;

    const DICT = dictionary.toLowerCase().split('');

    return text.split('')
        .map(char => substituteSingleChar(char, DICT))
        .reduce(toString);
}

function isDictionaryValid(dictionary) {
    return dictionary
        && dictionary.length === 26 // a-z
        && new Set(dictionary.split('')).size === 26; // unique entries
}

function substituteSingleChar(char, DICT) {
    const charCode = char.toLowerCase().charCodeAt(0);
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    if (charCode < a || z < charCode) return char;
    const idx = charCode - a;
    return DICT[idx];
}
