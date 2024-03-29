import {m} from 'framer-motion';
import {animations} from './curtain.animations';
import styles from './curtain.module.css';

const Curtain: React.FC = () => (
    <m.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={animations}
        className={styles.curtain}
        data-testid="component-curtain"
    />
);

export default Curtain;
