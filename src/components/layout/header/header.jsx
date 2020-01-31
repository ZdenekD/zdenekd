import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import Heading from '../../heading';

const Header = ({title}) => (
    <header className={styles.header}>
        <Heading title={title} data-test="component-header" />
    </header>
);

Header.propTypes = {title: PropTypes.string.isRequired};

export default Header;
