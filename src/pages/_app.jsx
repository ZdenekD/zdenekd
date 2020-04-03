import React from 'react';
import {Provider} from 'react-redux';
import App from 'next/app';
import anime from 'animejs';
import withRedux from 'next-redux-wrapper';
import * as Sentry from '@sentry/browser';
import './_index.css';
import styles from './_app.css';
import initStore from '../store';
import {handleAppAnimation} from '../store/app/actions';
import {getPage} from '../helpers/getPage';

class Application extends App {
    constructor(props) {
        super(props);

        this.curtainRef = React.createRef();
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidMount() {
        console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');

        if (process.env.NODE_ENV === 'production') {
            try {
                Sentry.init({dsn: 'https://5e068233057342e889eabb84f6a8b5ef@sentry.io/5186823'});
            } catch (error) {
                console.log(error);
            }
        }
    }

    componentDidUpdate() {
        const {store} = this.props;
        const {dispatch} = store;

        anime
            .timeline({
                targets: this.curtainRef.current,
                easing: 'easeOutCubic',
            })
            .add({
                duration: 600,
                opacity: [0, 1],
                begin() {
                    const {isAnimated} = store.getState().app;

                    if (!isAnimated) {
                        dispatch(handleAppAnimation({isAnimated: true}));
                    }
                },
            })
            .add({
                duration: 800,
                translateY: [0, '100%'],
                complete() {
                    dispatch(handleAppAnimation({isAnimated: false}));
                },
            }, '-=200');
    }

    render() {
        const {Component, store, router} = this.props;
        const page = getPage(router.route);
        const isError = router.route.includes('error');

        return (
            <Provider store={store}>
                <div className={`${styles.main} ${page ? styles[page] : ''} ${isError ? styles.error : ''}`} data-test="component-app">
                    <Component />
                    <i ref={this.curtainRef} className={styles.curtain}></i>
                </div>
            </Provider>
        );
    }
}

export default withRedux(initStore)(Application);
