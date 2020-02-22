import React from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.css';

const Textarea = ({handleChange, label, ...rest}) => (
    <>
        <textarea id={label} className={styles.textarea} onChange={handleChange} {...rest} data-test="component-textarea" />
        <label htmlFor={label} data-test="component-label">
            {label}
        </label>
    </>
);

Textarea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Textarea;
