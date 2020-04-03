import React from 'react';
import PropTypes from 'prop-types';
import styles from './loader.css';

const Loader = ({className = ''}) => (
    <div className={`${styles.loader} ${className}`} data-test="component-loader" />
);

Loader.propTypes = {className: PropTypes.string};

export default Loader;
