import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {useRouter} from 'next/router';
import useEventListener from '@use-it/event-listener';
import State from '../../../state';
import reducer from '../../../state/reducer';
import Aside from '../../aside';
import Cursor from '../../cursor';
import Header from '../../header';
import Content from '../../content';
import Footer from '../../footer';
import data from '../../../data/pages';
import {getPage, getPageIndex} from '../../../helpers/getPage';
import config from '../../../data/config';
import styles from './main.css';

const Main = ({isAnimated, isOpen, children}) => {
    const router = useRouter();
    const page = getPage(router.route);
    const pages = Object.keys(data);
    const minIndex = 0;
    const maxIndex = pages.length - 1;
    const title = data[page]?.title ?? 'Kávová paráda | ZdenekD';
    const description = data[page]?.description ?? 'Lorem pivsum | ZdenekD';
    const index = getPageIndex(router.route);
    let counter = 0;
    let timestamp = Math.floor(+new Date() / 1000);
    const handlePagePrev = () => {
        if (index - 1 < minIndex) {
            return;
        }

        router.push(data[pages[index - 1]].link);
    };
    const handlePageNext = () => {
        if (index + 1 > maxIndex) {
            return;
        }

        router.push(data[pages[index + 1]].link);
    };
    const handleScroll = event => {
        if (isAnimated || isOpen) {
            return;
        }

        event.stopPropagation();

        const wheel = 'wheelDelta' in event ? event.wheelDelta : -40 * event.detail;

        if (!event) {
            return;
        }

        if (timestamp === Math.floor(+new Date() / 1000)) {
            counter += 1;
        } else {
            timestamp = Math.floor(+new Date() / 1000);
            counter = 0;
        }

        if (counter < 5) {
            return;
        }

        (wheel > 0 ? handlePagePrev : handlePageNext)();
    };
    const handleKeyboard = event => {
        const isDown = [34, 40].includes(event.keyCode);
        const isUp = [33, 38].includes(event.keyCode);

        if (isAnimated || isOpen) {
            return;
        }

        if (isDown) {
            handlePageNext();
        }

        if (isUp) {
            handlePagePrev();
        }
    };

    useEventListener('mousewheel', handleScroll);
    useEventListener('DOMMouseScroll', handleScroll);
    useEventListener('keydown', handleKeyboard);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <title data-test="component-title">{`${title} | ZdenekD`}</title>
                <meta name="description" content={`${description} | ZdenekD`} />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                {process.env.NODE_ENV === 'production' && (
                    <>
                        <link rel="preconnect" href={config.cloudfront} crossOrigin="true" />
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
                <link
                    href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700|Roboto+Mono&display=swap&subset=latin-ext"
                    rel="stylesheet"
                    crossOrigin="anonymous"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                {process.env.NODE_ENV === 'production' && (
                    <script async defer data-domain="zdenekd.cz" src="https://plausible.io/js/plausible.js"></script>
                )}
            </Head>
            <State.StateProvider reducer={reducer}>
                <>
                    <main className={`${styles.section} main`}>
                        <Header />
                        {!isAnimated && !isOpen && <Content content={children} />}
                        <Footer />
                    </main>
                    <Aside />
                    <Cursor />
                </>
            </State.StateProvider>
        </>
    );
};

Main.propTypes = {
    isAnimated: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
};

export default Main;
