import React from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '@/enums/VariantsEnum';
import prefix from '@/helpers/prefix';
import styles from './input.module.css';

type IReadonlyProps = {readonly?: false; value?: string} | {readonly?: true; value: string};

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
    error?: string
    className?: string
}

type IProps = IReadonlyProps & IInput;

const Input = React.forwardRef<HTMLInputElement, IProps>(({
    name,
    label,
    type = 'text',
    value = undefined,
    placeholder,
    variant,
    required,
    disabled,
    readonly,
    maxlength,
    autoComplete,
    error,
    className = '',
}, ref) => {
    const [length, setLength] = React.useState<number>(value?.length || 0);
    const [id] = useId(1, prefix);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.control} ${disabled || readonly ? styles.disabled : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}>
            <input
                ref={ref}
                id={id}
                type={type}
                name={name}
                value={value}
                className={`${styles.input} ${length > 0 ? styles.nonempty : ''} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={readonly}
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

            {maxlength && !disabled && (
                <span className={styles.maxlength} data-test="component-input-maxlength">
                    {length} / {maxlength}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
