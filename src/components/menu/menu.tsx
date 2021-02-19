import React from 'react';
import {useStateValue} from '../../state';
import setMenu from '../../state/menu/actions';
import {animationIn, animationOut} from './menu.animations';
import styles from './menu.css';

const Menu: React.FC = () => {
    const {state, dispatch} = useStateValue();
    const pathTopRef = React.useRef<SVGPathElement | null>(null);
    const pathMiddleRef = React.useRef<SVGPathElement | null>(null);
    const pathBottomRef = React.useRef<SVGPathElement | null>(null);
    const handleTriggerAnimationIn = () => {
        animationIn({
            pathTop: pathTopRef?.current,
            pathMiddle: pathMiddleRef?.current,
            pathBottom: pathBottomRef?.current,
        });
    };
    const handleTriggerAnimationOff = () => {
        animationOut({
            pathTop: pathTopRef?.current,
            pathMiddle: pathMiddleRef?.current,
            pathBottom: pathBottomRef?.current,
        });
    };
    const handleClick = () => {
        dispatch(setMenu({menu: {isOpen: !state.menu.isOpen}}));
    };

    React.useEffect(() => {
        (state.menu.isOpen ? handleTriggerAnimationIn : handleTriggerAnimationOff)();
    }, [state.menu.isOpen]);

    return (
        <button
            type="button"
            className={`${styles.button} ${state.menu.isOpen ? styles.active : ''}`}
            data-test="component-menu"
            aria-label="Menu button"
            onClick={handleClick}
        >
            <svg className={styles.icon} viewBox="0 0 100 100">
                <path ref={pathTopRef} d="M30,40 L70,40 Z"></path>
                <path ref={pathMiddleRef} d="M30,50 L70,50 Z"></path>
                <path ref={pathBottomRef} d="M30,60 L70,60 Z"></path>
            </svg>
        </button>
    );
};

export default Menu;
