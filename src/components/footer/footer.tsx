import React from 'react';
import {motion} from 'framer-motion';
import Keys from '../keys';
import Icon, {IconsEnum} from '../../UI/icon';
import {useGlobalState} from '../../state';
import {variants} from './footer.animations';
import getRoman from '../../helpers/getRoman';
import styles from './footer.css';

const Footer: React.FC = () => {
    const {state} = useGlobalState();
    const dotRef = React.useRef<HTMLElement | null>(null);
    const year = new Date().getFullYear();
    const date = getRoman(year);

    return (
        <motion.footer
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants.footer}
            className={`${styles.footer} ${state.menu.isOpen ? styles.opened : styles.closed}`} data-test="component-footer"
        >
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí &lt;kouzel&gt; a &#123;zaklínadel&#125;</code>
            <div className={styles.linkWrapper}>
                <a
                    href="mailto:ditezdenek&#64;pm.me?subject=&clubs; Zpráva přímo do schránky &clubs;"
                    title="Zpráva přímo do schránky"
                    className={styles.link}
                >
                    <Icon variant={IconsEnum.message} />
                </a>
                <a
                    href="https://github.com/ZdenekD"
                    title="Github"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon variant={IconsEnum.brandGithub} />
                </a>
            </div>
            <Keys />
            <motion.span
                initial={false}
                animate={state.menu.isOpen ? 'enter' : 'exit'}
                variants={variants.scroll}
                className={styles.scroll}
            >
                Scroll
                <motion.i
                    ref={dotRef}
                    initial="initial"
                    animate="enter"
                    variants={variants.dot}
                    className={styles.dot}
                />
            </motion.span>
        </motion.footer>
    );
};

export default Footer;
