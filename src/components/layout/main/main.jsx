import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Aside from '../../aside';
import Header from '../../header';
import Content from '../../content';
import data from '../../../data/pages';
import getPage from '../../../helpers/getPage';
import styles from './main.css';

const Main = ({children}) => {
    const [isMenu, setMenu] = useState(false);
    const router = useRouter();
    const [page] = getPage(router.asPath);
    const heading = data[page]?.title ?? 'Kávová paráda';
    const handleMenu = isActive => {
        setMenu(isActive);
    };

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
                <title data-test="component-title">{`${heading} | ZdenekD`}</title>
            </Head>
            <main className={`${styles.main} ${isMenu ? 'active-menu' : ''}`} data-test="component-main">
                <section className={`${styles.section} ${styles[page]}`}>
                    <Header isMenu={isMenu} handleMenu={handleMenu} />
                    <Content />
                    {children}
                    <Aside />
                </section>
            </main>
        </>
    );
};

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
        PropTypes.number,
    ]),
};

export default Main;
