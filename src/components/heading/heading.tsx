import {motion} from 'framer-motion';
import {variants} from './heading.animations';
import styles from './heading.css';

const Heading: React.FC = ({children}) => (
    <motion.h1
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={styles.heading}
        data-test="component-heading"
    >
        {children}
    </motion.h1>
);

export default Heading;
