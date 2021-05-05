import React from 'react';
import Anchor from '../../../../UI/anchor';
import useCursor from '../../../../hooks/useCursor';
import useLocale from '../../../../hooks/useLocale';
import Icon from '../../../../assets/images/icon_open.svg';
import styles from './target.css';

interface ITarget {
    url: string
}

const Target: React.FC<ITarget> = ({url}) => {
    const [catcher, setCatcher] = React.useState<HTMLAnchorElement | null>(null);
    const targetRef = React.useRef<HTMLAnchorElement | null>(null);
    const locale = useLocale();

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
                        aria-label={locale.reference.target}
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
