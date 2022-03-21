import {useRouter} from 'next/router';
import locales from '@/data/locales';
import LocalesEnum from '@/enums/LocalesEnum';
import {ILocale} from '@/types/locales';

const useLocale = (): ILocale => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {locale} = locales[lang as LocalesEnum];

    return locale;
};

export default useLocale;
