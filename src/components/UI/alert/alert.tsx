import React from 'react';
import {
    LazyMotion,
    AnimatePresence,
    domAnimation,
    m
} from 'framer-motion';
import {useMessageState} from '@/store/message';
import VariantsEnum from '@/utils/enums/VariantsEnum';
import useLocale from '@/utils/hooks/useLocale';
import animations from './alert.animations';
import styles from './alert.module.css';

interface IProps {
    children: React.ReactNode
    title?: string
    className?: string
    variant?: VariantsEnum
    timeout?: number // number in seconds
    isOpen?: boolean
}

const Alert: React.FC<IProps> = ({
    children,
    title,
    className = '',
    variant,
    timeout,
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
                    />
                    <m.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={animations.component}
                        className={`${styles.alert} ${variant ? styles[variant] : ''} ${className}`}
                        data-test="component-alert"
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
                            data-test="component-alert-button"
                            onClick={handleClick}
                        >
                            &times;
                        </button>

                        {timeout && (
                            <m.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={styles.progress}
                            />
                        )}
                    </m.div>
                </LazyMotion>
            )}
        </AnimatePresence>
    );
};

export default Alert;
