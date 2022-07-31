import {SWRConfiguration} from 'swr';

export type IResponse<R> = {
    ok: boolean
    status: number
    data?: R
}

export type IData<D, E> = {
    status: number
    data?: D
    error?: E
    message?: string
}

export type IOptions = {
    token?: string
    language?: string
    swr?: SWRConfiguration
}

export type IMethods = {
    get: (options?: IOptions) => RequestInit,
    post: <D>(data?: D, options?: IOptions) => RequestInit,
    put: <D>(data: D, options?: IOptions) => RequestInit,
    patch: <D>(data: D, options?: IOptions) => RequestInit,
    delete: (options?: IOptions) => RequestInit,
    query: (query: string, options?: IOptions) => RequestInit
}
