import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styles from './menu.css';

const Menu = ({isOpen, isAnimated, handleMenu, handleMenuAnimation}) => {
    const [isPrepared, setPrepared] = useState(null);
    const pathTopRef = useRef(null);
    const pathMiddleRef = useRef(null);
    const pathBottomRef = useRef(null);
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
        if (!isAnimated) {
            handleMenu(!isOpen);
            handleMenuAnimation(true);
        }
    };

    if (isPrepared && isAnimated) {
        (isOpen ? handleTriggerAnimationOn : handleTriggerAnimationOff)();
    }

    useEffect(() => {
        setPrepared(true);
    }, []);

    return (
        <button
            type="button"
            className={`${styles.button} ${isOpen ? styles.active : ''}`}
            onClick={handleClick}
            disabled={isAnimated}
            data-test="component-menu"
        >
            <svg className={styles.icon} viewBox="0 0 100 100">
                <path d="M30,40 L70,40 Z" ref={pathTopRef}></path>
                <path d="M30,50 L70,50 Z" ref={pathMiddleRef}></path>
                <path d="M30,60 L70,60 Z" ref={pathBottomRef}></path>
            </svg>
        </button>
    );
};

Menu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isAnimated: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
    handleMenuAnimation: PropTypes.func.isRequired,
};

export default Menu;
