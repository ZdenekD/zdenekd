import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import anime from 'animejs';
import styles from './navigation.css';
import data from '../../data/pages';

const Navigation = ({isOpen, isAnimated, handleMenuAnimation}) => {
    const [isPrepared, setPrepared] = useState(false);
    const [innerState, setInnerState] = useState(false);
    const listRef = useRef(null);
    const handleAnimationIn = () => {
        anime({
            targets: [...listRef.current.querySelectorAll('li')],
            duration: 600,
            delay(target, index) {
                return (index * 200) + 400;
            },
            opacity: [0, 1],
            translateY: ['-5vh', 0],
            easing: 'easeOutCubic',
            complete() {
                setInnerState(isOpen);
                handleMenuAnimation(false);
            },
        });
    };
    const handleAnimationOut = () => {
        anime({
            targets: [...listRef.current.querySelectorAll('li')],
            duration: 600,
            delay(target, index) {
                return 600 - (index * 200);
            },
            opacity: [1, 0],
            translateY: [0, '-5vh'],
            easing: 'easeOutCubic',
            complete() {
                setInnerState(isOpen);
            },
        });
    };
    const handleMouse = event => {
        const tolerance = 5;
        const left = 0;
        const right = event.nativeEvent.target.clientWidth;
        let x = event.pageX - event.target.offsetLeft;

        if (x - tolerance < left) {
            x = left;
        }

        if (x + tolerance > right) {
            x = right;
        }

        event.target.style.setProperty('--x', `${x}px`);
    };
    const links = Object.keys(data).map(item => (
        <li key={item} className={styles.item} data-test="component-link">
            <Link href={data[item].link} passHref>
                <a
                    href={data[item].link}
                    title={`${data[item].title} | ZdenekD`}
                    className={styles.link}
                    disabled={isAnimated}
                    onMouseEnter={handleMouse}
                >
                    {data[item].title}
                </a>
            </Link>
        </li>
    ));

    if (isPrepared && isOpen !== innerState) {
        (isOpen ? handleAnimationIn : handleAnimationOut)();
    }

    useEffect(() => {
        setPrepared(true);
    }, []);

    return (
        <nav className={styles.navigation} data-test="component-navigation">
            <ul className={styles.list} ref={listRef}>
                {links}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isAnimated: PropTypes.bool.isRequired,
    handleMenuAnimation: PropTypes.func.isRequired,
};

export default Navigation;
