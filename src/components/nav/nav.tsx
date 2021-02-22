import Link from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Anchor from '../../UI/anchor';
import {useStateValue} from '../../state';
import pages from '../../data/pages';
import {list, item} from './nav.animations';
import getPage from '../../helpers/getPage';
import styles from './nav.css';

const Nav: React.FC = () => {
    const router = useRouter();
    const {state} = useStateValue();
    const page = getPage(router.route);

    return (
        <nav className={styles.nav} data-test="component-nav">
            <motion.ul
                initial={false}
                animate={state.menu.isOpen ? 'animate' : 'exit'}
                variants={list}
                className={styles.list}
            >
                {Object.keys(pages).map((key: string) => (
                    <motion.li
                        key={pages[key].id}
                        variants={item}
                        className={styles.item}
                        data-test="component-item"
                    >
                        <Link passHref href={pages[key].route}>
                            <Anchor
                                href={pages[key].route}
                                className={`${styles.link} ${page === key ? styles.active : ''}`}
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
