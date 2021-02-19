import {motion} from 'framer-motion';
import Nav from '../nav';
import {useStateValue} from '../../state';
import variants from './aside.animations';
import styles from './aside.css';

const Aside: React.FC = () => {
    const {state} = useStateValue();

    return (
        <motion.aside
            initial={false}
            animate={state.menu.isOpen ? 'animate' : 'exit'}
            variants={variants}
            className={styles.aside}
            data-test="component-aside"
        >
            <Nav />
        </motion.aside>
    );
};

export default Aside;
