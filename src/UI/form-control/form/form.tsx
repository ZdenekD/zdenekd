import React from 'react';
import styles from './form.css';

interface IForm {
    children: React.ReactNode
    className?: string
    onSubmit?: () => void
}

const Form = React.forwardRef<HTMLFormElement, IForm>(({
    children,
    className = '',
    onSubmit = undefined,
}, ref) => (
    <form ref={ref} className={`${styles.form} ${className}`} data-test="component-form" onSubmit={onSubmit}>
        {children}
    </form>
));

Form.displayName = 'Form';

export default Form;
