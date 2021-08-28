import React from 'react';
import {useMenuState} from '@/store/menu';
import {useAnimationState} from '@/store/animation';
import useCursor from '@/utils/hooks/useCursor';
import useLocale from '@/utils/hooks/useLocale';
import {animationIn, animationOut} from './menu.animations';
import styles from './menu.module.css';

const Menu: React.FC = () => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const [{menu}, {setMenu}] = useMenuState();
    const [{animation}] = useAnimationState();
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
        setMenu({menu: {isOpen: !menu.isOpen}});
    };

    React.useEffect(() => {
        if (menu.isOpen === undefined) {
            return;
        }

        (menu.isOpen ? handleTriggerAnimationIn : handleTriggerAnimationOut)();
    }, [menu.isOpen]);

    React.useEffect(() => {
        setCatcher(buttonRef.current);
    }, []);

    useCursor(catcher);

    return (
        <button
            ref={buttonRef}
            type="button"
            className={`${styles.button} ${menu.isOpen ? styles.opened : styles.closed} ${animation.isAsideAnimated ? styles.disabled : ''}`}
            data-test="component-menu"
            aria-label={menu.isOpen ? locale.menu.close : locale.menu.open}
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
