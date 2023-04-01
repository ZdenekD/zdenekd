import {
    useEffect,
    useRef,
    useState
} from 'react';
import type {DirectionsEnum} from '@/enums';
import useCursor from '@/hooks/useCursor';
import styles from './key.module.css';
import type {MouseEventHandler} from 'react';

type IProps = {
    direction: DirectionsEnum
    label: string
    disabled?: boolean
    onClick?: MouseEventHandler
}

const Key = ({
    direction,
    label,
    disabled = false,
    onClick = undefined,
}: IProps) => {
    const [catcher, setCatcher] = useState<HTMLButtonElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
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
