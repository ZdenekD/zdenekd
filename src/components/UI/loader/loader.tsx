import styles from './loader.module.css';

interface IProps {
    className?: string
}

const Loader: React.FC<IProps> = ({className = ''}) => (
    <div className={`${styles.loader} ${className}`} data-test="component-loader" />
);

export default Loader;
