import styles from './controls.css';

interface IControls {
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Controls: React.FC<IControls> = ({
    handlePrev = undefined,
    handleNext = undefined,
}) => (
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
