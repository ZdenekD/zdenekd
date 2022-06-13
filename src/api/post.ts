import {IData} from '@/api/types';
import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IPost = <D, R = string>(path: string, data?: D, options?: IOptions) =>
Promise<IResponse<IData<R, D | undefined>>>

const post: IPost = (path, data, options) => fetch(`${API}/${path}`, methods.post(data, options))
    .then(async response => ({
        status: response.status,
        data: await response.json(),
    }));

export default post;
