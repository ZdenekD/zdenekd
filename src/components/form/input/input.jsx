import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.css';

const Input = ({
    handleChange,
    handleBlur,
    hasError,
    label,
    message,
    ...rest
}) => (
    <>
        <input
            id={label}
            className={`${styles.input} ${rest?.value?.length > 0 ? styles.value : ''} ${hasError ? styles.error : ''}`}
            onChange={handleChange}
            onBlur={handleBlur}
            {...rest}
            data-test="component-input"
        />
        <label htmlFor={label} className={`${styles.label} ${hasError ? styles.error : ''}`} data-test="component-label">
            <span className={styles.content}>
                {label} {hasError && <>{message}</>}
            </span>
        </label>
    </>
);

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
};

Input.defaultProps = {message: ''};

export default Input;
