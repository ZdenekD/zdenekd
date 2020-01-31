import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';
import {Logo} from '../../assets/images/logo.svg';

const Heading = ({title}) => (
    <h1 className={styles.heading} data-test="component-heading">
        <span className="_visuallyhidden">{title}</span>
        <Logo className={styles.logo} />
    </h1>
);

// prettier-ignore
Heading.propTypes = {title: PropTypes.string.isRequired};

export default Heading;
