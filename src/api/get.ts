import {IData} from '@/api/types';
import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IGet = <R>(path: string, options?: IOptions) => Promise<IResponse<IData<R, undefined>>>

const get: IGet = async (path, options) => fetch(`${API}/${path}`, methods.get(options))
    .then(async response => ({
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    }));

export default get;
