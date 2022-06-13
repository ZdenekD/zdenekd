import useSWR from 'swr';
import get from '@/api/get';
import {IResponse, IOptions} from '@/api/types';

type IReturn<R, E> = {
    data: IResponse<R> | undefined,
    error: E,
    isLoading: boolean
}

const useFetch = <R, E>(
    path: string,
    options?: IOptions
): IReturn<R, E> => {
    const fetcher = () => get<R>(path, options);
    const {data, error} = useSWR(path, fetcher, options?.swr);

    return {
        data,
        error,
        isLoading: !error && !data,
    };
};

export default useFetch;
