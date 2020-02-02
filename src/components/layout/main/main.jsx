import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from './main.css';
import Aside from '../../aside';
import Header from '../../header';
import Content from '../../content';
import data from '../../../data/pages';

const Main = ({children}) => {
    const router = useRouter();
    const [page] = Object.keys(data).filter(item => data[item].link === router.asPath);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
            </Head>
            <main className={styles.default} data-test="component-main">
                <section className={`${styles.section} ${styles[page]}`}>
                    <Header />
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
