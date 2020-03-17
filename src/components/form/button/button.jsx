import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/hover';
import styles from './button.css';

const Button = ({children, ...rest}) => {
    const [, setPrepared] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        setPrepared(true);
    }, []);

    useHover(buttonRef.current);

    return (
        <button className={styles.button} {...rest} ref={buttonRef} data-test="component-button" aria-label="Tlačítko">
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};

export default Button;
