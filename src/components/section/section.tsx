import {motion} from 'framer-motion';
import {useStateValue} from '../../state';
import {variants} from './section.animations';
import styles from './section.css';

const Section: React.FC = ({children}) => {
    const {state} = useStateValue();

    return (
        <motion.section
            initial={false}
            animate={state.menu.isOpen ? 'animate' : 'exit'}
            variants={variants}
            className={styles.section}
            data-test="component-section"
        >
            {children}
        </motion.section>
    );
};

export default Section;
