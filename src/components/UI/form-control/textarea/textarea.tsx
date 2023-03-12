/* eslint-disable no-param-reassign */
import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import styles from './textarea.module.css';

type IReadonlyProps = {readonly?: false; value?: string} | {readonly?: true; value: string};

type ITextarea = {
    id?: string
    name: string
    label: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxlength?: number
    autoComplete?: 'on' | 'off'
    error?: string
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export type IProps = IReadonlyProps & ITextarea;

const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>(({
    id,
    name,
    label,
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
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const handleHeight = (element: HTMLTextAreaElement) => {
        if (element.style) {
            element.style.height = element.style.minHeight;
            element.style.height = `${element.scrollHeight + 2}px`;
        }
    };
    const handleInput: React.ChangeEventHandler<HTMLTextAreaElement> = event => {
        handleHeight(event.target);
        setLength(event.target.value.length);

        if (onChange) {
            onChange(event);
        }
    };

    React.useEffect(() => {
        setLength(value?.length || 0);

        if (textareaRef.current) {
            handleHeight(textareaRef.current);
        }
    }, [value]);

    return (
        <div className={`${styles.control} ${disabled || readonly ? styles.disabled : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}>
            <textarea
                ref={textareaRef || ref}
                id={id || name}
                name={name}
                value={value ?? ''}
                className={`${styles.textarea} ${length > 0 ? styles.nonempty : ''} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                placeholder={placeholder}
                disabled={disabled}
                readOnly={readonly}
                maxLength={maxlength}
                autoComplete={autoComplete}
                data-testid="component-textarea"
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
                    {required ? <sup className={styles.required}>*</sup> : null}
                </span>
            </label>

            {error ? <span id={`err_${id || name}`} className={styles.error} data-testid="component-textarea-error">{error}</span> : null}

            {maxlength && !disabled ? (
                <span className={styles.maxlength} data-testid="component-textarea-maxlength">
                    {length} / {maxlength}
                </span>
            ) : null}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
