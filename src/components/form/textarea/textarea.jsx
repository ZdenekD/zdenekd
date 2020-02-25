import React from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.css';

const Textarea = ({handleChange, handleBlur, hasError, label, message, ...rest}) => {
    const onChange = event => {
        const {target} = event;
        const element = target;

        if (element) {
            element.style.height = '0';
            element.style.height = `${target.scrollHeight}px`;
        }

        handleChange(event);
    };

    return (
        <>
            <textarea
                id={label}
                className={`${styles.textarea} ${rest?.value?.length > 0 ? styles.value : ''} ${hasError ? styles.error : ''}`}
                onChange={onChange}
                onBlur={handleBlur}
                {...rest}
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
