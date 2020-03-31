import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../form/button';
import styles from './keyLeft.css';

const KeyLeft = ({isDisabled, setProject}) => {
    const handleKey = () => {
        setProject({handlePrev: true});
    };

    return (
        <Button
            type="button"
            className={`${styles.key} ${isDisabled ? styles.disabled : ''}`}
            aria-label="Předchozí projekt"
            tabIndex={0}
            data-test="component-key"
            onClick={handleKey}
        >
            <i className={styles.keyLeft}></i>
        </Button>
    );
};

KeyLeft.propTypes = {
    isDisabled: PropTypes.bool,
    setProject: PropTypes.func,
};

export default KeyLeft;
