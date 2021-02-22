import React from 'react';
import Anchor from '../../../../UI/anchor';
import useCursor from '../../../../hooks/useCursor';
import Icon from '../../../../assets/images/icon_open.svg';
import styles from './addressbar.css';

interface IAddressbar {
    url: string
}

const Addressbar: React.FC<IAddressbar> = ({url}) => {
    const [targetElement, setTargetElement] = React.useState<HTMLAnchorElement | null>(null);
    const targetRef = React.useRef<HTMLAnchorElement | null>(null);

    React.useEffect(() => {
        setTargetElement(targetRef.current);
    }, []);

    useCursor(targetElement);

    return (
        <>
            <span className={`${styles.addressbar} ${/https/.test(url) ? styles.https : styles.http}`}>
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
            </span>
            {!/in.progress$/.test(url) && (
                <div className={styles.target}>
                    <Anchor
                        ref={targetRef}
                        href={url}
                        className={styles.targetLink}
                        target="_blank"
                        aria-label="Otevřít referenci v novém okně"
                    >
                        <Icon className={styles.icon} />
                    </Anchor>
                </div>
            )}
        </>
    );
};

export default Addressbar;
