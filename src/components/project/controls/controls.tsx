import React from 'react';
import useCursor from '../../../hooks/useCursor';
import styles from './controls.css';

interface IControls {
    isFirst: boolean
    isLast: boolean
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Controls = React.forwardRef<HTMLUListElement, IControls>(({
    isFirst,
    isLast,
    handlePrev = undefined,
    handleNext = undefined,
}, ref) => {
    const [prevElement, setPrevElement] = React.useState<HTMLButtonElement | null>(null);
    const [nextElement, setNextElement] = React.useState<HTMLButtonElement | null>(null);
    const prevRef = React.useRef<HTMLButtonElement | null>(null);
    const nextRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        setPrevElement(prevRef.current);
        setNextElement(nextRef.current);
    }, []);

    useCursor(prevElement);
    useCursor(nextElement);

    return (
        <ul ref={ref} className={styles.controls} data-test="component-controls">
            <li className={styles.control}>
                <button
                    ref={prevRef}
                    type="button"
                    className={`${styles.prev} ${isFirst ? styles.disabled : ''}`}
                    aria-label="Předchozí projekt"
                    data-test="component-controls-prev"
                    onClick={handlePrev}
                />
            </li>
            <li className={styles.control}>
                <button
                    ref={nextRef}
                    type="button"
                    className={`${styles.next} ${isLast ? styles.disabled : ''}`}
                    aria-label="Následující projekt"
                    data-test="component-controls-next"
                    onClick={handleNext}
                />
            </li>
        </ul>
    );
});

Controls.displayName = 'Controls';

export default Controls;
