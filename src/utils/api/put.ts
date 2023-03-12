import API from '@/utils/config';
import methods from './utils/methods';
import type {
    IData,
    IOptions,
    IResponse
} from './types';

type IPut = <D, R = string>(path: string, data: D, options?: IOptions) =>
    Promise<IResponse<IData<R, D | undefined>>>

const put: IPut = async (path, data, options) => {
    const response = await fetch(`${API}/${path}`, methods.put(data, options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default put;
