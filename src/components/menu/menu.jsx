import React from 'react';
import styles from './menu.css';

const Menu = () => (
    <button type="button">
        <svg id="i1" className={styles.icon} viewBox="0 0 100 100">
            <path id="top-line" d="M30,37 L70,37 Z"></path>
            <path id="middle-line" d="M30,50 L70,50 Z"></path>
            <path id="bottom-line" d="M30,63 L70,63 Z"></path>
        </svg>
    </button>
);

export default Menu;
