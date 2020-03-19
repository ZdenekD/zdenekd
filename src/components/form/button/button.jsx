import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../../../hooks/hover';
import styles from './button.css';

const Button = ({children, className, ...rest}) => {
    const [, setPrepared] = React.useState(false);
    const buttonRef = React.useRef(null);

    React.useEffect(() => {
        setPrepared(true);
    }, []);

    useHover(buttonRef.current);

    return (
        <button className={className || styles.button} {...rest} ref={buttonRef} data-test="component-button">
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
    className: PropTypes.string,
};

export default Button;