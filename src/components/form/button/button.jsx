import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

const Button = ({children, ...rest}) => (
    <button className={styles.button} {...rest} data-test="component-button">
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default Button;
