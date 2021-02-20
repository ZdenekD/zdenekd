import styles from './controls.css';

interface IControls {
    handlePrev?: () => void
    handleNext?: () => void
}

const Controls: React.FC<IControls> = ({handlePrev, handleNext}) => (
    <ul className={styles.controls}>
        <li className={styles.control}>
            <button
                type="button"
                className={styles.prev}
                aria-label="Předchozí projekt"
                onClick={handlePrev}
            />
        </li>
        <li className={styles.control}>
            <button
                type="button"
                className={styles.next}
                aria-label="Následující projekt"
                onClick={handleNext}
            />
        </li>
    </ul>
);

export default Controls;
