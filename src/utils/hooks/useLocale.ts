import {useRouter} from 'next/router';
import locales, {ILocale} from '../../data/locales';
import LocalesEnum from '../enums/LocalesEnum';

const useLocale = (): ILocale => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {locale} = locales[lang];

    return locale;
};

export default useLocale;
