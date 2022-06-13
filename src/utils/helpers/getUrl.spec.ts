import getUrl from './getUrl';

describe('Helper - getUrl', () => {
    it('returns API url', () => {
        const expected = 'http://localhostundefined/path/to/otherside';

        expect(getUrl('path/to/otherside')).toBe(expected);
    });

    it('returns API url with param', () => {
        const expected = 'http://localhostundefined/path/to/otherside?key=value';
        const options = {params: {key: 'value'}};

        expect(getUrl('path/to/otherside', options)).toBe(expected);
    });

    it('returns API url with multiple params', () => {
        const expected = 'http://localhostundefined/path/to/otherside?key=value%2Cvalue&param=marap';
        const options = {
            params: {
                key: 'value,value',
                param: 'marap',
            },
        };

        expect(getUrl('path/to/otherside', options)).toBe(expected);
    });
});
