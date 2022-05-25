import React from 'react';
import styles from './form.module.css';

export type IProps = {
    className?: string
    children: React.ReactNode
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const Form = React.forwardRef<HTMLFormElement, IProps>(({
    className = '',
    children,
    onSubmit,
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
