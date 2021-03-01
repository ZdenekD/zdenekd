import Layout from '../components/layout';
import Project from '../components/project';
import Heading from '../components/heading';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import styles from '../assets/styles/pages/projects.css';

const Projects: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <Heading data-test="component-heading">{pages[PagesEnum.projects].heading}</Heading>
        <article className={styles.article}>
            <Project />
        </article>
    </Layout>
);

export default Projects;
