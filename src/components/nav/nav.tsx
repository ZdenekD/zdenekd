import Link from 'next/link';
import Anchor from '../../UI/anchor';
import pages from '../../data/pages';
import styles from './nav.css';

const Nav: React.FC = () => (
    <nav className={styles.nav} data-test="component-nav">
        <ul className={styles.list}>
            {Object.keys(pages).map((item: string) => (
                <li key={pages[item].id}>
                    <Link passHref href={`/${pages[item].slug}`}>
                        <Anchor href={`/${pages[item].slug}`}>{pages[item].title}</Anchor>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
