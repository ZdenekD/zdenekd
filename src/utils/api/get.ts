import API from '@/utils/config';
import methods from './utils/methods';
import type {
    IData,
    IOptions,
    IResponse
} from './types';

type IGet = <R>(path: string, options?: IOptions) => Promise<IResponse<IData<R, undefined>>>

const get: IGet = async (path, options) => {
    const response = await fetch(`${API}/${path}`, methods.get(options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default get;
