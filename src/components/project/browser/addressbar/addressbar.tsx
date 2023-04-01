
import useLocale from '@/hooks/useLocale';
import styles from './addressbar.module.css';

type IProps = {
    url: string
}

const Addressbar = ({url}: IProps) => {
    const locale = useLocale();

    return (
        <div
            className={`${styles.addressbar} ${/https/.test(url) ? styles.https : styles.http}`}
            data-testid="component-addressbar"
        >
            {!/in.progress$/.test(url) && (
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-testid="component-addressbar-link"
                    aria-label={locale.reference.target}
                    className={styles.link}
                >
                    {url}
                </a>
            )}

            {/in.progress$/.test(url) && (url)}
        </div>
    );
};

export default Addressbar;
