import React from 'react';
import useLocale from '@/hooks/useLocale';
import styles from './addressbar.module.css';

interface IProps {
    url: string
}

const Addressbar: React.FC<IProps> = ({url}) => {
    const locale = useLocale();

    return (
        <div
            className={`${styles.addressbar} ${/https/.test(url) ? styles.https : styles.http}`}
            data-test="component-addressbar"
        >
            {!/in.progress$/.test(url) && (
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-test="component-addressbar-link"
                    aria-label={locale.reference.target}
                >
                    {url}
                </a>
            )}

            {/in.progress$/.test(url) && (url)}
        </div>
    );
};

export default Addressbar;
