import React from 'react';
import anime from 'animejs';
import styles from './heading.css';

const Heading: React.FC = ({children}) => {
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);
    const animate = () => {
        anime({
            targets: headingRef.current,
            duration: 800,
            delay: 400,
            opacity: [0, 1],
            translateY: ['5vh', 0],
            easing: 'easeOutQuart',
        });
    };

    React.useEffect(() => {
        animate();
    }, []);

    return (
        <h1 ref={headingRef} className={styles.heading} data-test="component-heading">
            {children}
        </h1>
    );
};

export default Heading;
