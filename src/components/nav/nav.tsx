import {m} from 'framer-motion';
import Link from 'next/link';
import {useRouter} from 'next/router';
import pages from '@/data/pages';
import {LocalesEnum} from '@/enums';
import type {PagesEnum} from '@/enums';
import getPage from '@/helpers/getPage';
import useStore from '@/store';
import Anchor from '@/UI/anchor';
import {animations, animation} from './nav.animations';
import styles from './nav.module.css';

const Nav = () => {
    const router = useRouter();
    const {isOpen, set: setMenu} = useStore(state => state.menu);
    const {set: setAnimation} = useStore(state => state.animation);
    const page = getPage(router.route);
    const lang = router.locale || LocalesEnum.cs;
    const handleAnimationComplete = () => {
        setAnimation({isAsideAnimated: false});
    };
    const handleClick = () => {
        setAnimation({isAsideAnimated: true});
        setMenu({isOpen: false});
    };

    return (
        <nav className={styles.nav} data-testid="component-nav">
            <m.ul
                initial={false}
                animate={isOpen ? 'enter' : 'exit'}
                variants={animations}
                className={styles.list}
                onAnimationComplete={handleAnimationComplete}
            >
                {Object.keys(pages).map(key => (
                    <m.li
                        key={pages[key as PagesEnum].id}
                        variants={animation}
                        className={styles.item}
                        data-testid="component-item"
                    >
                        <Link legacyBehavior href={pages[key as PagesEnum].route}>
                            <Anchor
                                href={pages[key as PagesEnum].route}
                                className={`${styles.link} ${page === key ? styles.active : ''}`}
                                onClick={handleClick}
                            >
                                {pages[key as PagesEnum].locale[lang as LocalesEnum].title}
                            </Anchor>
                        </Link>
                    </m.li>
                ))}
            </m.ul>
        </nav>
    );
};

export default Nav;
