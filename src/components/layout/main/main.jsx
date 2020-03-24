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
import styles from './main.css';

const Main = ({isAnimated, children}) => {
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
        if (isAnimated || index - 1 < minIndex) {
            return;
        }

        router.push(data[pages[index - 1]].link);
    };
    const handlePageNext = () => {
        if (isAnimated || index + 1 > maxIndex) {
            return;
        }

        router.push(data[pages[index + 1]].link);
    };
    const handleScroll = event => {
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

        if (isAnimated) {
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700|Roboto+Mono&display=swap&subset=latin-ext"
                    rel="stylesheet"
                    crossOrigin="anonymous"
                />
                <title data-test="component-title">{`${title} | ZdenekD`}</title>
                <meta name="description" content={`${description} | ZdenekD`} />
            </Head>
            <State.StateProvider reducer={reducer}>
                <>
                    <main className={styles.section}>
                        <Header />
                        {!isAnimated && <Content content={children} />}
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
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
    ]),
};

export default Main;
