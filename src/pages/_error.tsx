import Layout from '../components/layout';
import Heading from '../components/heading';
import Anchor from '../UI/anchor';
import '../assets/styles/index.css';
import styles from '../assets/styles/pages/error.css';

const Error: React.FC = () => (
    <Layout className={styles.root} data-test="component-error">
        <Heading data-test="component-heading">Někde se stala chyba.</Heading>
        <h2 data-test="component-subheading">
            Pokud potíže přetrvávají, kontaktujte <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Něco se na webu po@#$&lo &clubs;">správce</Anchor>
        </h2>
    </Layout>
);

export default Error;
