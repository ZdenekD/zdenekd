import {getPage, getPageIndex} from './getPage';

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

describe('Helper - getPageIndex', () => {
    it('returns index of object key', () => {
        const link = '/';
        const page = getPageIndex(link);
        const expected = 0;

        expect(page).toBe(expected);
    });
});
