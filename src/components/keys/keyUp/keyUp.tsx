import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../form/button';
import styles from './keyUp.css';
import {getPageIndex} from '../../../helpers/getPage';

const KeyUp = ({data, router}) => {
    const pages = Object.keys(data);
    const index = getPageIndex(router.route);
    const minIndex = 0;
    const handleKey = () => {
        if (index - 1 >= minIndex) {
            router.push(data[pages[index - 1]].link);
        }
    };

    return (
        <Button
            type="button"
            className={`${styles.key} ${index === minIndex ? styles.disabled : ''}`}
            aria-label="Předchozí stránka"
            tabIndex={index !== minIndex ? 0 : -1}
            data-test="component-key"
            onClick={handleKey}
        >
            <i className={styles.keyUp}></i>
        </Button>
    );
};

KeyUp.propTypes = {data: PropTypes.object, router: PropTypes.object};

export default KeyUp;
