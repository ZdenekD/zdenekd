import Nav from '../nav';
import styles from './aside.css';

const Aside: React.FC = () => {
    const isOpen = false;

    return (
        <aside className={`${styles.aside} ${isOpen ? styles.open : styles.close}`} data-test="component-aside">
            <Nav />
        </aside>
    );
};

export default Aside;
