import React from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../../enums/VariantsEnum';
import prefix from '../../../../helpers/prefix';
import styles from './input.css';

interface IInput {
    name: string
    label: string
    type?: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxlength?: number
    autoComplete?: 'on' | 'off'
    className?: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, IInput>(({
    name,
    label,
    type = 'text',
    placeholder,
    variant,
    required,
    disabled,
    maxlength,
    autoComplete,
    className = '',
    error,
}, ref: React.Ref<HTMLInputElement>) => {
    const [length, setLength] = React.useState<number>(0);
    const [id] = useId(1, prefix);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.control} ${disabled ? styles.disabled : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}>
            <input
                ref={ref}
                id={id}
                type={type}
                name={name}
                className={`${styles.input} ${length > 0 ? styles.nonempty : ''} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                maxLength={maxlength}
                autoComplete={autoComplete}
                data-test="component-input"
                onChange={handleInput}
            />
            <label
                htmlFor={id}
                className={styles.label}
            >
                <span className={styles.labelContent}>
                    {label}
                    {required && (<sup className={styles.required}>*</sup>)}
                </span>
            </label>
            {error && (<span className={styles.error} data-test="component-input-error">{error}</span>)}

            {maxlength && (
                <span className={styles.maxlength} data-test="component-input-maxlength">
                    {length} / {maxlength}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
