import React from 'react';
import styles from './header.css';
import Heading from '../heading';
import Menu from '../menu';

const Header = props => (
    <header className={styles.header}>
        <Heading data-test="component-header" />
        <Menu {...props} data-test="component-menu" />
    </header>
);

export default Header;
