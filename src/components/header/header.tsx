import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Menu from '../menu';
import Logo from '../logo';
import {useStateValue} from '../../state';
import styles from './header.css';

const Header: React.FC = () => {
    const router = useRouter();
    const {state} = useStateValue();
    const isHomepage = router.route === '/';

    return (
        <header className={styles.header} data-test="component-header">
            {isHomepage ? (
                <Logo />
            ) : (
                <Link passHref href="/">
                    <a
                        href="/"
                        className={`${styles.link} ${state.animation.isAsideAnimated ? styles.disabled : ''}`}
                        aria-label="Odkaz na domovskou stránku"
                    >
                        <Logo />
                    </a>
                </Link>
            )}
            <Menu />
        </header>
    );
};

export default Header;
