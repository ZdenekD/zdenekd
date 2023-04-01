import API from '@/utils/config';
import methods from './utils/methods';
import type {IOptions, IResponse} from './types';

type IPatch = <D, R>(path: string, data?: D, options?: IOptions) => Promise<IResponse<R>>

const patch: IPatch = async (path, data, options) => {
    const response = await fetch(`${API}/${path}`, methods.patch(data, options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default patch;
