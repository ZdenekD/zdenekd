import React, {useEffect, useState, useRef} from 'react';
import useEventListener from '@use-it/event-listener';
import {useStateValue} from '../../state';
import styles from './cursor.css';

const Cursor = () => {
    const [coords, setCoords] = useState([-30, -30]);
    const animationRef = useRef(null);
    const innerCursorRef = useRef(null);
    const outerCursorRef = useRef(null);
    const [{cursor}] = useStateValue();
    const handleIsUnstuck = () => {
        const [coordX, coordY] = coords;
        const {style: outer} = outerCursorRef.current;
        const {style: inner} = innerCursorRef.current;
        const color = getComputedStyle(document.documentElement, null).getPropertyValue('--color-blue-darken-4');

        outer.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        outer.setProperty('--cursor-width', '30px');
        outer.setProperty('--cursor-height', '30px');
        outer.setProperty('--cursor-radius', '50%');
        outer.setProperty('--cursor-color', color);
        outer.setProperty('--cursor-border', '1px');
        inner.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1)`;
        inner.setProperty('--cursor-color', color);
    };
    const handleIsStuck = () => {
        const [coordX, coordY] = coords;
        const {style: outer} = outerCursorRef.current;
        const {style: inner} = innerCursorRef.current;
        const {width, height, top, left} = cursor.props;
        const color = getComputedStyle(document.documentElement, null).getPropertyValue('--color-red');

        outer.transform = `matrix(1, 0, 0, 1, ${left + 10}, ${top + 10})`;
        outer.setProperty('--cursor-width', `${width + 10}px`);
        outer.setProperty('--cursor-height', `${height + 10}px`);
        outer.setProperty('--cursor-color', color);
        outer.setProperty('--cursor-radius', '8px');
        outer.setProperty('--cursor-border', '2px');
        inner.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1.3)`;
        inner.setProperty('--cursor-color', color);
    };
    const animate = () => {
        (cursor.isStuck ? handleIsStuck : handleIsUnstuck)();
    };
    const handleCursor = event => setCoords([event.clientX, event.clientY]);

    useEventListener('mousemove', handleCursor);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(() => animate());

        return () => cancelAnimationFrame(animationRef.current);
        // eslint-disable-next-line
    }, [coords]);

    return (
        <>
            <i className={styles.outerCursor} ref={outerCursorRef} data-test="component-outer-cursor" />
            <i className={styles.innerCursor} ref={innerCursorRef} data-test="component-inner-cursor" />
        </>
    );
};

export default Cursor;
