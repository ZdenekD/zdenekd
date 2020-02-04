import React from 'react';
import PropTypes from 'prop-types';
import styles from './aside.css';
import Navigation from '../navigation';

const Aside = ({isMenu}) => (
    <aside className={`${styles.aside} ${isMenu ? styles.active : styles.inactive}`} data-test="component-aside">
        <Navigation />
    </aside>
);

Aside.propTypes = {isMenu: PropTypes.bool.isRequired};

export default Aside;
