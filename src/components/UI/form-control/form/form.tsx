import React from 'react';
import styles from './form.module.css';

interface IProps {
    children?: React.ReactNode
    className?: string
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const Form = React.forwardRef<HTMLFormElement, IProps>(({
    children,
    className = '',
    onSubmit = undefined,
}, ref) => (
    <form
        ref={ref}
        className={`${styles.form} ${className}`}
        data-test="component-form"
        onSubmit={onSubmit}
    >
        {children}
    </form>
));

Form.displayName = 'Form';

export default Form;
