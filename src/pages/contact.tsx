import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from '@/assets/styles/pages/contact.css';
import Form from '@/components/form/contact';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';

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
