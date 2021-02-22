import React from 'react';
import useCursor from '../../../../hooks/useCursor';
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
    const [nextElement, setnextElement] = React.useState<HTMLButtonElement | null>(null);
    const prevRef = React.useRef<HTMLButtonElement | null>(null);
    const nextRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        setPrevElement(prevRef.current);
        setnextElement(nextRef.current);
    }, []);

    useCursor(prevElement);
    useCursor(nextElement);

    return (
        <>
            <button
                ref={prevRef}
                type="button"
                className={styles.prev}
                aria-label="Předchozí projekt"
                tabIndex={0}
                onClick={handlePrev}
            />
            <button
                ref={nextRef}
                type="button"
                className={styles.next}
                aria-label="Následující projekt"
                tabIndex={0}
                onClick={handleNext}
            />
        </>
    );
};

export default Controls;
