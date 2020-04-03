import React from 'react';
import useEventListener from '@use-it/event-listener';
import state from '../../state';
import styles from './cursor.css';

const Cursor = () => {
    const [coords, setCoords] = React.useState([-30, -30]);
    const animationRef = React.useRef(null);
    const innerCursorRef = React.useRef(null);
    const outerCursorRef = React.useRef(null);
    const [{cursor}] = state.useStateValue();
    const handleIsUnstuck = () => {
        const [coordX, coordY] = coords;
        const {style: outer} = outerCursorRef.current;
        const {style: inner} = innerCursorRef.current;

        outer.transform = `translate3d(${coordX}px, ${coordY}px, 0)`;
        outer.setProperty('--cursor-width', '30px');
        outer.setProperty('--cursor-height', '30px');
        outer.setProperty('--cursor-radius', '50%');
        outer.border = '1px solid';
        inner.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1)`;
        document.body.style.setProperty('--float-x', `${coordX}px`);
        document.body.style.setProperty('--float-y', `${coordY}px`);
    };
    const handleIsStuck = () => {
        const [coordX, coordY] = coords;
        const {style: outer} = outerCursorRef.current;
        const {style: inner} = innerCursorRef.current;
        const {width, height, top, left} = cursor.props;

        outer.transform = `translate3d(${left + 10}px, ${top + 10}px, 0)`;
        outer.setProperty('--cursor-width', `${width + 10}px`);
        outer.setProperty('--cursor-height', `${height + 10}px`);
        outer.setProperty('--cursor-radius', '8px');
        outer.border = '2px dotted';
        inner.transform = `matrix(1, 0, 0, 1, ${coordX}, ${coordY}) scale(1.3)`;
    };
    const animate = () => {
        (cursor.isStuck ? handleIsStuck : handleIsUnstuck)();
    };
    const handleCursor = event => setCoords([event.clientX, event.clientY]);

    useEventListener('mousemove', handleCursor);

    React.useEffect(() => {
        animationRef.current = requestAnimationFrame(() => animate());

        return () => cancelAnimationFrame(animationRef.current);
        // eslint-disable-next-line
    }, [coords]);

    return (
        <>
            <i ref={outerCursorRef} className={styles.outerCursor} data-test="component-outer-cursor" />
            <i ref={innerCursorRef} className={styles.innerCursor} data-test="component-inner-cursor" />
        </>
    );
};

export default Cursor;
