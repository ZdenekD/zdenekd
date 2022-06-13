import isSuccessfulResponse from './isSuccessfulResponse';

describe('Helper - isSuccessfulResponse', () => {
    it('returns `true` if status is successful', () => {
        const value = 201;

        expect(isSuccessfulResponse(value)).toBe(true);
    });

    it('returns `false` if status is not successful', () => {
        const value = 404;

        expect(isSuccessfulResponse(value)).toBe(false);
    });
});
