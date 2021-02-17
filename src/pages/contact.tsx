import Layout from '../components/layout';
import pages, {PagesEnum} from '../data/pages';
import Form from '../components/form/contact';
import styles from '../assets/styles/pages/contact.css';

const Page: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <h1 data-test="component-heading">{pages[PagesEnum.contact].heading}</h1>
        <Form />
    </Layout>
);

export default Page;
