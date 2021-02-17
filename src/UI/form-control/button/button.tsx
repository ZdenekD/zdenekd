import React from 'react';
import {motion} from 'framer-motion';
import VariantsEnum from '../../../enums/VariantsEnum';
import styles from './button.css';

interface IButton {
    type?: 'button' | 'submit'
    disabled?: boolean
    variant?: VariantsEnum
    title?: string
    children: React.ReactNode
    className?: string
    onClick?: (e: React.MouseEvent) => void,
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(({
    type = 'button',
    disabled = false,
    variant,
    title = undefined,
    children,
    className = '',
    onClick = undefined,
}, ref) => (
    <motion.button
        ref={ref}
        disabled={disabled}
        type={type}
        className={`${styles.button} ${variant ? styles[variant] : ''} ${className}`}
        aria-label={title}
        data-test="component-button"
        whileTap={{scale: 0.98}}
        onClick={onClick}
    >
        {children}
    </motion.button>
));

Button.displayName = 'Button';

export default Button;
