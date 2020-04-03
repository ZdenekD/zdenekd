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
                targets: contentRef.current.querySelector('h1'),
                duration: 800,
                delay: 400,
                opacity: [0, 1],
                translateY: ['5vh', 0],
                easing: 'easeOutQuart',
            })
            .add({
                targets: [...contentRef.current.querySelectorAll('.animated-block')],
                duration: 1200,
                delay(target, index) {
                    return (index * 200);
                },
                opacity: [0, 1],
                translateY: ['5vh', 0],
                easing: 'easeOutQuart',
            }, '-=400');
    };

    React.useEffect(() => {
        handleAnimationIn();
    });

    return (
        <section ref={contentRef} className={styles.content} data-test="component-content">
            <noscript>
                <strong className={styles.noscriptHeading}>
                    Nemáte zapnutý Javascript
                </strong>
                <p className={styles.noscriptParagraph}>
                    Některé součásti stránek Vám nemusí fungovat správně.<br />
                    Zde jsou <a href="https://www.enable-javascript.com/cz/" target="_blank" rel="noreferrer noopener"> instrukce</a> jak povolit JavaScript ve
                    Vašem webovém prohlížeči.
                </p>
            </noscript>
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
