import Layout from '../components/layout';
import Project from '../components/project';
import pages, {PagesEnum} from '../data/pages';
import styles from '../assets/styles/pages/projects.css';

const Projects: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <h1 data-test="component-heading">{pages[PagesEnum.projects].heading}</h1>
        <article className={styles.article}>
            <Project />
        </article>
    </Layout>
);

export default Projects;
