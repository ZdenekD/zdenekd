import {useRouter} from 'next/router';
import locales from '@/data/locales';
import {ILocale} from '@/data/locales/types';
import LocalesEnum from '@/enums/LocalesEnum';

const useLocale = (): ILocale => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;

    return locales[lang];
};

export default useLocale;
