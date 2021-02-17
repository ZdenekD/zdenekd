import Nav from '../nav';
import styles from './aside.css';

const Aside: React.FC = () => (
    <aside className={styles.aside} data-test="component-aside">
        <Nav />
    </aside>
);

export default Aside;
