import {m} from 'framer-motion';
import {animations} from './mobile.animations';
import styles from './mobile.module.css';

type IProps = {
    children?: React.ReactNode
}

const Mobile: React.FC<IProps> = ({children}) => (
    <div className={styles.wrapper} data-testid="component-device-mobile">
        <div className={styles.mobile}>
            <div className={styles.content}>
                {children}
            </div>
            <span className={styles.header}>
                <i className={styles.speaker} />
                <i className={styles.camera} />
            </span>
            <m.i
                initial="initial"
                animate="enter"
                variants={animations}
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
