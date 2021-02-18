import Image from '../../assets/images/logo.svg';
import styles from './logo.css';

const Logo: React.FC = () => (
    <>
        <Image className={styles.logo} data-test="component-logo" />
        <i className={styles.shadow}></i>
    </>
);

export default Logo;
