import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import anime from 'animejs';
import styles from './aside.css';
import data from '../../data/pages';
import {getPage} from '../../helpers/getPage';

const Aside = ({isOpen, isAnimated, handleMenu, handleMenuAnimation, handleAppAnimation}) => {
    const [href, setHref] = useState(null);
    const asideRef = useRef(null);
    const listRef = useRef(null);
    const router = useRouter();
    const page = getPage(router.route);
    const handleAnimationIn = () => {
        anime
            .timeline()
            .add({
                targets: asideRef.current,
                duration: 600,
                opacity: [0, 1],
                translateY: ['-100%', 0],
                easing: 'easeOutCubic',
            })
            .add({
                targets: [...listRef.current.querySelectorAll('li')],
                duration: 800,
                delay(target, index) {
                    return (index * 200);
                },
                opacity: [0, 1],
                translateY: ['-10vh', 0],
                easing: 'easeOutCubic',
                complete() {
                    handleMenuAnimation({isAnimated: false});
                },
            }, '-=400');
    };
    const handleAnimationOut = () => {
        anime
            .timeline()
            .add({
                targets: [...listRef.current.querySelectorAll('li')],
                duration: 600,
                delay(target, index) {
                    return 600 - (index * 200);
                },
                opacity: [1, 0],
                translateY: [0, '5vh'],
                easing: 'easeOutCubic',
                begin() {
                    handleAppAnimation({isAnimated: true});
                },
            })
            .add({
                targets: asideRef.current,
                duration: 600,
                opacity: [1, 0],
                translateY: [0, '-100%'],
                easing: 'easeOutCubic',
                complete() {
                    handleMenuAnimation({isAnimated: false});

                    if (!href) {
                        handleAppAnimation({isAnimated: false});
                    }

                    if (href) {
                        router.push(href);
                        setHref(null);
                    }
                },
            }, '-=200');
    };
    const handleClick = event => {
        event.preventDefault();

        handleMenu({isOpen: false});
        handleMenuAnimation({isAnimated: true});
        setHref(event.target.getAttribute('href'));
    };
    const links = Object.keys(data).map(item => (
        <li key={item} className={styles.item} data-test="component-link">
            <a
                href={data[item].link}
                title={`${data[item].title} | ZdenekD`}
                className={`${styles.link} ${isAnimated ? styles.animated : ''} ${page === item ? styles.active : ''}`}
                onClick={handleClick}
                aria-label={`Odkaz na stránku: ${data[item].title}`}
            >
                {data[item].title}
            </a>
        </li>
    ));

    useEffect(() => {
        if (isAnimated) {
            (isOpen ? handleAnimationIn : handleAnimationOut)();
        }
    });

    return (
        <aside className={styles.aside} data-test="component-aside" ref={asideRef}>
            <nav className={styles.navigation} data-test="component-navigation">
                <ul className={styles.list} ref={listRef}>
                    {links}
                </ul>
            </nav>
        </aside>
    );
};

Aside.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isAnimated: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
    handleMenuAnimation: PropTypes.func.isRequired,
    handleAppAnimation: PropTypes.func.isRequired,
};

export default Aside;
