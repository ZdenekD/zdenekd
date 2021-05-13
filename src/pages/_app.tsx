import App, {AppProps} from 'next/app';
import {AnimatePresence} from 'framer-motion';
import * as Sentry from '@sentry/browser';
import {Provider} from '../state';
import '../assets/styles/index.css';

class Application extends App {
    // eslint-disable-next-line class-methods-use-this
    componentDidMount(): void {
        console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');

        if (process.env.NODE_ENV === 'production') {
            try {
                Sentry.init({dsn: 'https://5e068233057342e889eabb84f6a8b5ef@sentry.io/5186823'});
            } catch (error) {
                console.log(error);
            }
        }
    }

    render(): React.ReactElement {
        const {Component, pageProps, router}: AppProps = this.props;

        return (
            <Provider>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Provider>
        );
    }
}

export default Application;
