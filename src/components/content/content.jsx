import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styles from './content.css';

const Content = ({content}) => {
    const contentRef = React.useRef(null);
    const handleAnimationIn = () => {
        anime
            .timeline()
            .add({
                targets: contentRef.current,
                duration: 400,
                opacity: [0, 1],
                easing: 'easeOutCubic',
            })
            .add({
                targets: contentRef.current.querySelector('h2'),
                duration: 1200,
                delay: 400,
                opacity: [0, 1],
                translateY: ['10vh', 0],
                easing: 'easeOutQuart',
            })
            .add({
                targets: [...contentRef.current.querySelectorAll('.animated-block')],
                duration: 1200,
                delay(target, index) {
                    return (index * 200);
                },
                opacity: [0, 1],
                translateY: ['10vh', 0],
                easing: 'easeOutQuart',
            }, '-=800');
    };

    React.useEffect(() => {
        handleAnimationIn();
    });

    return (
        <section ref={contentRef} className={styles.content} data-test="component-content">
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
