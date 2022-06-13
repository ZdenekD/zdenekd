import * as Sentry from '@sentry/nextjs';
import remove from '@/api/delete';
import isSuccessfulResponse from '@/helpers/isSuccessfulResponse';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';

type IHandleDelete = (path: string) => Promise<void>

const useDelete = (
    onSuccess?: () => void,
    onFailure?: () => void,
    options: {showMessage?: boolean} = {showMessage: true}
) => {
    const locale = useLocale();
    const setAlert = useStore(state => state.alert.set);
    const handleDelete: IHandleDelete = async path => {
        try {
            const response = await remove<string>(path);
            const responseMessage = response.data?.message;
            const isSuccess = isSuccessfulResponse(response.status);

            if (!isSuccess && responseMessage && options?.showMessage) {
                setAlert({status: response.status, message: responseMessage});
            }

            if (!isSuccess && onFailure) onFailure();

            if (isSuccess && options?.showMessage) {
                setAlert({
                    status: response.status,
                    message: responseMessage || locale?.message?.successRemove,
                });
            }

            if (isSuccess && onSuccess) onSuccess();
        } catch (exception) {
            Sentry.captureException(exception);
        }
    };

    return {handleDelete};
};

export default useDelete;
