import {asciiToBinary} from './ascii-to-binary';

describe('ascii-to-binary', () => {
    it('should not fail on null', function () {
        expect(asciiToBinary(null)).toEqual('');
    })

    it('should not fail on undefined', function () {
        expect(asciiToBinary(undefined)).toEqual('');
    })

    it('should convert a single character into binary code', function () {
        expect(asciiToBinary('a')).toEqual('01100001');
    })

    it('should convert multiple characters into binary code', function () {
        expect(asciiToBinary('abc')).toEqual('011000010110001001100011');
    })
})
