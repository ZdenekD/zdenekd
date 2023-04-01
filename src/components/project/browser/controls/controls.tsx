
import {
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

const Controls = ({
    isFirst,
    isLast,
    handlePrev = undefined,
    handleNext = undefined,
}: IProps) => {
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
        <>
            <button
                ref={prevRef}
                type="button"
                className={`${styles.prev} ${isFirst ? styles.disabled : ''}`}
                aria-label={locale.keys.left}
                tabIndex={0}
                data-testid="component-controls-prev"
                onClick={handlePrev}
            />
            <button
                ref={nextRef}
                type="button"
                className={`${styles.next} ${isLast ? styles.disabled : ''}`}
                aria-label={locale.keys.right}
                tabIndex={0}
                data-testid="component-controls-next"
                onClick={handleNext}
            />
        </>
    );
};

export default Controls;
