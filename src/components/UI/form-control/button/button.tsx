
import {forwardRef} from 'react';
import type {VariantsEnum} from '@/enums';
import styles from './button.module.css';
import type {
    PropsWithChildren,
    KeyboardEventHandler,
    MouseEventHandler
} from 'react';

export type IProps = {
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    variant?: VariantsEnum
    title?: string
    tabindex?: number
    className?: string
    onFocus?: () => void
    onClick?: MouseEventHandler
    onKeyDown?: KeyboardEventHandler
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<IProps>>(({
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
