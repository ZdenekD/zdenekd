import React from 'react';
import VariantsEnum from '@/enums/VariantsEnum';
import styles from './button.module.css';

interface IProps {
    type?: 'button' | 'submit'
    disabled?: boolean
    variant?: VariantsEnum
    title?: string
    tabindex?: number
    children?: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent) => void,
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(({
    type = 'button',
    disabled = false,
    variant,
    title = undefined,
    tabindex,
    children,
    className = '',
    onClick = undefined,
}, ref) => (
    <button
        ref={ref}
        disabled={disabled}
        type={type}
        tabIndex={tabindex}
        className={`${styles.button} ${variant ? styles[variant] : ''} ${className}`}
        aria-label={title}
        data-test="component-button"
        onClick={onClick}
    >
        {children}
    </button>
));

Button.displayName = 'Button';

export default Button;
