import React from 'react';
import styles from './footer.css';
import getRoman from '../../helpers/getRoman';

const Footer = () => {
    const year = new Date().getFullYear();
    const date = getRoman(year);

    return (
        <footer className={styles.footer}>
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí kouzel.</code>
            <span className={styles.scroll}>Scroll</span>
        </footer>
    );
};

export default Footer;
