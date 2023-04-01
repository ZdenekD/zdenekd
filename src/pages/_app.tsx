import {AnimatePresence} from 'framer-motion';
import Head from 'next/head';
import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import '@/assets/styles/index.css';

const App = ({Component, router, pageProps}: AppProps): JSX.Element => {
    useEffect(() => {
        console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="author" content="ZdenekD, zdenekd.cz" />
            </Head>
            <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </>
    );
};

export default App;
