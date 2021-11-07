import {useRouter} from 'next/router';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import Anchor from '@/components/UI/anchor';
import LocalesEnum from '@/enums/LocalesEnum';
import '@/assets/styles/index.css';
// eslint-disable-next-line import/order
import styles from '@/assets/styles/pages/error.css';

const Error: React.FC = () => {
    const router = useRouter();
    const paragraph: {[key: string]: JSX.Element} = {
        [LocalesEnum.cs]: (
            <>
                <Heading data-test="component-heading">Někde se stala chyba.</Heading>
                <h2 data-test="component-subheading">
                    Pokud potíže přetrvávají, kontaktujte <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Něco se na webu po@#$&lo &clubs;">správce</Anchor>
                </h2>
            </>
        ),
        [LocalesEnum.en]: (
            <>
                <Heading data-test="component-heading">Something had gone wrong.</Heading>
                <h2 data-test="component-subheading">
                    If the problem persists, contact <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Něco se na webu po@#$&lo &clubs;">administrator</Anchor>
                </h2>
            </>
        ),
    };

    return (
        <Layout className={styles.root} data-test="component-error">
            {router.locale && paragraph[router.locale]}
        </Layout>
    );
};

export default Error;
