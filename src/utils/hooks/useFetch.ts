import useSWR, {SWRConfiguration} from 'swr';
import get from '@/api/get';
import {IResponse, IParams} from '@/api/types';
import getUrl from '@/helpers/getUrl';
import API from '@/utils/config';

type IReturn<R, E> = {
    data: IResponse<R> | undefined,
    error: E,
    isLoading: boolean
}

const useFetch = <R, E, P = void>(
    path: string,
    options?: {swr?: SWRConfiguration, params?: IParams & P}
): IReturn<R, E> => {
    const url = getUrl(path, options).replace(`${API}/`, '');
    const fetcher = () => get<R, P>(path, options?.params ? {params: options?.params} : undefined);
    const {data, error} = useSWR(url, fetcher, options?.swr);

    return {
        data,
        error,
        isLoading: !error && !data,
    };
};

export default useFetch;
