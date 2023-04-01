import {Player} from '@lottiefiles/react-lottie-player';
import {useRouter} from 'next/router';
import Layout from '@/components/layout';
import Heading from '@/components/layout/heading';
import {LocalesEnum} from '@/enums';
import styles from './notfound.module.css';

const NotFound = () => {
    const router = useRouter();
    const paragraph: {[key: string]: string} = {
        [LocalesEnum.cs]: 'Stránka bohužel neexistuje',
        [LocalesEnum.en]: 'Page does not exist',
    };

    return (
        <Layout className={styles.root}>
            <Heading data-testid="component-heading">{router.locale ? paragraph[router.locale] : null}</Heading>
            <div className={styles.animation}>
                <Player
                    autoplay
                    loop
                    src='/error.json'
                />
            </div>
        </Layout>
    );
};

export default NotFound;
