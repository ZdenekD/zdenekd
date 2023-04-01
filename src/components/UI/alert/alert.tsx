import {
    AnimatePresence,
    domAnimation,
    LazyMotion,
    m
} from 'framer-motion';
import {useEffect, useState} from 'react';
import type {VariantsEnum} from '@/enums';
import useClickOutside from '@/hooks/useClickOutside';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store';
import animations from './alert.animations';
import styles from './alert.module.css';
import type {PropsWithChildren} from 'react';

type IProps = {
    title?: string
    variant?: VariantsEnum
    timeout?: number
    className?: string
    isVisible?: boolean
    onClose?: () => void
}

const Alert = ({
    title,
    variant,
    timeout,
    className = '',
    isVisible = false,
    children,
    onClose,
}: PropsWithChildren<IProps>) => {
    const [isOpened, setIsOpened] = useState(false);
    const {message, unset} = useStore(state => state.alert);
    const locale = useLocale();
    const handleClose = () => {
        if (onClose) {
            onClose();
        }

        setIsOpened(false);

        if (message) {
            unset();
        }
    };
    const ref = useClickOutside(() => {
        handleClose();
    });

    useEffect(() => {
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

    useEffect(() => {
        setIsOpened(isVisible);
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isOpened ? (
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
                        {title ? (
                            <header className={styles.header}>
                                <strong className={styles.title}>{title}</strong>
                            </header>
                        ) : null}

                        <section className={styles.section}>
                            {children}
                        </section>

                        <button
                            className={styles.button}
                            aria-label={locale.button.close}
                            data-testid="component-alert-button"
                            type="button"
                            onClick={handleClose}
                        >
                            &times;
                        </button>

                        {timeout ? (
                            <m.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={`${styles.progress} chromatic-ignore`}
                                data-testid="component-alert-timeout"
                            />
                        ) : null}
                    </m.div>
                </LazyMotion>
            ) : null}
        </AnimatePresence>
    );
};

export default Alert;
