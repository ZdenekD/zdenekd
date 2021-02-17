import React, {forwardRef} from 'react';
import {useId} from 'react-id-generator';
import VariantsEnum from '../../../enums/VariantsEnum';
import prefix from '../../../helpers/prefix';
import styles from './textarea.css';

interface ITextarea {
    name: string
    label: string
    ref?: React.Ref<HTMLTextAreaElement>
    placeholder?: string
    variant?: VariantsEnum
    required?: boolean
    disabled?: boolean
    maxLength?: number
    autoComplete?: 'on' | 'off'
    className?: string
    error?: string
}

const Textarea: React.FC<ITextarea> = forwardRef(({
    name,
    label,
    placeholder,
    variant,
    required,
    disabled,
    maxLength,
    autoComplete,
    className = '',
    error,
}, ref: React.Ref<HTMLTextAreaElement>) => {
    const [length, setLength] = React.useState(0);
    const [id] = useId(1, prefix);
    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.control} ${className}`}>
            <label htmlFor={id} className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}>
                {label}
                {required && (<sup className={styles.required}>*</sup>)}
                {error && (<span className={styles.error}>{error}</span>)}
            </label>

            <div className={styles.wrapper}>
                <textarea
                    ref={ref}
                    id={id}
                    name={name}
                    className={`${styles.textarea} ${variant ? styles[variant] : ''} ${error ? styles[VariantsEnum.danger] : ''} ${maxLength ? styles.textareaMaxlength : ''}`}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    autoComplete={autoComplete}
                    data-test="component-textarea"
                    onChange={handleInput}
                />

                {maxLength && (<span className={`${styles.maxlength} ${disabled ? styles.maxLengthDisabled : ''}`}>{length} / {maxLength}</span>)}
            </div>
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;
