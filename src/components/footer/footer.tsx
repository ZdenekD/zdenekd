import React from 'react';
import Icon from '../../assets/images/icon_message.svg';
import getRoman from '../../helpers/getRoman';
import styles from './footer.css';

const Footer: React.FC = () => {
    const dotRef = React.useRef(null);
    const year = new Date().getFullYear();
    const date = getRoman(year);

    return (
        <footer className={`${styles.footer} ${styles.show}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí <span data-tooltip="zaklínadel">&lt;kouzel&gt;</span>.</code>
            <a href="mailto:ditezdenek&#64;pm.me?subject=&clubs; Zpráva přímo do schránky &clubs;" title="Zpráva přímo do schránky" className={styles.link}>
                <Icon className={styles.icon} />
            </a>
            <span className={styles.scroll}>
                Scroll
                <i ref={dotRef} className={styles.dot}></i>
            </span>
        </footer>
    );
};

export default Footer;