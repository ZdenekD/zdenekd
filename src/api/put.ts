import {IData} from '@/api/types';
import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IPut = <D, R = string>(path: string, data: D, options?: IOptions) =>
    Promise<IResponse<IData<R, D | undefined>>>

const put: IPut = async (path, data, options) => fetch(`${API}/${path}`, methods.put(data, options))
    .then(async response => ({
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    }));

export default put;
