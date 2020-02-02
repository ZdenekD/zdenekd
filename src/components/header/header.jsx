import React from 'react';
import styles from './header.css';
import Heading from '../heading';

const Header = () => (
    <header className={styles.header}>
        <Heading data-test="component-header" />
    </header>
);

export default Header;
