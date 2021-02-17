import {Player} from '@lottiefiles/react-lottie-player';
import Layout from '../components/layout';
import config from '../data/config';
import '../assets/styles/index.css';
import styles from '../assets/styles/pages/error.css';

const Error: React.FC = () => (
    <Layout className={styles.root} data-test="component-error">
        <h1 data-test="component-heading">Stránka bohužel neexistuje</h1>
        <div className={styles.animation}>
            <Player
                autoplay
                loop
                src={`${config.cloudfront}/error.json`}
            />
        </div>
    </Layout>
);

export default Error;
