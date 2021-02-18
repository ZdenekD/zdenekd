import styles from './section.css';

const Section: React.FC = ({children}) => (
    <section className={styles.section} data-test="component-section">
        {children}
    </section>
);

export default Section;
