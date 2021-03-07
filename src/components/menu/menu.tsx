import React from 'react';
import {useStateValue} from '../../state';
import setMenu from '../../state/menu/actions';
import useCursor from '../../hooks/useCursor';
import {animationIn, animationOut} from './menu.animations';
import styles from './menu.css';

const Menu: React.FC = () => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const {state, dispatch} = useStateValue();
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const pathTopRef = React.useRef<SVGPathElement | null>(null);
    const pathMiddleRef = React.useRef<SVGPathElement | null>(null);
    const pathBottomRef = React.useRef<SVGPathElement | null>(null);
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
        dispatch(setMenu({menu: {isOpen: !state.menu.isOpen}}));
    };

    React.useEffect(() => {
        (state.menu.isOpen ? handleTriggerAnimationIn : handleTriggerAnimationOut)();
    }, [state.menu.isOpen]);

    React.useEffect(() => {
        setCatcher(buttonRef.current);
    }, []);

    useCursor(catcher);

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`${styles.button} ${state.menu.isOpen ? styles.opened : styles.closed} ${state.animation.isAsideAnimated ? styles.disabled : ''}`}
            data-test="component-menu"
            aria-label={`${state.menu.isOpen ? 'Zavřít' : 'Otevřít'} navigaci`}
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
