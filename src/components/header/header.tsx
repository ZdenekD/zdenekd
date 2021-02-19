import React from 'react';
import Link from 'next/link';
import Menu from '../menu';
import Logo from '../logo';
import {useStateValue} from '../../state';
import styles from './header.css';

const Header: React.FC = () => {
    const {state} = useStateValue();

    return (
        <header className={styles.header} data-test="component-header">
            <Link passHref href="/">
                <a
                    href="/"
                    className={`${styles.link} ${state.menu.isOpen ? styles.disabled : ''}`}
                    aria-label="Odkaz na domovskou stránku"
                    data-test="component-heading"
                >
                    <Logo />
                </a>
            </Link>
            <Menu data-test="component-menu" />
        </header>
    );
};

export default Header;
