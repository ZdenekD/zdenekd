import {motion} from 'framer-motion';
import styles from './mobile.css';

const Mobile: React.FC = ({children}) => (
    <div className={styles.wrapper} data-test="component-device-mobile">
        <div className={styles.mobile}>
            <div className={styles.content}>
                {children}
            </div>
            <span className={styles.header}>
                <i className={styles.speaker} />
                <i className={styles.camera} />
            </span>
            <motion.i
                initial={{y: 0, x: '50%'}}
                animate={{
                    y: '4px',
                    x: '50%',
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    },
                }}
                className={styles.button}
            />
            <i className={styles.controlMute} />
            <i className={styles.controlSound} />
            <i className={styles.controlSound} />
            <i className={styles.controlTrigger} />
        </div>
    </div>
);

export default Mobile;
