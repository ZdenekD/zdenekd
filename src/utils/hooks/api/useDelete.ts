import * as Sentry from '@sentry/nextjs';
import remove from '@/api/delete';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store';

type IDeleteHandler = (path: string) => Promise<void>

const useDelete = (
    onSuccess?: () => void,
    onFailure?: () => void
) => {
    const locale = useLocale();
    const {set} = useStore(state => state.alert);
    const handleDelete: IDeleteHandler = async path => {
        try {
            const response = await remove<string>(path);
            const message = response.data?.message;

            if (response.ok) {
                set({status: response.status, message: message || locale?.message?.successRemove});

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

    return {handleDelete};
};

export default useDelete;
