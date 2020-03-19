import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import Keys from './keys';
import styles from './footer.css';
import getRoman from '../../helpers/getRoman';
import {getPageIndex} from '../../helpers/getPage';

const Footer = ({isOpen, isAnimated}) => {
    const dotRef = React.useRef(null);
    const router = useRouter();
    const index = getPageIndex(router.route);
    const year = new Date().getFullYear();
    const date = getRoman(year);
    const handleDot = () => {
        const {style} = dotRef.current;

        style.setProperty('--dot-transform', `calc(${index} * var(--gutter))`);
        style.setProperty('--dot-opacity', '1');
    };

    React.useEffect(() => {
        handleDot();
    });

    return (
        <footer className={`${styles.footer} ${!isOpen && !isAnimated ? styles.show : ''}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí kouzel.</code>
            <Keys />
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
