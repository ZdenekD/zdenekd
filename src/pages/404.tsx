import {useRouter} from 'next/router';
import {Player} from '@lottiefiles/react-lottie-player';
import Layout from '@/components/layout';
import Heading from '@/components/heading';
import LocalesEnum from '@/utils/enums/LocalesEnum';
import '@/assets/styles/index.css';
import styles from '@/assets/styles/pages/error.css';

const Error: React.FC = () => {
    const router = useRouter();
    const paragraph: {[key: string]: string} = {
        [LocalesEnum.cs]: 'Stránka bohužel neexistuje',
        [LocalesEnum.en]: 'Page does not exist',
    };

    return (
        <Layout className={styles.root} data-test="component-error">
            <Heading data-test="component-heading">{router.locale && paragraph[router.locale]}</Heading>
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

export default Error;
