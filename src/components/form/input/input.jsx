import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.css';

const Input = ({handleChange, label, ...rest}) => (
    <>
        <input id={label} className={`${styles.input} ${rest?.value?.length > 0 ? styles.value : ''}`} onChange={handleChange} {...rest} data-test="component-input" />
        <label htmlFor={label} className={styles.label} data-test="component-label">
            <span className={styles.content}>
                {label}
            </span>
        </label>
    </>
);

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Input;
