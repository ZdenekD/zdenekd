import Link from 'next/link';
import React from 'react';
import useLocale from '@/hooks/useLocale';
import {useAnimationState} from '@/store/animation';
import Logo from '../../logo';
import Menu from '../../menu';
import styles from './header.module.css';

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
