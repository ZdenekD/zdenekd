import styles from './loader.module.css';

type IProps = {
    className?: string
}

const Loader = ({className = ''}: IProps) => (
    <div className={`${styles.loader} ${className}`} data-testid="component-loader" />
);

export default Loader;
