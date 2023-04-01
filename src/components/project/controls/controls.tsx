
import {
    forwardRef,
    useEffect,
    useRef,
    useState
} from 'react';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import styles from './controls.module.css';
import type {MouseEventHandler} from 'react';

type IProps = {
    isFirst: boolean
    isLast: boolean
    handlePrev?: MouseEventHandler
    handleNext?: MouseEventHandler
}

const Controls = forwardRef<HTMLUListElement, IProps>(({
    isFirst,
    isLast,
    handlePrev = undefined,
    handleNext = undefined,
}, ref) => {
    const [prevElement, setPrevElement] = useState<HTMLButtonElement | null>(null);
    const [nextElement, setNextElement] = useState<HTMLButtonElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const locale = useLocale();

    useEffect(() => {
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
