import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m
} from 'framer-motion';
import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import useClickOutside from '@/hooks/useClickOutside';
import useLocale from '@/hooks/useLocale';
import {useMessageState} from '@/store/message';
import animations from './alert.animations';
import styles from './alert.module.css';

type IProps = {
    title?: string
    variant?: VariantsEnum
    timeout?: number // number in seconds
    className?: string
    isVisible?: boolean
    children?: React.ReactNode
    onClose?: () => void
}

const Alert: React.FC<IProps> = ({
    title,
    variant,
    timeout,
    className = '',
    isVisible = false,
    children,
    onClose,
}) => {
    const [isOpened, setOpened] = React.useState(false);
    const [, {unsetMessage}] = useMessageState();
    const locale = useLocale();
    const handleClose = () => {
        if (onClose) {
            onClose();
        }

        setOpened(false);

        if (unsetMessage) {
            unsetMessage();
        }
    };
    const ref = useClickOutside(() => {
        handleClose();
    });

    React.useEffect(() => {
        let timer: NodeJS.Timeout | null;

        if (timeout) {
            timer = setTimeout(() => {
                handleClose();
                timer = null;
            }, (timeout ?? 0) * 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeout]);

    React.useEffect(() => {
        setOpened(isVisible);
    }, [isVisible]);

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
                        ref={ref}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={animations.component}
                        className={`${styles.alert} ${variant ? styles[variant] : ''} ${className}`}
                        role="alert"
                        data-testid="component-alert"
                    >
                        {title && (
                            <header className={styles.header}>
                                <strong className={styles.title}>{title}</strong>
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
                            onClick={handleClose}
                        >
                            &times;
                        </button>

                        {timeout && (
                            <m.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={`${styles.progress} chromatic-ignore`}
                                data-testid="component-alert-timeout"
                            />
                        )}
                    </m.div>
                </LazyMotion>
            )}
        </AnimatePresence>
    );
};

export default Alert;
