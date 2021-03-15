import Link from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Anchor from '../../UI/anchor';
import {useGlobalState} from '../../state';
import setAnimation from '../../state/animation/actions';
import pages from '../../data/pages';
import {variants, variant} from './nav.animations';
import getPage from '../../helpers/getPage';
import styles from './nav.css';
import setMenu from '../../state/menu/actions';

const Nav: React.FC = () => {
    const router = useRouter();
    const {state, dispatch} = useGlobalState();
    const page = getPage(router.route);
    const handleAnimationComplete = () => {
        dispatch(setAnimation({animation: {isAsideAnimated: false}}));
    };
    const handleClick = () => {
        dispatch(setAnimation({animation: {isAsideAnimated: true}}));
        dispatch(setMenu({menu: {isOpen: false}}));
    };

    return (
        <nav className={styles.nav} data-test="component-nav">
            <motion.ul
                initial={false}
                animate={state.menu.isOpen ? 'enter' : 'exit'}
                variants={variants}
                className={styles.list}
                onAnimationComplete={handleAnimationComplete}
            >
                {Object.keys(pages).map((key: string) => (
                    <motion.li
                        key={pages[key].id}
                        variants={variant}
                        className={styles.item}
                        data-test="component-item"
                    >
                        <Link passHref href={pages[key].route}>
                            <Anchor
                                href={pages[key].route}
                                className={`${styles.link} ${page === key ? styles.active : ''}`}
                                onClick={handleClick}
                            >
                                {pages[key].title}
                            </Anchor>
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </nav>
    );
};

export default Nav;
