import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import VariantsEnum from '../../../enums/VariantsEnum';
import animations from './alert.animations';
import useLocale from '../../../hooks/useLocale';
import {useMessageState} from '../../../state/message';
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
                <>
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={animations.backdrop}
                        className={`${styles.backdrop} ${variant ? styles[variant] : ''}`}
                    />
                    <motion.div
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
                            <motion.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={styles.progress}
                            />
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Alert;
