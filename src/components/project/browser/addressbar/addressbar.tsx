import React from 'react';
import styles from './addressbar.css';

interface IAddressbar {
    url: string
}

const Addressbar: React.FC<IAddressbar> = ({url}) => (
    <div
        className={`${styles.addressbar} ${/https/.test(url) ? styles.https : styles.http}`}
        data-test="component-addressbar"
    >
        {!/in.progress$/.test(url) && (
            <a
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Otevřít referenci v novém okně"
            >
                {url}
            </a>
        )}

        {/in.progress$/.test(url) && (url)}
    </div>
);

export default Addressbar;
