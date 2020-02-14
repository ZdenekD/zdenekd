import React, {useEffect, useRef} from 'react';
import anime from 'animejs';
import styles from './footer.css';
import getRoman from '../../helpers/getRoman';

const Footer = () => {
    const footerRef = useRef(null);
    const year = new Date().getFullYear();
    const date = getRoman(year);
    const handleAnimation = () => {
        anime({
            targets: footerRef.current,
            duration: 800,
            opacity: [0, 1],
            easing: 'easeOutCubic',
        });
    };

    useEffect(() => {
        handleAnimation();
    });

    return (
        <footer className={styles.footer} ref={footerRef}>
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí kouzel.</code>
            <span className={styles.scroll}>Scroll</span>
        </footer>
    );
};

export default Footer;
