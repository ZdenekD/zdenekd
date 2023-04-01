import * as Sentry from '@sentry/nextjs';
import put from '@/api/put';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store';

type IUpdateHandler<D> = (path: string, data: D) => Promise<void>

const usePut = <D>(
    onSuccess?: () => void,
    onFailure?: () => void
) => {
    const locale = useLocale();
    const {set} = useStore(state => state.alert);
    const handlePut: IUpdateHandler<D> = async (path, data) => {
        try {
            const response = await put<D>(path, data);
            const message = response.data?.message;

            if (response.ok) {
                set({status: response.status, message: message || locale?.message?.successSave});

                if (onSuccess) onSuccess();
            }

            if (!response.ok) {
                set({status: response.status, message: message || ''});

                if (onFailure) onFailure();
            }
        } catch (exception) {
            Sentry.captureException(exception);
        }
    };

    return {handlePut};
};

export default usePut;
