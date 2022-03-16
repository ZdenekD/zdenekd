import Head from 'next/head';
import {useRouter} from 'next/router';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import Project from '@/components/project';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';
import styles from './projects.module.css';

const Projects: React.FC = () => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.projects].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
            </Head>
            <Layout className={styles.root} data-test="component-projects">
                <Heading data-test="component-heading">{heading}</Heading>
                <article className={styles.article}>
                    <Project />
                </article>
            </Layout>
        </>
    );
};

export default Projects;
