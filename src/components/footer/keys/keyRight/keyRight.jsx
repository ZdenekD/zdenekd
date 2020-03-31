import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../form/button';
import styles from './keyRight.css';

const KeyRight = ({isDisabled, setProject}) => {
    const handleKey = () => {
        setProject({handleNext: true});
    };

    return (
        <Button
            type="button"
            className={`${styles.key} ${isDisabled ? styles.disabled : ''}`}
            aria-label="Následující projekt"
            tabIndex={0}
            data-test="component-key"
            onClick={handleKey}
        >
            <i className={styles.keyRight}></i>
        </Button>
    );
};

KeyRight.propTypes = {
    isDisabled: PropTypes.bool,
    setProject: PropTypes.func,
};

export default KeyRight;
