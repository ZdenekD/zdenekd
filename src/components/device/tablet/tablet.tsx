import styles from './tablet.module.css';
import type {PropsWithChildren} from 'react';

const Tablet = ({children}: PropsWithChildren) => (
    <div className={styles.wrapper} data-testid="component-device-tablet">
        <div className={styles.tablet}>
            <div className={styles.content}>
                {children}
            </div>
            <span className={styles.header}>
                <i className={styles.camera} />
            </span>
            <span className={styles.footer}>
                <i className={styles.button} />
            </span>
        </div>
    </div>
);

export default Tablet;
