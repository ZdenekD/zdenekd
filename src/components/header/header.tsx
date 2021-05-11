import React from 'react';
import Link from 'next/link';
import Menu from '../menu';
import Logo from '../logo';
import useLocale from '../../hooks/useLocale';
import {useAnimationState} from '../../state/animation';
import styles from './header.css';

const Header: React.FC = () => {
    const [{animation}] = useAnimationState();
    const locale = useLocale();

    return (
        <header className={styles.header} data-test="component-header">
            <Link passHref href="/">
                <a
                    href="/"
                    className={`${styles.link} ${animation.isAsideAnimated ? styles.disabled : ''}`}
                    aria-label={locale.header.link}
                >
                    <Logo />
                </a>
            </Link>
            <Menu />
        </header>
    );
};

export default Header;
