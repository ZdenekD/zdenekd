import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m
} from 'framer-motion';
import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import useLocale from '@/hooks/useLocale';
import {useMessageState} from '@/store/message';
import animations from './alert.animations';
import styles from './alert.module.css';

interface IProps {
    title?: string
    variant?: VariantsEnum
    timeout?: number // number in seconds
    children?: React.ReactNode
    className?: string
    isOpen?: boolean
}

const Alert: React.FC<IProps> = ({
    title,
    variant,
    timeout,
    children,
    className = '',
    isOpen = false,
}) => {
    const [isOpened, setOpened] = React.useState<boolean>(isOpen);
    const timer = React.useRef<NodeJS.Timeout>();
    const [, {unsetMessage}] = useMessageState();
    const locale = useLocale();
    const remove = () => {
        setOpened(false);

        if (unsetMessage) {
            unsetMessage();
        }
    };
    const handleClick = () => {
        remove();
    };

    React.useEffect(() => {
        if (timeout) {
            timer.current = setTimeout(() => {
                remove();
            }, timeout * 1000);
        }

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            {isOpened && (
                <LazyMotion strict features={domAnimation}>
                    <m.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={animations.backdrop}
                        className={`${styles.backdrop} ${variant ? styles[variant] : ''}`}
                        data-testid="component-alert-backdrop"
                    />
                    <m.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={animations.component}
                        className={`${styles.alert} ${variant ? styles[variant] : ''} ${className}`}
                        data-testid="component-alert"
                    >
                        {title && (
                            <header className={styles.header}>
                                {title && (
                                    <strong className={styles.title}>{title}</strong>
                                )}
                            </header>
                        )}

                        <section className={styles.section}>
                            {children}
                        </section>

                        <button
                            className={styles.button}
                            aria-label={locale.alert.close}
                            data-testid="component-alert-button"
                            type="button"
                            onClick={handleClick}
                        >
                            &times;
                        </button>

                        {timeout && (
                            <m.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={styles.progress}
                                data-testid="component-alert-timeout"
                                data-chromatic="ignore"
                            />
                        )}
                    </m.div>
                </LazyMotion>
            )}
        </AnimatePresence>
    );
};

export default Alert;
