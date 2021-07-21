import getPage from './getPage';

describe('Helper - getPage', () => {
    it('returns data object key depends on link', () => {
        const link = '/';
        const page = getPage(link);
        const expected = 'homepage';

        expect(page).toBe(expected);
    });

    it('returns undefined if no object key founded', () => {
        const link = '/unknown';
        const page = getPage(link);
        const expected = undefined;

        expect(page).toBe(expected);
    });
});
