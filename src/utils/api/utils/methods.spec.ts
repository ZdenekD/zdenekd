import methods from './methods';

const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Content-language': 'cs',
};
const body = {key: 'value'};

describe('API - utils - methods', () => {
    it('returns `GET` methods object', () => {
        const expected = {
            method: 'GET',
            headers,
        };

        expect(methods.get()).toEqual(expected);
    });

    it('returns `POST` methods object with data', () => {
        const expected = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        };

        expect(methods.post(body)).toEqual(expected);
    });

    it('returns `POST` methods object without data', () => {
        const expected = {
            method: 'POST',
            headers,
            body: null,
        };

        expect(methods.post()).toEqual(expected);
    });

    it('returns `PUT` methods object with data', () => {
        const expected = {
            method: 'PUT',
            headers,
            body: JSON.stringify(body),
        };

        expect(methods.put(body)).toEqual(expected);
    });

    it('returns `PATCH` methods object with data', () => {
        const expected = {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
        };

        expect(methods.patch(body)).toEqual(expected);
    });

    it('returns `DELETE` methods object', () => {
        const expected = {
            method: 'DELETE',
            headers,
        };

        expect(methods.delete()).toEqual(expected);
    });

    it('returns `QUERY` methods object', () => {
        const expected = {
            method: 'POST',
            headers,
            body: JSON.stringify({query: 'query'}),
        };

        expect(methods.query('query')).toEqual(expected);
    });

    it('returns base `headers` if no options provided', () => {
        const expected = {
            method: 'GET',
            headers,
        };

        expect(methods.get()).toEqual(expected);
    });

    it('returns authorization `headers` if token is provided', () => {
        const expected = {
            method: 'GET',
            headers: {
                ...headers,
                authorization: 'Bearer token',
            },
        };

        expect(methods.get({token: 'token'})).toEqual(expected);
    });
});
