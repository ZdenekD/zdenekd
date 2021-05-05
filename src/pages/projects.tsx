import Head from 'next/head';
import {useRouter} from 'next/router';
import Layout from '../components/layout';
import Project from '../components/project';
import Heading from '../components/heading';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import LocalesEnum from '../enums/LocalesEnum';
import styles from '../assets/styles/pages/projects.css';

const Projects: React.FC = () => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.projects].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
            </Head>
            <Layout className={styles.root} data-test="component-layout">
                <Heading data-test="component-heading">{heading}</Heading>
                <article className={styles.article}>
                    <Project />
                </article>
            </Layout>
        </>
    );
};

export default Projects;
