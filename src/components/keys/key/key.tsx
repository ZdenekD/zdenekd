import React from 'react';
import useCursor from '../../../hooks/useCursor';
import DirectionsEnum from '../../../enums/DirectionsEnum';
import styles from './key.css';

interface IKey {
    direction: DirectionsEnum
    label: string
    disabled?: boolean
    onClick?: (event: React.MouseEvent) => void
}

const Key: React.FC<IKey> = ({
    direction,
    label,
    disabled = false,
    onClick = undefined,
}) => {
    const [element, setElement] = React.useState<HTMLButtonElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        setElement(buttonRef.current);
    }, []);

    useCursor(element);

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`${styles.key} ${disabled ? styles.disabled : ''}`}
            aria-label={label}
            data-test="component-key"
            disabled={disabled}
            onClick={onClick}
        >
            <i className={`${styles.icon} ${styles[direction]}`} />
        </button>
    );
};

export default Key;