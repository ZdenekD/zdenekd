import React, {useEffect, useState, useRef} from 'react';
import useEventListener from '@use-it/event-listener';
import styles from './cursor.css';

const Cursor = () => {
    const [coords, setCoords] = useState([-30, -30]);
    const animationRef = useRef(null);
    const innerCursorRef = useRef(null);
    const outerCursorRef = useRef(null);
    const animate = ([coordX, coordY]) => {
        innerCursorRef.current.style.transform = `translate(${coordX}px, ${coordY}px)`;
        outerCursorRef.current.style.transform = `translate(${coordX}px, ${coordY}px)`;
    };
    const handleCursor = event => {
        setCoords([event.clientX, event.clientY]);
    };
    const handleAnimate = () => animate(coords);

    useEventListener('mousemove', handleCursor);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(handleAnimate);

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
