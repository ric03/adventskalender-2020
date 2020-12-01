import {canOpenTile} from "./can-open-tile-validator";

describe('can-open-tile-validator', function () {
    beforeEach(() => window.DISABLE_DATE_LOCK = false)

    it('should be able to open a tile', function () {
        expect(canOpenTile(1, new Date('2020-12-01'))).toBeTruthy();
    });

    it('should be able to open a previous tile', function () {
        expect(canOpenTile(2, new Date('2020-12-11'))).toBeTruthy();
    });

    it('should not be able to open a tile in the future', function () {
        expect(canOpenTile(2, new Date('2020-12-01'))).toBeFalsy();
    });

    it('should not be able to open a tile outside of december', function () {
        expect(canOpenTile(1, new Date('2020-11-01'))).toBeFalsy();
    });

    it('should be able to override the validation', function () {
        window.DISABLE_DATE_LOCK = true;
        expect(canOpenTile(1, new Date('2020-11-01'))).toBeTruthy();
    });
})
