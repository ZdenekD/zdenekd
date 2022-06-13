import {IMethods, IOptions} from '@/api/types';

const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};
const getHeaders = (options?: IOptions): HeadersInit => (
    options?.token
        ? {
            ...headers,
            authorization: `Bearer ${options.token}`,
            'Content-language': options?.language || 'cs',
        }
        : {
            ...headers,
            'Content-language': options?.language || 'cs',
        }
);
const methods: IMethods = {
    get: options => ({
        method: 'GET',
        headers: getHeaders(options),
        signal: options?.signal,
    }),
    post: (data, options) => ({
        method: 'POST',
        headers: getHeaders(options),
        signal: options?.signal,
        body: data ? JSON.stringify(data) : null,
    }),
    put: (data, options) => ({
        method: 'PUT',
        headers: getHeaders(options),
        signal: options?.signal,
        body: JSON.stringify(data),
    }),
    patch: (data, options) => ({
        method: 'PATCH',
        headers: getHeaders(options),
        signal: options?.signal,
        body: JSON.stringify(data),
    }),
    delete: options => ({
        method: 'DELETE',
        headers: getHeaders(options),
        signal: options?.signal,
    }),
};

export default methods;
