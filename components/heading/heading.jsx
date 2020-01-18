import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';

const Heading = ({title}) => <h1 className={styles.heading}>{title}</h1>;

Heading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Heading;
