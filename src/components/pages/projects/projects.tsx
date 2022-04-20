import Head from 'next/head';
import {useRouter} from 'next/router';
import Layout from '@/components/layout';
import Heading from '@/components/layout/heading';
import Project from '@/components/project';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';
import styles from './projects.module.css';

const Projects: React.FC = () => {
    const router = useRouter();
    const lang = router.locale as LocalesEnum || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.projects].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{heading} | ZdenekD</title>
            </Head>
            <Layout className={styles.root}>
                <Heading data-testid="component-heading">{heading}</Heading>
                <article className={styles.article}>
                    <Project />
                </article>
            </Layout>
        </>
    );
};

export default Projects;
