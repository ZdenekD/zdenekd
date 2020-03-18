import React from 'react';
import PropTypes from 'prop-types';
import useHover from '../../hooks/hover';
import styles from './anchor.css';

const Anchor = ({href, children, className, ...rest}) => {
    const [, setPrepared] = React.useState(false);
    const anchorRef = React.useRef(null);

    React.useEffect(() => {
        setPrepared(true);
    }, []);

    useHover(anchorRef.current);

    return (
        <a href={href} className={className || styles.anchor} {...rest} ref={anchorRef} data-test="component-anchor">
            {children}
        </a>
    );
};

Anchor.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Anchor;
