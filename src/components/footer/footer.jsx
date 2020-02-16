import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import styles from './footer.css';
import data from '../../data/pages';
import getRoman from '../../helpers/getRoman';
import {getPage} from '../../helpers/getPage';

const Footer = ({isOpen, isAnimated}) => {
    const dotRef = useRef(null);
    const router = useRouter();
    const page = getPage(router.route);
    const pages = Object.keys(data);
    const year = new Date().getFullYear();
    const date = getRoman(year);
    const handleDot = () => {
        const index = pages.findIndex(item => item === page);

        dotRef.current.style.setProperty('--dot-transform', `calc(${index} * var(--gutter))`);
        dotRef.current.style.setProperty('--dot-opacity', '1');
    };

    useEffect(() => {
        handleDot();
    });

    return (
        <footer className={`${styles.footer} ${!isOpen && !isAnimated ? styles.show : ''}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí kouzel.</code>
            <span className={`${styles.keys} ${!isOpen && !isAnimated ? styles.showKeys : ''}`}>
                <span className={styles.key}>
                    <i className={styles.keyUp}></i>
                </span>
                <span className={styles.key}>
                    <i className={styles.keyLeft}></i>
                    <i className={styles.keyDown}></i>
                    <i className={styles.keyRight}></i>
                </span>
            </span>
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
