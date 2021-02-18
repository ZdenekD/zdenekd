import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../form/button';
import styles from './keyDown.css';
import {getPageIndex} from '../../../helpers/getPage';

const KeyDown = ({data, router}) => {
    const pages = Object.keys(data);
    const index = getPageIndex(router.route);
    const maxIndex = pages.length - 1;
    const handleKey = () => {
        if (index + 1 <= maxIndex) {
            router.push(data[pages[index + 1]].link);
        }
    };

    return (
        <Button
            type="button"
            className={`${styles.key} ${index === maxIndex ? styles.disabled : ''}`}
            aria-label="Následující stránka"
            tabIndex={index !== maxIndex ? 0 : -1}
            data-test="component-key"
            onClick={handleKey}
        >
            <i className={styles.keyDown}></i>
        </Button>
    );
};

KeyDown.propTypes = {data: PropTypes.object, router: PropTypes.object};

export default KeyDown;
