import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IPatch = <D, R>(path: string, data?: D, options?: IOptions) => Promise<IResponse<R>>

const patch: IPatch = (path, data, options) => fetch(`${API}/${path}`, methods.patch(data, options))
    .then(async response => ({
        status: response.status,
        data: await response.json(),
    }));

export default patch;