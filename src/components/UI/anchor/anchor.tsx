import React from 'react';
import styles from './anchor.module.css';

interface IProps {
    href: string
    title?: string
    target?: '_blank'
    children?: React.ReactNode
    className?: string
    onClick?: (event: React.MouseEvent) => void
}

const Anchor = React.forwardRef<HTMLAnchorElement, IProps>(({
    href,
    title,
    target,
    children,
    className = '',
    onClick = undefined,
    ...props
}, ref) => (
    <a
        ref={ref}
        href={href}
        title={title}
        className={`${styles.anchor} ${className}`}
        target={target}
        rel={target ? 'noreferrer noopener' : undefined}
        data-test="component-anchor"
        {...props}
        onClick={onClick}
    >
        {children}
    </a>
));

Anchor.displayName = 'Anchor';

export default Anchor;
