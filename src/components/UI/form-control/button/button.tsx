import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import styles from './button.module.css';

export type IProps = {
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    variant?: VariantsEnum
    title?: string
    tabindex?: number
    className?: string
    children: React.ReactNode
    onFocus?: () => void
    onClick?: (e: React.MouseEvent) => void
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(({
    type = 'button',
    disabled,
    variant,
    title,
    tabindex,
    className = '',
    children,
    onFocus,
    onClick,
    onKeyDown,
}, ref) => (
    <button
        ref={ref}
        disabled={disabled}
        type={type}
        tabIndex={tabindex}
        className={`${styles.button} ${variant ? styles[variant] : ''} ${className}`}
        aria-label={title}
        data-testid="component-button"
        onFocus={onFocus}
        onClick={onClick}
        onKeyDown={onKeyDown}
    >
        {children}
    </button>
));

Button.displayName = 'Button';

export default Button;
