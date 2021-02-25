/* eslint-disable no-param-reassign */
import React from 'react';
import useEventListener from '@use-it/event-listener';
import {useStateValue} from '../../state';
import styles from './cursor.css';

interface IHandler {
    (a: number, b: number, c: HTMLElement, d: HTMLElement): void
}

const Cursor: React.FC = () => {
    const {state} = useStateValue();
    const outerCursorRef = React.useRef<HTMLElement | null>(null);
    const innerCursorRef = React.useRef<HTMLElement | null>(null);
    const handleIsUnstuck: IHandler = (coordX, coordY, inner, outer) => {
        document.body.style.setProperty('--x', `${coordX}px`);
        document.body.style.setProperty('--y', `${coordY}px`);
        outer.style.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        outer.style.setProperty('--cursor-width', '30px');
        outer.style.setProperty('--cursor-height', '30px');
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY})`;
    };
    const handleIsStuck: IHandler = (coordX, coordY, inner, outer) => {
        const {width, height, top, left} = state.cursor.props;

        outer.style.transform = `translate3d(${left + 10}px, ${top + 10}px, 0)`;
        outer.style.setProperty('--cursor-width', `${width + 10}px`);
        outer.style.setProperty('--cursor-height', `${height + 10}px`);
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY})`;
    };
    const handleCursor = (coordX: number, coordY: number) => {
        const outer = (outerCursorRef.current as HTMLElement);
        const inner = (innerCursorRef.current as HTMLElement);

        if (inner && outer) {
            (state.cursor.isStuck ? handleIsStuck : handleIsUnstuck)(coordX, coordY, inner, outer);
        }
    };
    const handleMouse = (event: MouseEvent) => {
        requestAnimationFrame(() => handleCursor(event.clientX, event.clientY));
    };

    useEventListener('mousemove', handleMouse);

    return (
        <>
            <i
                ref={outerCursorRef}
                className={`${styles.outerCursor} ${state.cursor.isStuck ? styles.outerCursorStuck : ''}`} data-test="component-outer-cursor"
            />
            <i
                ref={innerCursorRef}
                className={`${styles.innerCursor} ${state.cursor.isStuck ? styles.innerCursorStuck : ''}`}
                data-test="component-inner-cursor"
            />
        </>
    );
};

export default Cursor;
