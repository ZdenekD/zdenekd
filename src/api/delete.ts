import {IData} from '@/api/types';
import API from '@/utils/config';
import {IOptions, IResponse} from './types';
import methods from './utils/methods';

type IDelete = <R>(path: string, options?: IOptions) => Promise<IResponse<IData<R, undefined>>>

const remove: IDelete = (path, options) => fetch(`${API}/${path}`, methods.delete(options))
    .then(async response => ({
        status: response.status,
        data: await response.json(),
    }));

export default remove;
