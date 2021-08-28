import React from 'react';
import Link from 'next/link';
import {useAnimationState} from '@/store/animation';
import useLocale from '@/utils/hooks/useLocale';
import Menu from '../../menu';
import Logo from '../../logo';
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
