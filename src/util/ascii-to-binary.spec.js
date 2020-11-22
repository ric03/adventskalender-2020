import {convertStringToBinary} from './ascii-to-binary';

describe('ascii-to-binary', () => {
    it('should not fail on null', function () {
        expect(convertStringToBinary(null)).toEqual('');
    })

    it('should not fail on undefined', function () {
        expect(convertStringToBinary(undefined)).toEqual('');
    })

    it('should convert a single character into binary code', function () {
        expect(convertStringToBinary('a')).toEqual('01100001');
    })

    it('should convert multiple characters into binary code', function () {
        expect(convertStringToBinary('abc')).toEqual('011000010110001001100011');
    })
})
