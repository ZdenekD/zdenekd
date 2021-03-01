import React from 'react';
import {motion} from 'framer-motion';
import Keys from '../keys';
import useCursor from '../../hooks/useCursor';
import {useStateValue} from '../../state';
import {variants} from './footer.animations';
import Icon from '../../assets/images/icon_message.svg';
import getRoman from '../../helpers/getRoman';
import styles from './footer.css';

const Footer: React.FC = () => {
    const {state} = useStateValue();
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
        <motion.footer
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.6, delay: 1.4}}}
            exit={{opacity: 0, transition: {duration: 0.4}}}
            className={`${styles.footer} ${state.menu.isOpen ? styles.opened : styles.closed}`} data-test="component-footer"
        >
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
            <motion.span
                initial={false}
                animate={state.menu.isOpen ? 'enter' : 'exit'}
                variants={variants}
                className={styles.scroll}
            >
                Scroll
                <i ref={dotRef} className={styles.dot}></i>
            </motion.span>
        </motion.footer>
    );
};

export default Footer;
