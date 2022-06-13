import * as Sentry from '@sentry/nextjs';
import put from '@/api/put';
import isSuccessfulResponse from '@/helpers/isSuccessfulResponse';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';

type IHandleUpdate<D> = (path: string, data: D) => Promise<void>

const useUpdate = <D>(
    onSuccess?: () => void,
    onFailure?: () => void,
    options: {showMessage?: boolean} = {showMessage: true}
) => {
    const locale = useLocale();
    const setAlert = useStore(state => state.alert.set);
    const handleUpdate: IHandleUpdate<D> = async (path, data) => {
        try {
            const response = await put<D>(path, data);
            const responseMessage = response.data?.message;
            const isSuccess = isSuccessfulResponse(response.status);

            if (!isSuccess && responseMessage && options?.showMessage) {
                setAlert({status: response.status, message: responseMessage});
            }

            if (!isSuccess && onFailure) onFailure();

            if (isSuccess && options?.showMessage) {
                setAlert({
                    status: response.status,
                    message: responseMessage || locale?.message?.successSave,
                });
            }

            if (isSuccess && onSuccess) onSuccess();
        } catch (exception) {
            Sentry.captureException(exception);
        }
    };

    return {handleUpdate};
};

export default useUpdate;
