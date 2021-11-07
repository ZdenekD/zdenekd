import {m} from 'framer-motion';
import Link from 'next/link';
import {useRouter} from 'next/router';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import getPage from '@/helpers/getPage';
import {useAnimationState} from '@/store/animation';
import {useMenuState} from '@/store/menu';
import Anchor from '@/UI/anchor';
import {animations, animation} from './nav.animations';
import styles from './nav.module.css';

const Nav: React.FC = () => {
    const router = useRouter();
    const [{menu}, {setMenu}] = useMenuState();
    const [, {setAnimation}] = useAnimationState();
    const page = getPage(router.route);
    const lang = router.locale || LocalesEnum.cs;
    const handleAnimationComplete = () => {
        setAnimation({animation: {isAsideAnimated: false}});
    };
    const handleClick = () => {
        setAnimation({animation: {isAsideAnimated: true}});
        setMenu({menu: {isOpen: false}});
    };

    return (
        <nav className={styles.nav} data-test="component-nav">
            <m.ul
                initial={false}
                animate={menu.isOpen ? 'enter' : 'exit'}
                variants={animations}
                className={styles.list}
                onAnimationComplete={handleAnimationComplete}
            >
                {Object.keys(pages).map((key: string) => (
                    <m.li
                        key={pages[key].id}
                        variants={animation}
                        className={styles.item}
                        data-test="component-item"
                    >
                        <Link passHref href={pages[key].route}>
                            <Anchor
                                href={pages[key].route}
                                className={`${styles.link} ${page === key ? styles.active : ''}`}
                                onClick={handleClick}
                            >
                                {pages[key].locale[lang].title}
                            </Anchor>
                        </Link>
                    </m.li>
                ))}
            </m.ul>
        </nav>
    );
};

export default Nav;
