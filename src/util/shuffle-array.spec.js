import {toString} from "./reduce-to-string";
import {shuffleArray} from "./shuffle-array";

describe('shuffle-array', function () {
    it('should shuffle an array', function () {
        const arr = [1, 2, 3, 4, 5];
        shuffleArray(arr);

        expect(arr.reduce(toString)).not.toEqual('12345');
    });

    it('should not alter the content', function () {
        const arr = [1, 2, 3];
        shuffleArray(arr);

        expect(arr.length).toBe(3);
        expect(new Set(arr).size).toBe(3);
        expect(arr.find(e => e === 1)).toBeDefined();
        expect(arr.find(e => e === 2)).toBeDefined();
        expect(arr.find(e => e === 3)).toBeDefined();
    });
})
