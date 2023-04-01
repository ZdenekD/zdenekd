import API from '@/utils/config';
import methods from './utils/methods';
import type {
    IData,
    IOptions,
    IResponse
} from './types';

type IPost = <D, R = string>(path: string, data?: D, options?: IOptions) =>
    Promise<IResponse<IData<R, D | undefined>>>

const post: IPost = async (path, data, options) => {
    const response = await fetch(`${API}/${path}`, methods.post(data, options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default post;
