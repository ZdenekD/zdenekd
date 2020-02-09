import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Aside from '../../aside';
import Header from '../../header';
import Content from '../../content';
import data from '../../../data/pages';
import getPage from '../../../helpers/getPage';
import styles from './main.css';

const Main = () => {
    const router = useRouter();
    const [page] = getPage(router.asPath);
    const heading = data[page]?.title ?? 'Kávová paráda';

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
                <title data-test="component-title">{`${heading} | ZdenekD`}</title>
            </Head>
            <main className={styles.main} data-test="component-main">
                <section className={`${styles.section} ${styles[page]}`}>
                    <Header />
                    <Content />
                    <Aside />
                </section>
            </main>
        </>
    );
};

export default Main;
