import {useRef, useEffect, useState} from 'react';
import useEventListener from '@use-it/event-listener';

const useCursor = callback => {
    const [coords, setCoords] = useState([-100, -100]);
    const animationRef = useRef(null);
    const handleCursor = event => {
        setCoords([event.clientX, event.clientY]);
    };
    const handleAnimate = () => callback(coords);

    useEventListener('mousemove', handleCursor);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(handleAnimate);

        return () => cancelAnimationFrame(animationRef.current);
        // eslint-disable-next-line
    }, [coords]);
};

export default useCursor;
