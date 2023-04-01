import anime from 'animejs';
import {useEffect, useRef} from 'react';
import styles from './heading.module.css';
import type {PropsWithChildren} from 'react';

const Heading = ({children}: PropsWithChildren) => {
    const headingRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        anime({
            targets: headingRef.current,
            duration: 800,
            delay: 800,
            opacity: [0, 1],
            translateY: ['5vh', 0],
            easing: 'easeOutQuart',
        });
    }, []);

    return (
        <h1 ref={headingRef} className={styles.heading} data-testid="component-heading">
            {children}
        </h1>
    );
};

export default Heading;
