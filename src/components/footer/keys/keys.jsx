import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import KeyUp from './keyUp';
import KeyDown from './keyDown';
import KeyLeft from './keyLeft';
import KeyRight from './keyRight';
import styles from './keys.css';
import data from '../../../data/pages';

const Keys = ({isOpen, isAnimated, min, max, current, handleNextProject, handlePrevProject}) => {
    const router = useRouter();

    return (
        <div className={`${styles.keys} ${!isOpen && !isAnimated ? styles.showKeys : ''}`} data-test="component-keys">
            <KeyUp data={data} router={router} />
            <div className={styles.key}>
                <KeyLeft isMin={current === min} setProject={handlePrevProject} />
                <KeyDown data={data} router={router} />
                <KeyRight isMax={current === max} setProject={handleNextProject} />
            </div>
        </div>
    );
};

Keys.propTypes = {
    isAnimated: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    current: PropTypes.number,
    handleNextProject: PropTypes.func,
    handlePrevProject: PropTypes.func,
};

export default Keys;
