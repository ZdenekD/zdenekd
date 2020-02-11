import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styles from './content.css';

const Content = ({content}) => {
    const [isPrepared, setPrepared] = useState(false);
    const contentRef = useRef(null);
    const handleAnimationIn = () => {
        anime({
            targets: contentRef.current,
            duration: 800,
            opacity: [0, 1],
            scale: [0.95, 1],
            easing: 'easeOutCubic',
        });
    };

    if (isPrepared) {
        handleAnimationIn();
    }

    useEffect(() => {
        setPrepared(true);
    }, []);

    return (
        <section className={styles.content} data-test="component-content" ref={contentRef}>
            {content}
        </section>
    );
};

Content.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
};

export default Content;
