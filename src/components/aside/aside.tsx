import {motion} from 'framer-motion';
import Nav from '../nav';
import {useAnimationState} from '../../state/animation';
import {useMenuState} from '../../state/menu';
import {animations} from './aside.animations';
import styles from './aside.module.css';

const Aside: React.FC = () => {
    const [, {setAnimation}] = useAnimationState();
    const [{menu}] = useMenuState();
    const handleAnimationStart = () => {
        setAnimation({animation: {isAsideAnimated: true}});
    };
    const handleAnimationEnd = () => {
        setAnimation({animation: {isAsideAnimated: false}});
    };

    return (
        <motion.aside
            initial={false}
            animate={menu.isOpen ? 'enter' : 'exit'}
            variants={animations}
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
