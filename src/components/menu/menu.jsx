import React from 'react';
import PropTypes from 'prop-types';
import styles from './menu.css';

const Menu = ({isOpen, isAnimated, handleMenu, handleMenuAnimation}) => {
    const handleClick = () => {
        if (!isAnimated) {
            handleMenu(!isOpen);
            handleMenuAnimation(true);
        }
    };

    return (
        <button
            type="button"
            className={`${styles.button} ${isOpen ? styles.buttonActive : ''}`}
            onClick={handleClick}
            disabled={isAnimated}
            data-test="component-menu"
        >
            <svg className={styles.icon} viewBox="0 0 100 100">
                <path d="M30,40 L70,40 Z"></path>
                <path d="M30,50 L70,50 Z"></path>
                <path d="M30,60 L70,60 Z"></path>
            </svg>
        </button>
    );
};

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isAnimated: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
    handleMenuAnimation: PropTypes.func.isRequired,
};

export default Menu;
