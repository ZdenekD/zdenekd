import {m} from 'framer-motion';
import {animations} from './section.animations';
import styles from './section.module.css';

type IProps = {
    children?: React.ReactNode
}

const Section: React.FC<IProps> = ({children}) => (
    <m.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={animations}
        className={styles.section}
        data-testid="component-section"
    >
        {children}
    </m.section>
);

export default Section;
