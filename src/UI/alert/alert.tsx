import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import VariantsEnum from '../../enums/VariantsEnum';
import {variants} from './alert.animations';
import {useStateValue} from '../../state';
import {unsetMessage} from '../../state/message/actions';
import styles from './alert.css';

interface IAlert {
    children: React.ReactNode
    className?: string
    variant?: VariantsEnum
    timeout?: number
    isOpen?: boolean
}

const Alert: React.FC<IAlert> = ({
    children,
    variant,
    className = '',
    timeout,
    isOpen = false,
}) => {
    const [isOpened, setOpened] = React.useState<boolean>(isOpen);
    const timer = React.useRef<NodeJS.Timeout>();
    const {dispatch} = useStateValue();
    const remove = () => {
        setOpened(false);
        dispatch(unsetMessage());
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
                        variants={variants.backdrop}
                        className={styles.backdrop}
                    />
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={variants.component}
                        className={`${styles.alert} ${variant ? styles[variant] : ''} ${className}`}
                        data-test="component-alert"
                    >
                        {timeout && (
                            <motion.div
                                initial={{width: 0}}
                                animate={{width: '100%', transition: {duration: (timeout)}}}
                                className={styles.progress}
                            />
                        )}
                        <button aria-label="Zavřít" className={styles.button} onClick={handleClick}>&times;</button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Alert;
