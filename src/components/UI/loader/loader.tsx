import styles from './loader.module.css';

interface ILoader {
    className?: string
}

const Loader: React.FC<ILoader> = ({className = ''}) => (
    <div className={`${styles.loader} ${className}`} data-test="component-loader" />
);

export default Loader;
