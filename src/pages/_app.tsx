import {AnimatePresence} from 'framer-motion';
import {AppProps} from 'next/app';
import React from 'react';
import {Provider} from '../store';
import '@/assets/styles/index.css';

const App = ({Component, pageProps, router}: AppProps): JSX.Element => {
    React.useEffect(() => {
        console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');

        Array
            .from(document.head.querySelectorAll('link[rel="stylesheet"][data-n-p]'))
            .forEach(node => node.removeAttribute('data-n-p'));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mutationHandler = (mutations: { target: any; }[]) => {
            mutations.forEach(({target}) => {
                if (target.nodeName === 'STYLE') {
                    if (target.getAttribute('media') === 'x') {
                        target.removeAttribute('media');
                    }
                }
            });
        };
        const observer = new MutationObserver(mutationHandler);

        observer.observe(document.head, {
            subtree: true,
            attributeFilter: ['media'],
        });

        return () => {
            observer.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Provider>
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Provider>
    );
};

export default App;
