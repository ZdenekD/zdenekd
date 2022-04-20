import React from 'react';
import Icon from '@/assets/images/icon_open.svg';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import Anchor from '@/UI/anchor';
import styles from './target.module.css';

type IProps = {
    url: string
}

const Target: React.FC<IProps> = ({url}) => {
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
                        data-testid="component-target"
                    >
                        <Icon className={styles.icon} />
                    </Anchor>
                </div>
            )}
        </>
    );
};

export default Target;
