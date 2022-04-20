import styles from './computer.module.css';

interface IProps {
    children?: React.ReactNode
}

const Computer: React.FC<IProps> = ({children}) => (
    <div className={styles.wrapper} data-testid="component-device-computer">
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
