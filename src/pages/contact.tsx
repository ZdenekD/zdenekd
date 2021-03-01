import Layout from '../components/layout';
import Heading from '../components/heading';
import Form from '../components/form/contact';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import styles from '../assets/styles/pages/contact.css';

const Page: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <Heading data-test="component-heading">{pages[PagesEnum.contact].heading}</Heading>
        <Form />
    </Layout>
);

export default Page;
