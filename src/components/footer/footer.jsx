import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import styles from './footer.css';
import data from '../../data/pages';
import useHover from '../../hooks/hover';
import getRoman from '../../helpers/getRoman';
import {getPageIndex} from '../../helpers/getPage';

const Footer = ({isOpen, isAnimated}) => {
    const dotRef = useRef(null);
    const keyUpRef = useRef(null);
    const keyDownRef = useRef(null);
    const router = useRouter();
    const pages = Object.keys(data);
    const index = getPageIndex(router.route);
    const minIndex = 0;
    const maxIndex = pages.length - 1;
    const year = new Date().getFullYear();
    const date = getRoman(year);
    const handleKeyUp = () => {
        if (index - 1 >= minIndex) {
            router.push(data[pages[index - 1]].link);
        }
    };
    const handleKeyDown = () => {
        if (index + 1 <= maxIndex) {
            router.push(data[pages[index + 1]].link);
        }
    };
    const handleDot = () => {
        dotRef.current.style.setProperty('--dot-transform', `calc(${index} * var(--gutter))`);
        dotRef.current.style.setProperty('--dot-opacity', '1');
    };

    useEffect(() => {
        handleDot();
    });

    useHover(keyUpRef.current);
    useHover(keyDownRef.current);

    return (
        <footer className={`${styles.footer} ${!isOpen && !isAnimated ? styles.show : ''}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí kouzel.</code>
            <div className={`${styles.keys} ${!isOpen && !isAnimated ? styles.showKeys : ''}`}>
                <button type="button" className={`${styles.key} ${index === minIndex ? styles.disabled : ''}`} onClick={handleKeyUp} aria-label="Předchozí stránka">
                    <i className={styles.keyUp} ref={keyUpRef}></i>
                </button>
                <span className={styles.key}>
                    <i className={styles.keyLeft}></i>
                    <button type="button" className={`${styles.key} ${index === maxIndex ? styles.disabled : ''}`} onClick={handleKeyDown} aria-label="Následující stránka">
                        <i className={styles.keyDown} ref={keyDownRef}></i>
                    </button>
                    <i className={styles.keyRight}></i>
                </span>
            </div>
            <span className={styles.scroll}>
                Scroll
                <i className={styles.dot} ref={dotRef}></i>
            </span>
        </footer>
    );
};

Footer.propTypes = {
    isAnimated: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Footer;
