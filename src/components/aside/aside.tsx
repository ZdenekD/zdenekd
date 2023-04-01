import {
    LazyMotion,
    domAnimation,
    m
} from 'framer-motion';
import dynamic from 'next/dynamic';
import useStore from '@/store';
import {animations} from './aside.animations';
import styles from './aside.module.css';

const Nav = dynamic(() => import('@/components/nav'));

const Aside = () => {
    const {set} = useStore(state => state.animation);
    const {isOpen} = useStore(state => state.menu);
    const handleAnimationStart = () => set({isAsideAnimated: true});
    const handleAnimationEnd = () => set({isAsideAnimated: false});

    return (
        <LazyMotion strict features={domAnimation}>
            <m.aside
                initial={false}
                animate={isOpen ? 'enter' : 'exit'}
                variants={animations}
                className={styles.aside}
                data-testid="component-aside"
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
            >
                <Nav />
            </m.aside>
        </LazyMotion>
    );
};

export default Aside;
