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
        const {style} = outerCursorRef.current;

        style.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        style.width = '';
        style.height = '';
        style.borderRadius = '50%';
    };
    const handleIsStuck = () => {
        const {style} = outerCursorRef.current;
        const {width, height, top, left} = cursor.props;

        style.transform = `matrix(1, 0, 0, 1, ${left + 10}, ${top + 10})`;
        style.width = `${width + 10}px`;
        style.height = `${height + 10}px`;
        style.borderRadius = '8px';
    };
    const animate = () => {
        const [coordX, coordY] = coords;
        const {style} = innerCursorRef.current;

        style.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY})`;

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
