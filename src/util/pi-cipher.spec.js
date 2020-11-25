import {piCipher} from "./pi-cipher";

describe('pi-cipher', function () {
    it('should return PI on null', function () {
        expect(piCipher(null)).toEqual(Math.PI.toString());
    });

    it('should return PI on undefined', function () {
        expect(piCipher(undefined)).toEqual(Math.PI.toString());
    });

    it('should return PI on empty string', function () {
        expect(piCipher('')).toEqual(Math.PI.toString());
    });

    it('should insert a single char', function () {
        expect(piCipher('a')).toEqual('3.1415097')
    });

    it('should insert a string', function () {
        expect(piCipher('Hello World!')).toEqual('3.1415072101108108111032087111114108100033')
    });

    it('should transform extended ascii codes', function () {
        expect(piCipher('äöüß')).toEqual('3.1415228246252223')
    });
})
