import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';

const Heading = ({title, children}) => (
    <h1 className={styles.heading} data-test="component-heading">
        {title}
        {children}
    </h1>
);

// prettier-ignore
Heading.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default Heading;
