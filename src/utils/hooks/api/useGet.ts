import * as Sentry from '@sentry/nextjs';
import React from 'react';
import get from '@/api/get';
import useStore from '@/store/index';

type IGetHandler = (path: string) => Promise<void>

const useGet = <R>(
    onSuccess?: () => void,
    onFailure?: () => void
) => {
    const [data, setData] = React.useState<R | undefined>(undefined);
    const {set} = useStore(state => state.alert);
    const handleGet: IGetHandler = async path => {
        try {
            const response = await get<R>(path);
            const message = response.data?.message;

            setData(response.data?.data);

            if (response.ok && onSuccess) onSuccess();

            if (!response.ok) {
                set({status: response.status, message: message || ''});

                if (onFailure) onFailure();
            }
        } catch (exception) {
            Sentry.captureException(exception);
        }
    };

    return {data, handleGet};
};

export default useGet;
