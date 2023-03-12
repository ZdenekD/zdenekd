import type {IMethods, IOptions} from '@/api/types';

const getHeaders = (options?: IOptions): HeadersInit => (
    options?.token
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            authorization: `Bearer ${options.token}`,
            'Content-language': options?.language || 'cs',
        }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Content-language': options?.language || 'cs',
        }
);
const methods: IMethods = {
    get: options => ({
        method: 'GET',
        headers: getHeaders(options),
    }),
    post: (data, options) => ({
        method: 'POST',
        headers: getHeaders(options),
        body: data ? JSON.stringify(data) : null,
    }),
    put: (data, options) => ({
        method: 'PUT',
        headers: getHeaders(options),
        body: JSON.stringify(data),
    }),
    patch: (data, options) => ({
        method: 'PATCH',
        headers: getHeaders(options),
        body: JSON.stringify(data),
    }),
    delete: options => ({
        method: 'DELETE',
        headers: getHeaders(options),
    }),
    query: (query, options) => ({
        method: 'POST',
        headers: getHeaders(options),
        body: JSON.stringify({query}),
    }),
};

export default methods;
