import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import styles from './input.module.css';

type IReadonlyProps = {readonly?: false; value?: string} | {readonly?: true; value: string};

type IInput = {
    id?: string
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type IProps = IReadonlyProps & IInput;

const Input = React.forwardRef<HTMLInputElement, IProps>(({
    id,
    name,
    label,
    type = 'text',
    value,
    placeholder,
    variant,
    required,
    disabled,
    readonly,
    maxlength,
    autoComplete,
    error,
    className = '',
    onChange,
    onBlur,
}, ref) => {
    const [length, setLength] = React.useState<number>(value?.length || 0);
    const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
        setLength(event.target.value.length);

        if (onChange) {
            onChange(event);
        }
    };

    React.useEffect(() => {
        setLength(value?.length || 0);
    }, [value]);

    return (
        <div className={`${styles.control} ${disabled || readonly ? styles.disabled : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}>
            <input
                ref={ref}
                id={id || name}
                type={type}
                name={name}
                value={value ?? ''}
                className={`${styles.input} ${length > 0 ? styles.nonempty : ''} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readonly}
                maxLength={maxlength}
                autoComplete={autoComplete}
                data-testid="component-input"
                aria-errormessage={`err_${id || name}`}
                aria-invalid={!!error}
                onChange={handleInput}
                onBlur={onBlur}
            />
            <label
                htmlFor={id || name}
                className={styles.label}
            >
                <span className={styles.labelContent}>
                    {label}
                    {required && (<sup className={styles.required}>*</sup>)}
                </span>
            </label>

            {error && (<span id={`err_${id || name}`} className={styles.error} data-testid="component-input-error">{error}</span>)}

            {maxlength && !disabled && (
                <span className={styles.maxlength} data-testid="component-input-maxlength">
                    {length} / {maxlength}
                </span>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
