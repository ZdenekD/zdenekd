import React from 'react';
import useHover from '../../hooks/hover';
import styles from './anchor.css';

interface IAnchor {
    children: React.ReactNode
    href: string
    className?: string
}

const Anchor: React.FC<IAnchor> = ({href, children, className = ''}) => {
    const [, setPrepared] = React.useState(false);
    const anchorRef = React.useRef(null);

    React.useEffect(() => {
        setPrepared(true);
    }, []);

    useHover(anchorRef.current);

    return (
        <a ref={anchorRef} href={href} className={className || styles.anchor} data-test="component-anchor">
            {children}
        </a>
    );
};

export default Anchor;
