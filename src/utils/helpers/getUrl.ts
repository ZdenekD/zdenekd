import {IOptionsGet, IParams} from '@/api/types';
import API from '@/utils/config';

type IGetUrl = <P = void>(path: string, options?: IOptionsGet<P>) => string

const getUrl: IGetUrl = (path, options) => {
    const url = new URL(`${API}/${path}`);
    const params = options?.params;

    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key as keyof IParams] ?? ''));
    }

    return url.href;
};

export default getUrl;
