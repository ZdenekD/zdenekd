import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.css';

const Menu = ({isOpen, handleMenu}) => (
    <button type="button" className={styles.button} onClick={() => handleMenu(!isOpen)} data-test="component-menu">
        <svg id="i1" className={styles.icon} viewBox="0 0 100 100">
            <path id="top-line" d="M30,40 L70,40 Z"></path>
            <path id="middle-line" d="M30,50 L70,50 Z"></path>
            <path id="bottom-line" d="M30,60 L70,60 Z"></path>
        </svg>
    </button>
);

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
};

export default Menu;
