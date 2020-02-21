import React, {useRef} from 'react';
import useCursor from '../../hooks/cursor';
import styles from './cursor.css';

const Cursor = () => {
    const innerCursorRef = useRef(null);
    const outerCursorRef = useRef(null);
    const animate = ([coordX, coordY]) => {
        innerCursorRef.current.style.transform = `translate(${coordX}px, ${coordY}px)`;
        outerCursorRef.current.style.transform = `translate(${coordX}px, ${coordY}px)`;
    };

    useCursor(animate);

    return (
        <>
            <i className={styles.outerCursor} ref={outerCursorRef} data-test="component-outer-cursor" />
            <i className={styles.innerCursor} ref={innerCursorRef} data-test="component-inner-cursor" />
        </>
    );
};

export default Cursor;
