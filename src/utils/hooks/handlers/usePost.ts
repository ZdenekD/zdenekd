import * as Sentry from '@sentry/nextjs';
import {useRouter} from 'next/router';
import post from '@/api/post';
import LocalesEnum from '@/enums/LocalesEnum';
import isSuccessfulResponse from '@/helpers/isSuccessfulResponse';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';

type IHandlePost<D> = (path: string, data: D) => Promise<void>

const usePost = <D>(
    onSuccess?: () => void,
    onFailure?: () => void,
    options: {showMessage?: boolean} = {showMessage: true}
) => {
    const router = useRouter();
    const language = router.locale || LocalesEnum.cs;
    const locale = useLocale();
    const setAlert = useStore(state => state.alert.set);
    const handlePost: IHandlePost<D> = async (path, data) => {
        try {
            const response = await post<D>(path, data, {language});
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

    return {handlePost};
};

export default usePost;
