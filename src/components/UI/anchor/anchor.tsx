import React from 'react';
import styles from './anchor.module.css';

export type IProps = {
    href: string
    title?: string
    target?: '_blank'
    className?: string
    children: React.ReactNode
    onClick?: (event: React.MouseEvent) => void
}

const Anchor = React.forwardRef<HTMLAnchorElement, IProps>(({
    href,
    title,
    target,
    className = '',
    children,
    onClick,
    ...props
}, ref) => (
    <a
        ref={ref}
        href={href}
        title={title}
        className={`${styles.anchor} ${className}`}
        target={target}
        rel={target ? 'noreferrer noopener' : undefined}
        data-testid="component-anchor"
        onClick={onClick}
        {...props}
    >
        {children}
    </a>
));

Anchor.displayName = 'Anchor';

export default Anchor;
