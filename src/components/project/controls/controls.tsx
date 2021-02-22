import React from 'react';
import useCursor from '../../../hooks/useCursor';
import styles from './controls.css';

interface IControls {
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Controls: React.FC<IControls> = ({
    handlePrev = undefined,
    handleNext = undefined,
}) => {
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
        <ul className={styles.controls}>
            <li className={styles.control}>
                <button
                    ref={prevRef}
                    type="button"
                    className={styles.prev}
                    aria-label="Předchozí projekt"
                    onClick={handlePrev}
                />
            </li>
            <li className={styles.control}>
                <button
                    ref={nextRef}
                    type="button"
                    className={styles.next}
                    aria-label="Následující projekt"
                    onClick={handleNext}
                />
            </li>
        </ul>
    );
};

export default Controls;
