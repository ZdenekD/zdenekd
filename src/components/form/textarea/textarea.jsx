import React from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.css';

const Textarea = ({handleChange, label, ...rest}) => (
    <>
        <textarea id={label} className={`${styles.textarea} ${rest?.value?.length > 0 ? styles.value : ''}`} onChange={handleChange} {...rest} data-test="component-textarea" />
        <label htmlFor={label} className={styles.label} data-test="component-label">
            <span className={styles.content}>
                {label}
            </span>
        </label>
    </>
);

Textarea.propTypes = {
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default Textarea;
