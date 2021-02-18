import React from 'react';
import anime from 'animejs';
import styles from './menu.css';

const Menu: React.FC = () => {
    const [isOpen, setOpen] = React.useState(false);
    const pathTopRef = React.useRef(null);
    const pathMiddleRef = React.useRef(null);
    const pathBottomRef = React.useRef(null);
    const handleTriggerAnimationOn = () => {
        anime
            .timeline({
                duration: 800,
                easing: 'easeInOutBack',
            })
            .add({
                targets: [pathTopRef.current, pathBottomRef.current],
                d: 'M30,50 L70,50 Z',
            })
            .add({
                targets: pathMiddleRef.current,
                opacity: [1, 0],
            }, '-=600')
            .add({
                targets: pathTopRef.current,
                rotate: '45deg',
            }, '-=600')
            .add({
                targets: pathBottomRef.current,
                rotate: '-45deg',
            }, '-=1000');
    };
    const handleTriggerAnimationOff = () => {
        anime
            .timeline({
                duration: 800,
                easing: 'easeInOutBack',
            })
            .add({
                targets: pathTopRef.current,
                rotate: '0',
            })
            .add({
                targets: pathBottomRef.current,
                rotate: '0',
            }, '-=600')
            .add({
                targets: pathMiddleRef.current,
                opacity: [0, 1],
            }, '-=600')
            .add({
                targets: pathTopRef.current,
                d: 'M30,40 L70,40 Z',
            }, '-=400')
            .add({
                targets: pathBottomRef.current,
                d: 'M30,60 L70,60 Z',
            }, '-=800');
    };
    const handleClick = () => {
        setOpen(!isOpen);
    };

    React.useEffect(() => {
        (isOpen ? handleTriggerAnimationOn : handleTriggerAnimationOff)();
    });

    return (
        <button
            type="button"
            className={`${styles.button} ${isOpen ? styles.active : ''}`}
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
