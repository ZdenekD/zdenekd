import Link from 'next/link';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import useCursor from '@/hooks/useCursor';
import styles from './lang.module.css';
import type {NextRouter} from 'next/router';

type IProps = {
    locale: string
    router: NextRouter
}

const Locale = ({locale, router}: IProps) => {
    const [catcher, setCatcher] = useState<HTMLAnchorElement | null>(null);
    const anchorRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        setCatcher(anchorRef.current);
    }, []);

    useCursor(catcher);

    return (
        <Link legacyBehavior href={router.route} locale={locale}>
            <a
                ref={anchorRef}
                href={router.route}
                className={`${styles.anchor} ${locale === router.locale ? styles.disabled : ''}`}
            >
                {locale.toUpperCase()}
            </a>
        </Link>
    );
};

export default Locale;
