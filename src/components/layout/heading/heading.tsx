import anime from 'animejs';
import React from 'react';
import styles from './heading.module.css';

type IProps = {
    children?: React.ReactNode
}

const Heading: React.FC<IProps> = ({children}) => {
    const headingRef = React.useRef<HTMLHeadingElement | null>(null);

    React.useEffect(() => {
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
