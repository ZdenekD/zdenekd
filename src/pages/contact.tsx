import Head from 'next/head';
import {useRouter} from 'next/router';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Form from '../components/form/contact';
import pages from '../data/pages';
import PagesEnum from '../utils/enums/PagesEnum';
import LocalesEnum from '../utils/enums/LocalesEnum';
import styles from '../assets/styles/pages/contact.css';

const Page: React.FC = () => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.contact].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
            </Head>
            <Layout className={styles.root} data-test="component-layout">
                <Heading data-test="component-heading">{heading}</Heading>
                <Form />
            </Layout>
        </>
    );
};

export default Page;
