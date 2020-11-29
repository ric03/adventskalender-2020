import {substitutionCipher, substitutionCipherWrapper} from "./substitution-cipher";


describe('substitution-cipher', function () {
    it('should return empty string on null', function () {
        expect(substitutionCipher(null, null)).toEqual('');
    });

    it('should return the passed text on dictionary being null', function () {
        expect(substitutionCipher('Hello', null)).toEqual('Hello');
    });

    it('should return the passed text on dictionary being too short', function () {
        expect(substitutionCipher('Hello', '1234567890123456789012345')).toEqual('Hello');
    });

    it('should return the passed text on the dictionary being too long', function () {
        expect(substitutionCipher('Hello', '123456789012345678901234567')).toEqual('Hello');
    });

    it('should return the passed text on the dictionary containing non unique characters', function () {
        expect(substitutionCipher('Hello', '12345678901234567890123456')).toEqual('Hello');
    });

    it('should encrypt a single char', function () {
        const dict = 'kbcdefghijalmnopqrstuvwxyz';
        expect(substitutionCipher('a', dict)).toEqual('k');
    });

    it('should encrypt multiple chars only [a-z]', function () {
        const dict = 'qrstuvwxyzkbcdefghijalmnop';
        expect(substitutionCipher('mytinystring', dict)).toEqual('cojydoijhydw');
    });

    it('should encrypt multiple chars only [a-z]', function () {
        const dict = 'qrstuvwxyzkbcdefghijalmnop';
        expect(substitutionCipher('MY TINY STRING', dict)).toEqual('co jydo ijhydw');
    });

    it('should encrypt multiple chars with special characters', function () {
        const dict = 'qrstuvwxyzkbcdefghijalmnop';
        expect(substitutionCipher('my tiny string !@#', dict)).toEqual('co jydo ijhydw !@#');
    });

    it('should encrypt the text by useing a curried function', function () {
        const dict = 'qrstuvwxyzkbcdefghijalmnop';
        expect(substitutionCipherWrapper(dict)('abc')).toEqual('qrs');
    });
})