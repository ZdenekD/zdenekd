import React from 'react';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Lang from './lang';
import Keys from '../../keys';
import useLocale from '../../../hooks/useLocale';
import Icon, {IconsEnum} from '../../UI/icon';
import {useMenuState} from '../../../state/menu';
import {animations} from './footer.animations';
import styles from './footer.module.css';

const Footer: React.FC = () => {
    const router = useRouter();
    const [{menu}] = useMenuState();
    const dotRef = React.useRef<HTMLElement | null>(null);
    const locale = useLocale();

    return (
        <motion.footer
            initial="initial"
            animate="enter"
            exit="exit"
            variants={animations.footer}
            className={`${styles.footer} ${menu.isOpen ? styles.opened : styles.closed}`} data-test="component-footer"
        >
            <code className={styles.code}>
                {locale.footer.code}
            </code>
            <div className={styles.linkWrapper}>
                <a
                    href={`mailto:ditezdenek&#64;pm.me?subject=&clubs; ${locale.footer.subject} &clubs;`}
                    title={locale.footer.subject}
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
            <motion.div
                initial={false}
                animate={menu.isOpen ? 'enter' : 'exit'}
                variants={animations.locale}
                className={styles.languages}
            >
                {router.locales && router.locales.map(item => (
                    <Lang
                        key={item}
                        locale={item}
                        router={router}
                    />
                ))}
            </motion.div>
            <Keys />
            <motion.span
                initial={false}
                animate={menu.isOpen ? 'enter' : 'exit'}
                variants={animations.scroll}
                className={styles.scroll}
            >
                Scroll
                <motion.i
                    ref={dotRef}
                    initial="initial"
                    animate="enter"
                    variants={animations.dot}
                    className={styles.dot}
                />
            </motion.span>
        </motion.footer>
    );
};

export default Footer;
