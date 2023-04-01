import {m} from 'framer-motion';
import {useRouter} from 'next/router';
import {useRef} from 'react';
import Keys from '@/components/keys';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store';
import Icon, {IconsEnum} from '@/UI/icon';
import {animations} from './footer.animations';
import Lang from './lang';
import styles from './footer.module.css';

const Footer = () => {
    const router = useRouter();
    const {isOpen} = useStore(state => state.menu);
    const dotRef = useRef<HTMLElement | null>(null);
    const locale = useLocale();

    return (
        <m.footer
            initial="initial"
            animate="enter"
            exit="exit"
            variants={animations.footer}
            className={`${styles.footer} ${isOpen ? styles.opened : styles.closed}`}
            data-testid="component-footer"
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
            <m.div
                initial={false}
                animate={isOpen ? 'enter' : 'exit'}
                variants={animations.locale}
                className={styles.languages}
            >
                {router.locales ? router.locales.map(item => (
                    <Lang
                        key={item}
                        locale={item}
                        router={router}
                    />
                )) : null}
            </m.div>
            <Keys />
            <m.span
                initial={false}
                animate={isOpen ? 'enter' : 'exit'}
                variants={animations.scroll}
                className={styles.scroll}
            >
                Scroll
                <m.i
                    ref={dotRef}
                    initial="initial"
                    animate="enter"
                    variants={animations.dot}
                    className={styles.dot}
                />
            </m.span>
        </m.footer>
    );
};

export default Footer;
