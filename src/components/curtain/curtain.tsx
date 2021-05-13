import {motion} from 'framer-motion';
import {variants} from './curtain.animations';
import styles from './curtain.module.css';

const Curtain: React.FC = () => (
    <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={variants}
        className={styles.curtain}
        data-test="component-curtain"
    />
);

export default Curtain;
