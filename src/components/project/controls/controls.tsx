import React from 'react';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import styles from './controls.module.css';

interface IProps {
    isFirst: boolean
    isLast: boolean
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Controls = React.forwardRef<HTMLUListElement, IProps>(({
    isFirst,
    isLast,
    handlePrev = undefined,
    handleNext = undefined,
}, ref) => {
    const [prevElement, setPrevElement] = React.useState<HTMLButtonElement | null>(null);
    const [nextElement, setNextElement] = React.useState<HTMLButtonElement | null>(null);
    const prevRef = React.useRef<HTMLButtonElement | null>(null);
    const nextRef = React.useRef<HTMLButtonElement | null>(null);
    const locale = useLocale();

    React.useEffect(() => {
        setPrevElement(prevRef.current);
        setNextElement(nextRef.current);
    }, []);

    useCursor(prevElement);
    useCursor(nextElement);

    return (
        <ul ref={ref} className={styles.controls} data-testid="component-controls">
            <li className={styles.control}>
                <button
                    ref={prevRef}
                    type="button"
                    className={`${styles.prev} ${isFirst ? styles.disabled : ''}`}
                    aria-label={locale.keys.left}
                    data-testid="component-controls-prev"
                    onClick={handlePrev}
                />
            </li>
            <li className={styles.control}>
                <button
                    ref={nextRef}
                    type="button"
                    className={`${styles.next} ${isLast ? styles.disabled : ''}`}
                    aria-label={locale.keys.right}
                    data-testid="component-controls-next"
                    onClick={handleNext}
                />
            </li>
        </ul>
    );
});

Controls.displayName = 'Controls';

export default Controls;
