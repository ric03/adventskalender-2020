import {toString} from "./reduce-to-string";

export function caesarCipher(str, offset = generateOffset()) {
    if (!str || str.length === 0) return '';

    return str
        .split('')
        .map(char => caesarCipherASingleChar(char, offset))
        .reduce(toString);
}

function generateOffset() {
    const MAX_OFFSET = 94; // maximum offset until the same character is reached
    return generateRandomNumber(1, MAX_OFFSET);
}

function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function caesarCipherASingleChar(char, offset) {
    const ascii = char.charCodeAt(0);
    const SPACE = ' '.charCodeAt(0); // first printable character
    const TILDE = '~'.charCodeAt(0); // last printable character

    // modify only printable characters
    if (ascii < SPACE || TILDE < ascii) return char;

    const cipher =
        (ascii + offset - SPACE)
        % (TILDE - SPACE)
        + SPACE;

    return String.fromCharCode(cipher);
}
