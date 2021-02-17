import styles from './nav.css';

const Nav: React.FC = () => (
    <nav className={styles.nav} data-test="component-navigation">
        <ul className={styles.list}>
            <li>Navigation</li>
        </ul>
    </nav>
);

export default Nav;
