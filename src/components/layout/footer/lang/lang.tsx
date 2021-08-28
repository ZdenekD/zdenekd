import React from 'react';
import Link from 'next/link';
import {NextRouter} from 'next/router';
import useCursor from '@/utils/hooks/useCursor';
import styles from './lang.module.css';

interface IProps {
    locale: string
    router: NextRouter
}

const Locale: React.FC<IProps> = ({locale, router}) => {
    const [catcher, setCatcher] = React.useState<HTMLAnchorElement | null>(null);
    const anchorRef = React.useRef<HTMLAnchorElement | null>(null);

    React.useEffect(() => {
        setCatcher(anchorRef.current);
    }, []);

    useCursor(catcher);

    return (
        <Link href={router.route} locale={locale}>
            <a ref={anchorRef} href={router.route} className={`${styles.anchor} ${locale === router.locale ? styles.disabled : ''}`}>
                {locale.toUpperCase()}
            </a>
        </Link>
    );
};

export default Locale;
