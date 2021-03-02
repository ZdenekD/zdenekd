import React from 'react';
import Anchor from '../../../../UI/anchor';
import useCursor from '../../../../hooks/useCursor';
import Icon from '../../../../assets/images/icon_open.svg';
import styles from './target.css';

interface ITarget {
    url: string
}

const Target: React.FC<ITarget> = ({url}) => {
    const [catcher, setCatcher] = React.useState<HTMLAnchorElement | null>(null);
    const targetRef = React.useRef<HTMLAnchorElement | null>(null);

    React.useEffect(() => {
        setCatcher(targetRef.current);
    }, []);

    useCursor(catcher);

    return (
        <>
            {!/in.progress$/.test(url) && (
                <div className={styles.target}>
                    <Anchor
                        ref={targetRef}
                        href={url}
                        className={styles.targetLink}
                        target="_blank"
                        aria-label="Otevřít referenci v novém okně"
                        data-test="component-target"
                    >
                        <Icon className={styles.icon} />
                    </Anchor>
                </div>
            )}
        </>
    );
};

export default Target;
