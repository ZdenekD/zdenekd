import React, {forwardRef} from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../enums/VariantsEnum';
import prefix from '../../../helpers/prefix';
import styles from './input.css';

interface IInput {
    name: string
    label: string
    ref?: React.Ref<HTMLInputElement>
    type?: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxLength?: number
    autoComplete?: 'on' | 'off'
    className?: string
    error?: string
}

const Input: React.FC<IInput> = forwardRef(({
    name,
    label,
    type = 'text',
    placeholder,
    variant,
    required,
    disabled,
    maxLength,
    autoComplete,
    className = '',
    error,
}, ref: React.Ref<HTMLInputElement>) => {
    const [length, setLength] = React.useState(0);
    const [id] = useId(1, prefix);
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.control} ${className}`}>
            <label htmlFor={id} className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
                {label}
                {required && (<sup className={styles.required}>*</sup>)}
                {error && (<span className={styles.error} data-test="component-input-error">{error}</span>)}
            </label>

            <div className={styles.wrapper}>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    name={name}
                    className={`${styles.input} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                    data-test="component-input"
                    onChange={handleInput}
                />

                {maxLength && (<span className={`${styles.maxlength} ${disabled ? styles.maxLengthDisabled : ''}`}>{length} / {maxLength}</span>)}
            </div>
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
