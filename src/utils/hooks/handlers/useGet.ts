import * as Sentry from '@sentry/nextjs';
import React from 'react';
import get from '@/api/get';
import isSuccessfulResponse from '@/helpers/isSuccessfulResponse';
import useStore from '@/store/index';

type IHandleGet<P> = (path: string, params?: P) => Promise<void>

const useGet = <R, P = void>(
    onSuccess?: () => void,
    onFailure?: () => void,
    options: {showMessage?: boolean} = {showMessage: true}
) => {
    const [data, setData] = React.useState<R | undefined>(undefined);
    const setAlert = useStore(state => state.alert.set);
    const handleGet: IHandleGet<P> = async (path, params) => {
        try {
            const response = await get<R, P>(path, params);
            const responseMessage = response.data?.message;
            const isSuccess = isSuccessfulResponse(response.status);

            setData(response.data?.data);

            if (!isSuccess && responseMessage && options?.showMessage) {
                setAlert({status: response.status, message: responseMessage});
            }

            if (!isSuccess && onFailure) onFailure();

            if (isSuccess && onSuccess) onSuccess();
        } catch (exception) {
            Sentry.captureException(exception);
        }
    };

    return {data, handleGet};
};

export default useGet;
