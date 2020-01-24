import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.css';
import Heading from '../../heading';

const Header = ({children, ...props}) => (
    <header className={styles.header}>
        <Heading {...props} data-test="component-header">
            {children}
        </Heading>
    </header>
);

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default Header;
