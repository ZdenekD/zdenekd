import getPageIndex from './getPageIndex';

describe('Helper - getPageIndex', () => {
    it('returns index of object key', () => {
        const link = '/';
        const page = getPageIndex(link);
        const expected = 0;

        expect(page).toBe(expected);
    });
});
