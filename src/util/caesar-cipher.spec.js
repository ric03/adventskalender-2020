import {caesarCipher} from './caesar-cipher'

describe('caesar-cipher', () => {

    beforeEach(() => jest.spyOn(global.Math, 'random').mockReturnValue((66 - 1) / (94 - 1)))
    afterEach(() => jest.spyOn(global.Math, 'random').mockRestore())

    it('should not fail on null', function () {
        expect(caesarCipher(null)).toEqual('');
    });

    it('should not fail on undefined', function () {
        expect(caesarCipher(undefined)).toEqual('');
    });

    it('should not encrypt the string with offset 0', function () {
        expect(caesarCipher('abc', 0)).toEqual('abc');
    });

    it('should not encrypt the string with maximum offset of 94', function () {
        expect(caesarCipher('abc', 94)).toEqual('abc');
    });

    it('should encrypt a single character with offset 1', function () {
        expect(caesarCipher('a', 1)).toEqual('b');
    });

    it('should encrypt a string with offset 1', function () {
        expect(caesarCipher('abc', 1)).toEqual('bcd')
    });

    it('should encrypt a string with special characters', function () {
        expect(caesarCipher('abc - 123$!.', 1)).toEqual('bcd!.!234%"/');
    })

    it('should encrypt a string randomly without a random offset', function () {
        // offset: 66, see beforeEach
        expect(caesarCipher('abc')).toEqual('EFG');
    })
})
