import {m} from 'framer-motion';
import {animations} from './section.animations';
import styles from './section.module.css';

interface IProps {
    children?: React.ReactNode
}

const Section: React.FC<IProps> = ({children}) => (
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
