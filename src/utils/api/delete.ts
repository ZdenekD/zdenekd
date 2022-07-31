import {IData} from '@/api/types';
import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IDelete = <R>(path: string, options?: IOptions) => Promise<IResponse<IData<R, undefined>>>

const remove: IDelete = async (path, options) => {
    const response = await fetch(`${API}/${path}`, methods.delete(options));

    return {
        ok: response.ok,
        status: response.status,
        data: await response.json(),
    };
};

export default remove;
