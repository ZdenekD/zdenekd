export type IResponse<R> = {
    status: number
    data?: R
}

export type IData<D, E> = {
    status: number
    data?: D
    errors?: E
    message?: string
}

export type IParams = {
    param?: string
}

export type IOptions = {
    signal?: AbortSignal,
    token?: string
    language?: string
}

export type IOptionsGet<P = void> = IOptions & {params?: IParams & P}

export type IMethods = {
    get: <P = void>(options?: IOptions & {params?: IParams & P}) => RequestInit,
    post: <D>(data?: D, options?: IOptions) => RequestInit,
    put: <D>(data: D, options?: IOptions) => RequestInit,
    patch: <D>(data: D, options?: IOptions) => RequestInit,
    delete: (options?: IOptions) => RequestInit,
}
