import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.css';

const Input = ({handleChange, label, ...rest}) => (
    <>
        <input id={label} className={styles.input} onChange={handleChange} {...rest} data-test="component-input" />
        <label htmlFor={label} data-test="component-label">
            {label}
        </label>
    </>
);

Input.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Input;
