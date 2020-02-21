import React, {useRef, useEffect, useState} from 'react';
import useEventListener from '@use-it/event-listener';
import styles from './cursor.css';

const Cursor = () => {
    const [coords, setCoords] = useState([-100, -100]);
    const innerCursorRef = useRef(null);
    const outerCursorRef = useRef(null);
    const animationRef = useRef(null);
    const animate = () => {
        innerCursorRef.current.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
        outerCursorRef.current.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
    };
    const handleCursor = ({clientX, clientY}) => {
        setCoords([clientX, clientY]);
    };

    useEventListener('mousemove', handleCursor);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);

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
