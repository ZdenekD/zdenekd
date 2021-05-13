/* eslint-disable no-param-reassign */
import React from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../../enums/VariantsEnum';
import prefix from '../../../../helpers/prefix';
import styles from './textarea.css';

interface ITextarea {
    name: string
    label: string
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxlength?: number
    autoComplete?: 'on' | 'off'
    className?: string
    error?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextarea>(({
    name,
    label,
    placeholder,
    variant,
    required,
    disabled,
    maxlength,
    autoComplete,
    className = '',
    error,
}, ref: React.Ref<HTMLTextAreaElement>) => {
    const [length, setLength] = React.useState<number>(0);
    const [id] = useId(1, prefix);
    const handleHeight = (element: HTMLTextAreaElement) => {
        if (element.style) {
            element.style.height = '0';
            element.style.height = `${element.scrollHeight}px`;
        }
    };
    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleHeight(event.target);
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.control} ${disabled ? styles.disabled : ''} ${error ? styles[VariantsEnum.danger] : ''} ${className}`}>
            <textarea
                ref={ref}
                id={id}
                name={name}
                className={`${styles.textarea} ${length > 0 ? styles.nonempty : ''} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''}`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                maxLength={maxlength}
                autoComplete={autoComplete}
                data-test="component-textarea"
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
            {error && (<span className={styles.error} data-test="component-textarea-error">{error}</span>)}

            {maxlength && (
                <span className={styles.maxlength} data-test="component-textarea-maxlength">
                    {length} / {maxlength}
                </span>
            )}
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
