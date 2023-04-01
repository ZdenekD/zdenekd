
import {forwardRef} from 'react';
import styles from './anchor.module.css';
import type {PropsWithChildren, MouseEventHandler} from 'react';

export type IProps = {
    href: string
    title?: string
    target?: '_blank'
    className?: string
    onClick?: MouseEventHandler
}

const Anchor = forwardRef<HTMLAnchorElement, PropsWithChildren<IProps>>(({
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
