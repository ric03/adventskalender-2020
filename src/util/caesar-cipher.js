import {toString} from "./reduce-to-string";

export function caesarCipher(str, offset = generateRandomOffset()) {
    if (!str || str.length === 0) return '';

    return str
        .split('')
        .map(char => caesarCipherASingleChar(char, offset))
        .reduce(toString);
}

function generateRandomOffset() {
    const MAX_OFFSET = 95; // maximum offset until the same character is reached
    return Math.random() * MAX_OFFSET;
}

function caesarCipherASingleChar(char, offset) {
    const SPACE = ' '.charCodeAt(0);
    const DEL = 127;
    const ascii = char.charCodeAt(0);

    // ignore control codes (0-31) and extended codes (>127)
    if (ascii < SPACE || ascii > DEL) return char;

    const cipher =
        (ascii + offset - SPACE)
        % (DEL - SPACE)
        + SPACE;

    return String.fromCharCode(cipher);
}
