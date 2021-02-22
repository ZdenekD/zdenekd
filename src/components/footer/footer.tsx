import React from 'react';
import Keys from '../keys';
import useCursor from '../../hooks/useCursor';
import Icon from '../../assets/images/icon_message.svg';
import getRoman from '../../helpers/getRoman';
import styles from './footer.css';

const Footer: React.FC = () => {
    const [element, setElement] = React.useState<HTMLAnchorElement | null>(null);
    const anchorRef = React.useRef<HTMLAnchorElement | null>(null);
    const dotRef = React.useRef<HTMLElement | null>(null);
    const year = new Date().getFullYear();
    const date = getRoman(year);

    React.useEffect(() => {
        setElement(anchorRef.current);
    }, []);

    useCursor(element);

    return (
        <footer className={`${styles.footer} ${styles.show}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí &lt;kouzel&gt; a &#123;zaklínadel&#125;</code>
            <a
                ref={anchorRef}
                href="mailto:ditezdenek&#64;pm.me?subject=&clubs; Zpráva přímo do schránky &clubs;"
                title="Zpráva přímo do schránky"
                className={styles.link}
            >
                <Icon className={styles.icon} />
            </a>
            <Keys />
            <span className={styles.scroll}>
                Scroll
                <i ref={dotRef} className={styles.dot}></i>
            </span>
        </footer>
    );
};

export default Footer;
