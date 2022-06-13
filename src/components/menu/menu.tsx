import React from 'react';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';
import {animationIn, animationOut} from './menu.animations';
import styles from './menu.module.css';

const Menu: React.FC = () => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const {isOpen, set} = useStore(state => state.menu);
    const {isAsideAnimated} = useStore(state => state.animation);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const pathTopRef = React.useRef<SVGPathElement | null>(null);
    const pathMiddleRef = React.useRef<SVGPathElement | null>(null);
    const pathBottomRef = React.useRef<SVGPathElement | null>(null);
    const locale = useLocale();
    const handleTriggerAnimationIn = () => {
        animationIn({
            pathTop: pathTopRef.current,
            pathMiddle: pathMiddleRef.current,
            pathBottom: pathBottomRef.current,
        });
    };
    const handleTriggerAnimationOut = () => {
        animationOut({
            pathTop: pathTopRef.current,
            pathMiddle: pathMiddleRef.current,
            pathBottom: pathBottomRef.current,
        });
    };
    const handleClick = () => {
        set({isOpen: !isOpen});
    };

    React.useEffect(() => {
        if (isOpen === undefined) {
            return;
        }

        (isOpen ? handleTriggerAnimationIn : handleTriggerAnimationOut)();
    }, [isOpen]);

    React.useEffect(() => {
        setCatcher(buttonRef.current);
    }, []);

    useCursor(catcher);

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`${styles.button} ${isOpen ? styles.opened : styles.closed} ${isAsideAnimated ? styles.disabled : ''}`}
            data-testid="component-menu"
            aria-label={isOpen ? locale.menu.close : locale.menu.open}
            onClick={handleClick}
        >
            <svg className={styles.icon} viewBox="0 0 100 100">
                <path ref={pathTopRef} d="M30,40 L70,40 Z" />
                <path ref={pathMiddleRef} d="M30,50 L70,50 Z" />
                <path ref={pathBottomRef} d="M30,60 L70,60 Z" />
            </svg>
        </button>
    );
};

export default Menu;
