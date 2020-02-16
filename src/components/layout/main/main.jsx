import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {useRouter} from 'next/router';
import useEventListener from '@use-it/event-listener';
import Aside from '../../aside';
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
    const heading = data[page]?.title ?? 'Kávová paráda';
    const index = getPageIndex(router.route);
    let counter = 0;
    let timestamp = Math.floor(+new Date() / 1000);
    let coords = [0, 0];
    const handlePagePrev = () => {
        if (isAnimated || index - 1 < minIndex) {
            return;
        }

        const current = index - 1;

        router.push(data[pages[current]].link);
    };
    const handlePageNext = () => {
        if (isAnimated || index + 1 > maxIndex) {
            return;
        }

        const current = index + 1;

        router.push(data[pages[current]].link);
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

        if (counter < 3) {
            return;
        }

        (wheel > 0 ? handlePagePrev : handlePageNext)();
    };
    const handleKeyboard = event => {
        const isDown = [
            34,
            35,
            40,
        ].includes(event.keyCode);
        const isUp = [
            33,
            36,
            38,
        ].includes(event.keyCode);

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
    const handleTouchStart = event => {
        const touches = [event.touches[0].clientX, event.touches[0].clientY];

        coords = [...touches];
    };
    const handleTouchMove = event => {
        const {clientX, clientY} = event.touches[0];
        const [xDown, yDown] = coords;

        if (!xDown || !yDown || isAnimated) {
            return;
        }

        const xUp = clientX;
        const yUp = clientY;
        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            return;
        }

        (yDiff < 0 ? handlePagePrev : handlePageNext)();

        coords = [0, 0];
    };

    useEventListener('mousewheel', handleScroll);
    useEventListener('DOMMouseScroll', handleScroll);
    useEventListener('keydown', handleKeyboard);
    useEventListener('touchstart', handleTouchStart);
    useEventListener('touchmove', handleTouchMove);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap&subset=latin-ext" rel="stylesheet"></link>
                <title data-test="component-title">{`${heading} | ZdenekD`}</title>
            </Head>
            <section className={styles.section}>
                <Header />
                {!isAnimated && (
                    <Content content={children} />
                )}
                <Footer />
            </section>
            <Aside />
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
