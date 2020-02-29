import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './input.css';

const Input = ({
    handleChange,
    handleBlur,
    hasError,
    label,
    message = '',
    ...rest
}) => {
    const [length, setLength] = useState(0);
    const onChange = event => {
        handleChange(event);
        setLength(event.target.value.length);
    };

    return (
        <div className={`${styles.row} ${rest.className ? rest.className : ''}`}>
            {rest.maxLength && (
                <span className={`${styles.counter} ${length > 0 ? styles.edited : ''}`}>{length} / {rest.maxLength}</span>
            )}
            <input
                id={label}
                className={`${styles.input} ${rest?.value?.length > 0 ? styles.value : ''} ${hasError ? styles.error : ''}`}
                onChange={onChange}
                onBlur={handleBlur}
                {...rest}
                data-test="component-input"
            />
            <label htmlFor={label} className={`${styles.label} ${hasError ? styles.error : ''}`} data-test="component-label">
                <span className={styles.content}>
                    {label} {hasError && <>{message}</>}
                </span>
            </label>
        </div>
    );
};

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    hasError: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
};

export default Input;
