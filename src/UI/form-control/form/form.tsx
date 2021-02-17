import styles from './form.css';

interface IForm {
    className?: string
    onSubmit?: () => void
}

const Form: React.FC<IForm> = ({
    children,
    className = '',
    onSubmit,
}) => (
    <form className={`${styles.form} ${className}`} data-test="component-form" onSubmit={onSubmit}>
        {children}
    </form>
);

export default Form;
