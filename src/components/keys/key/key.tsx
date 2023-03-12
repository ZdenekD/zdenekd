import React from 'react';
import type DirectionsEnum from '@/enums/DirectionsEnum';
import useCursor from '@/hooks/useCursor';
import styles from './key.module.css';

type IProps = {
    direction: DirectionsEnum
    label: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent) => void
}

const Key: React.FC<IProps> = ({
    direction,
    label,
    disabled = false,
    onClick = undefined,
}) => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        setCatcher(buttonRef.current);
    }, []);

    useCursor(catcher);

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`${styles.key} ${disabled ? styles.disabled : ''}`}
            aria-label={label}
            data-testid="component-key"
            disabled={disabled}
            onClick={onClick}
        >
            <i className={`${styles.icon} ${styles[direction]}`} />
        </button>
    );
};

export default Key;
