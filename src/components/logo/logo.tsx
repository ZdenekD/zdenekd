import Image from '../../assets/images/logo.svg';
import styles from './logo.css';

interface ILogo {
    className?: string
}

const Logo: React.FC<ILogo> = ({className = ''}) => (
    <div className={className}>
        <Image className={styles.logo} data-test="component-logo" />
        <i className={styles.shadow}></i>
    </div>
);

export default Logo;
