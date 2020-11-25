import {toString} from "./reduce-to-string";

describe('reduce-to-string', function () {
    it('should reduce an array of numbers to string', function () {
        expect([1,2,3].reduce(toString)).toEqual('123');
    });
})