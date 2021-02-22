import {motion} from 'framer-motion';
import Nav from '../nav';
import {useStateValue} from '../../state';
import setAnimation from '../../state/animation/actions';
import variants from './aside.animations';
import styles from './aside.css';

const Aside: React.FC = () => {
    const {state, dispatch} = useStateValue();
    const handleAnimationStart = () => {
        dispatch(setAnimation({
            animation: {
                ...state.animation,
                isAsideAnimated: true,
            },
        }));
    };
    const handleAnimationComplete = () => {
        dispatch(setAnimation({
            animation: {
                ...state.animation,
                isAsideAnimated: false,
            },
        }));
    };

    return (
        <motion.aside
            initial={false}
            animate={state.menu.isOpen ? 'animate' : 'exit'}
            variants={variants}
            className={styles.aside}
            data-test="component-aside"
            onAnimationStart={handleAnimationStart}
            onAnimationComplete={handleAnimationComplete}
        >
            <Nav />
        </motion.aside>
    );
};

export default Aside;
