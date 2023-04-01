
import {forwardRef} from 'react';
import styles from './form.module.css';
import type {FormEvent, PropsWithChildren} from 'react';

export type IProps = {
    className?: string
    onSubmit?: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

const Form = forwardRef<HTMLFormElement, PropsWithChildren<IProps>>(({
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
