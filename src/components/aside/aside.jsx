import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styles from './aside.css';
import Navigation from '../navigation';

const Aside = ({isOpen, handleMenuAnimation}) => {
    const [innerState, setInnerState] = useState(false);
    const asideRef = useRef(null);
    const handleAnimationIn = () => {
        anime({
            targets: asideRef.current,
            duration: 800,
            translateY: ['-100%', 0],
            easing: 'easeOutCubic',
            complete() {
                setInnerState(isOpen);
            },
        });
    };
    const handleAnimationOut = () => {
        anime({
            targets: asideRef.current,
            duration: 800,
            delay: 1000,
            translateY: [0, '-100%'],
            easing: 'easeOutCubic',
            complete() {
                setInnerState(isOpen);
                handleMenuAnimation(false);
            },
        });
    };

    if (isOpen !== innerState) {
        (isOpen ? handleAnimationIn : handleAnimationOut)();
    }

    return (
        <aside className={styles.aside} data-test="component-aside" ref={asideRef}>
            <Navigation />
        </aside>
    );
};

Aside.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleMenuAnimation: PropTypes.func.isRequired,
};

export default Aside;
