import {caesarCipher} from './caesar-cipher'

describe('caesar-cipher', () => {

    beforeEach(() => jest.spyOn(global.Math, 'random').mockReturnValue((67) / 95))
    afterEach(() => jest.spyOn(global.Math, 'random').mockRestore())

    it('should not fail on null', function () {
        expect(caesarCipher(null)).toEqual('');
    });

    it('should not fail on undefined', function () {
        expect(caesarCipher(undefined)).toEqual('');
    });

    it('should encrypt a single character with offset 1', function () {
        expect(caesarCipher('a', 1)).toEqual('b');
    });

    it('should encrypt a string with offset 1', function () {
        expect(caesarCipher('abc', 1)).toEqual('bcd')
    });

    it('should encrypt a string randomly without a random offset', function () {
        expect(caesarCipher('abc')).toEqual('EFG');
    })

    it('should encrypt a string with special characters', function () {
        expect(caesarCipher('abc - 123$!.', 1)).toEqual('bcd!.!234%"/');
    })
})
