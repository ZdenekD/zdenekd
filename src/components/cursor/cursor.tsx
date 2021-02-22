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
        outer.style.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        outer.style.setProperty('--cursor-width', '30px');
        outer.style.setProperty('--cursor-height', '30px');
        outer.style.setProperty('--cursor-radius', '50%');
        outer.style.border = '1px solid';
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1)`;
        document.body.style.setProperty('--float-x', `${coordX}px`);
        document.body.style.setProperty('--float-y', `${coordY}px`);
    };
    const handleIsStuck: IHandler = (coordX, coordY, inner, outer) => {
        const {width, height, top, left} = state.cursor.props;

        outer.style.transform = `translate3d(${left + 10}px, ${top + 10}px, 0)`;
        outer.style.setProperty('--cursor-width', `${width + 10}px`);
        outer.style.setProperty('--cursor-height', `${height + 10}px`);
        outer.style.setProperty('--cursor-radius', '8px');
        outer.style.border = '2px dashed';
        inner.style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1.5)`;
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
            <i ref={outerCursorRef} className={styles.outerCursor} data-test="component-outer-cursor" />
            <i ref={innerCursorRef} className={styles.innerCursor} data-test="component-inner-cursor" />
        </>
    );
};

export default Cursor;
