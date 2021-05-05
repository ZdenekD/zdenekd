import React from 'react';
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import Section from '../section';
import Aside from '../aside';
import Cursor from '../cursor';
import Curtain from '../curtain';
import Alert from '../../UI/alert';
import useKeyboard from '../../hooks/useKeyboard';
import useWheel from '../../hooks/useWheel';
import useSwipe from '../../hooks/useSwipe';
import useLocale from '../../hooks/useLocale';
import {useGlobalState} from '../../state';
import config from '../../data/config';
import styles from './layout.css';

interface ILayout {
    children: React.ReactNode
    className?: string
}

const Layout: React.FC<ILayout> = ({children, className = ''}) => {
    const [state] = useGlobalState();
    const locale = useLocale();

    useKeyboard();
    useWheel();
    useSwipe();

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="author" content="ZdenekD, zdenekd.cz" />
                <title data-test="component-title">ZdenekD</title>
                <link rel="preconnect" href={`${config.cloudfront}`} crossOrigin="anonymous" />
                <link rel="dns-prefetch" href={`${config.cloudfront}`} />
                <link rel="preload" href="/font/titillium-web.woff2" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="/font/titillium-web_ext.woff2" as="font" crossOrigin="anonymous" />
                <link rel="preload" href="/font/roboto-mono.woff2" as="font" crossOrigin="anonymous" />
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <link rel="preconnect" href={config.cloudfront} crossOrigin="anonymous" />
                        <link rel="dns-prefetch" href={config.cloudfront} />
                    </>
                )}
                <link rel="apple-touch-icon" sizes="57x57" href={`${config.cloudfront}/apple-icon-57x57.png`} />
                <link rel="apple-touch-icon" sizes="60x60" href={`${config.cloudfront}/apple-icon-60x60.png`} />
                <link rel="apple-touch-icon" sizes="72x72" href={`${config.cloudfront}/apple-icon-72x72.png`} />
                <link rel="apple-touch-icon" sizes="76x76" href={`${config.cloudfront}/apple-icon-76x76.png`} />
                <link rel="apple-touch-icon" sizes="114x114" href={`${config.cloudfront}/apple-icon-114x114.png`} />
                <link rel="apple-touch-icon" sizes="120x120" href={`${config.cloudfront}/apple-icon-120x120.png`} />
                <link rel="apple-touch-icon" sizes="144x144" href={`${config.cloudfront}/apple-icon-144x144.png`} />
                <link rel="apple-touch-icon" sizes="152x152" href={`${config.cloudfront}/apple-icon-152x152.png`} />
                <link rel="apple-touch-icon" sizes="180x180" href={`${config.cloudfront}/apple-icon-180x180.png`} />
                <link rel="icon" type="image/png" sizes="192x192" href={`${config.cloudfront}/android-icon-192x192.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${config.cloudfront}/favicon-32x32.png`} />
                <link rel="icon" type="image/png" sizes="96x96" href={`${config.cloudfront}/favicon-96x96.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${config.cloudfront}/favicon-16x16.png`} />
                <link rel="manifest" href={`${config.cloudfront}/manifest.json`} />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content={`${config.cloudfront}/ms-icon-144x144.png`} />
                <meta name="theme-color" content="#ffffff" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                {process.env.NODE_ENV === 'production' && (
                    <script async defer data-domain="zdenekd.cz" src="https://plausible.io/js/plausible.js" crossOrigin="anonymous" />
                )}
            </Head>
            <main className={`${styles.main} ${className}`} data-test="component-layout">
                <React.StrictMode>
                    <Header />
                    <Section>
                        <noscript>
                            {locale.noscript}
                        </noscript>
                        {children}
                    </Section>
                    <Footer />
                    <Curtain />
                </React.StrictMode>
            </main>
            <React.StrictMode>
                <Aside />
                <Alert variant={state.message.variant} isOpen={!!state.message.content} timeout={4}>
                    {state.message.content}
                </Alert>
                <Cursor />
            </React.StrictMode>
        </>
    );
};

export default Layout;
