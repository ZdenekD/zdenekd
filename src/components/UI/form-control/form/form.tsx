import React from 'react';
import styles from './form.module.css';

type IProps = {
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
        data-testid="component-form"
        onSubmit={onSubmit}
    >
        {children}
    </form>
));

Form.displayName = 'Form';

export default Form;
