import {m} from 'framer-motion';
import {animations} from './section.animations';
import styles from './section.module.css';

const Section: React.FC = ({children}) => (
    <m.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={animations}
        className={styles.section}
        data-test="component-section"
    >
        {children}
    </m.section>
);

export default Section;
