import Link from 'next/link';
import React from 'react';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store/index';
import styles from './header.module.css';

const Header: React.FC = () => {
    const {isAsideAnimated} = useStore(state => state.animation);
    const locale = useLocale();

    return (
        <header className={styles.header} data-testid="component-header">
            <Link passHref href="/">
                <a
                    href="/"
                    className={`${styles.link} ${isAsideAnimated ? styles.disabled : ''}`}
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
