import {useRouter} from 'next/router';
import Layout from '@/components/layout';
import Heading from '@/components/layout/heading';
import Anchor from '@/components/UI/anchor';
import LocalesEnum from '@/enums/LocalesEnum';
import styles from './error.module.css';

const Error: React.FC = () => {
    const router = useRouter();
    const paragraph: {[key: string]: JSX.Element} = {
        [LocalesEnum.cs]: (
            <>
                <Heading data-testid="component-heading">Někde se stala chyba.</Heading>
                <h2 data-testid="component-subheading">
                    Pokud potíže přetrvávají, kontaktujte <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Něco se na webu po@#$&lo &clubs;">správce</Anchor>
                </h2>
            </>
        ),
        [LocalesEnum.en]: (
            <>
                <Heading data-testid="component-heading">Something had gone wrong.</Heading>
                <h2 data-testid="component-subheading">
                    If the problem persists, contact <Anchor href="mailto:frontend-optimist&#64;pm.me?subject=&clubs; Něco se na webu po@#$&lo &clubs;">administrator</Anchor>
                </h2>
            </>
        ),
    };

    return (
        <Layout className={styles.root}>
            {router.locale ? paragraph[router.locale] : null}
        </Layout>
    );
};

export default Error;
