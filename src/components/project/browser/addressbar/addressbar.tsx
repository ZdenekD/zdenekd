import React from 'react';
import useCursor from '../../../../hooks/useCursor';
import styles from './addressbar.css';

interface IAddressbar {
    url: string
}

const Addressbar: React.FC<IAddressbar> = ({url}) => {
    const [element, setElement] = React.useState<HTMLDivElement | null>(null);
    const addressbarRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        setElement(addressbarRef.current);
    }, []);

    useCursor(element);

    return (
        <div
            ref={addressbarRef}
            className={`${styles.addressbar} ${/https/.test(url) ? styles.https : styles.http}`}
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
};

export default Addressbar;
