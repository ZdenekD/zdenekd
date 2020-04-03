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
                <title data-test="component-title">{`${title} | ZdenekD`}</title>
                <meta name="description" content={`${description} | ZdenekD`} />
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
