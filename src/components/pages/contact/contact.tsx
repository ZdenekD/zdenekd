import Head from 'next/head';
import {useRouter} from 'next/router';
import Form from '@/components/form/contact';
import Layout from '@/components/layout';
import Heading from '@/components/layout/heading';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';
import styles from './contact.module.css';

const Contact: React.FC = () => {
    const router = useRouter();
    const lang = router.locale as LocalesEnum || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.contact].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{heading} | ZdenekD</title>
            </Head>
            <Layout className={styles.root}>
                <Heading data-testid="component-heading">{heading}</Heading>
                <Form />
            </Layout>
        </>
    );
};

export default Contact;
