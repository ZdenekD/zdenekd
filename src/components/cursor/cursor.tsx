/* eslint-disable no-param-reassign */
import useEventListener from '@use-it/event-listener';
import {useRef} from 'react';
import useStore from '@/store';
import styles from './cursor.module.css';

type IHandler = (coordX: number, coordY: number, inner: HTMLElement, outer: HTMLElement) => void
type ICursorHandle = (coordX: number, coordY: number) => void

const Cursor = () => {
    const {isStuck, props} = useStore(state => state.cursor);
    const outerCursorRef = useRef<HTMLElement | null>(null);
    const innerCursorRef = useRef<HTMLElement | null>(null);
    const handleIsUnstuck: IHandler = (coordX, coordY, inner, outer) => {
        document.body.style.setProperty('--cursor-x', `${coordX}px`);
        document.body.style.setProperty('--cursor-y', `${coordY}px`);
        outer.style.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        outer.style.setProperty('--cursor-width', '30px');
        outer.style.setProperty('--cursor-height', '30px');
        outer.style.setProperty('--cursor-radius', '50%');
        outer.style.border = '1px solid';
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY})`;
    };
    const handleIsStuck: IHandler = (coordX, coordY, inner, outer) => {
        const {width, height, top, left} = props;

        outer.style.transform = `translate3d(${left + 10}px, ${top + 10}px, 0)`;
        outer.style.setProperty('--cursor-width', `${width + 10}px`);
        outer.style.setProperty('--cursor-height', `${height + 10}px`);
        outer.style.setProperty('--cursor-radius', '8px');
        outer.style.border = '2px dotted';
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY})`;
    };
    const handleCursor: ICursorHandle = (coordX, coordY) => {
        const outer = (outerCursorRef.current as HTMLElement);
        const inner = (innerCursorRef.current as HTMLElement);

        if (inner && outer) {
            (isStuck ? handleIsStuck : handleIsUnstuck)(coordX, coordY, inner, outer);
        }
    };
    const handleMouse = (event: MouseEvent) => {
        requestAnimationFrame(() => handleCursor(event.clientX, event.clientY));
    };

    useEventListener('mousemove', handleMouse);

    return (
        <>
            <i ref={outerCursorRef} className={styles.outerCursor} data-testid="component-outer-cursor" />
            <i
                ref={innerCursorRef}
                className={`${styles.innerCursor} ${isStuck ? styles.innerCursorStuck : ''}`}
                data-testid="component-inner-cursor"
            />
        </>
    );
};

export default Cursor;
