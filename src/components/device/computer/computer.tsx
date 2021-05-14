import styles from './computer.module.css';

const Computer: React.FC = ({children}) => (
    <div className={styles.wrapper} data-test="component-device-computer">
        <div className={styles.computer}>
            <div className={styles.display}>
                <div className={styles.header}>
                    <i className={styles.camera} />
                </div>
                <div className={styles.content}>
                    {children}
                </div>
                <div className={styles.footer} />
            </div>
            <div className={styles.keyboard} />
            <div className={styles.backside} />
        </div>
    </div>
);

export default Computer;
