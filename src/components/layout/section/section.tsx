import {m} from 'framer-motion';
import {animations} from './section.animations';
import styles from './section.module.css';
import type {PropsWithChildren} from 'react';

const Section = ({children}: PropsWithChildren) => (
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
