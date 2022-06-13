import * as Sentry from '@sentry/nextjs';
import {useRouter} from 'next/router';
import post from '@/api/post';
import LocalesEnum from '@/enums/LocalesEnum';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';

type IPostHandler<D> = (path: string, data: D) => Promise<void>

const usePost = <D>(
    onSuccess?: () => void,
    onFailure?: () => void
) => {
    const router = useRouter();
    const language = router.locale || LocalesEnum.cs;
    const locale = useLocale();
    const {set} = useStore(state => state.alert);
    const handlePost: IPostHandler<D> = async (path, data) => {
        try {
            const response = await post<D>(path, data, {language});
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

    return {handlePost};
};

export default usePost;
