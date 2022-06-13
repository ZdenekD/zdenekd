import {IData} from '@/api/types';
import getUrl from '@/helpers/getUrl';
import {IOptionsGet, IResponse} from './types';
import methods from './utils/methods';

type IGet = <R, P = void>(path: string, options?: IOptionsGet<P>) => Promise<IResponse<IData<R, undefined>>>

const get: IGet = async (path, options) => {
    const url = getUrl(path, options);

    return fetch(url, methods.get(options))
        .then(async response => ({
            status: response.status,
            data: await response.json(),
        }));
};

export default get;
