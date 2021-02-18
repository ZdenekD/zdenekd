import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Menu from '../menu';
import Logo from '../logo';
import {getPage} from '../../helpers/getPage';
import pages from '../../data/pages';
import styles from './header.css';

const Header: React.FC = () => {
    const headingRef = React.useRef(null);
    const router = useRouter();
    const page = getPage(router.route);
    const title = pages[page]?.title ?? 'Kávová paráda';

    return (
        <header className={styles.header} data-test="component-header">
            <Link passHref href="/">
                <a ref={headingRef} href="/" className={styles.link} aria-label="Odkaz na domovskou stránku" data-test="component-heading">
                    <span className="_visuallyhidden" data-test="component-title">{`${title} | ZdenekD`}</span>
                    <Logo />
                </a>
            </Link>
            <Menu data-test="component-menu" />
        </header>
    );
};

export default Header;
