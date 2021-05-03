import {motion} from 'framer-motion';
import Nav from '../nav';
import {useGlobalState} from '../../state';
import setAnimation from '../../state/animation/actions';
import {variants} from './aside.animations';
import styles from './aside.css';

const Aside: React.FC = () => {
    const [state, dispatch] = useGlobalState();
    const handleAnimationStart = () => {
        dispatch(setAnimation({animation: {isAsideAnimated: true}}));
    };
    const handleAnimationEnd = () => {
        dispatch(setAnimation({animation: {isAsideAnimated: false}}));
    };

    return (
        <motion.aside
            initial={false}
            animate={state.menu.isOpen ? 'enter' : 'exit'}
            variants={variants}
            className={styles.aside}
            data-test="component-aside"
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <Nav />
        </motion.aside>
    );
};

export default Aside;
