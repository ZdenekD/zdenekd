import {motion} from 'framer-motion';
import {variants} from './section.animations';
import styles from './section.module.css';

const Section: React.FC = ({children}) => (
    <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className={styles.section}
        data-test="component-section"
    >
        {children}
    </motion.section>
);

export default Section;
