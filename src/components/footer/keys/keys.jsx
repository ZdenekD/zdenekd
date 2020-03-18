import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import KeyUp from './keyUp';
import KeyDown from './keyDown';
import styles from './keys.css';
import data from '../../../data/pages';

const Keys = ({isOpen, isAnimated}) => {
    const router = useRouter();

    return (
        <div className={`${styles.keys} ${!isOpen && !isAnimated ? styles.showKeys : ''}`} data-test="component-keys">
            <KeyUp data={data} router={router} />
            <span className={styles.key}>
                <i className={styles.keyLeft}></i>
                <KeyDown data={data} router={router} />
                <i className={styles.keyRight}></i>
            </span>
        </div>
    );
};

Keys.propTypes = {
    isAnimated: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Keys;
