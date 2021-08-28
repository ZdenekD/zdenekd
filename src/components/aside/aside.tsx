import {
    LazyMotion,
    domAnimation,
    m
} from 'framer-motion';
import {useAnimationState} from '@/store/animation';
import {useMenuState} from '@/store/menu';
import Nav from '../nav';
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
        <LazyMotion strict features={domAnimation}>
            <m.aside
                initial={false}
                animate={menu.isOpen ? 'enter' : 'exit'}
                variants={animations}
                className={styles.aside}
                data-test="component-aside"
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
            >
                <Nav />
            </m.aside>
        </LazyMotion>
    );
};

export default Aside;
