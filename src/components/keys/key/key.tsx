import React from 'react';
import useCursor from '../../../utils/hooks/useCursor';
import DirectionsEnum from '../../../utils/enums/DirectionsEnum';
import styles from './key.module.css';

interface IProps {
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
            data-test="component-key"
            disabled={disabled}
            onClick={onClick}
        >
            <i className={`${styles.icon} ${styles[direction]}`} />
        </button>
    );
};

export default Key;
