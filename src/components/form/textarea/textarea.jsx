import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.css';

const Textarea = ({
    handleChange,
    handleBlur,
    hasError,
    label,
    message,
    ...rest
}) => {
    const textareaRef = useRef(null);
    const handleHeight = () => {
        if (textareaRef.current) {
            const {current} = textareaRef;

            current.style.height = '0';
            current.style.height = `${current.scrollHeight}px`;
        }
    };
    const onChange = event => {
        handleHeight();
        handleChange(event);
    };

    useEffect(() => {
        handleHeight();
    });

    return (
        <>
            <textarea
                id={label}
                className={`${styles.textarea} ${rest?.value?.length > 0 ? styles.value : ''} ${hasError ? styles.error : ''}`}
                onChange={onChange}
                onBlur={handleBlur}
                {...rest}
                ref={textareaRef}
                data-test="component-textarea"
            />
            <label htmlFor={label} className={`${styles.label} ${hasError ? styles.error : ''}`} data-test="component-label">
                <span className={styles.content}>
                    {label} {hasError && <>{message}</>}
                </span>
            </label>
        </>
    );
};

Textarea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
};

Textarea.defaultProps = {message: ''};

export default Textarea;
