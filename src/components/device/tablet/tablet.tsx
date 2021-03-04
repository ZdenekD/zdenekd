import styles from './tablet.css';

const Tablet: React.FC = ({children}) => (
    <div className={styles.wrapper} data-test="component-device-tablet">
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
