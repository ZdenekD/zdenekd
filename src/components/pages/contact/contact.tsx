import Head from 'next/head';
import {useRouter} from 'next/router';
import Form from '@/components/form/contact';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import pages from '@/data/pages';
import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';
import styles from './contact.module.css';

const Contact: React.FC = () => {
    const router = useRouter();
    const lang = router.locale || LocalesEnum.cs;
    const {description, heading} = pages[PagesEnum.contact].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
            </Head>
            <Layout className={styles.root} data-test="component-contact">
                <Heading data-test="component-heading">{heading}</Heading>
                <Form />
            </Layout>
        </>
    );
};

export default Contact;
